<template src="./Formpendidikan.html"></template>
<style type="text/css" src="./Formpendidikan.css" scoped="true"></style>

<script>

export default {
  name: 'formpendidikan',
  data (){
		return {
			tahun:"Pilih Tahun",
		 	kab   : "Pilih Kabupaten",
		 	upt   : "Pilih UPT",
		 	tkt_pend : "SD",
		 	jlh_murid  : "",
		 	jlh_unit1  : "",
		 	jlh_lokal1  : "",
		 	jlh_unit2  : "",
		 	jlh_lokal2  : "",
		 	list_kab : [],
		 	list_upt : [],
		 	list_data: [],
        	gedung_pendidikan: []
    	
		 }
	},

	methods: {

		getDataKab : function () {
			
			var app = this;

			this.axios.get(`http://127.0.0.1/SIPETRA/API/getPenempatanPelita.php`)

			    .then(response => {
			      console.log(response);
			      app.list_kab = response.data.kab;
			      app.list_upt = response.data.upt;
			      app.list_tahun = response.data.tahun;
			      console.log(app.list_tahun);
			      console.log(app.list_kab);
			      console.log(app.list_upt);
			    })

			    .catch(e => {
			      this.errors.push(e)
			    })

		},
		tambahdata : function () {

			var datasementara = this.list_data;
			var tkt_pend = this.tkt_pend;
			var murid = this.jlh_murid;
			var unit1 = this.jlh_unit1;
			var lokal1 = this.jlh_lokal1;
			var unit2 = this.jlh_unit2;
			var lokal2 = this.jlh_lokal2;
			datasementara.push({tkt_pend, murid, unit1, lokal1, unit2, lokal2});
			this.list_data = datasementara;
			console.log(datasementara);
		},
		addPackage : function () {

				if (this.form.tkt_pend    != "" &&
					this.form.jlh_murid   != "" &&
					this.form.jlh_unit1   != "" &&
					this.form.jlh_lokal1  != "" &&
					this.form.jlh_unit2   != "" &&
					this.form.jlh_lokal2  != "") {
					
					var app = this;
					var url = "http://127.0.0.1/SIPETRA/API/getPenempatanPelita.php";

					this.form.formpendidikan = this.gedung_pendidikan;

					this.$http({
			            method : 'POST',
			            url    : url,
			            data   : app.form,
			            headers : {
			                'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'
			            }
			        })
			            
			        .then(function (response) {
			            console.log(response);
			            alert("Paket berhasil ditambahkan");
			            app.$router.replace("/");
			        })

			        .catch(function (argument) {
			            alert("Gagal mengirim data");
			        });
				}

			},
		
	},

	created(){
		this.getDataKab();
		this.addPackage();
	}
}
</script>
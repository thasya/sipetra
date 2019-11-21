<template src="./Formpenempatanpelita.html"></template>
<style type="text/css" src="./Formpenempatanpelita.css" scoped="true"></style>

<script>

export default {
  name: 'formpenempatanpelita',
  data (){
		return {
			tahun :"Pilih Tahun",
		 	kab   : "Pilih Kabupaten",
		 	upt   : "Pilih UPT",
		 	daerahasal : "Pilih Daerah Asal",
		 	jlh_kk  : "",
		 	jlh_jiwa  : "",
		 	list_tahun : [],
		 	list_kab : [],
		 	list_upt : [],
		 	list_daerahasal : [],
		 	list_data: [],
		 }
	},

	methods: {

		getDataPenempatanPelita : function () {
			
			var app = this;

			this.axios.get(`http://127.0.0.1/SIPETRA/API/getPenempatanPelita.php`)

			    .then(response => {
			      console.log(response);
			      app.list_kab = response.data.kab;
			      app.list_upt = response.data.upt;
			      app.list_daerahasal = response.data.daerahasal;
			      app.list_tahun = response.data.tahun;
			      console.log(app.list_tahun);
			      console.log(app.list_kab);
			      console.log(app.list_upt);
			      console.log(app.list_daerahasal);
			    })

			    .catch(e => {
			      this.errors.push(e)
			    })

		},
		tambahdata : function () {

			var datasementara = this.list_data;
			var tahun = this.tahun;
			var kab = this.kab;
			var upt = this.upt;
			var daerahasal = this.daerahasal;
			var kk = this.jlh_kk;
			var jiwa = this.jlh_jiwa;
			datasementara.push({tahun, kab, upt, daerahasal, kk, jiwa});
			this.list_data = datasementara;
			console.log(datasementara);
		}

	},

	created(){
		this.getDataPenempatanPelita();
	}
}
</script>
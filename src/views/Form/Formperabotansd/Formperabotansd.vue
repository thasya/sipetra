<template src="./Formperabotansd.html"></template>
<style type="text/css" src="./Formperabotansd.css" scoped="true"></style>

<script>

export default {
  name: 'formperabotan',
  data (){
		return {
			tahun:"Pilih Tahun",
		 	kab   : "Pilih Kabupaten",
		 	upt   : "Pilih UPT",
		 	jlh_sd : "",
		 	jlh_sdlkl  : "",
		 	jlh_meja  : "",
		 	jlh_kursi  : "",
		 	jlh_lemari  : "",
		 	jlh_alatperaga  : "",
		 	jlh_papantulis  : "",
		 	list_tahun : [],
		 	list_kab : [],
		 	list_upt : [],
		 	list_data: [],
		 }
	},

	methods: {

		getDataPerabotan : function () {
			
			var app = this;

			this.axios.get(`http://127.0.0.1/SIPETRA/API/getPreData.php`)

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
			var upt = this.upt;
			var sd = this.jlh.sd;
			var sdlkl = this.jlh_sdlkl;
			var meja = this.jlh_meja;
			var kursi = this.jlh_kursi;
			var lemari = this.jlh_lemari;
			var alatperaga = this.jlh_alatperaga;
			var papantulis = this.jlh_papantulis;
			datasementara.push({upt, sd, sdlkl, meja, kursi, lemari, alatperaga, papantulis});
			this.list_data = datasementara;
			console.log(datasementara);
		}

	},

	created(){
		this.getDataPerabotan();
	}
}
</script>
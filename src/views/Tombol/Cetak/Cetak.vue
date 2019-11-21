<template src="./Cetak.html"></template>
<style type="text/css" src="./Cetak.css" scoped="true"></style>

<script>

export default {
  name: 'cetak',
  data(){
  		return{
  		list_tahun : [],
  		gedung_pendidikan : [],
  		data : [],
  		tahun : "SEMUA TAHUN"

  	}
  },

  methods: {

  	getPendidikan : function () {

  		var app = this;

  		this.axios.get(`http://127.0.0.1/SIPETRA/API/getPendidikan.php`)

  		.then(response => {
  			console.log(response);
  			app.gedung_pendidikan = response.data.gedung_pendidikan;
			app.list_tahun = response.data.tahun;
  		})
  		.catch(e => {
  			this.errors.push(e)
  		})

  	}

  },

  created(){
	this.getPendidikan();
  window.print();
	}
}
</script>



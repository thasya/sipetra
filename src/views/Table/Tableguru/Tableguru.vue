<template src="./Tableguru.html"></template>
<style type="text/css" src="./Tableguru.css" scoped="true"></style>

<script>

export default {
  name: 'tableguru',
  data(){
  		return{
  		list_tahun : [],
  		guru : [],
  		data : [],
  		tahun : "SEMUA TAHUN"

  	}
  },

  methods: {

  	getDataGuru : function () {

  		var app = this;

  		this.axios.get(`http://127.0.0.1/SIPETRA/API/getTenagaGuru.php`)

  		.then(response => {
  			console.log(response);
  			app.guru = response.data.guru;
			app.list_tahun = response.data.tahun;
  		})
  		.catch(e => {
  			this.errors.push(e)
  		})

  	}

  },

  created(){
	this.getDataGuru();
	}
}
</script>

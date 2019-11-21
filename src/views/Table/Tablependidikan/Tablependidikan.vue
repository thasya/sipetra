<template src="./Tablependidikan.html"></template>
<style type="text/css" src="./Tablependidikan.css" scoped="true"></style>

<script>

export default {
  name: 'tablependidikan',
  data(){
  		return{
  		list_tahun : [],
  		gedung_pendidikan : [],
  		data : [],
  		tahun : "SEMUA TAHUN",
      search_holder : "",
      search_selector : "NAMA KABUPATEN"
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

  	},

  },


  computed : {

      filteredData : function() {
        return this.gedung_pendidikan.filter((individualData) =>{
            if(this.search_selector=="NAMA KABUPATEN"){
              return individualData.nama_kabsulut.toUpperCase().match(this.search_holder.toUpperCase())
            }
            else if(this.search_selector=="NAMA UPT"){
              return individualData.nama_upt.toUpperCase().match(this.search_holder.toUpperCase())
            }
        });

      },
    },

  created(){
	this.getPendidikan();
	}
}
</script>

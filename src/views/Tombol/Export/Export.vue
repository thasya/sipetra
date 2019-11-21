<template src="./Export.html"></template>
<style type="text/css" src="./Export.css" scoped="true"></style>
<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js"></script>


<script>

export default {
  name: 'export',
  data(){
  		return{
  		list_tahun : [],
  		gedung_pendidikan : [],
  		data : [],
  		tahun : "SEMUA TAHUN",
      uri :'data:application/vnd.ms-excel;base64,',
      template:'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
      base64: function(s){ return window.btoa(decode(encodeURIComponent(s))) },
      format: function(s, c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
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

    tableToExcel(table, name){
      if (!table.nodeType) table = this.$refs.table
      var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
      window.location.href = this.uri + this.base64(this.format(this.template, ctx))
    }

  },

  created(){
	this.getPendidikan();
  this.tableToExcel();
	} 
}.$mount('#app')
</script>



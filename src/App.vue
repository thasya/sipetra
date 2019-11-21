<template>

  <div id="app">

    <!-- bagian kiri -->
    <div class="left">
      
      <img class="logo" src="./assets/logo.png">
      
      <div class="div1">
        <h1 style="margin-left: 65px;">SULUT</h1> 
        <h2 class="sipetra">SIPETRA</h2>
        <h3 class="dinasberanda">Dinas Ketenagakerjaan dan Transmigrasi</h3>
        <p>Jl. 17 Agustus, Teling Atas, Kec. Wanea, Kota Manado, Sulawesi Utara </p>
        <p style="margin-bottom: 25px;">Email : info@disnakertranssulut.com<br>Phone : (0431)855724</p>

        <!-- selector -->
        <h4 :class="class_beranda" v-on:click="selectMenu(0)"><i class="fa fa-tachometer-alt" style="margin-right: 0.5em"></i> BERANDA</h4>
        <h4 :class="class_master"  v-on:click="selectMenu(1)"><i class="fa fa-server" style="margin-right: 0.5em"></i> MASTERDATA</h4>
        <input class="button" type="submit" value="LOGOUT" name="buttonLogout">
      </div>

    </div>

    <div style="margin-left: 225px; margin-top: -10px; position: absolute;width: 82.97%;height:102%">

      <router-view/>
      
    </div>

  </div>

</template>

<style type="text/css" src="./css/table.min.css"></style>
<style type="text/css" src="./css/icon/css/all.min.css"></style>
<style src="./css/App.css"></style>


<script>
  
  export default{
  
    name : 'app',
  
    data(){
  
      return{
        class_beranda : 'active',
        class_master  : '',
      }
  
    },
  
    methods : {

      selectMenu(data){

          if(data == 0){
            this.class_beranda = 'active';
            this.class_master = '';
            this.$router.replace("/");
          }

          else{
            this.class_beranda = '';
            this.class_master = 'active';
            this.$router.replace("/masterdata");
          }
      }

    }

  }

</script>


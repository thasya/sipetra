
var Vue = new Vue({

	data (){
		return {
			tahun:"",
			.
			.
		}

		 tahun : "",
		 kab   : "Pilih Kabupaten",
		 upt   : "Pilih UPT",
		 tkt_pend : "TK",
		 jlh_pns  : "",
		 jlh_honor  : "",
		 list_kab : [],
		 list_upt : [],
		 list_data: [],

	},

	methods : {

		getDataKab : function () {
			
			var app = this;

			axios.get(`http://127.0.0.1/SIPETRA/API/getPreData.php`)
						
			    .then(response => {
			      console.log(response);
			      app.list_kab = response.data.kab;
			      app.list_upt = response.data.upt;
			      console.log(app.list_kab);
			    })

			    .catch(e => {
			      this.errors.push(e)
			    })

		},
		tambahdata : function () {

			var datasementara = this.list_data;
			var tkt_pend = this.tkt_pend;
			var pns = this.jlh_pns;
			var honor = this.jlh_honor;
			var jumlah = parseInt(pns) + parseInt(honor);
			datasementara.push({tkt_pend, pns, honor, jumlah});
			this.list_data = datasementara;
			console.log(datasementara);
		}

	},

	created(){
		this.getDataKab();
	}

})
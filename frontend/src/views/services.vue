<template>
<div>
  <div class="about">
    <div class="container p-3 my-3 bg-primary text-white">

    <form class="form-inline">
      <div class="form-group">
      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Laundry dye</label>
      <select v-model="selectedLaundryWash" class="custom-select my-1 mr-sm-2 col-md-8" id="inlineFormCustomSelectPref">
        <option selected></option>
        <option value="1">Cotton, light clothing</option>
        <option value="2">Black and dark colored bedding</option>
        <option value="3">Jeans and socks</option>
        <option value="4">Any synthetic clothing</option>
      </select>
      </div>
      
       
      <label for="exampleInputEmail1" style="margin-right:8px">Number of clothes</label>
      <input v-model="clothes_number" type="text" class="form-control my-1 mr-sm-2 col-md-2" placeholder="Enter number">

      <input v-model="drying" class="form-check-input" style="margin-left:20px" type="checkbox" id="gridCheck">
      <label class="form-check-label">
        Drying
      </label>

      <input v-model="ironing" class="form-check-input" style="margin-left:20px" type="checkbox">
      <label class="form-check-label">
        Ironing
      </label>

      <input v-model="dry_cleaning" class="form-check-input" style="margin-left:20px" type="checkbox">
      <label class="form-check-label">
        Dry cleaning
      </label>

      <input v-model="sensitive_goods" class="form-check-input" style="margin-left:20px" type="checkbox">
      <label class="form-check-label">
        Washing sensitive goods at low temperatures
      </label>
      <p v-if="service_empty" style="color:red">Please at least select laundry dye and enter number of clothes!</p>
    </form><button @click="sendLaundryData()" class="btn btn-secondary" style="border-radius:15%; margin-top:20px; margin-left:1.5px; color:white; font-weight:bold">Confirm</button>
    </div>
  </div>
  <div class="container">
    <img style="max-width:100%" src="@/assets/img/wash-laundry.jpg" />
  </div>
</div>
</template>
<script>
import { Laundry, Auth } from '@/service/connect.js';
import store from '@/store.js';

export default{
  components:{
  },
  data:function(){
    return {
      auth: Auth.state,
      selectedLaundryWash:'',
      clothes_number:'',
      drying:'',
      ironing:'',
      dry_cleaning:'',
      sensitive_goods:'',
      service_empty: false,
    }
  },
  methods: {
    sendLaundryData(){
      let date = new Date(Date.now()).toLocaleDateString()
      let time = new Date(Date.now()).toLocaleTimeString()

      if(this.selectedLaundryWash!=="" || this.clothes_number!==""){
      if(this.drying == true){
        this.drying = 'Drying'
      }
      else if(this.drying == false) {
        this.drying = false
      }
      if(this.ironing == true){
        this.ironing = 'Ironing'
      }
      else if(this.ironing == false) {
        this.ironing = false
      }
      if(this.dry_cleaning == true){
        this.dry_cleaning = 'Dry cleaning'
      }
      else if(this.dry_cleaning == false) {
        this.dry_cleaning = false
      }
      if(this.sensitive_goods == true){
        this.sensitive_goods = 'Washing sensitive goods at low temperatures'
      }
      else if(this.sensitive_goods == false) {
        this.sensitive_goods = false
      }
      if(this.selectedLaundryWash=="1"){
        this.selectedLaundryWash = "Cotton, light clothing"
      }
      else if(this.selectedLaundryWash=="2"){
        this.selectedLaundryWash = "Black and dark colored bedding"
      }
      else if(this.selectedLaundryWash=="3"){
        this.selectedLaundryWash = "Jeans and socks"
      }
      else if(this.selectedLaundryWash=="4"){
        this.selectedLaundryWash = "Any synthetic clothing"
      }
      
        let laundryData = 
        {
          selectedLaundryWash: this.selectedLaundryWash,
          clothes_number: this.clothes_number,
          drying: this.drying,
          ironing: this.ironing,
          dry_cleaning: this.dry_cleaning,
          sensitive_goods: this.sensitive_goods,
          user: this.auth.userEmail,
          posted_at: date + ' in ' + time
        }
        Laundry.postLaundryData(laundryData);
        this.$router.push({ path:'/reservation_laundry' })
      }
      else{
        this.service_empty = true;
      }
    }
  }
}
</script>


<template>
<div>
 <div class="container" style="min-height:100vh">
    
    <h1>Your ordered laundry</h1>
  <div class="row">
    <div v-for="(data,index) in userLaundryData" :key="index.id" class="col-md-4 mb-3">
      <div class="card h-100">
        <div class="d-flex justify-content-between position-absolute w-100">
          <div class="label-new">
          </div>
          <div v-if="data.pickup_type=='personal_pickup'" class="label-sale">
            <span class="text-white bg-primary small d-flex align-items-center px-2 py-1">
              <i class="fa fa-spinner" aria-hidden="true"></i>
              <span class="ml-1">Waiting for your pickup</span>
            </span>
          </div>
          <div v-if="data.pickup_type=='delivery'" class="label-sale">
            <span class="text-white bg-primary small d-flex align-items-center px-2 py-1">
              <i class='fas fa-shipping-fast'></i>
              <span class="ml-1">Delivery in progress</span>
            </span>
          </div>
        </div>
        <div class="card-body px-2 pb-2 pt-1">
          <div class="d-flex justify-content-between">
            <div>
              <p class="h4 text-primary">Washing nr. {{index+1}}</p>
            </div>
            <div>
              <a href="#" class="text-secondary lead" data-toggle="tooltip" data-placement="left" title="Compare">
                <i class="fa fa-line-chart" aria-hidden="true"></i>
              </a>
            </div>
          </div>
          <p class="mb-0">
            <strong>
              <a href="#" class="text-secondary">Washing laundry data</a>
            </strong>
          </p>
          <div class="d-flex mb-3 justify-content-between">
            <div>
                <p class="mb-0"><b>Laundry wash type: </b>{{data.selectedLaundryWash}}</p>
                <p class="mb-0"><b>Number of clothes: </b>{{data.clothes_number}}</p>
                <p class="mb-0"><b>Laundry wash specification: </b><span v-if="data.drying">{{data.drying}}, </span><span v-if="data.ironing">{{data.ironing}}, </span><span v-if="data.dry_cleaning">{{data.dry_cleaning}}, </span><span v-if="data.sensitive_goods">{{data.sensitive_goods}}</span></p>
                <br><br>
                <p class="mb-0 text-primary">
                    <span class="small" style="font-style:italic">Requested: {{data.posted_at}}</span>
                </p>
                <p class="mb-0 text-primary">
                    <span class="small" style="font-style:italic">Expected completion: 3 working days after your order!</span>
                </p>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <div class="col px-0">
            </div>
          </div>
        </div>
      </div>
    </div></div>
</div>
</div>
</template>

<script>
import { Laundry, Auth } from '@/service/connect.js';

export default {
    data:function(){
        return{
            auth: Auth.state,
            userLaundryData: [],
            property_not_false: null
        }
    },
    async created(){
        this.userLaundryData = await Laundry.fetchLaundryData(this.auth.userEmail); 
    },
};
</script>

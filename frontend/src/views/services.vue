<template>
  <div class="about">
    <div class="container p-3 my-3 bg-primary text-white">

    <form class="form-inline">
      <div class="form-group">
      <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Laundry dye</label>
      <select class="custom-select my-1 mr-sm-2 col-md-8" id="inlineFormCustomSelectPref">
        <option selected></option>
        <option value="1">Cotton, light clothing</option>
        <option value="2">Black and dark colored bedding</option>
        <option value="3">Jeans and socks</option>
        <option value="4">Any synthetic clothing</option>
      </select>
      </div>
      
       
      <label for="exampleInputEmail1" style="margin-right:8px">Number of clothes</label>
      <input type="text" class="form-control my-1 mr-sm-2 col-md-2" placeholder="Enter number">
      <input class="form-check-input" style="margin-left:20px" type="checkbox" id="gridCheck">
      <label class="form-check-label">
        Drying
      </label>

      <input class="form-check-input" style="margin-left:20px" type="checkbox">
      <label class="form-check-label">
        Ironing
      </label>

      <input class="form-check-input" style="margin-left:20px" type="checkbox">
      <label class="form-check-label">
        Dry cleaning
      </label>

      <input class="form-check-input" style="margin-left:20px" type="checkbox">
      <label class="form-check-label">
        Washing sensitive goods at low temperatures
      </label>
      
    </form><button class="btn btn-secondary" style="border-radius:15%; margin-top:20px; margin-left:1.5px; color:white; font-weight:bold">Confirm</button>
    </div>
  </div>
</template>
<script>

export default{
components:{
}
}
</script>


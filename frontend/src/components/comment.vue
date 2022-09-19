<template>
<div class="container-fluid py-5">
        <div class="container">
            <h1 class="display-4 text-center mb-5">Client Reviews</h1>
            <div class="owl-carousel testimonial-carousel">
                <div class="testimonial-item">
                    <img class="position-relative rounded-circle bg-white shadow mx-auto" src="@/assets/img/User_icon_2.svg.png" style="width: 100px; height: 100px; padding: 12px; margin-bottom: -50px; z-index: 1;" alt="">
                    <div class="bg-light text-center p-4 pt-0">
                        <h5 class="font-weight-medium mt-5">Joe Doe</h5>
                        <p class="m-0">Totally satisfied with quality of this laundry service.</p>
                    </div>
                </div>
                <div class="testimonial-item">
                    <img class="position-relative rounded-circle bg-white shadow mx-auto" src="@/assets/img/User_icon_2.svg.png" style="width: 100px; height: 100px; padding: 12px; margin-bottom: -50px; z-index: 1;" alt="">
                    <div class="bg-light text-center p-4 pt-0">
                        <h5 class="font-weight-medium mt-5">Anna Peterson</h5>
                        <p class="m-0">Everything was dry & clean, 5/5!</p>
                    </div>
                </div>
                <div class="testimonial-item">
                    <img class="position-relative rounded-circle bg-white shadow mx-auto" src="@/assets/img/User_icon_2.svg.png" style="width: 100px; height: 100px; padding: 12px; margin-bottom: -50px; z-index: 1;" alt="">
                    <div class="bg-light text-center p-4 pt-0">
                        <h5 class="font-weight-medium mt-5">Peter Jenkins</h5>
                        <p class="m-0">Washed my suit, it was like new!</p>
                    </div>
                </div>
            </div>
            <div class="card-footer py-3 border-0" style="background-color: #f8f9fa;">
            <div class="d-flex flex-start w-100">
              <div class="form-outline w-100">
                <textarea
                  v-model="newComment"
                  class="form-control"
                  id="textAreaExample"
                  rows="4"
                  style="background: #fff;"
                ></textarea>
              </div>
              
            </div>
            <div class="float-end mt-2 pt-1">
              <button type="button" class="btn btn-primary btn-sm" @click.prevent="AddComment()">
                Add a comment
              </button>
              Do you like our service?
              <button style="border-width:thin;border-radius: 100px;"><Icon @click="like()" icon="ion:thumbs-up" color="green" /></button>
              <button style="border-width:thin;border-radius: 100px;"><Icon @click="dislike()" icon="ion:thumbs-up" color="red" :rotate="2" /></button>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
import { Comments } from '@/service/connect.js'

export default {
  name: 'Home',
    components: {
		Icon,
	},
  data:function(){
    return{
      newComment:''
    }
  },
  methods:{
    AddComment(){
      let date = new Date(Date.now()).toLocaleDateString()
      let time = new Date(Date.now()).toLocaleTimeString()
      let comment = {
                newComment: this.newComment,
                postedAt: date + "in " + time
            }
        console.log(comment)
       Comments.postComment(comment);
    }
  }
}
</script>
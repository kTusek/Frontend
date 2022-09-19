<template>
    <div class="container">
        <form>

      <!-- Email input -->
      <div class="form-outline mb-4">
        <input v-model="email" type="email" id="loginName" class="form-control" />
        <label class="form-label" for="loginName">Email</label>
      </div>

      <!-- Password input -->
      <div class="form-outline mb-4">
        <input v-model="password" type="password" id="loginPassword" class="form-control" />
        <label class="form-label" for="loginPassword">Password</label>
      </div>

      <!-- 2 column grid layout -->
      <div class="row mb-4">
        <div class="col-md-6 d-flex justify-content-center">
        </div>

        <div class="col-md-6 d-flex justify-content-center">
          <!-- Simple link -->
          <!--<a href="#!">Forgot password?</a>-->
        </div>
      </div>

      <!-- Submit button -->
      <button @click.prevent="login()" class="btn btn-primary btn-block mb-4">Sign in</button>

      <!-- Register buttons -->
      <div class="text-center">
        <p>Not a member? <router-link to="/register">Register</router-link></p>
      </div>
    </form>
    </div>
</template>

<script>
import { Auth } from '@/service/connect.js'
import store from '@/store.js'
export default {
  data:function(){
    return{
      email:'',
      password:'',
      empty:null,
    }
  },
  methods:{
    async login(){
		
		let success=false;
		
		if(this.email=='' || this.password==''){
			
		 	this.empty=true;
        	
		}
		success = await Auth.login(this.email, this.password);
		
        if(success == true){
            store.authenticated = true;
            store.email=this.email;
            this.$router.push({path:'/'})
            .then(() => {
              this.$router.go();
            });
        console.log('Login result', success);

        }
        console.log("Authenticated: ",store.authenticated)
      },
  }
}

</script>

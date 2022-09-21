<template>

    <div class="container">
        <form>
        <div class="form-outline mb-4">
            <input v-model="name" type="text" id="registerName" class="form-control" />
            <label class="form-label" for="registerName">Name</label>
        </div>

        <div class="form-outline mb-4">
            <input v-model="username" type="text" id="registerUsername" class="form-control" />
            <label class="form-label" for="registerUsername">Username</label>
        </div>

        <div class="form-outline mb-4">
            <input v-model="email" type="email" id="registerEmail" class="form-control" />
            <label class="form-label" for="registerEmail">Email</label>
        </div>

        <div class="form-outline mb-4">
            <input v-model="password" type="password" id="registerPassword" class="form-control" />
            <label class="form-label" for="registerPassword">Password</label>
        </div>
        <p style="color:red" v-if="this.emptyMess">None field may be empty</p>
        <p style="color:red" v-if="this.shortPass">Too short password!</p>
        <!--<div class="form-outline mb-4">
            <input v-model="repeat_password" type="password" id="registerRepeatPassword" class="form-control" />
            <label class="form-label" for="registerRepeatPassword">Repeat password</label>
        </div>-->

        <div class="form-check d-flex justify-content-center mb-4">
            <input class="" type="checkbox" value="" id="registerCheck" checked
            aria-describedby="registerCheckHelpText" />
            <label class="form-check-label" for="registerCheck">
            I have read and agree to the terms
            </label>
        </div>

        <!-- Submit button -->
        <button class="btn btn-primary btn-block mb-3" @click.prevent="registerUser()">Sign in</button>
    </form>
  </div>
</template>

<script>
import store from '@/store.js'
import { Auth } from '@/service/connect.js';
export default {
    data:function(){
        return{
            store,
            emptyMess:null,
            shortPass:null,
            name:'',
            email:'',
            password:'',
            username:''
        }
    },
    methods: {
        async registerUser(){
            if (this.name=='' || this.email=='' || this.password=='' || this.username==''){
                this.emptyMess=true
            }
            if(this.password.length <6){
                this.shortPass=true;
            }
        else{
            let userData = {
                name:this.name,
                username:this.username,
                email:this.email, 
                password:this.password,
            }
            
            
            await Auth.signUp(userData).then(() => {
                this.$router.push({ path: '/' });
                store.authenticated=true;
                store.currentUserEmail=this.email;
            });
            }
        },
    }
}
</script>
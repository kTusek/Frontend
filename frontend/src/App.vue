<template>
  <div id="app">
    
    <!-- Topbar End -->

    <!-- Navbar Start -->
    <Navbar/>
    <!-- Navbar End -->
    
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Footer from '@/components/footer.vue'
import Navbar from '@/components/navbar.vue'
export default{
    components:{
        Footer,
        Navbar
    }
}
</script>
<style lang="scss">
@import './style/style.css';
@import './style/style.min.css';
</style>

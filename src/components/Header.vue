<template>
    <div id="nav">
        <div>
            Your App Name
        </div>
        <div class="links">
            <router-link to="/"> Home</router-link>
            <router-link to="/movies"> Movies</router-link>
            <router-link to="/about"> About</router-link>
        </div>
        <div class="btns">
            <router-link to="/"> SignUp</router-link>
            <router-link to="/movies"> Login</router-link>
        </div>
    </div>
</template>  

<script>
export default {

}
</script>

<style scoped>
#nav {
    width: 80vw;
    margin: auto;
    display: flex;
    justify-content: space-between;
    height: 30px;




}
</style>
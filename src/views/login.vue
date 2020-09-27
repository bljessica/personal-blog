<template>
    <div class="container">
        <nav-header></nav-header>
        <main>
            <!-- <my-form :items="loginItems" :type="'login'"></my-form> -->
            <login-form></login-form>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import myFooter from '../components/my-footer'
import loginForm from '../components/login-form'


export default {
    components: {
        navHeader,
        myFooter,
        loginForm
    },
    data() {
        return {
            loginItems: LOGIN_ITEMS
        }
    }
}
</script>

<style lang="scss">

</style>
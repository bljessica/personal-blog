<template>
    <div class="container">
        <nav-header></nav-header>
        <main>
            <my-form :items="loginItems" :type="'login'"></my-form>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import myFooter from '../components/my-footer'
import myForm from '../components/my-form'
import { LOGIN_ITEMS } from '../utils/const'


export default {
    components: {
        navHeader,
        myFooter,
        myForm
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
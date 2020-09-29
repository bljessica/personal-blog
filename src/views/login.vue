<template>
    <div class="container">
        <nav-header></nav-header>
        <main>
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
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
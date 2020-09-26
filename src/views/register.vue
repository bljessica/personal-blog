<template>
    <div class="container">
        <nav-header></nav-header>
        <main>
            <my-form :items="registerItems" :type="'register'"></my-form>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import myFooter from '../components/my-footer'
import myForm from '../components/my-form'
import { REGISTER_ITEMS } from '../consts/const'

export default {
    components: {
        navHeader,
        myFooter,
        myForm
    },
    data() {
        return {
            registerItems: REGISTER_ITEMS
        }
    }
}
</script>

<style lang="scss">

</style>
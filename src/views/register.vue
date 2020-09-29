<template>
    <div class="container">
        <nav-header></nav-header>
        <main>
            <register-form></register-form>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import myFooter from '../components/my-footer'
import registerForm from '../components/register-form'

export default {
    components: {
        navHeader,
        myFooter,
        registerForm
    },
    data() {
        return {
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
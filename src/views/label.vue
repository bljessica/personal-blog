<template>
    <div class="container">
        <nav-header></nav-header>
        <main>
            <label-box></label-box>
            <label-picture></label-picture>
        </main>
        
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import labelBox from '../components/label-box'
import labelPicture from '../components/label-picture'
import myFooter from '../components/my-footer'

export default {
    components: {
        navHeader,
        labelBox,
        labelPicture,
        myFooter
    }
    
}
</script>

<style lang="scss">

</style>
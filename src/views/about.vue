<template>
    <div class="container">
        <nav-header :slogan="'About Blog'"></nav-header>
        <main class="main">
            {{ about }}
        </main>
        <to-top-button></to-top-button>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header';
import myFooter from '../components/my-footer';
import toTopButton from '../components/to-top-button';
import { ABOUT } from '../consts/const';

export default {
    data() {
        return {
            about: ABOUT
        }
    },
    components: {
        navHeader,
        myFooter,
        toTopButton
    }
}
</script>

<style lang="scss" scoped>
    .main {
        width: 900px;
        height: 260px;
        padding: 20px 50px;
        position: relative;
        top: -30px;
        margin: 0 auto;
        background: white;
        box-shadow: 0 5px 10px gainsboro;
        /* text-align: left; */
    }
</style>
<template>
    <div id="container">
        <nav-header :navItems="navItems" :title="title"></nav-header>
        <main id="main">
            <entrance :items="entranceKinds"></entrance>
        </main> 
        <footer></footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import entrance from '../components/entrance'
import { NAV_ITEMS, TITLE, ENTRANCE_ITEMS } from '../consts/const'

export default {
    data() {
        return {
            navItems: NAV_ITEMS,
            title: TITLE,
            entranceKinds: ENTRANCE_ITEMS
            // kinds: BLOG_KINDS
        }
    },
    components: {
        navHeader,
        entrance
    }
}
</script>

<style lang="scss">

</style>
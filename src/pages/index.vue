<template>
    <div id="container">
        <nav-header :navItems="navItems" :title="title"></nav-header>
        <!-- <main id="main">
            <ul class="aside">
                <li v-for="(item, index) in kinds" :key="index">{{ item }}</li>
            </ul>
        </main> -->
        <!-- <footer></footer> -->
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import { NAV_ITEMS, TITLE, BLOG_KINDS } from '../consts/const'

export default {
    data() {
        return {
            navItems: NAV_ITEMS,
            title: TITLE,
            kinds: BLOG_KINDS
        }
    },
    components: {
        navHeader
    }
}
</script>

<style lang="scss">
    .aside {
        margin-top: 20px;
        width: 230px;
        height: 500px;
        border-right: 2px solid gainsboro;
        li {
            width: 230px;
            height: 50px;
            text-align: center;
            line-height: 40px;
            // border-bottom: 1px solid gainsboro;
        }
        li:hover {
            text-decoration: underline;
        }
    }
</style>
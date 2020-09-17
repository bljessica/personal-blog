<template>
    <div id="container">
        <nav-header :navItems="navItems" :title="title"></nav-header>
        <main id="main">
            <entrance :items="entranceKinds"></entrance>
            <blog-container :blogs="blogs"></blog-container>
        </main> 
        <footer></footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import entrance from '../components/entrance'
import blogContainer from '../components/blog-container'
import { NAV_ITEMS, TITLE, ENTRANCE_ITEMS } from '../consts/const'

export default {
    data() {
        return {
            navItems: NAV_ITEMS,
            title: TITLE,
            entranceKinds: ENTRANCE_ITEMS,
            blogs: new Array(8).fill({title: 'z-index的使用', content: `注意点:(1):z-index属性只作用在被定位了的元素上。所以如果你在一个没被定位的元素上使用z-index的话，是不会有效果的.
                (2)同一个父元素下的元素的层叠效果会受父元素的z-index影响,如果父元素的z-index值很小,那么子元素的z-index值很大也不起作用`, 
                time: '2020-9-16 16:48', label: '前端技术', kinds: ['CSS'], imgUrl: '../assets/css3.jpg'})
        }
    },
    components: {
        navHeader,
        entrance,
        blogContainer
    }
}
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
    }
    body {
        font-family: 'Microsoft YaHei';
        background: #F7F7F7;
    }
</style>
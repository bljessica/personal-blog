<template>
    <div id="container"> 
        <nav-header></nav-header>
        <main id="main">
            <entrance :items="entranceKinds"></entrance>
            <blog-container :blogs="blogs"></blog-container>
        </main> 
        <to-top-button></to-top-button>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import entrance from '../components/entrance'
import blogContainer from '../components/blog-container'
import myFooter from '../components/my-footer'
import toTopButton from '../components/to-top-button'
import { ENTRANCE_ITEMS } from '../consts/const'

export default {
    data() {
        return {
            entranceKinds: ENTRANCE_ITEMS,
            blogs: new Array(8).fill({title: 'z-index的使用', content: `注意点:(1):z-index属性只作用在被定位了的元素上。所以如果你在一个没被定位的元素上使用z-index的话，是不会有效果的.
                (2)同一个父元素下的元素的层叠效果会受父元素的z-index影响,如果父元素的z-index值很小,那么子元素的z-index值很大也不起作用`, 
                time: '2020-9-16 16:48', label: '前端技术', kinds: ['CSS'], imgUrl: '../assets/css3.jpg'})
        }
    },
    components: {
        navHeader,
        entrance,
        blogContainer,
        myFooter,
        toTopButton
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
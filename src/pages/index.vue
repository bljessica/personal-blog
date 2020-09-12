<template>
    <div class="container">
        <nav-header :navItems="navItems" :title="title"></nav-header>
        <main>
            <slider :imgs="imgs"></slider>
        </main>
        <footer></footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import slider from '../components/slider'

export default {
    data() {
        return {
            navItems: ['主页', '发现', '我的关注', '我的收藏', '个人中心'],
            title: 'My Blog',
            imgs: []
        }
    },
    components: {
        navHeader
    }
}
</script>

<style>

</style>
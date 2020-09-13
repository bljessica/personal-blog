<template>
    <div class="container">
        <ul class="slider">
            <li v-for="(img, index) in imgs" :key="index" :style="{backgroundImage: img.url}" v-show="showNum == index">
                <h1>{{ img.title }}</h1>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            imgs: [{title: '好 好 学 习', url: 'url(' + require('../assets/blue.jpg') + ')'}, 
                {title: '天 天 向 上', url: 'url(' + require('../assets/green.jpg') + ')'}],
            showNum: 0
        }
    },
    created() {
        //DOM加载完成后，下个tick中开始轮播
        // this.$nextTick(() => {
            setInterval(this.play(), 500);
        // })
    },
    methods: {
        play() {
            this.showNum++;
            this.showNum = this.showNum % this.imgs.length;
            console.log(this.showNum)
        }
    }
}
</script>

<style lang="scss">
    .slider {
        width: 100%;
        height: 400px;
        li {
            width: 100%;
            height: 400px;
            background: center center 100% 100%;
            // float: left;
            // position: relative;
            h1 {
                font-weight: normal;
                text-align: center;
                font-size: 40px;
                width: 300px;
                height: 50px;
                line-height: 50px;
                position: absolute;
                top: 50%;
                left: 50%;
                margin: -25px 0 0 -150px;
            }
        }
    }
</style>
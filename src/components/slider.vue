<template>
    <div class="container">
        <ul class="slider">
            <li v-for="(img, index) in imgs" :key="index" :style="{backgroundImage: img.url}">
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
                {title: '天 天 向 上', url: 'url(' + require('../assets/green.jpg') + ')'}]
        }
    }
}
</script>

<style lang="scss">
    .slider {
        width: 200%;
        li {
            width: 50%;
            height: 400px;
            background: center center 100% 100%;
            float: left;
            position: relative;
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
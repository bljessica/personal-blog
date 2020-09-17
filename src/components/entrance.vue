<template>
    <div class="entrance">
        <h2>&lt;/&gt;技术笔记入口</h2>
        <ul class="kinds">
            <li v-for="(item, index) in items" :key="index" class="animate__animated animate__bounceInDown">
                <a href="">{{ item }}</a>
                <div class="light to-right"></div>
                <div class="light to-left"></div>
            </li>
        </ul>
    </div>
</template>

<script>
import animate from 'animate.css'

export default {
    props: {
        items: {
            type: Array,
            default: () => []
        }
    },
    components: {
        animate
    }
}
</script>

<style lang="scss">
    .entrance {
        a {
            text-decoration: none;
            color: white;
        }
        z-index: 1000;
        width: 880px;
        height: 200px;
        padding: 30px 60px;
        background: white;
        position: relative;
        top: -30px;
        margin: 0 auto;
        box-shadow: 0 3px 20px gainsboro;
        h2 {
            width: 100%;
            text-align: center;
        }
        .kinds {
            list-style-type: none;
            width: 100%;
            height: 150px;
            position: relative;
            top: 30px;
            li {
                color: white;
                width: 120px;
                height: 50px;
                border-radius: 10px;
                background: linear-gradient(to right, #3db4df, #16a8dd);
                text-align: center;
                line-height: 50px;
                float: left;
                margin-left: 30px;
                margin-bottom: 20px;
                cursor: pointer;
                position: relative;
                a {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                    position: relative;
                    z-index: 100;//z-index属性只作用在被定位了的元素上
                }
                .light {
                    width: 120px;
                    height: 50px;
                    background: rgba(255, 255, 255, 0.1);
                    visibility: hidden;
                    opacity: 0;
                    z-index: -1;
                    &.to-right {
                        position: absolute;
                        left: -120px;
                        top: -50px;
                    }
                    &.to-left {
                        position: absolute;
                        left: 120px;
                        top: 50px;
                    }
                }
            }
            li:nth-of-type(1), li:nth-of-type(7) {
                margin: 0;
            }
            li:hover {
                .light{
                    left: 0;
                    top: 0;
                    visibility: visible;
                    opacity: 1;
                    z-index: 1;
                    transition: .4s;
                }
            }
        }
    }
</style>
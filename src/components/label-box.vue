<template>
    <div class="label-container">
        <div class="title">
            <i class="iconfont icon-biaoqian"></i>
            <span>文章标签</span>
        </div>
        <ul class="label-box">
            <li v-for="(item, index) in labels" :key="index"  class="animate__animated animate__bounceInDown">
                <router-link to="/">
                    <span>{{ item.name }}</span>
                    <span class="num">3</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { LABELS } from '../consts/const'

export default {
    data() {
        return {
            labels: LABELS
        }
    }
}
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.8);
    }
    .label-container {
        z-index: 1000;
        width: 840px;
        height: 270px;
        padding: 30px 80px;
        background: white;
        position: relative;
        top: -30px;
        margin: 0 auto;
        box-shadow: 0 3px 20px gainsboro;
        .title {
            font-size: 24px;
            width: 100%;
            text-align: center;
            i {
                font-size: 26px;
            }
        }
        .label-box {
            list-style-type: none;
            // width: 100%;
            height: 300px;
            position: relative;
            top: 30px;
            li {
                padding: 5px 10px;
                height: 30px;
                background: #F7F7F7;
                float: left;
                margin-left: 30px;
                margin-bottom: 20px;
                border-radius: 10px;
                text-align: center;
                line-height: 30px;
                box-shadow: 0 5px 10px gainsboro;
                font-size: 14px;
                cursor: pointer;
                // color: rgba(0, 0, 0, 0.8);
                &:hover {
                    background: #1DA7DA;
                    // color: white;
                    &>a {
                        color: white;
                    }
                    .num {
                        color: white;
                    }
                    transition: .5s;
                }
                .num {
                    font-size: 12px;
                    font-weight: bold;
                    color: #E91163;
                    // color: rgb(209, 87, 87);
                    margin-left: 3px;
                }
                router-link {
                    width: 100%;
                    height: 100%;
                    color: rgba(0, 0, 0, 0.8);
                }
            }
        }
    }
</style>
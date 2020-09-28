<template>
    <div class="kind-container">
        <div class="title">
            <i class="iconfont icon-shuqian"></i>
            <span>文章分类</span>
        </div>
        <ul class="kind-box">
            <li v-for="(item, index) in kinds" :key="index" class="animate__animated animate__bounceInDown"
                @click="selectKind(item)" :class="{selected: item == selected}">
                    <span>{{ item }}</span>
                    <!-- <span class="num">{{ item.num }}</span> -->
            </li>
        </ul>
    </div>
</template>

<script>
import { CLASSIFY_ITEMS } from '../consts/const'

export default {
    props: {
        selected: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            kinds: CLASSIFY_ITEMS,
        }
    },
    mounted() {
        // console.log(this.kinds)
        // this.getAllLabels();
    },
    methods: {
        selectKind(kind) {
            this.select = kind;
            this.$emit('selectKind', kind);
        },
        // getAllLabels() {
        //     let that = this;
        //     getAllLabels().then(res => {
        //         if(res.code == 0) {
        //             that.labels = res.data
        //         }
        //         else {
        //             console.log(res.msg);
        //         }
        //     }).catch(err => console.log(err));
        // },
    }
}
</script>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.8);
    }
    .kind-container {
        z-index: 1000;
        width: 840px;
        height: 200px;
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
        .kind-box {
            list-style-type: none;
            height: 300px;
            position: relative;
            top: 30px;
            li {
                padding: 5px 22px;
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
                &.selected {
                    background: #1DA7DA;
                    color: white;
                    .num {
                        color: white;
                    }
                }
                &:hover {
                    background: #1DA7DA;
                    color: white;
                    .num {
                        color: white;
                        transition: .5s;
                    }
                    transition: .5s;
                }
                .num {
                    font-size: 12px;
                    font-weight: bold;
                    color: #E91163;
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
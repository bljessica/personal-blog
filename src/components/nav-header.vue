<template>
    <div class="container">
        <div class="header">
            <div class="title">
                <a href="">
                    <i class="iconfont icon-custom-logo"></i>
                    <span>{{ title }}</span>
                </a>
            </div>
            <ul class="nav">
                <li v-for="(item, index) in navItems" :key="index">
                    <a href="">
                        <i class="iconfont" :class="icons[index]"></i>
                        {{ item }}
                    </a>
                    <img v-if="index == 2 || index == 3" src="../assets/down.png" alt="">
                    <!-- <i v-if="index == 2 || index == 3" src="../assets/down.png"> -->
                </li>
                <li><i class="iconfont icon-sousuo search"></i></li>
            </ul>
            <h1 class="slogan">Learn a little every day</h1>
        </div>
    </div>    
</template>

<script>

export default {
    props: {
        navItems: {
            type: Array, 
            default: () => []
        },
        title: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            icons: ['icon-fl-jia', 'icon-biaoqian', 'icon-shuqian', 'icon-touxiang', 'icon-shu']
        }
    }
}
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
    }
    a {
        text-decoration: none;
        color: white;
    }
    body {
        min-width: 805px;
    }
    .header {
        height: 200px;
        background: #1DA7DA;
        position: relative;
        .title {
            position: absolute;
            left: 150px;
            height: 80px;
            width: 250px;
            line-height: 80px;
            font-size: 32px;
            i {
                display: inline-block;
                font-size: 36px;
                margin-right: 10px;
            }
        }
        .nav {
            list-style-type: none;
            position: absolute;
            right: 150px;
            width: 600px;
            li {
                display: inline-block;
                text-align: center;
                line-height: 80px;
                height: 80px;
                font-size: 18px;
                padding: 0 15px 0 12px;
                position: relative;
                cursor: pointer;
                i {
                    display: inline-block;
                    font-size: 20px;
                    position: relative;
                    left: 2px;
                }
                img {
                    width: 18px;
                    height: 18px;
                    // position: absolute;
                    position: relative;
                    top: 2px;
                    margin-left: 3px;
                }
                .search {
                    display: inline-block;
                    font-size: 24px;
                    color: white;
                    position: relative;
                    top: 2px;
                }
            }
            li:hover {
                background: rgba(255, 255, 255, 0.1);
                transition: .5s;
            }
        }
        .slogan {
            color: white;
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 50px;
            font-size: 36px;;
        }
    }
    
</style>

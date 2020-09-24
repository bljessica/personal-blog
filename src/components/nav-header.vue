<template>
    <div class="header">
        <div class="header-container">
            <div class="title">
                <a href="">
                    <i class="iconfont icon-custom-logo"></i>
                    <span>{{ title }}</span>
                </a>
            </div>
            <!-- 首页导航栏 -->
            <ul class="nav">
                <li v-for="(item, index) in navItems" :key="index" @mouseenter="showItems(index)" @mouseleave="hideItems(index)">
                    <!-- <a href="/label"> -->
                    <router-link :to="item.linkTo">
                        <i class="iconfont" :class="icons[index]"></i>
                        {{ item.name }}
                    </router-link>
                    <!-- </a> -->
                    <img v-if="index == 2 || index == 3" src="../assets/down.png" alt="">
                </li>
                <li><i class="iconfont icon-sousuo search"></i></li>
            </ul>
            <!-- “分类”的下拉框 -->
            <ul v-if="classifyShow" class="classify-items" @mouseenter="showItems(2)" @mouseleave="hideItems(2)">
                <span></span>
                <li v-for="(item, index) in classifyItems" :key="index">
                    <a href="">{{ item }}</a>
                </li>
            </ul>
            <!-- “关于”下拉框 -->
            <ul v-if="aboutShow" class="about-items" @mouseenter="showItems(3)" @mouseleave="hideItems(3)">
                <span></span>
                <li v-for="(item, index) in aboutItems" :key="index">
                    <a href="">{{ item }}</a>
                </li>
            </ul>
            <!-- 登录注册 -->
            <div class="user" :key="pageKey">
                <!-- 未登录 -->
                <router-link to="/login"><span class="login" v-if="!GLOBAL.logined">登录</span></router-link>
                <router-link to="/register"><span class="register" v-if="!GLOBAL.logined">注册</span></router-link>
                <!-- 登录后 -->
                <span v-if="GLOBAL.logined">欢迎你，{{ GLOBAL.nickname }}</span>
                <router-link to="/"><span v-if="GLOBAL.logined">个人中心</span></router-link>
                <span v-if="GLOBAL.logined">
                    <el-button @click="logOut">登出</el-button>
                </span>
            </div>
        </div>
        <h1 class="slogan">Learn a little every day</h1>
    </div>
</template>

<script>
import { CLASSIFY_ITEMS, ABOUT_ITEMS, NAV_ITEMS, TITLE } from '../utils/const';
import { getUser } from '../utils/api/user';

export default {
    data() {
        return {
            icons: ['icon-fl-jia', 'icon-biaoqian', 'icon-shuqian', 'icon-touxiang', 'icon-shu'],
            classifyItems: CLASSIFY_ITEMS,
            aboutItems: ABOUT_ITEMS,
            classifyShow: false,
            aboutShow: false,
            navItems: NAV_ITEMS,
            title: TITLE,
            pageKey: 0
        }
    },
    mounted() {
        let that = this;
        if(this.GLOBAL.logined){
            //获取用户昵称
            getUser({
                phone: that.GLOBAL.phone
            }).then(res => {
                if(res.code == 0){
                    if(res.data.nickname.length != 0){
                        that.GLOBAL.nickname = res.data.nickname;
                        this.pageKey++;
                    }
                }
                else {
                    console.log(res.msg);
                }
            }).catch(err => {
                console.log(err);
            });
        }
    },
    methods: {
        showItems(index) {
            if(index == 2){
                this.classifyShow = true;
            }
            else if(index == 3){
                this.aboutShow = true;
            }
        },
        hideItems(index) {
            if(index == 2){
                this.classifyShow = false;
            }
            else if(index == 3){
                this.aboutShow = false;
            }
        },
        logOut() {
            this.GLOBAL.logined = false;
            this.GLOBAL.phone = '';
            this.GLOBAL.nickname = '';
            this.pageKey++;
            this.$message({
                message: '登出成功',
                type: 'success'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .header {
        height: 200px;
        background: #1DA7DA;
        position: relative;
        a {
            text-decoration: none;
            color: white;
        }
        .header-container {
            height: 60px;
            width: 100%;
            position: fixed;
            background: #1DA7DA;
            z-index: 1001;
            .title {
                position: absolute;
                left: 100px;
                height: 60px;
                width: 250px;
                line-height: 60px;
                font-size: 30px;
                i {
                    display: inline-block;
                    font-size: 34px;
                    margin-right: 10px;
                }
            }
            .nav {
                list-style-type: none;
                position: absolute;
                top: 0;
                right: 280px;
                width: 600px;
                margin: 0;
                li {
                    display: inline-block;
                    text-align: center;
                    line-height: 60px;
                    height: 60px;
                    font-size: 14px;
                    // padding: 0 15px 0 12px;
                    padding: 0 10px 0 8px;
                    position: relative;
                    cursor: pointer;
                    i {
                        display: inline-block;
                        font-size: 18px;
                        position: relative;
                        left: 2px;
                        top: 1px;
                    }
                    img {
                        width: 16px;
                        height: 16px;
                        position: relative;
                        top: 3px;
                        margin-left: 3px;
                    }
                    .search {
                        display: inline-block;
                        font-size: 22px;
                        color: white;
                        position: relative;
                        top: 2px;
                    }
                }
                li:hover {
                    background: rgba(0, 0, 0, 0.1);
                    transition: .5s;
                    img {
                        transform: rotate(180deg);
                        transition: .5s;
                    }
                }
            }
            .classify-items, .about-items {
                position: relative;
                top: 60px;
                background: white;
                width: 100px;
                border-radius: 10px;
                box-shadow: 0 4px 10px grey;
                span {
                    display: block;
                    width: 0;
                    top: 0;
                    border: 10px solid;
                    border-color: transparent transparent rgba(255, 255, 255, 0.7);
                    position: absolute;
                    top: -20px;
                    left: 40px;
                    z-index: -1;//小三角放上面会造成mouseenter, mouseleave闪烁
                }
                li {
                    width: 100px;
                    height: 40px;
                    border-radius: 10px;
                    a {
                        color: black;
                    }
                    display: inline-block;
                    text-align: center;
                    line-height: 40px;
                    font-size: 14px;
                    cursor: pointer;
                    &:hover {
                        background: #F7F7F7;
                    }
                }
            }
            .classify-items {
                left: 590px;
                height: 280px;
            }
            .about-items {
                left: 696px;
                height: 80px;
            }
            .user {
                height: 60px;
                position: absolute;
                top: 0;
                right: 30px;
                line-height: 60px;
                font-size: 14px;
                span {
                    display: inline-block;
                    height: 100%;
                    // padding: 0 10px;
                    padding: 0 10px 0 8px;
                    cursor: pointer;
                    color: white;
                    &:hover {
                        background: rgba(0, 0, 0, 0.1);
                        transition: .5s;
                    }
                }
                span button {
                    background: transparent;
                    color: white;
                    border: none;
                    font-size: 14px;
                    padding: 0 10px;
                }
            }
        }
        .slogan {
            color: white;
            width: 100%;
            text-align: center;
            position: absolute;
            bottom: 60px;
            font-size: 40px;;
        }
    }
    
</style>

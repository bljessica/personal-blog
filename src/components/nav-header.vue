<template>
    <div class="header">
        <div class="header-container">
            <div class="title">
                <router-link :to="'/'">
                    <i class="iconfont icon-custom-logo"></i>
                    <span>{{ title }}</span>
                </router-link>
            </div>
            <!-- 首页导航栏 -->
            <ul class="nav">
                <li v-for="(item, index) in navItems" :key="index" @mouseenter="showItems(index)" @mouseleave="hideItems(index)">
                    <router-link :to="item.linkTo">
                        <i class="iconfont" :class="icons[index]"></i>
                        {{ item.name }}
                    </router-link>
                    <img v-if="index == 2 || index == 3" src="../assets/down.png" alt="">
                    <!-- “分类”的下拉框 -->
                    <ul v-if="classifyShow && index == 2" class="classify-items" @mouseenter="showItems(2)" @mouseleave="hideItems(2)">
                        <span></span>
                        <li v-for="(item, index) in classifyItems" :key="index">
                            <router-link :to="{name: 'kind', params: {kind: item}}">
                                {{ item }}
                            </router-link>
                        </li>
                    </ul>
                    <!-- “关于”下拉框 -->
                    <ul v-if="aboutShow && index == 3" class="about-items" @mouseenter="showItems(3)" @mouseleave="hideItems(3)">
                        <span></span>
                        <li v-for="(item, index) in aboutItems" :key="index">
                            <router-link :to="item.linkTo">{{ item.name }}</router-link>
                            <!-- <a href="">{{ item.name }}</a> -->
                            <!-- <router-link :to="{path: '/kind', params: {kind: item}}">{{ item }}</router-link> -->
                        </li>
                    </ul>
                </li>
                <li @click="search = true"><i class="iconfont icon-sousuo search"></i></li>
                <div class="search-box">
                    <!-- 搜索输入框 -->
                    <input class="search-input" type="text" @blur="inputBlur"
                        placeholder="请输入搜索内容" :style="{opacity: search == true? 1: 0}"
                        v-focus="search" v-model="searchContent" @keyup.enter="searchBlogs">
                    <!-- 搜索出的博客信息 -->
                    <ul class="searchedBlogs" v-if="searchedBlogsShow">
                        <li v-for="(item, index) in searchedBlogs" :key="index" @click="goToBlog(item.blogID)">
                            <!-- <router-link :to="{name: 'blog', params: {id: item.blogID}}"> -->
                                <span class="title">{{ item.title }}</span>
                                <span class="kind">{{ item.kind }}</span>
                            <!-- </router-link> -->
                        </li>
                    </ul>
                </div>
            </ul>
            <!-- 登录注册 -->
            <div class="user" :key="pageKey">
                <!-- 未登录 -->
                <router-link to="/login"><span class="login" v-if="!$store.getters.logined">登录</span></router-link>
                <router-link to="/register"><span class="register" v-if="!$store.getters.logined">注册</span></router-link>
                <!-- 登录后 -->
                <span v-if="$store.getters.logined" class="greeting">欢迎你，{{ shortNickname }}</span>
                <router-link to="/mine"><span v-if="$store.getters.logined">个人中心</span></router-link>
                <span v-if="$store.getters.logined" @click="logOut">登出</span>
            </div>
            <el-button></el-button>
        </div>
        <h1 class="slogan">{{ slogan }}</h1>
    </div>
</template>

<script>
import { CLASSIFY_ITEMS, ABOUT_ITEMS, NAV_ITEMS, TITLE, NAV_ICONS, SLOGON } from '../consts/const';
import { search } from '../api/blog';

export default {
    props: {
        slogan: {
            type: String,
            default: SLOGON
        }
    },
    data() {
        return {
            icons: NAV_ICONS,
            classifyItems: CLASSIFY_ITEMS,
            aboutItems: ABOUT_ITEMS,
            classifyShow: false,
            aboutShow: false,
            navItems: NAV_ITEMS,
            title: TITLE,
            pageKey: 0,
            search: false,
            searchContent: '',
            searchedBlogsShow: false,
            searchedBlogs: [],
            // goToBlogID: ''
        }
    },
    directives: {
        //自定义昵称输入框聚焦事件
        focus: {
            update(el, params) {
                if(params.value){
                    el.focus();
                }
            }
        }
    },
    computed: {
        shortNickname() {
            //设置了昵称
            if(this.$store.state.currentUser.nickname){
                if(this.$store.state.currentUser.nickname.length > 5) {
                    return this.$store.state.currentUser.nickname.slice(0, 5) + '...';
                }
                return this.$store.state.currentUser.nickname;
            }
            else {
                return '新用户';
            }
        },
    },
    methods: {
        inputBlur() {
            this.search = false;
            setTimeout(() => {
                this.searchedBlogsShow = false;
            }, 100);
        },
        goToBlog(id) {
            this.searchedBlogsShow = true;
            this.$router.push({name: 'blog', params: {id: id}})
        },
        searchBlogs() {
            let that = this;
            search({
                content: that.searchContent
            }).then(res => {
                if(res.code == 0) {
                    if(res.data.length != 0) {
                        that.$message({
                            message: '查询成功',
                            type: 'success',
                            duration: 1000
                        });
                        that.searchedBlogs = res.data;
                        that.searchedBlogsShow = true;
                    }
                    else {
                        that.$message({
                            message: '暂无相关博客',
                            type: 'info',
                            duration: 1000
                        });
                    }
                }
                else {
                    that.$message({
                        message: res.msg,
                        type: 'error',
                        duration: 1000
                    });
                }
            }).catch(err => {
                that.$message({
                    message: err,
                    type: 'error',
                    duration: 1000
                });
            })
        },
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
            // this.GLOBAL.reset();
            this.$store.commit('signOut');
            this.pageKey++;
            if(!this.$store.getters.logined) {
                this.$message({
                    message: '登出成功',
                    type: 'success'
                });
            }
            else {
                this.$message({
                    message: '登出失败',
                    type: 'error'
                });
            }
            this.$router.push('/');
        }
    }
}
</script>
 
<style lang="scss" scoped>
    .el-button {
        display: none;
    }
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
            z-index: 1501;
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
                    
                    .classify-items, .about-items {
                        padding: 0;
                        position: absolute;
                        top: 60px;
                        left: -3px;
                        background: white;
                        width: 100px;
                        border-radius: 10px;
                        box-shadow: 0 4px 10px grey;
                        display: flex;
                        flex-direction: column;
                        span {
                            display: block;
                            width: 0;
                            height: 0;
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
                            padding: 0;
                            border-radius: 10px;
                            a {
                                color: black;
                            }
                            text-align: center;
                            line-height: 40px;
                            font-size: 14px;
                            cursor: pointer;
                            &:hover {
                                background: #F7F7F7;
                            }
                        }
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
                .search-box {
                    position: relative;
                    width: 150px;
                    display: inline-block;
                    .search-input {
                        display: inline-block;
                        margin-left: 10px;
                        width: 150px;
                        padding: 0 10px;
                        height: 30px;
                        border-radius: 5px;
                        font-size: 14px;
                        outline: none;
                        border: none;
                    }
                    .searchedBlogs {
                        position: absolute;
                        background: white;
                        top: 40px;
                        width: 260px;
                        left: 10px;
                        border-radius: 10px;
                        z-index: 2000;
                        li {
                            padding: 0;
                            width: 240px;
                            height: 30px;
                            border-bottom: 1px solid #E0E0E0;
                            position: relative;
                            a {
                                color: rgba(0, 0, 0, 0.7);
                            }
                            .title {
                                text-align: left;
                                display: inline-block;
                                font-weight: normal;
                                font-size: 14px;
                                position: absolute;
                                left: 10px;
                                top: 0;
                                line-height: 30px;
                                height: 30px;
                                width: 150px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                white-space: nowrap;
                            }
                            .kind {
                                font-size: 14px;
                                position: absolute;
                                right: 10px;
                                top: 0;
                                height: 30px;
                                width: 60px;
                                text-align: right;
                                line-height: 30px;
                            }
                        }
                        // li:last-of-type {
                        //     border: none;
                        // }
                    }
                }
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
                    // height: 100%;
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

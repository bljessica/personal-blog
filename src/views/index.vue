<template>
    <div id="container"> 
        <nav-header></nav-header>
        <main class="main">
            <entrance :items="entranceKinds" :title="'</>技术笔记入口'"></entrance>
            <blog-container :blogs="blogs" ref="blogs"></blog-container>
        </main> 
        <to-top-button></to-top-button>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header';
import entrance from '../components/entrance';
import blogContainer from '../components/blog-container';
import myFooter from '../components/my-footer';
import toTopButton from '../components/to-top-button';
import { ENTRANCE_ITEMS } from '../consts/const';
import { getUserInfo } from '../api/user';
import { getAllBlogs } from '../api/blog'; 

export default {
    data() {
        return {
            entranceKinds: ENTRANCE_ITEMS,
            blogs: []
        }
    },
    components: {
        navHeader,
        entrance,
        blogContainer,
        myFooter,
        toTopButton
    },
    mounted() {
        this.getUserInfo();
        this.getAllBlogs();
    },
    methods: {
        getUserInfo() {
            let that = this;
            //未获取过用户信息
            if(this.$store.getters.logined && !this.$store.getters.currentUser.nickname){
                let that = this;
                //获取用户昵称
                getUserInfo({
                    phone: that.$store.getters.currentUser.phone
                }).then(res => {
                    if(res.code == 0){
                            that.$store.commit('modifyInfo', {
                                userID: res.data.userID,
                                nickname: res.data.nickname,
                                phone: res.data.phone,
                                avatarUrl: res.data.avatarUrl
                            });
                    }
                    else {
                        console.log(res.msg);
                    }
                }).catch(err => {
                    console.log(err);
                });
            }
        },
        getAllBlogs() {
            let that = this;
            getAllBlogs().then(res => {
                if(res.code == 0) {
                    that.blogs = res.data;
                }
                else {
                    console.log(res.msg);
                }
            })
            .then(() => that.$refs.blogs.getPages())
            .catch(err => console.log(err));
        }
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
    .main {
        width: 100%;
    }
</style>
<template>
    <div id="container"> 
        <nav-header></nav-header>
        <main class="main">
            <entrance :items="entranceKinds"></entrance>
            <blog-container :blogs="blogs" ref="blogs"></blog-container>
            <!-- <el-pagination background layout="prev, pager, next" :page-count="pageNum" @current-change="changeCurrent"
                :current-page="currentPage + 1" @prev-click="prevPage" @next-click="nextPage">
            </el-pagination> -->
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
            blogs: [],
            // pageSize: 9,
            // pages: [],
            // pageNum: 0,
            // currentPage: 0,
            // blogsShow: []
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
        },
        // getPages() {
        //     this.pageNum = Math.ceil(this.blogs.length / this.pageSize);
        //     //分页笔记数组
        //     for(let i = 0; i < this.pageNum; i++){
        //         this.pages[i] = this.blogs.slice(i * this.pageSize, (i + 1) * this.pageSize);
        //     }
        //     this.blogsShow = this.pages[this.currentPage];
        // },
        // prevPage() {
        //     if(this.currentPage == 0) {
        //         return;
        //     }
        //     this.blogsShow = this.pages[--this.currentPage];
        // },
        // nextPage() {
        //     if(this.currentPage == this.pageNum - 1) {
        //         return;
        //     }
        //     this.blogsShow = this.pages[++this.currentPage];
        // },
        // changeCurrent(current) {
        //     this.currentPage = current - 1;
        //     this.blogsShow = this.pages[current - 1];
        // }
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
        // .el-pagination {
        //     margin-bottom: 20px;
        // }
    }
</style>
<template>
    <div class="container">
        <nav-header></nav-header>
        <main>
            <label-entrance @selectLabel="changeSelect" :selected="select"></label-entrance>
            <label-picture v-if="select.length == 0"></label-picture>
            <blog-container v-else :blogs="labelBlogs" ref="blogs"></blog-container>
            <!-- <el-pagination v-if="select.length != 0" background layout="prev, pager, next" :page-count="pageNum" @current-change="changeCurrent"
                :current-page="currentPage + 1" @prev-click="prevPage" @next-click="nextPage">
            </el-pagination> -->
        </main>
        <el-button></el-button>
        <to-top-button></to-top-button>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import labelEntrance from '../components/label-entrance'
import labelPicture from '../components/label-picture'
import myFooter from '../components/my-footer'
import blogContainer from '../components/blog-container';
import toTopButton from '../components/to-top-button'
import { getBlogsByLabel } from '../api/blog'

export default {
    data() {
        return {
            select: '',
            // labels: [],
            labelBlogs: []
        }
    },
    created() {
        if(this.$route.params.label.length != 0) {
            this.select = this.$route.params.label;
            this.changeSelect(this.select);
        }
    },
    components: {
        navHeader,
        labelEntrance,
        labelPicture,
        myFooter,
        toTopButton,
        blogContainer
    },
    watch: {
        '$route' (to, from) {
            this.$router.go(0);
        }
    },
    methods: {
        changeSelect(label) {
            this.select = label;
            let that = this;
            getBlogsByLabel({
                label: label
            }).then(res => {
                if(res.code == 0) {
                    that.labelBlogs = res.data;
                    if(res.data.length == 0) {
                        that.$message({
                            message: '暂无此类博客',
                            type: 'success',
                            duration: 1000
                        });
                    }
                }
                else {
                    that.labelBlogs = [];
                    that.$message({
                        message: res.msg,
                        type: 'error',
                        duration: 1000
                    });
                    console.log(res.msg);
                }
            }).then(() => that.$refs.blogs.getPages())
            .catch(err => console.log(err));
        }
    }
}
</script>

<style lang="scss" scoped>
    .el-button {
        display: none;
    }
</style>
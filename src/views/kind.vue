<template>
  <div id="container"> 
        <nav-header></nav-header>
        <main class="main">
            <kind-entrance :items="entranceKinds" :title="'文章分类'" @selectKind="selectKind" :selected="select"></kind-entrance>
            <blog-container v-if="select.length != 0" :blogs="blogs" ref="blogs"></blog-container>
        </main> 
        <el-button></el-button>
        <to-top-button></to-top-button>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header';
import kindEntrance from '../components/kind-entrance';
import blogContainer from '../components/blog-container';
import myFooter from '../components/my-footer';
import toTopButton from '../components/to-top-button';
import { CLASSIFY_ITEMS } from '../consts/const';
import { getLabelsByKind } from '../api/blog'


export default {
    data() {
        return {
            entranceKinds: CLASSIFY_ITEMS,
            blogs: [],
            select: ''
        }
    },
    components: {
        navHeader,
        kindEntrance,
        blogContainer,
        myFooter,
        toTopButton
    },
    created() {
        if(this.$route.params.kind) {
            this.select = this.$route.params.kind;
        }
    },
    watch: {
        '$route' (to, from) {
            this.$router.go(0);
        }
    },
    methods: {
        selectKind(kind) {
            this.select = kind;
            let that = this;
            getLabelsByKind({
                kind: kind
            }).then(res => {
                if(res.code == 0){
                    that.blogs = res.data;
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

<style>
    .el-button {
        display: none;
    }
</style>
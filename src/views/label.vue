<template>
    <div class="container">
        <nav-header></nav-header>
        <main>
            <label-box @selectLabel="changeSelect"></label-box>
            <label-picture v-if="select.length == 0"></label-picture>
            <blog-container v-else :blogs="labelBlogs" ref="blogs"></blog-container>
            <!-- <el-pagination v-if="select.length != 0" background layout="prev, pager, next" :page-count="pageNum" @current-change="changeCurrent"
                :current-page="currentPage + 1" @prev-click="prevPage" @next-click="nextPage">
            </el-pagination> -->
        </main>
        <to-top-button></to-top-button>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header'
import labelBox from '../components/label-box'
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
    // mounted() {
    //     this.getAllLabels();
    // },
    components: {
        navHeader,
        labelBox,
        labelPicture,
        myFooter,
        toTopButton,
        blogContainer
    },
    methods: {
        changeSelect(label) {
            this.select = label;
            console.log(label);
            let that = this;
            getBlogsByLabel({
                label: label
            }).then(res => {
                // console.log(res)
                if(res.code == 0) {
                    // if(res.data.length == 0) {
                    //     console.log(2222)
                    //     that.labelBlogs = [];
                    // }
                    // else {
                        that.labelBlogs = res.data;
                    // }
                    // console.log(that.labelBlogs)
                }
                else {
                    that.labelBlogs = [];
                    console.log(res.msg);
                }
            }).then(() => that.$refs.blogs.getPages())
            .catch(err => console.log(err));
        }
    }
}
</script>

<style lang="scss">

</style>
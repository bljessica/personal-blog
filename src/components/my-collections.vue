<template>
    <div class="container">
        <ul class="blogs-container">
            <li v-for="(item, index) in blogsShow" :key="index" @click="toBlog(item)">
                <div class="infos">
                    <span class="kind"><i class="iconfont icon-shuqian"></i>{{ item.kind }}</span>
                    <span class="updated">最近更新：{{ item.updated }}</span>
                </div>
                <p class="title">标题：{{ item.title }}</p>
                <p class="content">内容：{{ getContent(item.content) }}</p>
                <div class="tags">
                    <el-tag v-for="(label, labelIndex) in item.labels" :key="labelIndex">{{ label }}</el-tag>
                </div>
            </li>
            <el-pagination background layout="prev, pager, next" :page-count="pageNum" @current-change="changeCurrent"
                :current-page="currentPage + 1" @prev-click="prevPage" @next-click="nextPage">
            </el-pagination>
        </ul>
        <el-button></el-button>
    </div>
</template>
 
<script>
import { getCollectedBlogs } from '../api/blog';
export default {
    data() {
        return {
            blogs: [],
            pageSize: 3,
            pages: [],
            pageNum: 0,
            currentPage: 0,
            blogsShow: [],
            key: 0
        }
    },
    computed: {
        
    },
    methods: {
        getContent(content) {
            let start = content.indexOf('</a>'), end = content.indexOf('</h');
            if(start == -1) {
                start = content.indexOf('<p'), end = content.indexOf('</p');
                return content.substring(start + 3, end);
            }
            return content.substring(start + 4, end);
        },
        toBlog(item) {
            this.$router.push({name: 'blog', params: {id: item.blogID}});
        },
        getAllBlogs() {
            let that = this;
            getCollectedBlogs({
                userID: that.$store.getters.currentUser.userID
            }).then(res => {
                if(res.code == 0) {
                    that.blogs = res.data;
                }
                else {
                    that.$message({
                        message: '获取博客失败',
                        type: 'error',
                        duration: 1000
                    });
                }
            }).then(() => that.getPages())
            .catch(err => that.$message({
                message: '获取博客失败',
                type: 'error',
                duration: 1000
            }))
        },
        getPages() {
            this.pageNum = Math.ceil(this.blogs.length / this.pageSize);
            //分页笔记数组
            for(let i = 0; i < this.pageNum; i++){
                this.pages[i] = this.blogs.slice(i * this.pageSize, (i + 1) * this.pageSize);
            }
            this.blogsShow = this.pages[this.currentPage];
        },
        prevPage() {
            if(this.currentPage == 0) {
                return;
            }
            this.blogsShow = this.pages[--this.currentPage];
        },
        nextPage() {
            if(this.currentPage == this.pageNum - 1) {
                return;
            }
            this.blogsShow = this.pages[++this.currentPage];
        },
        changeCurrent(current) {
            this.currentPage = current - 1;
            this.blogsShow = this.pages[current - 1];
        }
    }
}
</script>

<style lang="scss" scoped>
    .blogs-container {
        position: relative;
        height: 460px;
        margin-top: 20px;
        li {
            margin-bottom: 20px;
            padding: 10px 50px;
            width: 660px; 
            height: 100px;
            border-radius: 10px;
            background: #d9ecff;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            font-size: 12px;
            .infos {
                position: relative;
                width: 100%;
                height: 30px;
                .kind {
                    position: absolute;
                    left: 0;
                    top: 0;
                    i {
                        color: #1DA7DA;
                    }
                }
                .updated {
                    position: absolute;
                    right: 0;
                    top: 0;
                }
            }
            .title {
                // border-top: 1px solid #d9d9d9;
                width: 520px;
                padding: 0 140px 0 0;
                height: 24px;
                // font-weight: bold;
                text-align: left;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                // font-size: 14px;
            }
            .content {
                // border-top: 1px solid #d9d9d9;
                width: 660px;
                height: 48px;
                text-align: left;
                text-overflow: -o-ellipsis-lastline;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            .tags {
                position: relative;
                top: 5px;
                .el-tag {
                    margin-right: 20px;
                }
            }
            &:hover {
                box-shadow: 3px 3px 10px gainsboro, -3px 3px 10px gainsboro;
                transition: .5s;
            }
        }
        .el-pagination {
            position: absolute;
            bottom: 0;
            right: 0;
        }
    }
    
    .el-button {
        visibility: hidden;
        opacity: 0;
    }
</style>
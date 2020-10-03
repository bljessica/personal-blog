<template>
    <div class="container">
        <ul class="blog-container">
            <li v-for="(item, index) in blogsShow" :key="index" class="blog" @click="toBlog(item)">
                <div class="title" :style="{backgroundImage: 'url(' + require('../assets/css3.jpg') + ')'}">
                    <h3>{{ item.title }}</h3>
                </div>
                <div class="content">
                    <p style="-webkit-box-orient: vertical;">{{ getContent(item.content) }}</p>
                    <div class="time">
                        <i class="iconfont icon-59"></i>
                        <span>{{ item.created }}</span>
                    </div>
                    <div class="kind">
                        <i class="iconfont icon-shuqian"></i>
                        <!-- <router-link :to="{name: 'kind', params: {kind: item.kind}}"><span>{{ item.kind }}</span></router-link> -->
                        <span @click.stop="$router.push({name: 'kind', params: {kind: item.kind}})">{{ item.kind }}</span>
                    </div>
                </div>
                <ul class="labels">
                    <li v-for="(label, index) in item.labels" :key="index" class="label">
                        <!-- <router-link :to="{name: 'label', params: {label: label}}"><span v-if="index < 3">{{ label }}</span></router-link>
                        <router-link :to="'/label'"><span v-if="index == 3">...</span></router-link> -->
                        <span v-if="index < 3" @click.stop="$router.push({name: 'label', params: {label: label}})">{{ label }}</span>
                        <span v-if="index == 3" @click.stop="$router.push({name: 'label', params: {label: '/'}})">...</span>
                    </li>
                </ul>
            </li>
        </ul>
        <el-pagination v-if="blogs.length != 0" background layout="prev, pager, next" :page-count="pageNum" @current-change="changeCurrent"
            :current-page="currentPage + 1" @prev-click="prevPage" @next-click="nextPage">
        </el-pagination>
    </div>
</template>

<script>
export default {
    props: {
        blogs: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            pageSize: 9,
            pages: [],
            pageNum: 0,
            currentPage: 0,
            blogsShow: []
        }
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
        getPages() {
            this.pageNum = Math.ceil(this.blogs.length / this.pageSize);
            //分页笔记数组
            for(let i = 0; i < this.pageNum; i++){
                this.pages[i] = this.blogs.slice(i * this.pageSize, (i + 1) * this.pageSize);
            }
            if(this.blogs.length == 0) {
                this.blogsShow = this.pages = [];
            }
            else {
                this.blogsShow = this.pages[this.currentPage];
            }
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
    .blog-container {
        width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        a {
            text-decoration: none;
            color: rgba(0, 0, 0, 0.8);
        }
        .blog {
            list-style-type: none;
            background: white;
            width: 300px;
            height: 350px;
            border-radius: 10px;
            cursor: pointer;
            margin-bottom: 30px;  
            cursor: pointer;          
            .title {
                width: 300px;
                height: 200px;
                background-size: 100% 100%;
                position: relative;
                h3 {
                    width: 260px;
                    padding: 0 20px;
                    font-weight: normal;
                    text-align: left;
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                    color: white;
                    font-size: 24px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .content {
                padding: 15px 20px;
                height: 70px;
                border-bottom: 1px solid gainsboro;
                position: relative;
                font-size: 14px;
                text-align: left;
                color: rgba(0, 0, 0, 0.87);
                p {
                    //-webkit-box-orient: vertical;一定要写在内联样式中，否则vue项目打包后webpack会忽略这一行
                    height: 48px;
                    line-height: 24px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                }
                i {
                    position: relative;
                    top: 1px;
                }
                .time {
                    display: inline-block;
                    position: absolute;
                    left: 20px;
                    bottom: 10px;
                }
                .kind {
                    display: inline-block;
                    position: absolute;
                    right: 20px;
                    bottom: 10px;
                    &:hover {
                        color: #42B983;
                        font-weight: bold;
                        a {
                            color: #42B983;
                            font-weight: bold;
                            text-decoration: underline;
                        }
                    }
                }
            }
            .labels {
                list-style-type: none;
                padding: 10px 20px;
                display: flex;
                overflow: hidden;
                .label{
                    // width: 60px;
                        // display: inline-block;

                    span {
                        // display: inline-block;
                        padding: 0 10px;
                        &:hover {
                            // font-weight: bold;
                            text-decoration: underline;
                        }
                    }
                    height: 24px;
                    margin-top: 3px;
                    margin-left: 5px;
                    background: #1DA7DA;
                    border-radius: 10px;
                    text-align: center;
                    color: white;
                    font-size: 12px;
                    line-height: 24px;
                    // a {
                    //     color: white;
                    //     &:hover {
                    //         // font-weight: bold;
                    //         text-decoration: underline;
                    //     }
                    // }
                }
            }
        }
        .blog:hover {
            box-shadow: 0 5px 10px grey;
            transition: .5s;
        }
    }
    .blog-container::after { //解决space-between在一行个数只有两个时中间会空出来的问题
        content: '';
        width: 300px;
    }
    .el-pagination {
        margin-bottom: 20px;
    }
</style>
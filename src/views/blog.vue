<template>
    <div id="container"> 
        <nav-header></nav-header>
        <main id="main">
            <div class="blog">
                <ul class="labels">
                    <li v-for="(label, index) in labels" :key="index">{{ label }}</li>
                </ul>
                <span class="kind">
                    <i class="iconfont icon-shuqian"></i>
                    <router-link :to="{name: 'kind', params: {kind: kind}}">{{ kind }}</router-link>
                    
                </span>
                <div class="timestamp">
                    <span class="created"><i class="iconfont icon-59"></i>发布日期：{{ createTime }}</span>
                    <span class="updated"><i class="iconfont icon-59"></i>最近更新：{{ updateTime }}</span>
                    <div class="collect" v-if="$store.getters.currentUser != null && $store.getters.currentUser.userID != null">
                        <i class="el-icon-star-off" v-if="collected != true" @click="collect"></i>
                        <i class="el-icon-star-on" v-if="collected == true" @click="collect"></i>
                        <span>收藏此题</span>
                    </div>
                    
                </div>
                <div class="title">{{ title }}</div>
                <!-- <div class="content" v-html="content"></div> -->
                <div class="md-wrapper">
                    <mavon-editor class="content" :toolbarsFlag=false :defaultOpen="'preview'" 
                        :navigation=true :subfield=false v-model="content"></mavon-editor>
                </div>
            </div>
            <!-- <div class="catalog">
                <div class="title">目录</div>
                <div class="links" v-html="links">{{ catalog }}</div>
            </div> -->
            <el-button></el-button>
        </main> 
        <to-top-button></to-top-button>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header';
import myFooter from '../components/my-footer';
import toTopButton from '../components/to-top-button';
import { getBlog } from '../api/blog';
import { mavonEditor } from 'mavon-editor';
import { collect, cancelCollection, isCollected } from '../api/collection';

export default {
    components: {
        navHeader,
        myFooter,
        toTopButton,
        mavonEditor
    },
    data() {
        return {
            labels: [],
            kind: '',
            createTime: '',
            updateTime: '',
            content: '',
            title: '',
            collected: false
        }
    },
    created() {
        this.getBlog();
        this.isCollected();
    },
    watch: {
        '$route' (to, from) {
            this.$router.go(0);
        }
    },
    methods: {
        isCollected() {
            let that = this;
            isCollected({
                userID: that.$store.getters.currentUser.userID,
                blogID: that.$route.params.id
            }).then(res => {
                if(res.code == 0) {
                    if(res.data.isCollected == true) {
                        that.collected = true;
                    }
                }
                else {
                    that.$message({
                        message: '获取收藏信息失败',
                        type: 'error',
                        duration: 1000
                    });
                }
            }).catch(err => that.$message({
                message: '获取收藏信息失败',
                type: 'error',
                duration: 1000
            }));
        },
        collect() {
            this.collected = !this.collected;
            let that = this;
            // console.log(that.$store.getters.currentUser.userID, that.$route.params.id)
            // return;
            // 收藏
            if(this.collected) {
                collect({
                    userID: that.$store.getters.currentUser.userID,
                    blogID: that.$route.params.id
                }).then(res => {
                    if(res.code == 0) {
                        that.$message({
                            message: res.msg,
                            type: 'success',
                            duration: 1000
                        });
                    }
                    else {
                        that.$message({
                            message: res.msg,
                            type: 'error',
                            duration: 1000
                        });
                    }
                }).catch(err => that.$message({
                    message: '收藏失败',
                    type: 'error',
                    duration: 1000
                }));
            }
            //取消收藏
            else {
                cancelCollection({
                    userID: that.$store.getters.currentUser.userID,
                    blogID: that.$route.params.id
                }).then(res => {
                    if(res.code == 0) {
                        that.$message({
                            message: res.msg,
                            type: 'success',
                            duration: 1000
                        });
                    }
                    else {
                        that.$message({
                            message: res.msg,
                            type: 'error',
                            duration: 1000
                        });
                    }
                }).catch(err => that.$message({
                    message: '取消收藏失败',
                    type: 'error',
                    duration: 1000
                }));
            }
        },
        getBlog() {
            let id = this.$route.params.id;
            let that = this;
            getBlog({
                id: id
            }).then(res => {
                that.labels = res.data.labels;
                that.kind = res.data.kind;
                that.createTime = res.data.created;
                that.updateTime = res.data.updated;
                that.content = res.data.content;
                that.title = res.data.title;
                that.catalog = '';
                // that.getLinks();
            }).catch(err => that.$message({
                message: '获取博客内容失败',
                type: 'error',
                duration: 1000
            }));
        },
    }
}
</script>

<style>
/* 这个全局样式标签不上少，否则深度作用选择器就失效了 */
</style>

<style lang="scss" scoped>
    .el-button {
        display: none;
    }
    #main {
        width: 850px;
        // height: 500px;
        margin-left: 100px;
        background: white;
        position: relative;
        top: -30px;
        .blog {
            width: 750px;
            padding: 20px 50px;
            position: relative;
            text-align: left;
            .labels {
                list-style-type: none;
                font-size: 14px;
                position: absolute;
                left: 50px;
                top: 20px;
                li {
                    display: inline-block;
                    height: 26px;
                    background: #1DA7DA;
                    border-radius: 14px;
                    padding: 0 15px; 
                    color: white;
                    margin-right: 10px;
                    line-height: 26px;
                }
            }
            .kind {
                color: #42B983;
                position: absolute;
                right: 50px;
                top: 20px;
                a {
                    color: #42B983;
                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            .timestamp {
                margin-top: 50px;
                border-bottom: 1px solid #E0E0E0;
                display: inline-block;
                width: 100%;
                text-align: left;
                color: #525f7f;
                font-size: 14px;
                position: relative;
                .updated {
                    margin-left: 40px;
                }
                .collect {
                    display: inline-block;
                    position: absolute;
                    right: 0;
                    top: -8px;
                    // 设置文字不能被选中
                    -webkit-user-select:none;
                    -moz-user-select:none;
                    -ms-user-select:none;
                    user-select:none;
                    i {
                        color: rgb(253, 253, 31);
                        font-size: 26px;
                        position: relative;
                        top: 4px;
                        cursor: pointer;
                    }
                }
            }
            .md-wrapper >>> .v-note-wrapper .v-note-panel .v-note-show .v-show-content {
                    width: 750px;
                    padding-right: 0;
                }
            .content {
                width: 1000px;
            }
            .title {
                font-size: 30px;
                padding: 20px;
            }
        }
        // .catalog {
        //     position: absolute;
        //     left: 900px;
        //     top: 50px;
        //     border: 1px solid red;
        //     width: 200px;
        //     text-align: left;
        //     .title {
        //         font-weight: bold;
        //         font-size: 20px;
        //     }
        //     .links {
        //         font-size: 16px;
        //     }
        // }
    }
</style>
<template>
    <div class="container">
        <nav-header></nav-header>
        <main id="main">
            <div class="info">
                <div class="avatar-container">
                    <img class="avatar" v-if="GLOBAL.avatarUrl.length != 0" :src="GLOBAL.avatar">
                    <!-- 默认头像 -->
                    <i class="avatar iconfont icon-gerenyonghutouxiang"></i>
                    <!-- <img class="avatar" v-else :src="GLOBAL.avatar"> -->
                </div>
                <button>上传头像</button>
                <div class="nickname-container">
                    <span class="nickname">昵称：{{ GLOBAL.nickname}}</span>
                    <i class="iconfont icon-xiugai"></i>
                </div>
            </div>
            <el-tabs v-model="activeName" @click="handleClick" class="tabs">
                <el-tab-pane label="我的笔记" name="first">我的笔记</el-tab-pane>
                <el-tab-pane label="我的收藏" name="second">我的收藏</el-tab-pane>
                <el-tab-pane label="我的关注" name="third">我的关注</el-tab-pane>
                <el-tab-pane label="我的粉丝" name="fourth">我的粉丝</el-tab-pane>
            </el-tabs>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header';
import myFooter from '../components/my-footer'


export default {
    components: {
        navHeader,
        myFooter
    },
    data() {
        return {
            avatarUrl: '',
            activeName: 'second'
        }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style lang="scss">
    #main {
        width: 800px;
        height: 500px;
        position: relative;
        top: -30px;
        margin: 0 auto;
        background: white;
        box-shadow: 0 5px 10px gainsboro;
        .info {
            width: 200px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            .avatar-container {
                margin: 20px auto;
                width: 100px;
                height: 100px;
                background: #1DA7DA;
                border-radius: 50%;
                img.avatar {
                    
                }
                i.avatar {
                    font-size: 66px;
                    color: white;
                    line-height: 100px;
                    position: relative;
                    top: -3px;
                }
            }
            .nickname-container {
                margin-top: 20px;
                .nickname {
                    margin-left: -16px;
                }
                i {
                    margin-left: 3px;
                }
            }
        }
        .tabs {
            width: 600px;
            height: 100%;
            position: absolute;
            left: 200px;
            top: 20px;
        }
    }
</style>
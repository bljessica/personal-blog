<template>
    <div class="container">
        <nav-header></nav-header>
        <main id="main">
            <div class="info">
                <div class="avatar-container">
                    <img class="avatar" v-if="avatarUrl.length != 0" :src="avatarUrl">
                    <!-- 默认头像 -->
                    <i class="avatar iconfont icon-gerenyonghutouxiang" v-else></i>
                </div>
                <!-- 上传头像按钮 -->
                <el-upload class="avatar-upload" :show-file-list="false" :action="'1'"
                        :on-success="avatarUpload" :before-upload="beforeAvatarUpload">
                        上传头像
                </el-upload>
                <div class="nickname-container">
                    昵称：<input class="nickname" @blur="focusState = false" 
                    v-focus="focusState" v-model="nickname">
                    <!-- {{ $store.getters.currentUser.nickname}} -->
                    <i class="iconfont icon-xiugai" @click="focusState = true"></i>
                </div>
                <el-button class="save" @click="saveInfo">保存设置</el-button>
            </div>
            <el-tabs v-model="activeName" @click="handleClick" stretch @tab-click="getblogs" class="tabs">
                <el-tab-pane label="添加博客" name="addBlog">
                    <add-blog-box></add-blog-box>
                </el-tab-pane>
                <el-tab-pane label="我的博客" name="myBlogs" >
                    <my-blogs ref="blogs"></my-blogs>
                </el-tab-pane>
                <el-tab-pane label="我的收藏" name="myCollections">
                    <my-collections ref="collections"></my-collections>
                </el-tab-pane>
                <!-- <el-tab-pane label="我的关注" name="myFollowings"></el-tab-pane> -->
                <!-- <el-tab-pane label="我的粉丝" name="myFollowers"></el-tab-pane> -->
            </el-tabs>
        </main>
        <to-top-button></to-top-button>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header';
import myFooter from '../components/my-footer';
import addBlogBox from '../components/add-blog-box';
import myBlogs from '../components/my-blogs';
import toTopButton from '../components/to-top-button';
import myCollections from '../components/my-collections';
import { saveUserInfo } from '../api/user'

export default {
    components: {
        navHeader,
        myFooter,
        addBlogBox,
        myBlogs,
        myCollections,
        toTopButton
    },
    data() {
        return {
            avatarUrl: this.$store.getters.currentUser.avatarUrl,
            activeName: 'addBlog',
            nickname: this.$store.getters.currentUser.nickname,
            focusState: false
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
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },
        beforeAvatarUpload(file) {
            let isImage = file.type === 'image/jpeg' || 'image/gif' || 'image/png';
            let isSmall = file.size / 1024 / 1024 < 1;
            if(!isImage){
                this.$message.error('上传文件只能是图片格式!');
            }
            if(!isSmall){
                this.$message.error('上传文件大小不能超过 1MB!');
            }
            if(isImage && isSmall){
                let reader = new FileReader();
                reader.readAsDataURL(file);
                let that = this;
                reader.onload = function (e) {
                    // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
                    let imgcode = e.target.result;
                    that.avatarUrl = imgcode;
                }
            }
            //屏蔽默认上传方法
            return false;
        },
        avatarUpload(res, file) {    
        },
        saveInfo() {
            this.focusState = false;
            let that = this;
            saveUserInfo({
                phone: that.$store.getters.currentUser.phone,
                avatarUrl: that.avatarUrl,
                nickname: that.nickname
            }).then(res => {
                if(res.code == 0){
                    that.$store.commit('modifyInfo', {
                        phone: that.$store.getters.currentUser.phone,
                        avatarUrl: that.avatarUrl,
                        nickname: that.nickname
                    })
                    // that.pageKey++;
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
                        message: err,
                        type: 'error',
                        duration: 1000
                    }));
        },
        getblogs() {
            if(this.activeName == 'myBlogs') {
                this.$refs.blogs.getAllBlogs();
            }
            else if(this.activeName == 'myCollections') {
                this.$refs.collections.getAllBlogs();
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    #main {
        min-height: 980px;
        width: 1000px;
        // overflow: hidden;
        // height: 600px;
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
                overflow: hidden;
                img.avatar {
                    width: 100%;
                    height: 100%;
                }
                i.avatar {
                    font-size: 66px;
                    color: white;
                    line-height: 100px;
                    position: relative;
                    top: -3px;
                }
            }
            .avatar-upload {
                height: 20px;
                line-height: 20px;
                border: 1px solid #d9d9d9;
                font-size: 14px;
                border-radius: 5px;
                width: 50%;
                margin: 0 auto;
            }
            .nickname-container {
                margin-top: 16px;
                .nickname {
                    width: 80px;
                    height: 30px;
                    line-height: 30px;
                    outline: none;
                    border: none;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                i {
                    margin-left: 3px;
                    cursor: pointer;
                }
            }
            .save {
                margin-top: 16px;
                width: 160px;
                height: 30px;
                color: white;
                background: #1DA7DA;
                outline: none;
                padding: 0;
                border: none;
                cursor: pointer;
                line-height: 30px;
            }
        }
        .tabs {
            width: 760px;
            padding: 0 20px;
            // height: 100%;
            position: absolute;
            left: 200px;
            top: 20px;
        }
    }
</style>
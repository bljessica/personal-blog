<template>
    <div class="container">
        <nav-header></nav-header>
        <main id="main">
            <div class="info">
                <div class="avatar-container">
                    <img class="avatar" v-if="$store.getters.currentUser.avatarUrl.length != 0" :key="pageKey" :src="$store.getters.currentUser.avatarUrl">
                    <!-- 默认头像 -->
                    <i class="avatar iconfont icon-gerenyonghutouxiang" :key="pageKey"></i>
                    <el-upload class="avatar-upload" :show-file-list="false" :action="'1'"
                        :on-success="avatarUpload" :before-upload="beforeAvatarUpload">
                        上传头像
                    </el-upload>
                </div>
                <div class="nickname-container">
                    昵称：<input class="nickname" @blur="focusState = false" 
                    @focus="focusState" v-model="nickname">
                    <!-- {{ $store.getters.currentUser.nickname}} -->
                    <i class="iconfont icon-xiugai" @click="focusState = true"></i>
                </div>
                <el-button class="save" @click="saveInfo">保存设置</el-button>
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
import myFooter from '../components/my-footer';
import { saveUserInfo } from '../api/user'

export default {
    components: {
        navHeader,
        myFooter
    },
    data() {
        return {
            avatarUrl: '',
            activeName: 'second',
            pageKey: 0,
            nickname: this.$store.getters.currentUser.nickname,
            focusState: false
            // upLoadAvatarUrl: 'http://locaohost:3000/user/saveUserInfo',
            // imageUrl: ''
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
                // this.avatarUrl = URL.createObjectURL(file.raw);
                let reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = function (e) {
                    // 读取到的图片base64 数据编码 将此编码字符串传给后台即可
                    var imgcode = e.target.result;
                    this.avatarUrl = imgcode;
                    this.pageKey++;
                }
            }
            //屏蔽默认上传方法
            return false;
        },
        avatarUpload(res, file) {    
        },
        saveInfo() {
            let that = this;
            saveUserInfo({
                phone: that.$store.getters.currentUser.phone,
                avatarUrl: that.avatarUrl,
                nickname: that.nickname
            }).then(res => {
                if(res.code == 0){
                    console.log(res.msg);
                }
                else {
                    console.log(res.msg);
                }
            }).catch(err => console.log(err));
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
                .avatar-upload {
                    border: 1px solid #d9d9d9;
                    font-size: 14px;
                    border-radius: 5px;
                    position: relative;
                    top: 10px;
                    margin-bottom: 20px;
                }
            }
            .nickname-container {
                position: relative;
                top: 30px;
                .nickname {
                    width: 80px;
                    height: 30px;
                    line-height: 30px;
                    border: none;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                    // margin-left: -16px;
                }
                i {
                    margin-left: 3px;
                    cursor: pointer;
                }
            }
            .save {
                position: absolute;
                top: 220px;
                left: 20px;
                width: 160px;
                height: 30px;
                line-height: 30px;
                color: white;
                background: #1DA7DA;
                outline: none;
                border: none;
                cursor: pointer;
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
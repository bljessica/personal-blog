<template>
    <div class="container">
        <nav-header :slogan="'Guest Book'"></nav-header>
        <main class="main">
            期待与你的交流~
            <el-form label-width="50px" class="msg">
                <el-form-item label="昵称">
                    <el-input v-model="nickname" type="text"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="email" type="email"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input autosize v-model="content" type="textarea"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="openMsgBox">发表</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
            <div class="count">{{ comments.length }}评论</div>
            <ul class="comments">
                <li v-for="(item, index) in comments" :key="index">
                    <img class="avatar" src="@/assets/user.jpg" alt="">
                    <span class="nickname">{{ item.nickname }}</span>
                    <span class="createTime">{{ item.createTime }}</span>
                    <p class="content">{{ item.content }}</p>
                </li>
            </ul>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header';
import myFooter from '../components/my-footer';
import { saveComment, getComments } from '../api/comment';

export default {
    data() {
        return {
            nickname: '',
            email: '',
            content: '',
            comments: []
        }
    },
    components: {
        navHeader,
        myFooter
    },
    created() {
        this.getComments();
    },
    methods: {
        getComments() {
            let that = this;
            getComments().then(res => {
                if(res.code == 0) {
                    that.comments = res.data;
                }
                else {
                    that.$message({
                        message: '获取评论内容失败',
                        type: 'error'
                    });
                }
            }).catch(err => that.$message({
                message: '获取评论内容失败',
                type: 'error'
            }));
        },
        submitForm() {
            console.log(1111)
            let that = this;
            saveComment({
                nickname: that.nickname,
                email: that.email,
                content: that.content
            }).then(res => {
                if(res.code == 0) {
                    that.getComments();
                    that.$message({
                        message: '发表成功',
                        type: 'success'
                    });
                }
                else {
                    that.$message({
                        message: '发表失败',
                        type: 'error'
                    });
                }
            }).catch(err => that.$message({
                message: '发表失败',
                type: 'error'
            }));
        },
        resetForm() {
            this.nickname = '';
            this.email = '';
            this.content = '';
        },
        openMsgBox() {
            let num1 = Math.floor(Math.random() * 20);
            let num2 = Math.floor(Math.random() * 10);
            let result = num1 + num2;
            let that = this;
            this.$prompt(num1 + '+' + num2 + '=', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputValidator(value) {
                    if(value != result) {
                        return false;
                    }
                    return true;
                },
                inputErrorMessage: '计算错误'
            }).then(({value}) => {
                that.submitForm();
            }).catch(() => {
                that.$message({
                    message: '取消发表',
                    type: 'info'
                });
            });
        }
    }
}
</script>

<style lang="scss" scoped>
    .main {
        width: 600px;
        // height: 260px;
        padding: 20px 50px;
        position: relative;
        top: -30px;
        margin: 0 auto;
        background: white;
        box-shadow: 0 5px 10px gainsboro;
        .msg {
            margin-top: 20px;
        }
        .count {
            margin-top: 40px;
            font-weight: bold;
            font-size: 20px;
            text-align: left;
            position: relative;
            left: 10px;
        }
        .comments {
            width: 100%;
            padding: 0;
            list-style-type: none;
            li {
                position: relative;
                height: 130px;
                // width: 100%;
                // display: inline-block;
                border-top: 1px solid #E0E0E0;
                font-size: 14px;
                .avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    overflow: hidden;
                    position: absolute;
                    left: 10px;
                    top: 20px;
                    cursor: pointer;
                    transition: .5s;
                    &:hover {
                        transform: rotate(180deg);
                        transition: .5s
                    }
                }
                .nickname {
                    color:#1DA7DA;
                    position: absolute;
                    left: 70px;
                    top: 18px;
                }
                .createTime {
                    color:#c9c5c5;
                    position: absolute;
                    left: 70px;
                    top: 42px;
                    font-size: 12px;
                }
                .content {
                    // color:#1DA7DA;
                    position: absolute;
                    left: 70px;
                    top: 60px;
                    color: rgba(0, 0, 0, 0.6);
                }
            }
        }
    }
</style>
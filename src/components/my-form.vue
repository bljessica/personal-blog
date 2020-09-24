<template>
    <div class="form-container" :style="{height: items.length * 90 + 20 +'px'}">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <span>{{ item.name }}</span>
                <input :type="item.type" :placeholder="item.placeholder" v-model="item.content">
            </li>
            <el-button class="submit" @click="submitForm">{{ getBtnContent }}</el-button>
        </ul> 
    </div>
</template>

<script>
import { register, login } from '../utils/api/user';
// import { logined } from '../utils/global'

export default {
    props: {
        items: {
            type: Array,
            default: () => []
        },
        type: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            btnContent: ''
        }
    },
    computed: {
        getBtnContent() {
            if(this.type == 'register') {
                return '注册';
            }
            else if(this.type == 'login'){
                return '登录';
            }
        }
    },
    methods: {
        getItemContent(name) {
            return this.items.find(item => item.name == name).content;
        },
        getPwdStrength() {
            let level = 0;
            let pwd = this.getItemContent('密码');
            if(pwd.length < 8) {
                return 0;
            }
            if(/\d/.test(pwd)) {
                level++;
            }
            if(/[a-zA-Z]/.test(pwd)){
                level++;
            }
            if(/[^0-9a-zA-Z_]/.test(pwd)) {
                level++;
            }
            return level;
        },
        verifyPhone() {
            //验证手机号是否合法
            if(this.getItemContent('手机号').length == 0) {
                this.$message({
                    message: '手机号不能为空',
                    type: 'error'
                });
                return false;
            }
            if(!/^1[3|4|5|7|8][0-9]{9}$/.test(this.getItemContent('手机号'))) {
                this.$message({
                    message: '手机号不合法',
                    type: 'error'
                });
                return false;
            }
            return true;
        },
        verifyPassword() {
            let pwd = this.getItemContent('密码');
            //密码不能为空
            if(pwd.length == 0) {
                this.$message({
                    message: '密码不能为空',
                    type: 'error'
                });
                return false;
            }
            //验证两次输入的密码是否一致
            if(pwd != this.getItemContent('再次输入密码')) {
                this.$message({
                    message: '两次输入的密码不一致',
                    type: 'error'
                });
                return false;
            }
            console.log(pwd, this.getPwdStrength())
            //验证密码强度
            if(this.getPwdStrength() < 2) {
                this.$message({
                    message: '密码强度较低，请重新设置',
                    type: 'warning'
                });
                return false;
            }
            return true;
        },
        submitForm() {
            //提交注册表单
            if(this.type == 'register') {
                if(!this.verifyPhone() || !this.verifyPassword()) {
                    return;
                }
                let that = this;
                //发起请求
                register({
                    phone: that.getItemContent('手机号'),
                    nickname: that.getItemContent('昵称'),
                    password: that.getItemContent('密码')
                }).then(res => {
                    if(res.code == 0) {
                        that.$message({
                            message: '注册成功, 1秒后将跳转到登录界面',
                            type: 'success',
                            duration: 1000
                        });
                        setTimeout(() => {
                            that.$router.push('/login');
                        }, 1000);
                    }
                    else {
                        that.$message({
                            message: res.msg,
                            type: 'error'
                        })
                    }
                }).catch(err => {
                    that.$message({
                        message: err,
                        type: 'error'
                    })
                })
            }
            //提交登录表单
            else if(this.type == 'login') {
                if(!this.verifyPhone()) {
                    return;
                }
                if(this.getItemContent('密码').length == 0) {
                    this.$message({
                        message: '请输入密码',
                        type: 'warning'
                    });
                    return;
                }
                let that = this;
                login({
                    phone: that.getItemContent('手机号'),
                    password: that.getItemContent('密码')
                }).then(res => {
                    if(res.code == 0) {
                        that.$message({
                            message: '登录成功, 1秒后将跳转到首页',
                            type: 'success',
                            duration: 1000
                        });
                        setTimeout(() => {
                            that.GLOBAL.logined = true;
                            that.GLOBAL.phone = that.getItemContent('手机号');
                            //跳转到首页
                            that.$router.push('/');
                        }, 1000);
                    }
                    else {
                        that.$message({
                            message: res.msg,
                            type: 'error'
                        })
                    }
                }).catch(err => {
                    that.$message({
                        message: err,
                        type: 'error'
                    })
                })
            }
        }
    }
}
</script>

<style lang="scss">
    .form-container {
        width: 340px;
        // height: 360px;
        margin: 0 auto;
        padding: 30px 30px 20px 30px;
        background: white;
        position: relative;
        top: -30px;
        box-shadow: 0 3px 20px gainsboro;
        ul {
            // width: 100%;
            height: 100%;
            list-style-type: none;
            padding: 0;
            li {
                // width: 320px;
                width: 100%;
                height: 50px;
                float: left;
                margin-bottom: 20px;
                span {
                    display: inline-block;
                    width: 90px;
                    font-size: 14px;
                    text-align: left;
                }
                input {
                    width: 200px;
                    height: 30px;
                    outline: none;
                    border: 1px solid gainsboro;
                    padding-left: 4px;
                }
            }
        }
        .submit {
            // width: 200px;
            width: 100%;
            height: 40px;
            margin: 0 auto;
            color: white;
            background: #1DA7DA;
            outline: none;
            border: none;
            cursor: pointer;
            // padding: 10px;
        }
    }
</style>
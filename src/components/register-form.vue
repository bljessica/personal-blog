<template>
    <div class="container" v-on:keyup.enter="submitForm('ruleForm')">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
            class="register=form">
            <el-form-item label="手机号" prop="phone">
                <el-input type="number" v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickname">
                <el-input type="text" v-model="ruleForm.nickname"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input type="password" v-model="ruleForm.confirmPassword" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { register } from '../api/user';

export default {
    data() {
        let verifyPhone = (rule, value, callback) => {
            if(!value) {
                return callback(new Error('手机号不能为空'));
            }
            if(!/^1[3|4|5|7|8][0-9]{9}$/.test(value)) {
                callback(new Error('手机号不合法'));
            }
            else {
                callback();
            }
        };
        let verifyNickname = (rule, value, callback) => {
            if(value.length == 0) {
                return callback(new Error('昵称不能为空'));
            }
            else {
                callback();
            }
        };
        let verifyPassword = (rule, value, callback) => {
            if(value.length == 0){
                callback(new Error('请输入密码'));
            }
            //密码强度
            let level = 0;
            if(/\d/.test(value)) {
                level++;
            }
            if(/[a-zA-Z]/.test(value)){
                level++;
            }
            if(/[^0-9a-zA-Z_]/.test(value)) {
                level++;
            }
            if(value.length < 8) {
                level = 0;
            }
            if(level < 2) {
                callback(new Error('密码强度较低，请重新设置'));
            }
            else {
                callback();
            }
        };
        let verifyConfirmPassword = (rule, value, callback) => {
            if (value.length == 0) {
                callback(new Error('请再次输入密码'));
            } 
            else if (value !== this.ruleForm.password) {
                callback(new Error('两次输入密码不一致'));
            } 
            else {
                callback();
            }
        }
        return {
            ruleForm: {
                phone: '',
                nickname: '',
                password: '',
                confirmPassword: ''
            },
            rules: {
                phone: [
                    {validator: verifyPhone, trigger: 'blur'}
                ],
                nickname: [
                    {validator: verifyNickname, trigger: 'blur'}
                ],
                password: [
                    {validator: verifyPassword, trigger: 'blur'}
                ],
                confirmPassword: [
                    {validator: verifyConfirmPassword, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        submitForm(formName) {
            let that = this;
            this.$refs[formName].validate((valid) => {
                if(valid) {
                    console.log('成功');
                    //发起请求
                    register({
                        phone: that.ruleForm.phone,
                        nickname: that.ruleForm.nickname,
                        password: that.ruleForm.password
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
                else {
                    that.$message({
                        message: '注册失败',
                        type: 'error'
                    })
                }
            })
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        
    }
}
</script>

<style lang="scss" scoped>
    .el-form {
        width: 340px;
        margin: 0 auto;
        padding: 30px 30px 20px 0;
        background: white;
        position: relative;
        top: -30px;
        box-shadow: 0 3px 20px gainsboro;
    }
</style>
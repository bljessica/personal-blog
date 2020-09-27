<template>
    <div class="container" v-on:keyup.enter="submitForm('ruleForm')">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
            class="register=form">
            <el-form-item label="手机号" prop="phone">
                <el-input type="number" v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleForm.password" autocomplete="off"
                     ></el-input>
            </el-form-item>
            <el-form-item class="btns">
                <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { login } from '../api/user';

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
        let verifyPassword = (rule, value, callback) => {
            if(value.length == 0){
                callback(new Error('请输入密码'));
            }
            else {
                callback();
            }
        };
        return {
            ruleForm: {
                phone: '',
                password: '',
            },
            rules: {
                phone: [
                    {validator: verifyPhone, trigger: 'blur'}
                ],
                password: [
                    {validator: verifyPassword, trigger: 'blur'}
                ],
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
                    login({
                        phone: that.ruleForm.phone,
                        password: that.ruleForm.password
                    }).then(res => {
                        if(res.code == 0) {
                            that.$message({
                                message: '登录成功, 1秒后将跳转到首页',
                                type: 'success',
                                duration: 1000
                            });
                            setTimeout(() => {
                                that.$store.commit('signIn', {
                                    phone: that.ruleForm.phone
                                });
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
                else {
                    that.$message({
                        message: '登录失败',
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
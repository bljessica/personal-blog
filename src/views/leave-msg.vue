<template>
    <div class="container">
        <nav-header :slogan="'Guest Book'"></nav-header>
        <main class="main">
            <el-form label-width="100px">
                <el-form-item label="昵称">
                    <el-input v-model="nickname" type="text"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="email" type="email"></el-input>
                </el-form-item>
                <el-form-item label="内容">
                    <el-input v-model="content" type="textarea"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">发表</el-button>
                    <el-button @click="resetForm">重置</el-button>
                </el-form-item>
            </el-form>
        </main>
        <my-footer></my-footer>
    </div>
</template>

<script>
import navHeader from '../components/nav-header';
import myFooter from '../components/my-footer';
import { saveComment } from '../api/comment';

export default {
    data() {
        return {
            nickname: '',
            email: '',
            content: ''
        }
    },
    components: {
        navHeader,
        myFooter
    },
    methods: {
        submitForm() {
            console.log(1111)
            let that = this;
            saveComment({

            })
            
        },
        resetForm() {
            this.nickname = '';
            this.email = '';
            this.content = '';
        }
    }
}
</script>

<style>
    .main {
        width: 900px;
        height: 260px;
        padding: 20px 50px;
        position: relative;
        top: -30px;
        margin: 0 auto;
        background: white;
        box-shadow: 0 5px 10px gainsboro;

    }
</style>
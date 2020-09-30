<template>
    <div class="container">
        <!-- 类型 -->
        <el-select class="kind li" v-model="kind" placeholder="请选择博客类型">
            <el-option v-for="(item, index) in allKinds" :key="index" :value="item">
            </el-option>
        </el-select>
        <!-- 标题 -->
        <div class="title li">
            <el-input type="textarea" autosize placeholder="请输入博客标题"
                v-model="title">
            </el-input>
        </div>
        <!-- 内容 -->
        <div class="content li">
            <!-- <el-input type="textarea" autosize placeholder="请输入博客内容"
                v-model="content">
            </el-input> -->
            <mavon-editor style="height: 500px"  :defaultOpen="'edit'" v-model="content" ref="md" @change="mdChange"></mavon-editor>
        </div>
        <!-- 标签 -->
        <el-select v-model="addedLabel" placeholder="请选择标签类型" @change="addLabel" class="li">
            <el-option v-for="(item, index) in allLabels" :key="index" :value="item.name">
            </el-option>
        </el-select>
        <div class="labels-box li">
            <el-tag v-if="labels.length == 0" :disable-transitions="false">
                暂无标签
            </el-tag>
            <el-tag v-for="(item, index) in labels" :key="index"
                closable :disable-transitions="false" @close="handleClose(item)">
                {{ item }}
            </el-tag>
        </div>
        <!-- 发表笔记按钮 -->
        <el-button class="li" @click="requestAddBlog">发表博客</el-button>
    </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css'
import { CLASSIFY_ITEMS, LABELS } from '../consts/const';
import { addBlog } from '../api/blog';

export default {
    data() {
        return {
            title: '',
            content: '',
            kind: '',
            labels: [],
            allKinds: CLASSIFY_ITEMS,
            allLabels: LABELS,
            addedLabel: '',
            html: ''//markdown转的html
        }
    },
    components: {
        mavonEditor
    },
    methods: {
        mdChange(value, render) {
            this.html = render
        },
        handleClose(name) {
            this.labels.splice(this.labels.indexOf(name), 1);
        },
        addLabel() {
            this.labels.push(this.addedLabel);
        },
        verifyBeforeAddBlog() {
            if(this.title.length == 0 || this.content.length == 0 || this.kind.length == 0 || this.labels.length == 0) {
                this.$message({
                    message: '博客的标题、内容、类型、标签不可为空',
                    type: 'error',
                    duration: 1000
                });
                return false;
            }
            return true;
        },
        requestAddBlog() {
            if(!this.verifyBeforeAddBlog()) {
                return;
            }
            let that = this;
            // console.log(this.content)
            // console.log(this.html)
            addBlog({
                userID: that.$store.getters.currentUser.userID,
                title: that.title,
                content: that.html,
                kind: that.kind,
                labels: that.labels
            }).then(res => {
                if(res.code == 0) {
                    that.$message({
                        message: res.msg,
                        type: 'success',
                        duration: 500
                    });
                    //清空
                    that.title = '';
                    that.content = '';
                    that.kind = '';
                    that.addedLabel = '';
                    that.labels = [];
                }
                else {
                    that.$message({
                        message: res.msg,
                        type: 'error',
                        duration: 500
                    });
                }
            }).catch(err => that.$message({
                message: err,
                type: 'error',
                duration: 500
            }));
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        .li {
            width: 100%;
            margin-bottom: 20px;
            // &.content.md {
            //     height: 1000px;
            // }
        }
        .labels-box .el-tag {
            margin-right: 20px;
            margin-bottom: 20px;
        }
    }
</style>
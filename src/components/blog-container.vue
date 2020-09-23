<template>
    <div class="container">
        <ul class="blog-container">
            <li v-for="(item, index) in blogs" :key="index" class="blog">
                <div class="title" :style="{backgroundImage: 'url(' + require('../assets/css3.jpg') + ')'}">
                    <h3>{{ item.title }}</h3>
                </div>
                <div class="content">
                    <p style="-webkit-box-orient: vertical;">{{ item.content }}</p>
                    <div class="time">
                        <i class="iconfont icon-59"></i>
                        <span>{{ item.time }}</span>
                    </div>
                    <div class="label">
                        <i class="iconfont icon-shuqian"></i>
                        <a href=""><span>{{ item.label }}</span></a>
                    </div>
                </div>
                <ul class="kinds">
                    <li v-for="(kind, index) in item.kinds" :key="index" class="kind">
                        <a href=""><span>{{ kind }}</span></a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        blogs: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
    .blog-container {
        width: 1000px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        a {
            text-decoration: none;
            color: rgba(0, 0, 0, 0.8);
        }
        .blog {
            list-style-type: none;
            background: white;
            width: 300px;
            height: 350px;
            border-radius: 10px;
            cursor: pointer;
            margin-bottom: 30px;            
            .title {
                width: 100%;
                height: 200px;
                background-size: 100% 100%;
                position: relative;
                h3 {
                    width: 100%;
                    font-weight: normal;
                    text-align: center;
                    position: absolute;
                    bottom: 10px;
                    left: 0;
                    color: white;
                    font-size: 24px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .content {
                padding: 15px 20px;
                height: 70px;
                border-bottom: 1px solid gainsboro;
                position: relative;
                font-size: 14px;
                color: rgba(0, 0, 0, 0.87);
                p {
                    //-webkit-box-orient: vertical;一定要写在内联样式中，否则vue项目打包后webpack会忽略这一行
                    height: 48px;
                    line-height: 24px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                }
                i {
                    position: relative;
                    top: 1px;
                }
                .time {
                    display: inline-block;
                    position: absolute;
                    left: 20px;
                    bottom: 10px;
                }
                .label {
                    display: inline-block;
                    position: absolute;
                    right: 20px;
                    bottom: 10px;
                    a:hover {
                        color: #42B983;
                        font-weight: bold;
                        text-decoration: underline;
                    }
                }
            }
            .kinds {
                list-style-type: none;
                padding: 10px 20px;
                display: flex;
                .kind {
                    width: 60px;
                    height: 24px;
                    margin-top: 3px;
                    background: #1DA7DA;
                    border-radius: 10px;
                    text-align: center;
                    color: white;
                    font-size: 12px;
                    line-height: 24px;
                    a {
                        color: white;
                        &:hover {
                            font-weight: bold;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
        .blog:hover {
            box-shadow: 0 5px 10px grey;
            transition: .5s;
        }
    }
    .blog-container::after { //解决space-between在一行个数只有两个时中间会空出来的问题
        content: '';
        width: 300px;
    }
</style>
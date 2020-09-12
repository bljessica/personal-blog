<template>
    <div class="container">
        <div class="header">
            <h1 class="title">{{ title }}</h1>
            <ul class="navs">
                <li v-for="(item, index) in navItems" :key="index">
                    <a href="">{{ item }}</a>
                </li>
            </ul>
        </div>
    </div>    
</template>

<script>
export default {
    props: {
        navItems: {
            type: Array, 
            default: () => []
        },
        title: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
    * {
        padding: 0;
        margin: 0;
    }
    body {
        min-width: 1000px;
    }
    .header {
        height: 80px;
        padding: 0 100px;
        position: relative;
        line-height: 80px;
        text-align: center;
        border-bottom: 2px solid #696060;
        display: flex;
        flex-direction: row;
        .title {
            height: 80px;
            display: block;
            flex: 1 1 200px;
        }
        .navs {
            list-style-type: none;
            height: 80px;
            flex: 1 1 600px;
            li {
                display: inline-block;
                padding: 0 30px;
                a {
                    text-decoration: none;
                    color: #696060;
                }
            }
        }
        
    }
</style>

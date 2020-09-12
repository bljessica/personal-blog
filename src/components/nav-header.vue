<template>
    <div class="container">
        <div class="header">
            <h1 class="title">{{ title }}</h1>
            <span v-for="(item, index) in items.reverse()" :key="index">{{ item }}</span>
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
    },
    data() {
        return {
            items: this.navItems
        }
    }
}
</script>

<style lang="scss">
    .header {
        height: 80px;
        padding: 0 15%;
        position: relative;
        line-height: 80px;
        text-align: center;
        border-bottom: 2px solid #696060;
        .title {
            height: 100px;
            width: 200px;
            display: block;
            float: left;
            margin: 0;
        }
        span {
            color: #696060;
            height: 100%;
            display: block;
            float: right;
            padding: 0 30px;
        }
    }
</style>

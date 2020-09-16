<template>
    <div class="entrance">
        <h2>&lt;/&gt;技术笔记入口</h2>
        <ul class="kinds">
            <li v-for="(item, index) in items" :key="index">
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
    .entrance {
        z-index: 1000;
        // width: 1000px;
        // height: 300px;
        width: 880px;
        height: 200px;
        padding: 30px 60px;
        background: white;
        position: relative;
        top: -30px;
        margin: 0 auto;
        box-shadow: 0 3px 20px gainsboro;
        h2 {
            width: 100%;
            text-align: center;
        }
        .kinds {
            list-style-type: none;
            width: 100%;
            height: 150px;
            position: relative;
            top: 30px;
            li {
                color: white;
                width: 120px;
                height: 50px;
                border-radius: 10px;
                background: linear-gradient(to right, #3db4df, #16a8dd);
                text-align: center;
                line-height: 50px;
                float: left;
                margin-left: 30px;
                margin-bottom: 20px;
            }
            li:nth-of-type(1), li:nth-of-type(7) {
                margin: 0;
            }
        }
    }
</style>
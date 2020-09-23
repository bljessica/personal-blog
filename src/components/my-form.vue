<template>
    <div class="form-container" :style="{height: items.length * 90 + 'px'}">
        <ul>
            <li v-for="(item, index) in items" :key="index">
                <span>{{ item.name }}</span>
                <input :type="item.type" :placeholder="item.placeholder" v-model="item.content">
            </li>
            <button class="login">{{ type }}</button>
        </ul>
    </div>
</template>

<script>

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
    }
}
</script>

<style lang="scss">
    .form-container {
        width: 340px;
        // height: 360px;
        margin: 0 auto;
        padding: 20px 30px;
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
        .login {
            // width: 200px;
            width: 100%;
            height: 40px;
            margin: 0 auto;
            color: white;
            background: #1DA7DA;
            outline: none;
            border: none;
            // padding: 10px;
        }
    }
</style>
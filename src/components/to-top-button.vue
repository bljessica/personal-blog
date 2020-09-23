<template>
    <div class="button">
        <i class="iconfont icon-shang"></i>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .button {
        width: 50px;
        height: 50px;
        background: #1DA7DA;
        border-radius: 50%;
        position: fixed;
        bottom: 30px;
        right: 30px;
        text-align: center;
        cursor: pointer;
        box-shadow: 0 5px 10px gainsboro;
        &:hover {
            box-shadow: 0 5px 10px grey;
            transition: .5s;
        }
        i {
            font-size: 20px;
            color: white;
            line-height: 50px;
        }
    }
</style>
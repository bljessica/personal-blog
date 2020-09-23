<template>
    <div class="button" @click="toTop" v-if="showToTop">
        <i class="iconfont icon-shang"></i>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showToTop: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.showBtn);
    },
    destroyed() {
        window.removeEventListener('scroll', this.showBtn);
    },
    methods: {
        showBtn() {
            let scrollY = document.documentElement.scrollTop || document.body.scrollTop || 0;
            if(scrollY > 0){
                this.showToTop = true;
            }
            else {
                this.showToTop = false;
            }
        },
        toTop() {
            let timer = setInterval(() => {
                let scrollY = document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollY <= 0){
                    clearInterval(timer);
                }
                document.documentElement.scrollTop = document.body.scrollTop = scrollY - 30;
            }, 10);
        }
    }
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
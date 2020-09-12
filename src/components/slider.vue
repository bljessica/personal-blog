<template>
    <div class="container">
        <ul class="slider">
            <li v-for="(img, index) in imgs" :key="index"></li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        imgs: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">

</style>
<template>
    <div class="label-picture">
        <ul class="labels">
            <li v-for="(item, index) in labels" :key="index" :style="{left: item.left, top: item.top, color: item.color, fontSize: item.fontSize}">{{ item.name }}</li>
        </ul>
    </div>
</template>

<script>
import { LABELS } from '../consts/const'

export default {
    data() {
        return {
            labels: LABELS
        }
    },
    // methods: {
    //     getStyle(index) {
    //         let style = {};
    //         style.top = 50 * (index % 7 + 1) + 'px';
    //         style.left =  70 * (index % 7 + 1) + 'px';
    //         style.color = 'blue';
    //         return style;
    //     }
    // }
}
</script>

<style lang="scss">
    .label-picture {
        width: 840px;
        height: 300px;
        padding: 30px 80px;
        background: white;
        position: relative;
        top: -15px;
        margin: 0 auto;
        box-shadow: 0 3px 20px gainsboro;
        ul {
            width: 100%;
            height: 100%;
            list-style-type: none;
            li {
                // float: left;
                display: inline-block;
                position: absolute;

                span {
                }
            }
        }
    }
</style>
<template>
    <div id="container">
        <van-nav-bar
                title="观看记录"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-cell-group>
            <van-cell center title="单元格" value="内容" is-link/>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "RecoardList",
        methods: {
            onClickLeft() {
                // 返回操作
            },
        },
    }
</script>

<style scoped>
    .van-cell-group{
        margin-top: .2rem;
    }
</style>
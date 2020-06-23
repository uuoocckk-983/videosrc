<template>
    <div id="container">
        <van-nav-bar
                title="观看记录"
                left-arrow
                @click-left="onClickLeft"
        />
        <van-cell-group>
            <van-cell title="看过的视频" is-link :to="{path:`/user/viewsrecoard/video?userid=${userid}`}"/>
            <van-cell title="看过的文章" is-link :to="{path:`/user/viewsrecoard/article?userid=${userid}`}"/>
        </van-cell-group>
    </div>
</template>

<script>
    export default {
        name: "ViewsRecoard",
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
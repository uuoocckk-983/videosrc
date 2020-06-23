<template>
    <div id="container">
        <!-- 用户信息 -->
        <div class="user_info">
            <div class="avatar_box">
                <a href="javascript:;">
                    <img :src="require('../../assets/imgs/avatar.png')" alt="" class="avatar_img">
                </a>
            </div>
            <p class="user_name">用户名</p>
            <p>
                <span>用户ID：</span>
                <span class="userID">123456</span>
            </p>
        </div>
        <!-- 属于用户的功能列表 -->
        <van-cell-group>
            <van-cell title="观看记录" is-link icon="browsing-history-o"/>
            <van-cell title="我的回帖" is-link icon="comment-o"/>
            <van-cell title="账号设置" is-link icon="setting-o"/>
        </van-cell-group>
        <!--<ul class="user_menu">
            <li>
                <a href="javascript:;" class="user_views">
                    观看记录
                </a>
            </li>
            <li>
                <a href="javascript:;" class="user_comment">
                    我的回帖
                </a>
            </li>
            <li>
                <a href="javascript:;" class="user_setting">
                    账号设置
                </a>
            </li>
        </ul>-->
    </div>
</template>

<script>

    export default {
        name: "User"
    }
</script>

<style scoped>
    .user_info{
        width: 100%;
        height: 4.96rem;
        background-color: #fff;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .avatar_box{
        width: 2.7rem;
        height: 2.7rem;
        border: solid .02rem #7dc623;
        border-radius: 50%;
        padding: .08rem;
        margin-top: .5rem;
    }
    .avatar_box .avatar_img{
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 50%;
    }
    .user_info p{
        width: 100%;
        line-height: .7rem;
        font-size: .4rem;
        text-align: center;
    }

    .van-cell-group{
        margin-top: .25rem;
        background-color: transparent;
    }
    .van-cell{
        margin-bottom: .14rem;
    }
    .user_menu a{
        display: inline-block;
        width: 100%;
        height: 1.4rem;
        line-height: 1.4rem;
        box-sizing: border-box;
        font-size: .5rem;
        background-color: #fff;
        padding-left: 1.5rem;
        margin-bottom: .14rem;
    }
    .user_views{
        background: url(../../assets/imgs/views.png) no-repeat .7rem center,url(../../assets/imgs/arrow_more.png) no-repeat 9.8rem center;
        background-size: .6rem .6rem;
    }
    .user_comment{
        background: url(../../assets/imgs/comment.png) no-repeat .65rem center,url(../../assets/imgs/arrow_more.png) no-repeat 9.8rem center;
        background-size: .6rem .6rem;
    }
    .user_setting{
        background: url(../../assets/imgs/setting.png) no-repeat .7rem center,url(../../assets/imgs/arrow_more.png) no-repeat 9.8rem center;
        background-size: .5rem .5rem;
    }
</style>
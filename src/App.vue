<template>
  <div id="app">
    <router-view></router-view>
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />-->
  </div>
</template>

<style>
  html{
    font-size: 9.25vw;
  }
  #app{
    overflow:auto;
  }
  /* 主体 */
  body{
    background-color: #efefef;
  }

  #container{
    padding: 1.55rem 0 1.63rem 0;
  }
  .wrap{
    width: 9.8rem;
    margin: 0 auto;
  }
  .sub_title{
    font-family: MicrosoftYaHei-Bold;
    font-size: .5rem;
    opacity: 0.86;
    line-height: 1.2rem;
    text-indent: .4rem;
  }
</style>
<script>
  import '@/assets/css/reset.css'
  export default {
    components:{

    }
  }
</script>

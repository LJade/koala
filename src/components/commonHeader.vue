<template>
  <div id="common-header">
    <div class="company">
      <div class="logo">
        <img src="/static/images/logo.png" alt="">
      </div>
      <div class="name">斑斓考拉库存管理系统</div>
    </div>

    <div class="user">
      <div class="avatar-wrapper">
        <img :src="user.avatar" alt="">
      </div>
      <div class="name">{{user.name}}</div>
      <div class="login-out">退出登录</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
     user:{
       name:'Lingyu ZHOU',
       avatar:'/static/images/avatar.jpg'
     }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../sass/base";
#common-header{
  width: 100%;
  min-width: 1200px;
  height: 60px;
  background: $theme-color;
  @include flex-aside;
  padding: 0 25px;
  color: $white-color;
  >div{
    @include flex;
  }

  .company{
    cursor: pointer;
    .logo{
      width: 60px;
      img{
        width: 100%;
      }
    }
    .name{
      font-weight: bold;
      font-size: 18px;
      margin-left: 20px;
    }
  }
  .user{
    .avatar-wrapper{
      @include avatar-circle(35px);
    }
    .name{
      margin: 0 10px;
      font-weight: 400;
    }
    .login-out{
      font-size: 12px;
      cursor: pointer;
      &:hover{
        text-decoration: underline;
      }
    }
  }
}
</style>

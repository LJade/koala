<template>
  <div class="login-wrapper">
    <div class="login-box">
      <h2 class="title">斑斓考拉后台管理系统</h2>
      <div class="form-wrapper">
        <div class="form-group"><label class="form-label" for="username">用户名:</label><input class="form-input" id="username" type="text" placeholder="请输入用户名">
        </div>
        <div class="form-group">
          <label for="pass" class="form-label">密码:</label><input id="pass" class="form-input" type="password" placeholder="请输入密码">
        </div>
        <div class="form-group"><input id="remember" type="checkbox"> <label class="rem-label" for="remember">记住密码</label></div>
       <div class="form-group"><button type="button">登录</button></div>
      </div>
    </div>
    <div class="login-mask"></div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        username:'',
        password:''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../../sass/base";
  .login-wrapper{
    width: 100vw;
    height: 100vh;
    background: url("/static/images/lg.jpg") no-repeat;
    background-size: cover;
    position: relative;
  }
  .login-mask{
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right:0;
    background: rgba(255,255,255,0.2);
  }
  .login-box{
    width: 390px;
    height: 310px;
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    background: rgba(255,255,255,0.8);
    left: 10%;
    top: 20%;
    padding: 0 15px;
  }
  .title{
    text-align: center;
    font-size: 18px;
    line-height: 2.5;
  }
  .form-group{
    display: flex;
    padding: 10px 15px;
    align-items: center;
    width: 100%;
    label.form-label{
      display: inline-block;
      width: 60px;
      text-align: justify;
      font-size: 14px;
    }
    input.form-input{
      flex: 1;
      box-sizing: border-box;
      height: 35px;
      border-radius: 2px;
      border: none;
      background: rgba(255,255,255,0.8);
      padding: 0 15px;
     &::-webkit-input-placeholder{
        font-size: 14px;
       color: $text-vice;
      }
    }
    input[type='checkbox']{
      width: 20px;
      height: 17px;
    }
    label.rem-label{
      font-size: 13px;
      color: $text-gray;
    }
    button{
      width: 100%;
      height: 40px;
      background: $theme-color;
      border: none;
      border-radius: 2px;
      color: $white-color;
      letter-spacing: 3px;
      margin-top: 10px;
    }
  }
</style>

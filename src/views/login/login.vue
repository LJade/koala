<template>
  <div class="login-wrapper">
    <div class="login-box">
      <div class="title">斑斓考拉后台管理系统</div>
      <div class="form-wrapper">
        <label>用户名:<input type="text" placeholder="请输入用户名"></label>
        <label>密码:<input type="password" placeholder="请输入密码"></label>
        <label><input type="checkbox">记住几码</label>
        <button type="button">登录</button>
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
  .login-wrapper{
    background: url("/static/images/lg.jpg") no-repeat;
    background-size: cover;
  }
</style>

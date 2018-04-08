<template>
<div class="wrapper">
  <common-header></common-header>
  <section class="container">
    <ul class="menu-wrapper">
      <li class="menu-item" @click="goMenu('create')">
        <div class="icon-wrapper">
          <i class="el-icon-plus"></i>
        </div>
        <h4>新增商品</h4>
      </li>
      <li class="menu-item" @click="goMenu('list')">
        <div class="icon-wrapper">
          <i class="el-icon-menu"></i>
        </div>
        <h4>全部商品</h4>
      </li>
      <li class="menu-item">
        <div class="icon-wrapper">
          <i class="el-icon-setting"></i>
        </div>
        <h4>权限设置</h4>
      </li>
      <li class="menu-item">
        <div class="icon-wrapper">
          <i class="el-icon-goods"></i>
        </div>
        <h4>其他入口</h4>
      </li>
    </ul>

  </section>
</div>
</template>

<script>
  import CommonHeader from '../../components/commonHeader.vue'
  export default {
    name: 'home',
    components:{
      CommonHeader
    },
    data () {
      return {
      }
    },
    methods:{
      goMenu(path){
          this.$router.push(path)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../sass/base";
.menu-wrapper{
  width: 800px;
  @include flex;
  flex-wrap: wrap;
  padding: 50px 0;
  margin: 0 auto;
  li{
    box-sizing: border-box;
    width: 280px;
    height: 200px;
    padding-top: 60px;
    border-radius: 3px;
    color: $white-color;
    text-align: center;
    margin-bottom: 35px;
    cursor: pointer;
    &:nth-child(1),&:nth-child(3){
      margin-right: 50px;
    }
    &:nth-child(1){
      background: #FF9966;
    }
    &:nth-child(2){
      background: #66CCCC;
    }
    &:nth-child(3){
      background: #99CCFF;
    }
    &:nth-child(4){
      background: #FF9999;
    }

    .icon-wrapper{
      i{
        font-size: 36px;
      }
    }
    h4{
        margin-top: 10px;
    }
  }
}
</style>

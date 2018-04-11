<template>
  <div class="wrapper">
    <common-header></common-header>
    <el-form ref="form" :model="form" label-width="80px" class="form">
      <el-form-item label="货号:">
        <el-input  style="width: 350px" v-model="form.code"></el-input>
      </el-form-item>
      <el-form-item label="名称:">
        <el-input style="width: 350px" v-model="form.name"></el-input>
      </el-form-item>
      <!--<el-form-item label="活动区域:">-->
        <!--<el-select v-model="form.region" placeholder="请选择活动区域">-->
          <!--<el-option label="区域一" value="shanghai"></el-option>-->
          <!--<el-option label="区域二" value="beijing"></el-option>-->
        <!--</el-select>-->
      <!--</el-form-item>-->
      <el-form-item label="入库时间:">
        <el-col :span="12">
          <el-date-picker type="date" placeholder="选择日期" v-model="form.createTime" style="width: 350px"></el-date-picker>
        </el-col>
      </el-form-item>
      <!--<el-form-item label="即时配送:">-->
        <!--<el-switch v-model="form.delivery"></el-switch>-->
      <!--</el-form-item>-->
      <el-form-item label="信息登记:">
        <el-table :data="form.info" style="width: 100%;" border size="mini">
          <el-table-column label="序号" width="80" type="index"></el-table-column>
          <el-table-column label="颜色" width="100">
            <template slot-scope="scope">
              <el-input size="mini" label-width="80px" v-model="scope.row.color"></el-input>
            </template>
          </el-table-column>
          <el-table-column label="尺码" >
            <template slot-scope="scope">
              <div class="size-wrapper">
                <el-form-item v-for="(item,index) in size" :key="index">
                  <el-checkbox :label="item" style="width: 60px" v-model="scope.row['select'+item]"></el-checkbox>
                  <el-input-number  size="mini" controls-position="right" :disabled="!scope.row['select'+item]" :min="0" :max="10000" v-model="scope.row['count'+item]"></el-input-number>
                </el-form-item>
              </div>
            </template>
          </el-table-column>

          <el-table-column label="删除" width="60">
            <template slot-scope="scope">
              <el-button type="danger" icon="el-icon-delete" circle></el-button>
            </template>
          </el-table-column>

        </el-table>
        <el-button style="margin-top: 20px;" size="mini" type="success">新增颜色</el-button>
        <!--<el-checkbox-group v-model="form.type">-->
          <!--<el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>-->
          <!--<el-checkbox label="地推活动" name="type"></el-checkbox>-->
          <!--<el-checkbox label="线下主题活动" name="type"></el-checkbox>-->
          <!--<el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>-->
        <!--</el-checkbox-group>-->
      </el-form-item>
      <!--<el-form-item label="特殊资源:">-->
        <!--<el-radio-group v-model="form.resource">-->
          <!--<el-radio label="线上品牌商赞助"></el-radio>-->
          <!--<el-radio label="线下场地免费"></el-radio>-->
        <!--</el-radio-group>-->
      <!--</el-form-item>-->
      <el-form-item label="备注:">
        <el-input type="textarea" :rows="5" :resize="'none'" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button type="info">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import CommonHeader from '../../components/commonHeader.vue'
  export default {
    name: 'create',
    components:{
      CommonHeader
    },
    data () {
      return {
        size:['S','M','L','XL','2XL','3XL','4XL'],
        form: {
          code:'',
          name: '',
          region: '',
          createTime: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          info: [{
            color: '',
            selectS:false,
            countS:0,
            selectM:false,
            countM:0,
            selectL:false,
            countL:0,
            selectXL:false,
            countXL:0,
            select2XL:false,
            count2XL:0,
            select3XL:false,
            count3XL:0,
            select4XL:false,
            count4XL:0
          }]
        }
      }
    },
    methods:{
      onSubmit(){}
    }
  }
</script>

<style scoped lang="scss">
  @import "../../sass/base";
  .form{
    width: 800px;
    padding: 40px 50px;
  }

  .size-wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
</style>

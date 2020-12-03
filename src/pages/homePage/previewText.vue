<!--
  文件用途: 预览文本
  作者: 王昌浩
  联系方式： chwang9@iflytek.com
-->
<template>
  <el-dialog
    :title="title"
    width="30%"
    @close="dialogClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    :visible.sync="showPreviewText">
    <!-- 内容区域 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="elformContainer">
      <el-form-item label="活动名称：" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入" ></el-input>
      </el-form-item>
      <el-form-item label="活动区域：" prop="region">
        <el-select v-model="ruleForm.region" placeholder="请选择活动区域" clearable>
          <!-- <el-option value='' label="全部">全部</el-option> -->
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动形式：" prop="desc">
        <el-input v-model="ruleForm.desc" placeholder="请输入" ></el-input>
      </el-form-item>
    </el-form>
    <!-- 底部区域 -->
    <div slot="footer" class="footer">
      <div>{{title}} {{father}}</div>
      <el-button @click="childClick">关闭</el-button>
      <el-button @click="closeForm('ruleForm')">关闭</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">确 定</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  // props: ['isShow','title'],
  props: {
    'isShow': Boolean,
    'title': String
  },
  data () {
    return {
      father: '',
      childValue: '子组件数据',
      showPreviewText: this.isShow, // 弹出框显示与隐藏功能
      // 规则
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      },
      // 下拉弹出框
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      // 提交条件
      ruleForm: {
        name: '',
        region: '',
        desc: ''
      },
    }
  },
  mounted() {
    this.$listeners.change() // 子组件调用父组件方法
    this.father = this.$attrs.height // 如果父传子有很多值，attrs获取父传子为在props中定义的值
  },
  methods: {
    childClick() {
      this.$emit('childByValue', this.childValue)
    },
    // 对话框底部确认按钮
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('submit!!');
          this.showPreviewText = false
          this.$refs[formName].resetFields();
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 对话框底部关闭按钮
    closeForm (formName) {
      this.showPreviewText = false
      this.$refs[formName].resetFields();
    },
    // 对话框右上角关闭按钮
    dialogClose(){
      this.$refs["ruleForm"].resetFields(); // 重置字段
    }
  },
  watch: {
    isShow (val) {  // 父组件传入值
      this.showPreviewText = val
    },
    showPreviewText (val) {  // 当前组件show值传入父组件
      this.$emit('on-show-change', val)
    }
  }
}
</script>
<style scoped lang='scss'>
.footer{
  text-align: center;
}
.elformContainer{
  .el-input{
    width: 280px;
  }
  .el-select{
    width: 280px;
  }
}
</style>

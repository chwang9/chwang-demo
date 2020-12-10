<template>
  <div class="left-nav">
    <el-menu default-active="2" 
             class="el-menu-vertical-demo" 
             @open="handleOpen" 
             @close="handleClose"
             :collapse="isCollapse">
    <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
    </el-menu-item>
    <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
    </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'leftNav',
  data () {
    return {
        // isCollapse: true
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style>
    .left-nav{
       color:#fff;
       font-size:10px;
       height:100%;
       /* background-color: #1D8ce0; */
       float:left;
    }
      .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
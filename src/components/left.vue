<template>
  <div class="left-nav">
    <el-menu :default-active="indexPath"
             router
             class="el-menu-vertical-demo" 
             @open="handleOpen" 
             @close="handleClose">
    <el-menu-item index="/homePage">
        <i class="el-icon-menu"></i>
        <span slot="title">导航一</span>
    </el-menu-item>
    <el-menu-item index="/test">
        <i class="el-icon-upload"></i>
        <span slot="title">导航二</span>
    </el-menu-item>
        <el-menu-item index="/vuex">
        <i class="el-icon-upload"></i>
        <span slot="title">vuex</span>
    </el-menu-item>
        <el-menu-item index="/vuex1">
        <i class="el-icon-upload"></i>
        <span slot="title">vuex1</span>
    </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex"
export default {
  name: 'leftNav',
  data () {
    return {
    }
  },
  computed: {
    indexPath(){
      if(this.$route.path == '/homePage') {
        return '/homePage'
      } else if (this.$route.path == '/vuex') {
        return '/vuex'
      } else if (this.$route.path == '/vuex1') {
        return '/vuex1'
      } else {
        return '/test'
      }
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
       float:left;
    }
    .el-menu-vertical-demo{
      height: 100%;
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
      width: 180px;
  }
</style>
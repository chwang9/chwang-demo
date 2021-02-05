<template>
  <div id="app">
    <!-- <el-header>
      <Header/>
    </el-header>
    <el-main>
      <router-view />
    </el-main> -->
    <el-container>
      <el-header><Header/></el-header>
      <el-container>
        <el-aside width="200px"><leftNav/></el-aside>
        <el-main :style="defaultHeight"><router-view /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header";
import leftNav from '@/components/left'
export default {
  name: "App",
  components: { Header,leftNav },
  //注意：这里的defaultHeight必须是对象，不懂的可以去官网看下api
  data() {
      return {
          defaultHeight: {
              height: ""
          }
      };
  },
  methods: {
    //定义方法，获取高度减去头尾
    getHeight() {
        this.defaultHeight.height = window.innerHeight - 90 + "px";
    }
  },
  created() {
      //页面创建时执行一次getHeight进行赋值，顺道绑定resize事件
      window.addEventListener("resize", this.getHeight);
      this.getHeight();
  }
};
</script>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  ::v-deep .el-header {
    height: 54px !important;
    background-color: #367AE0;
  }
  ::v-deep .el-main {
    padding-top: 0;
    flex-grow: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>

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
        <el-main><router-view /></el-main>
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

<template>
  <div id="app">
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: { Header },
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

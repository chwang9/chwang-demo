<template>
  <div class="header">
    <div class="logo">智能语义云平台分系统</div>
    <div class="nav-menu">
      <ul class="nav">
        <router-link tag="li" to="/homePage">首页</router-link>
        <router-link tag="li" to="/taskManagement">任务管理</router-link>
        <router-link tag="li" to="/CSS">任务管理1</router-link>
        <router-link tag="li" to="/CSS1">任务管理2</router-link>
        <router-link tag="li" to="/vuex">任务管理3</router-link>
        <router-link tag="li" to="/vuex1">任务管理4</router-link>
      </ul>
    </div>
    <div class="user">
        <el-dropdown trigger="click" @command="onCommand" >
          <div>
            <span style="color:#f0f0f0;">{{userName}}</span>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </div>
  </div>  
</template>

<script>

export default {
  name: 'Sidebar',
  components: {},
  props: {},
  data() {
    return {
      userName: "sadmin",
    }
  },
  methods: {
    // 退出
    onCommand(command) {
      if (command === "changePwd") {
        // this.dialogFormVisible = true;
      } else {
        window.location.href = '/dataArchiving/logout'
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "HYRunYuan-75W";
  src: url("../assets/fonts/方正正大黑简体.TTF");
}
.header {
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #367AE0;
  .logo {
    font-family: "HYRunYuan-75W";
    color: #fff;
    font-size: 20px;
    padding: 0 20px;
  }
  .nav-menu {
    display: flex;
    .nav {
      display: flex;
      margin: 0;
      padding: 0;
      li {
        width: 150px;
        cursor: pointer;
        text-align: center;
        font-size: 16px;
        color: #cedff7;
      }
      .router-link-active {
        background: #367AE0;
        font-weight: bold;
        color: #ffffff;
      }
    }
  }
  .user {
    width: 80px;
    padding: 0 12px;
    cursor: pointer;
  }
}
</style>

<template>
  <div class="header">
    <div class="logo">{{title}}</div>
    <!-- <el-switch
        v-model="switchValue"
        @change="isVoiceMethods">    
    </el-switch> -->
    <!-- <el-button :class="switchValue?'el-icon-s-fold':'el-icon-s-unfold'" @click="isVoiceMethods(true)" v-model="switchValue"></el-button> -->
    <div class="nav-menu">
      <ul class="nav">
        <!-- <router-link tag="li" to="/homePage">首页</router-link> -->
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
import {mapState, mapMutations, mapActions} from "vuex"
export default {
  name: 'Sidebar',
  components: {},
  props: {},
  data() {
    return {
      title: window.config.systemName,
      userName: "sadmin",
      switchValue: false
    }
  },
  computed: {
    ...mapState("home", {
        isVoice: state => state.isVoice
    })
  },
  watch:{
    isVoice () {
        this.switchValue = this.isVoice
    }
  },
  created(){
    this.switchValue = this.isVoice
  },
  methods: {
        ...mapActions("home", [
       "isVoiceSet"
    ]),
    isVoiceMethods(val) {
      this.isVoiceSet(val)
      // this.switchValue = !this.switchValue
    },
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

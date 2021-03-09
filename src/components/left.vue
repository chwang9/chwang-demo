<template>
  <div class="left-nav">
    <el-menu router :default-active="this.$route.path" class="el-menu-vertical-demo">
      <sideBar :list="sideBarData"></sideBar>
    </el-menu>
  </div>
</template>

<script>
import sideBar from '@/components/sideBar'
export default {
  name: 'leftNav',
  data () {
    return {
      sideBarData:    [
          {
            "icon": 'el-icon-star-off',
            "path": "/homePage",     //菜单项所对应的路由路径
            "name": "首页",     //菜单项名称
            "children":[]        //是否有子菜单，若没有，则为[]
          },
          {
             "icon": 'el-icon-video-play',
            "path": "/zujian",
            "name": "组件",
            "children": [
              {
                "path": "/test",
                "name": "Echarts",
                "children":[],
                "icon": 'el-icon-view',
              },
              {
                "path": "/CSS-flex",
                "name": "表格导入",
                "children":[],
                "icon": 'el-icon-folder',
              },
              {
                "path": "/layout",
                "name": "布局",
                "children":[],
                "icon": 'el-icon-folder',
              }
            ]
          }
       ]
    }
  },
  components: {
    sideBar
  },
  watch: {
      // 监听浏览器直接输入路由，将此路由添加到tabnavBox
      '$route.path': function (val) {
        console.log(val)
        // this.selectmenu(val)
      }
    },
  // computed: {
  //   indexPath(){
  //     if(this.$route.path == '/homePage') {
  //       return '/homePage'
  //     } else if (this.$route.path == '/vuex') {
  //       return '/vuex'
  //     } else if (this.$route.path == '/vuex1') {
  //       return '/vuex1'
  //     } else if (this.$route.path == '/CSS-flex') {
  //       return '/CSS-flex'
  //     }else {
  //       return '/test'
  //     }
  //   }
  // },
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
<template>
  <div>
    <el-button @click="say()">数组</el-button>
    <el-button @click="say1()">正则</el-button>
    <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane
        :key="item.name"
        v-for="(item, index) in editableTabs"
        :label="item.title"
        :name="item.name">
          <div>
            <span>{{item.title}}</span>=
            <el-input-number v-model.number="item.num1" style="width:200px" :step="0.1" :max="1" @change="xiaoyan(item)" :min="0"></el-input-number>
            +<el-input-number v-model.number="item.num2" style="width:200px" :step="0.1" :max="1" @change="xiaoyan(item)" :min="0"></el-input-number>
            +<el-input-number v-model.number="item.num3" style="width:200px" :step="0.1" :max="1" @change="xiaoyan(item)" :min="0"></el-input-number>
            +<el-input-number v-model.number="item.num4" style="width:200px" :step="0.1" :max="1" @change="xiaoyan(item)" :min="0"></el-input-number>
            +<el-input-number v-model.number="item.num5" style="width:200px" :step="0.1" :max="1" @change="xiaoyan(item)" :min="0"></el-input-number>
          </div>
      </el-tab-pane>
    </el-tabs>
    <!-- <mavon-editor v-model="value" :toolbars="toolbars"></mavon-editor> -->
    <codemirror
      style="width:400px;"
      ref="mycode"
      :value="curCode"
      :options="cmOptions"
      class="code"
    ></codemirror>
  </div>
</template>

<script>
const homePage = require("@/services/homePage");
import {codemirror} from 'vue-codemirror'
import "codemirror/theme/ambiance.css"
require("codemirror/mode/javascript/javascript")
export default {
  components: {
    codemirror
  },
  data() {
    return {
      curCode: '',
      cmOptions: {
        value: '',
        mode: "text/javascript",
        lineNumbers: true,
        lineWrapping: true
      },
      toolbars: {
        bold:true
      },
      value: '11',
      editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content',
          num1: 0.2,
          num2: 0.2,
          num3: 0.2,
          num4: 0.2,
          num5: 0.2,
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content',
          num1: 0.1,
          num2: 0.3,
          num3: 0.2,
          num4: 0.2,
          num5: 0.2,
        }],
        tabIndex: 2,
      value: false,
      arr: [3,9,4,3,6,0,9],
      obj: [{id: 1,name: '2222'},{id: 2,name: '2222'},{id: 3,name: '2222'}],
      obj1: {'1':[{id: 1,name: '2222'},{id: 11,name: '2222'}],'2':[{id: 1,name: '2222'}],'3':[{id: 1,name: '2222'}]}
    };
  },
  methods: {
     handleTabsEdit(targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content',
            num1: 0.1,
            num2: 0.3,
            num3: 0.2,
            num4: 0.2,
            num5: 0.2,
          });
          this.editableTabsValue = newTabName;
        }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      },
    xiaoyan(item) {
      let num = item.num1 + item.num2 + item.num3 + item.num4 + item.num5
      console.log(num)
      if (num !== 1) {
        this.$message.closeAll()
        this.$message.error('系数参数')
      } else {
        
      }
    },
    // 数组
    say() {
       // arr原数组 prev上一次调用回调式的返回值，或者初始值init cur当前正在处理的数组元素 index当前正在处理数组元素的索引
       //  求和
       var sum = this.arr.reduce(function (prev,cur,index,arr) {
         return prev + cur
       },0)
      console.log(sum, '求和')

      //  最大值
      var max = this.arr.reduce(function (prev,cur,index,arr) {
         return Math.max(prev,cur)
       },0)
      console.log(max, '最大值')
      console.log(Math.max(...this.arr), '最大值')
      console.log(Math.max.apply(this,this.arr), '最大值')

      // 数组去重
      var newArr = this.arr.reduce(function (prev,cur,index,arr) {
        prev.indexOf(cur) === -1 && prev.push(cur)
        return prev
      }, [])
      console.log(newArr, '数组去重')
      console.log([...new Set([1,1,2,3,4,5])], '数组去重')
      console.log(Array.from(new Set([1,1,2,3,4,5])), '数组去重')

      // map
      var objArr = this.obj.map((item) =>{
        return item.id
      })
      console.log(objArr, 'map')

      // Object.values 返回对象中各个键值对值Object.keys 返回对象中各个键值对键
      var objArr1 = Object.values(this.obj1)
      console.log(objArr1, 'Object.values')
      var objArrIndex = Object.keys(this.obj1)
      console.log(objArrIndex, 'Object.keys')
      console.log(Object.entries({name: '张三',age: 14}),'Object.entries')

      // reduce累积 concat合并数组
      var arr1 =Object.values(this.obj1).reduce((prev,cur,index,arr) =>prev.concat(cur),[])
      console.log(arr1 ,'reduce累积 concat合并数组')

      // 扁平化n维数组
      console.log([1,[2,3]].flat(Infinity),'[1,[2,3]]扁平化n维数组')
      var arr45 = [[1,2,3],[3,4,5],[6,7,8,9,[12,11]]]
      console.log([...new Set(arr45.flat(Infinity))].sort((a,b)=>a-b),'[[1,2,3],[3,4,5],[6,7,8,9,[12,11]]]扁平化n维数组排序')

      // 排序 
      console.log([1,2,4,3].sort((a,b)=>a-b), '升序')
      console.log([1,2,4,3].sort((a,b)=>b-a), '降序')

      // 判断是否包含值
      console.log([1,2,4,3].includes(4), '[1,2,4,3]includes(4)')
      console.log([1,2,4,3].indexOf(4), '[1,2,4,3]indexOf(4)')
      console.log([1,2,4,3].find(item => item===3), '[1,2,4,3]find(3)')
      console.log([1,2,4,3].findIndex(item => item===3), '[1,2,4,3]findIndex(3)')
      
    },
    say1(){
      // 横向模糊匹配 {m,n} 表示连续最少出现m次最多出现n次
      var regex = /ab{2,5}c/g
      var string = "abc abbc abbbc abbbbc abbbbbc abbbbbbbc"
      console.log(string.match(regex),'横向模糊匹配')
      // 纵向模糊匹配 [abc] 表示该字符是可以字符abc中任何一个
      var regex1 = /a[123]b/g
      var string = "a0b a1b a2b a3b"
      console.log(string.match(regex1),'纵向模糊匹配')
      this.foo()
    },
    foo() {
      a = 2
      var a
      console.log(a) 

      console.log(b)
      var b = 3
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

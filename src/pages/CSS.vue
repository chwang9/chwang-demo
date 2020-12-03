<template>
  <div class="main">
      <!-- 水平局中 -->
      <div class="father">
        <div class="content">内敛元素居中</div>
      </div>
       <div class="father1">
        <p class="content1">块级元素水平局中</p>
      </div>
      <div class="father2">
        <div class="content2">块级元素水平局中</div>
        <div class="content2">块级元素水平局中</div>
        <div class="content2">块级元素水平局中</div>
      </div>
      <div class="father3">
        <div class="content3">多块级元素水平居中-弹性布局</div>
        <div class="content3">多块级元素水平居中-弹性布局</div>
        <div class="content3">多块级元素水平居中-弹性布局</div>
      </div>
      <!-- 垂直局中 -->
      <div class="box">单行内元素垂直局中</div>
      <div class="box1">
        <p class="contentBox1">多块多行内联元素垂直局中-table</p>
      </div>
      <div class="box2">
        <p>多块多行内联元素垂直局中-flex</p>
      </div>
      <div class="box3">
        <div class="contentBox3">固定高度的块元素垂直居中</div>
      </div>
      <div class="box4">
        <div class="contentBox4">未知高度的块元素垂直居中</div>
      </div>
      <!-- 水平垂直局中 -->
      <div class="parent">
          <div class="child">固定宽高元素水平垂直居中</div>
      </div>
      <div class="parent1">
          <div class="child1">未知宽高元素水平垂直居中</div>
      </div>
       <div class="parent2">
          <div class="child2">利用flex布局实现元素水平垂直居中</div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.main{
   padding: 100px;
   // 水平局中
   // 内敛元素居中
   .father{
       height: 60px;
       border: 1px solid #f40;
       margin-bottom: 10px;
        .content{
            text-align: center;
        }
   }
   // 块级元素水平局中
   .father1{
       height: 60px;
       border: 1px solid #f40;
       margin-bottom: 10px;
        .content1{
            margin: 0 auto;
            width: 120px;
        }
   }
   // 多块级元素水平居中
   .father2{
       height: 60px;
       border: 1px solid #f40;
       text-align: center;
       margin-bottom: 10px;
        .content2{
            display: inline-block;
            margin: 0 8px;
            width: 120px;
        }
   }
    // 多块级元素水平居中-弹性布局
   .father3{
       border: 1px solid #f40;
       display: flex;
       justify-content: center;
       margin-bottom: 10px;
       .content3 {
         margin: 0 8px;
         padding: 8px;
         background: #F40;       
        }
   }
   // 垂直局中
   // 单行内元素垂直局中
   .box {
       height: 60px;
       line-height: 60px;
       border: 1px solid #F40;
       margin-bottom: 10px;
   }
   // 多块多行内联元素垂直局中-table
   .box1 {
       height: 60px;
       display: table;
       border: 1px solid #F40;
       margin-bottom: 10px;
       .contentBox1{
           display: table-cell;
           vertical-align: middle;
       }
   }
      // 多块多行内联元素垂直局中-table
   .box2 {
       height: 60px;
       display: flex;
       flex-direction: column;
       justify-content: center;
       border: 1px solid #F40;
       margin-bottom: 10px;
   }
   //  固定高度的块元素垂直居中
     .box3 {
       height: 140px;
       position: relative;
       border: 1px solid #F40;
       margin-bottom: 10px;
       .contentBox3 {
           position: absolute;
           top: 50%;
           height: 100px;
           margin-top: -50px;
           color: #fff;
           background: #000000;
       }
   }
      //  固定高度的块元素垂直居中
     .box4 {
       height: 140px;
       position: relative;
       border: 1px solid #F40;
       margin-bottom: 10px;
       .contentBox4 {
           position: absolute;
           top: 50%;
           transform: translateY(-50%);
           background: black;
           color: #fff;
           padding: 1rem;
           width: 12rem;
       }
   }
   // <!-- 水平垂直局中 -->
   // 固定宽高元素水平垂直居中
   .parent {
       height: 140px;
       position: relative;
       border: 1px solid #f40;
       margin-bottom: 10px;
       .child {
           width: 200px;
           height: 80px;
           padding: 10px;
           position: absolute;
           top: 50%;
           left: 50%;
           margin: -50px 0 0 -110px;
           background: black;
           color: #fff;
       }
   }
   // 未知宽高元素水平垂直居中
      .parent1 {
       height: 140px;
       position: relative;
       border: 1px solid #f40;
       margin-bottom: 10px;
       .child1 {
           padding: 10px;
           position: absolute;
           top: 50%;
           left: 50%;
           transform: translate(-50%,-50%);
           color: #fff;
           background: black;
       }
   }
      // 利用flex布局实现元素水平垂直居中
      .parent2 {
       height: 140px;
       display: flex;
       justify-content: center;
       align-items: center;
       border: 1px solid #f40;
       margin-bottom: 10px;
       .child2 {
           padding: 10px;
           color: #fff;
           background: black;
       }
   }
}

</style>

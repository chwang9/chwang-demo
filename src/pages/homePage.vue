<template>
  <div class="pretreatment container-card">
    <div class="pretreatment__search">
      <el-form ref="searchForm" :model="form" label-width="100px" size="small" :inline="true">
        <el-form-item label="任务类型：" prop="taskType">
          <el-select v-model="form.taskType" clearable>
            <el-option
              v-for="item in RWLX"
              :key="item.value"
              :label="item.text"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务状态：" prop="taskStatus">
          <el-select v-model="form.taskStatus" clearable>
            <el-option
              v-for="item in RWZT"
              :key="item.value"
              :label="item.text"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="创建时间：" prop="createTime">
          <el-date-picker
            v-model="form.createTime"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            @change="clearRadioTime"
          ></el-date-picker>
        </el-form-item>
        <el-form-item>
          <div class="search-button">
            <el-button type="primary" @click="onSubmit">查询</el-button>
            <el-button @click="resetForm">清除</el-button>
            <el-button @click="previewText()">新增</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <div class="pretreatment__table">
      <el-table :data="tableData" tooltip-effect="dark" max-height="618">
        <el-table-column show-overflow-tooltip align="center" label="创建时间" prop="createTime"></el-table-column>
        <el-table-column show-overflow-tooltip align="center" label="任务数量" prop="fileCount"></el-table-column>
        <el-table-column show-overflow-tooltip align="center" label="任务批次" prop="bacthName"></el-table-column>
        <el-table-column show-overflow-tooltip align="center" label="任务进度" prop="taskRate"></el-table-column>
        <el-table-column show-overflow-tooltip align="center" label="输出结果" prop="exportFile"></el-table-column>
      </el-table>
      <div class="table-control">
        <div></div>
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pagination.currentPageNo"
          :page-size="pagination.pageSize"
          layout="total,sizes,prev,pager,next,jumper"
          :total="pagination.total"
        ></el-pagination>
      </div>
    </div>
    <previewText
       @change="change"
       height="1111"
       @childByValue="childByValue"
       :title="title"
       :is-show="previewTextShow"
       @on-show-change="onPreviewTextChange"/>
  </div>
</template>

<script>
const previewText = resolve => require(['./homePage/previewText.vue'],resolve)
import moment from 'moment'
export default {
  components: {
    previewText
  },
  data() {
    return {
      title: '子窗口标题', //父组件向子组件传值
      previewTextShow:false,
      // 实用例子
      // 查询条件
      form: {
        taskType: "",
        taskStatus: "",
        createTime: ""
      },
      // 页数信息
      pagination: {
        currentPageNo: 1,
        pageSize: 10,
        total: 0
      },
      tableData: [], // 表格信息
      RWLX: [],
      RWZT: [],
      radioTime: ""
    };
  },
  methods: {
    change() {
     console.log(111111111111111)
    },
    childByValue (val) {
      console.log(val, '子组件数据')
    },
    // 实用例子
    previewText (val) {
      this.previewTextShow = true
    },
    onPreviewTextChange (val) {
      this.previewTextShow = val
    },
    query() {
      let params = { ...this.form, ...this.pagination };
      console.log(params)
      if (params.createTime && params.createTime.length > 1) {
        params.startTime = moment(params.createTime[0]).format(
          "YYYY-MM-DD HH:mm:ss"
        );
        params.endTime = moment(params.createTime[1]).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      }
      let form = new FormData();
      for (let item in params) {
        form.append(item, params[item]);
      }
      // pretreatment.query(form).then(res => {
      //   let data = res.data;
      //   this.tableData = data.rows;
      //   this.pagination.total = parseFloat(data.totals);
      // });
    },
    onSubmit() {
      this.pagination.currentPageNo = 1;
      this.query();
    },
    resetForm() {
      this.$refs["searchForm"].resetFields();
      this.radioTime = "";
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.query();
    },
    handleCurrentChange(val) {
      this.pagination.currentPageNo = val;
      this.query();
    },
    clearRadioTime() {
      this.radioTime = "";
    }
  },
  mounted() {
    console.log(this.$children, '一级组件属性方法')
    this.query();
  }
};
</script>


<style lang="scss" scoped>
.pretreatment {
  display: flex;
  flex-direction: column;
  &__search {
    padding: 18px 8px 0;
    background: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search-button {
      display: inline-block;
      margin-left: 24px;
    }
    .add-button {
      margin-top: -18px;
    }
  }
  &__table {
    padding: 16px;
    .table-control {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 16px 0;
    }
  }
  .dialog-footer {
    display: flex;
    justify-content: center;
  }
}
</style>
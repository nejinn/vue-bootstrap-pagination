<template>
  <div>
    <form
      class="form-inline justify-content-center"
      style="
    margin-bottom: 20px;
    margin-top: 20px;"
    >
      <label for="total">total总条数</label>
      <input type="number" class="form-control" id="total" v-model="total" />
      <label for="size">size每页数量:</label>
      <select class="form-control" id="size" v-model="size">
        <option>5</option>
        <option>10</option>
        <option>15</option>
        <option>20</option>
        <option>25</option>
        <option>30</option>
        <option>35</option>
        <option>40</option>
      </select>
    </form>
    <NLY-pagination
      ref="pagination"
      :total="total"
      :size="size"
      :limit="limit"
      align="center"
      :currentPage="currentPage"
      :firstFunction="firstFunction"
      :prevFunction="prevFunction"
      :currentFunction="currentFunction"
      :nextFunction="nextFunction"
      :lastFunction="lastFunction"
      :sizeFunction="sizeFunction"
      @getCurrentPage="getCurrentPage"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      currentPage: 1,
      total: 100,
      size: 10,
      limit: 5
    };
  },
  methods: {
    firstFunction() {
      console.log(
        `跳到第一页: 从第 ${this.currentPage} 页跳转到 ${this.$refs["pagination"].tempalteCurrentPage} 页`
      );
    },
    prevFunction() {
      console.log(
        `跳到上一页: 从第 ${this.currentPage} 页跳转到 ${this.$refs["pagination"].tempalteCurrentPage} 页`
      );
    },
    currentFunction() {
      console.log(
        `点击跳转到当前点击页码页面: 从第 ${this.currentPage} 页跳转到 ${this.$refs["pagination"].tempalteCurrentPage} 页`
      );
    },
    nextFunction() {
      console.log(
        `跳到下一页: 从第 ${this.currentPage} 页跳转到 ${this.$refs["pagination"].tempalteCurrentPage} 页`
      );
    },
    lastFunction() {
      console.log(
        `跳到最后一页: 从第 ${this.currentPage} 页跳转到 ${this.$refs["pagination"].tempalteCurrentPage} 页`
      );
    },
    sizeFunction() {
      console.log("修改每页数量");
    },
    getCurrentPage(data) {
      this.currentPage = data;
    },
    getPages(val) {
      console.log(val);
    }
  }
};
</script>
<!--
total: 总数
size： 每页数量，默认10
currentPage: 初始页码
limit: 显示页码个数
align：分页位置,left左边，center中间，right右边，默认左边
firstFunction: 第一页按钮函数
prevFunction: 上一页按钮函数
currentFunction: 点击页码函数
nextFunction: 下一页页码函数
lastFunction: 最后一页页码函数
sizeFunction: 修改每页数量自动执行函数
 -->

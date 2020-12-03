<template>
  <div class="not-found">
    <img class="not-found__img" :src="notFoundImg" />
    <div class="not-found__title">页面可能已被删除或您没有查看该内容的权限</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notFoundImg: require("@/assets/images/404.png")
    };
  }
};
</script>

<style lang="scss" scoped>
.not-found {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &__img {
    width: 400px;
    margin-right: 24px;
  }
  &__title {
    font-weight: bold;
    font-size: 16px;
  }
}
</style>

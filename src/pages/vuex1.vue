<template>
  <div class="not-found">
    <!-- {{isVoice}} -->
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex"
export default {
  data() {
    return {
    };
  },
  created(){
    console.log(this.isVoice)
  },
  computed: {
    ...mapState("home", {
        isVoice: state => state.isVoice
    })
  }
};
</script>

<style lang="scss" scoped>
</style>
<template>
  <div class="not-found">
      <el-switch
        v-model="switchValue"
        active-color= '#f40'
        inactive-text="语音播报"
        @change="isVoiceMethods">    
      </el-switch>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions} from "vuex"
export default {
  data() {
    return {
      switchValue: false
    };
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
    isVoiceMethods (val) {
        // this.$store.dispatch('isVoiceSet', val)
      this.isVoiceSet(val)
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

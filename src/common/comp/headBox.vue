<template>
    <div class="navHeader" :style="{width:autoWidth}">
      <!-- :style="{width:autoWidth}" -->
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'headBox',
  data(){
    return{
      autoWidth:'calc(100% - 214px)'
    }
  },
  watch:{
    '$parent.$parent.$parent.$parent.$parent.isCollapsed'(){
      let _isColl = this.$parent.$parent.$parent.$parent.$parent.isCollapsed
      if (_isColl) {
        this.autoWidth = 'calc(100% - 64px)'
      }else{
        this.autoWidth = 'calc(100% - 214px)'
      }
    }
  },

  methods: {
    backFn () {
      this.$emit('action')
    },

  }
}
</script>

<style lang="less" scoped>
  .navHeader{
    display: flex;
    // width: calc(100% - 214px);
    width: 100%;
    height: 32px;
    padding: 16px;
    background: #FFFFFF;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 32px;
    // left:214px;
    .left{
      display: flex;
      justify-content: flex-start;
      span{
        display: inline-block;
        width: 24px;
        height: 48px;
        margin-right: 8px;
        line-height: 48px;
        font-weight: 800;
        font-size: 14px;
        cursor: pointer;
        text-align: center;
      }
      p{
        display: inline-block;
        width: 200px;
        height: 48px;
        font-weight: 600;
        font-size: 14px;
        line-height: 48px;
        color: rgba(0,0,0,0.85);;
      }
    }
    .right{
      display: flex;
      align-items: center;
      div{
        display: flex;
      }
    }
  }
  .flight{
    position: fixed;
    top: 64px;
    /*right: 0;*/
    z-index: 9;
  }

</style>

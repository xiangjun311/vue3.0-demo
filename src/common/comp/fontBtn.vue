<template>
  <div @click="actionFn" class="font-btn">
    <i :class="fontClass"></i>
    <span>{{fontText}}</span>
  </div>
</template>

<script>
export default {
  name: 'fontBtn',
  data () {
    return {
      fontName: ''
    }
  },
  props: {
    fontClass: {
      type: String,
      default: 'add'
    },
    fontText: {
      type: String,
      default: '点击'
    }
  },
  methods: {
    actionFn () {
      this.$emit('action')
    }
  }
}
</script>

<style lang="less" scoped>
.font-btn{
  display: flex;
  min-width: 44px;
  height: 16px;
  font-size: 12px;
  color: #262626;
  justify-content: space-between;
  align-items: center;
  margin-left: 16px;
  cursor: pointer;
  &:hover{
    color: #f08519;
  }
  i{
    font-size: 16px;
  }
  span{
    margin-left: 4px;
  }
}
</style>


exports.install = function (Vue) {
  Vue.prototype.resCode = {
    successCode: '0',
    errorCode: '1500',
    successAuthCode: '0'
  }

  // 冒泡消息
  Vue.prototype.$msgBox = function (type, msg) {
    this.$Message[type]({
      content: msg,
      duration:3,
      closable: true
    })
  }

}

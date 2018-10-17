export default {
  name: 'cus',
  inserted (el, value, vnode) {
    if (el.parentNode == null) { // 如果没有父元素，代表没有权限，这个元素已经被权限限制了，被移除了，就不需要添加到弹窗中了
      console.log('没有权限')
    } else {
      let type = value.arg
      let items = value.modifiers
      let obj = {
        type: '',
        children: []
      }
      let cusData = vnode.context.CUS_DATA
      if (value.value.data) { // 先判断有没有传data，如果有，代表是表格，没有就是搜索或者功能按钮
        let tableName = ''
        let data = []
        for (let key in items) {
          tableName = key
        }
        value.value.data.forEach(item => {
          if ('prop' in item) {
            item.checked = true
            data.push(item)
          } else {
            data.push(item)
          }
        })
        let flag = false // 每次判断是否改表格添加进去没有，如果添加了，就覆盖原有的，没有，就添加进区
        cusData.forEach(item => {
          if (item.type === type) {
            flag = true
          }
        })
        if (flag) {
          // item.name = tableName
          // item.children = data || []
        } else {
          cusData.push({
            type: type,
            name: tableName,
            children: data || []
          })
        }
      } else {
        if (sessionStorage.getItem('userInfo')) { // 默认隐藏这些搜索条件，当个性化设置的请求返回的之后在根据结果判断是否显示，但是未登录的时候不能隐藏
          el.style.display = 'none'
        }
        for (let key in items) {
          obj.type = type
          if (value.value.model) {
            obj.children.push({
              label: key,
              checked: true,
              model: value.value.model || []
            })
          } else {
            obj.children.push({
              label: key,
              checked: true
            })
          }
        }
        if (cusData.length) {
          let flag = true
          cusData.forEach(item => {
            if (item.type === obj.type) {
              flag = false
              item.children = item.children.concat(obj.children)
            }
          })
          if (flag) {
            cusData.push(obj)
          }
        } else {
          cusData.push(obj)
        }
      }
      value.value.set(cusData)
    }
  },
  update (el, value, vnode) {
    let type = value.arg
    let items = value.modifiers
    let key = ''
    for (let i in items) {
      key = i
    }
    if (!vnode.context.SHOW_CUS && 'condList' in vnode.context.CUS_DATA_SERVICE) {
      vnode.context.CUS_DATA.forEach(item => {
        if (item.type === type) {
          item.children.forEach(child => {
            if (child.label === key && !child.checked) {
              el.style.display = 'none'
            } else if (child.label === key && child.checked) {
              el.style.display = ''
            }
          })
        }
      })
      if (vnode.context.CUS_DATA_SERVICE.condList.length === 0 && type === 'search') {
        el.style.display = ''
      } else if (vnode.context.CUS_DATA_SERVICE.meauList.length === 0 && type === 'btn') {
        el.style.display = ''
      }
    }
  }
}
// 使用时，v-cus:类型.字段=“{set:CUS_SET,data:tHeader(表格才有)}”
/*
  1.类型先有三种（search：搜索条件，btn：功能按钮）
  2.第三种表格的不用传，但是必须在data中定义tHeader，我是从指令中直接拿的data中的数据，将数据处理之后，通过set方法，赋值给CUS_DATA
  3.CUS_SET，是全局混入的一个方法，在main.js中可以看到，由于自定义指令中不能直接修改data中的数据，只能传入一个方法，通过这个方法来修改
  4.使用的时候注意符号，第一个是 ： 第二个是 .
  5.由于表格的表格是在另一个组件中
  6.如果是表格需要第一个参数为表头，第二个为表格名字并且需要对传给指令的对象中添加data：tHEADER

 */

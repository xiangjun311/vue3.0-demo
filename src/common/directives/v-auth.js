export default {
  name: 'auth',
  inserted (el, value, vnode) {
    let type = ''
    let hasCode = false
    const menuArr = JSON.parse(sessionStorage.getItem('menuAuth'))
    Object.keys(value.modifiers).forEach(item => {
      type = item
    })
    if (!type || !value.value.code) {
      el.parentNode.removeChild(el)
    } else {
      menuArr.forEach(item => {
        item.childrens.forEach(child => {
          if (child.menuPath === type) {
            child.authPermission.forEach(data => {
              if (data.menuName === value.value.code) {
                hasCode = true
              }
            })
          }
        })
      })
      if (!hasCode) {
        el.parentNode.removeChild(el)
      }
    }
  }
}

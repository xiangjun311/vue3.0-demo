export default {
  name: 'first',
  // inserted:function (el) {
  //   moveFn(el,'inserted');
  // },
  componentUpdated: function (el) {
    moveFn(el)
  },
  bind: function (el) {
    moveFn(el)
  }
}

function moveFn (el) {
  let timeId = setTimeout(() => {
    const preEl = preElFn(el)
    if (preEl == null) return false
    // console.log(preEl,preEl.offsetTop,el.offsetTop);
    if (preEl.offsetTop !== el.offsetTop) {
      el.style.float = 'right'
      el.style.display = 'flex'
      el.style.justifyContent = 'flex-end'
    } else {
      el.style.float = 'left'
      el.style.justifyContent = 'flex-start'
    }
    clearTimeout(timeId)
  }, 100)
}

function preElFn (el) {
  let elObj = el.previousElementSibling
  if (elObj !== null && elObj.style.getPropertyValue('display') === 'none') {
    return preElFn(elObj)
  } 
    return elObj
  
}

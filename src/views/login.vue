<template>
    <div>
      <Button @click="login">登录</Button>
    </div>
</template>

<script>
	import Axios from "axios"
export default {
  name: 'login',
  data () {
    return {
      msg: ""
    }
  },
  methods: {
    login () {
      console.log(this)
    	Axios.post("test02/login",{name:"xj"}).then(res=>{
        console.log(res)
        if(res.data.code===0){
          console.log(this.$msgBox,this.resCode)
          this.$msgBox('success',res.data.msg)
          this.$router.push({ path: '/home' })
        }else{
          console.log(res.data.msg)
          this.$msgBox('error',res.data.msg)
        }
      }).catch(error => {
          console.log(error)

        this.$msgBox('error',error+'接口错误')
      })

    },

  }
}
</script>

<style>

</style>

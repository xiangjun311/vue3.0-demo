<template>
  <div class="layout">
    <Layout >
      <Sider :width="214" collapsible :collapsed-width="64" v-model="isCollapsed">
        <Menu width="auto" :class="menuitemClasses" accordion>
          <Submenu name="1">
            <template slot="title">
              <Icon type="ios-paper"/>
              <span>内容管理</span>
            </template>
            <MenuItem name="1-1" :to="{name:'about'}"><span>文章管理</span></MenuItem>
            <MenuItem name="1-2" :to="{name:'testpage01'}">评论管理</MenuItem>
            <MenuItem name="1-3">举报管理</MenuItem>
          </Submenu>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-people" />
              <span>用户管理</span>
            </template>
            <MenuItem name="2-1">新增用户</MenuItem>
            <MenuItem name="2-2">活跃用户</MenuItem>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-stats" />
              <span>统计分析</span>
            </template>
            <!-- <MenuGroup title="使用"> -->
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
            <!-- </MenuGroup> -->
            <!-- <MenuGroup title="留存"> -->
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
            <!-- </MenuGroup> -->
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{height: '100%'}">
        <Header></Header>
        <Content>
          <router-view />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  name:"Home",
  data () {
    return {
      isCollapsed: false,
      mode: 'vertical'
    }
  },

  created(){
    console.log(process.env)
    // console.log("home")

  },
  computed: {
    menuitemClasses: function () {
      return [
        'menu-item',
        this.isCollapsed ? 'collapsed-menu' : ''
      ]
    }
  }
}
</script>
<style scoped lang="less">
.layout-con {
  height: 100%;
  width: 100%;
}

.menu-item span {
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width .2s ease .2s;
}

.menu-item i {
  transform: translateX(0px);
  transition: font-size .2s ease, transform .2s ease;
  vertical-align: middle;
  font-size: 24px;
}

.collapsed-menu span {
  transition: width .2s ease;
}

.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size .2s ease .2s, transform .2s ease .2s;
  vertical-align: middle;
  font-size: 24px;
}

.ivu-layout-header {
  height: 32px;
}

.ivu-layout-content {
  background: #f5f5f5;
  /*border: 1px solid red;*/
  overflow: auto;
  height: 100vh;
  position: relative;
  margin-top: 32px;
}

.ivu-layout-sider {
  background: url(../assets/img/SiderBox_bg@2X.png) no-repeat;
  background-size: 100% 100%;
  padding-top: 148px;
}

.ivu-menu-item,.ivu-menu {
  font-size: 12px;
  color: #fff;
}

/deep/.ivu-menu-dark,
/deep/.ivu-layout-sider-trigger {
  background: transparent;
}

/deep/.ivu-layout-sider-trigger {
  top: 108px;
  height: 40px;
  line-height: 40px;
}

/*头部背景*/
.ivu-layout-header {
  background: url(../assets/img/headerBox_bg@2x.png) no-repeat;
  background-size: 100% 100%;
}

/*主页头部*/
.ivu-breadcrumb {
  background: #fff;
  height: 32px;
  line-height: 32px;
}
</style>

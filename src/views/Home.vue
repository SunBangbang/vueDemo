<template>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-row>
          <el-col :span="4">
            <!-- <img src="@./assets/logo.png" alt=""> -->
          </el-col>
          <el-col class="middle" :span="19">
            <span>电商后台管理系统</span>
          </el-col>
          <el-col :span="1">
            <a class="logout" href="#" @click.prevent="handleLogout">退出</a>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            style="height:100%"
            :unique-opened="true"
            :router="true"
            default-active="0"
            >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="/users">
                <i class="el-icon-view"></i>
                用户列表
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>权限管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>商品管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>订单管理</span>
              </template>
            </el-menu-item>
            <el-menu-item index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>数据统计</span>
              </template>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
   // 判断是否登录
  beforeCreate() {
    // const token = sessionStorage.getItem('token');
    // 判断是否获取到token
    // if (!token) {
    //   // 如果token不存在，认为没有登录
    //   this.$message.warning('请先登录');
    //   this.$router.push('/login');
    // }
  },
  methods:{
    handleLogout(){
      // 清除sessionStorage中的token
      sessionStorage.clear();
      this.$message.success('退出成功');
      this.$router.push('/login');
    },
    // 打开导航栏的事件
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // 关闭导航栏的事件
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // }
  }
}
</script>

<style scoped>
.logout {
  color: orange;
}

.middle {
  text-align: center;
  line-height: 60px;
  font-size: 24px;
  color: #fff;
}

.el-container {
  height: 100%;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  /* text-align: center; */
  line-height: 60px;
  padding: 0;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  /* text-align: center; */
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  /* text-align: center; */
}
</style>

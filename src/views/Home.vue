<template>
    <el-container>
      <!-- 头部 -->
      <el-header>
        <el-row>
          <el-col :span="4">
            <img src="@/assets/logo.png" alt="">
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
        <el-aside width="200px"></el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
</template>

<script>
export default {
  data () {
    return {
     
    }
  },
  methods:{
    handleLogout(){

    }
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

<template>
   <div class="login-wrap">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .login-wrap {
  background-color: #324152;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: 500px;
  padding: 30px;
  border-radius: 5px;
  background-color: #fff;
}

.login-btn {
  width: 100%;
}
</style>

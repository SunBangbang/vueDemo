<template>
   <div class="login-wrap">
    <el-form
      class="login-form"
      label-position="top"
      label-width="80px"
      :model="formData">
      <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model='formData.username'></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model='formData.password' @keyup.enter.native='handleLogin'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click='handleLogin' class="login-btn" type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data(){
    return {
      formData:{
        username:'',
        password:''
      }
    }
  },
  methods:{
    handleLogin(){
      let This = this;
      console.log(this)
      this.$http.post('login',this.formData).then(function(res){
        const {meta: { msg, status } } = res.data;
        if(status == 200){
          This.$message.success(msg);
          sessionStorage.setItem('token',res.data.data.token);
          This.$router.push('/')
        }else{
          This.$message.error(msg)
        }
      }).catch(err => console.log(err));
    }
  }
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

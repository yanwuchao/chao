<template>
  <div class="login_container">
    <div class="login_box">
      <!-- 头像 -->
      <div class="avtor">
        <img src="../../assets/avtor.jpg" />
      </div>
      <!-- 表单 -->
      <el-form
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input v-model="loginForm.username" prefix-icon="iconfont icon-denglu"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" type="password" prefix-icon="iconfont icon-mima"></el-input>
        </el-form-item>
        <el-form-item class="btns">
          <el-button type="primary" class="btns" @click="login">登录</el-button>
          <el-button type="info" class="btns" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "123456"
      },
      /* 验证表单对象 */
      loginFormRules: {
        /* 用户名验证 */
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        /* 密码 */
        password: [
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //   点击重置登录表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },
    login() {
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        const { data: res } = await this.$http.post("login", this.loginForm);
        console.log(res);
        if (res.meta.status !== 200) {
          return this.$message.error("登录失败，请重试")
        } else {
          this.$message.success("登陆成功")
          window.sessionStorage.setItem("token",res.data.token)//存token
          this.$router.push("/home")
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
.login_container {
  background-color: #304156;
  height: 100%;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #cecece;
  border-radius: 10px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avtor {
    height: 130px;
    width: 130px;
    border: 1px solid #cecece;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
  }
  .btns {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
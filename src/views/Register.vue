<template>
  <div class="register">
    <img src="../assets/bg.png" alt="" class="wave">
    <div class="container">
      <div class="img">
        <img src="../assets/doctor.svg" alt="">
      </div>
      <div class="register-box">
        <form action="">
          <img src="../assets/avatar.svg" alt="" class="avatar">
          <h2>Register</h2>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="username">
              <el-input type="username" v-model="ruleForm.username" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm.pass" maxlength="16" autocomplete="off" show-password></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm.checkPass" maxlength="16" autocomplete="off" show-password></el-input>
            </el-form-item>
            <el-form-item label="身份证号" prop="identity">
              <el-input v-model.number="ruleForm.age" v-model="ruleForm.identity" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkID = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入身份证号'))
      } else if (value.length !== 18) {
        callback(new Error('18位身份证号！'))
      } else {
        callback()
      }
    }
    var checkName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('用户名不能为空'))
      } else if (value.length > 10 || value.length < 6) {
        callback(new Error('用户名长度在6-10个字符之间'))
      } else {
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else if (value.length < 6) {
        callback(new Error('密码应在6-16位字符之间'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        identity: '',
        username: '',
        sex: '',
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        identity: [{ validator: checkID, trigger: 'blur' }],
        username: [{ validator: checkName, trigger: 'blur' }],
      },
    }
  },
  name: 'register',
  components: {},
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$alert('注册成功！', {
            confirmButtonText: '确定',
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
      console.log(this.ruleForm)
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>
<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}

.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 18rem;
  padding: 0 2rem;
}

.img {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.img img {
  width: 500px;
}

.register-box {
  display: flex;
  align-items: center;
  text-align: center;
}

form {
  width: 360px;
}

.avatar {
  width: 100px;
  margin-left: 80px;
}

form h2 {
  font-size: 2.2rem;
  margin: 15px 0;
  margin-left: 80px;
  color: #ffbf00;
}

.input-group {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.input-group:nth-child(1) {
  margin-bottom: 4px;
}

.input-group:before,
.input-group:after {
  content: '';
  position: absolute;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: #38d39f;
  transition: 0.5s;
}

.input-group:after {
  right: 50%;
}

.input-group:before {
  left: 50%;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon i {
  color: #d9d9d9;
  transition: 0.5s;
}

.input-group > div {
  position: relative;
  height: 45px;
}

.input-group > div > h5 {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #d9d9d9;
  font-size: 18px;
  transition: 0.3s;
}

.input-group.focus .icon i {
  color: #38d39f;
}

.input-group.focus div h5 {
  top: -5px;
  font-size: 15px;
}

.input-group.focus:after,
.input-group.focus:before {
  width: 50%;
}

.input {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #555;
  font-family: 'Roboto', sans-serif;
}

a {
  display: block;
  text-align: right;
  text-decoration: none;
  color: rgb(153, 153, 153);
  font-size: 0.9rem;
  transition: 0.3s;
}

a:hover {
  color: #38d39f;
}

.btn {
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin: 1rem 0;
  font-size: 1.2rem;
  outline: none;
  border: none;
  background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  background-size: 200%;
  transition: 0.5s;
}

.btn:hover {
  background-position: right;
}

#visitor {
  background-image: linear-gradient(to right, #facc2e, #ffbf00, #ffbf00);
}

/*媒体查询*/

@media screen and (max-width: 1080px) {
  .container {
    grid-gap: 9rem;
  }
}

@media screen and (max-width: 1024px) {
  form {
    width: 290px;
  }
  form h2 {
    font-size: 2.4rem;
    margin: 8px 0;
  }
  .img img {
    width: 360px;
  }
}

@media screen and (max-width: 768px) {
  .wave {
    display: none;
  }
  .img {
    display: none;
  }
  .container {
    grid-template-columns: 1fr;
  }
  .register-box {
    justify-content: center;
  }
}
</style>
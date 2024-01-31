<template>
  <div class="login-wrap">
    <div class="left_side">
      <div class="welcome-text">欢迎 猪猪 👋</div>
      <div class="description-text">
        这是一个帮助您提高成绩的多功能app
        <br>整理错题 删除做题痕迹 发布题目
      </div>
      <div class="login-text">用户登录</div>
      <div class="box">
        <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="login-form">
          <el-form-item prop="username">
            <div class="input-group">
              <div class="label">邮箱/手机号</div>
              <el-input v-model="param.username" placeholder="Example@email.com" class="input">
                <template #prepend>
                  <el-button :icon="User"></el-button>
                </template>
              </el-input>
            </div>
          </el-form-item>

          <el-form-item prop="password">
            <div class="input-group">
              <div class="label">密码</div>
              <el-input type="password" v-model="param.password" @keyup.enter="submitForm(login)"
                        placeholder="At least 8 characters" class="input">
                <template #prepend>
                  <el-button :icon="Lock"></el-button>
                </template>
              </el-input>
            </div>
          </el-form-item>
          <div class="forgot-password">忘记 密码？</div>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm(login)" class="login-button">登录</el-button>
          </div>

          <el-checkbox class="login-tips" v-model="checked" label="记住密码" size="large"/>
          <p class="login-tips">Tips : 未注册用户请先注册。</p>
        </el-form>

      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useTagsStore } from '../store/tags';
import { usePermissStore } from '../store/permiss';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import { Lock, User } from '@element-plus/icons-vue';


interface LoginInfo {
  username: string;
  password: string;
}

const lgStr = localStorage.getItem('login-param');
const defParam = lgStr ? JSON.parse(lgStr) : null;
const checked = ref(!!lgStr); // ref(lgStr ? true : false);

const router = useRouter();
const param = reactive<LoginInfo>({
  username: defParam ? defParam.username : '',
  password: defParam ? defParam.password : '',
});

const rules: FormRules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur',
    },
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};
const permiss = usePermissStore();
const login = ref<FormInstance>();
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid: boolean) => {
    if (valid) {
      ElMessage.success('登录成功');
      localStorage.setItem('ms_username', param.username);
      const keys = permiss.defaultList[param.username == 'admin' ? 'admin' : 'user'];
      permiss.handleSet(keys);
      localStorage.setItem('ms_keys', JSON.stringify(keys));
      router.push('/');
      if (checked.value) {
        localStorage.setItem('login-param', JSON.stringify(param));
      } else {
        localStorage.removeItem('login-param');
      }
    } else {
      ElMessage.error('登录失败');
      return false;
    }
  });
};

const tags = useTagsStore();
tags.clearTags();

</script>



<style scoped>



.login-wrap {  /*登录框的背景*/
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-image: url(../assets/img/background.jpg);
  background-size: cover;
}

.left_side{
  background:rgba(255, 255, 255, 0.7);  /*背景颜色*/
  border-radius: 30px;   /*圆角*/
  height: 880px;  /*高度*/
  width:  1010px;   /*宽度*/
  position: absolute;  /*定位*/
  left: 769px;;  /*距离左边的距离*/
  top: 35px;  /*距离上边的距离*/
}

.welcome-text{
  position: absolute;
  left: 35px;
  top: 45px;
  font-weight:700;
  font-size: 50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: rgba(49, 57, 87, 1);
}

.description-text{
  color: rgb(64, 28, 210);
  font-size: 25px;
  font-weight:600;
  position: absolute ;
  left: 550px;
  top: 90px;
  font-family: 'JetBrains Mono', sans-serif;
}

.login-text {  /*用户注册*/
  font-size: 50px;
  text-align: center;
  line-height: 450px;
  letter-spacing: 2px;
  font-family: '华文琥珀', 'Arial Narrow', Arial, sans-serif;
}


:deep(login-form){  /*表单的样式*/
  width: 240px;
  height: 220px;
}
:deep(login-form) input{  /*输入框的样式*/
  border-color: rgb(204, 201, 201);
  border-radius: 12px;
  margin: 16px 0;
  width:  800px;
  height:  40px;
}

:deep(.login-button) {  /*按钮的样式*/
  width: 300%;  /*宽度*/
  padding: 16px 0;  /*内边距*/
  background-color: rgb(22, 45, 58);
  color: white;
  border-radius: 12px;
  text-align: center;  /*文字居中*/
  font-size: 20px;
  line-height: 20px;
  letter-spacing: 1px;  /*字间距*/
  margin-top: 64px;
  cursor: pointer;
}

.box{
  position: absolute;
  top: 300px;
  left: 35px;

}

:deep(.input-group) {   /*输入框的样式*/
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.label {  /*标签字体的样式*/
  font-size: 18px;
  line-height: 18px;
  letter-spacing: 1px;
  font-family: 'Roboto', 'Arial Narrow', Arial, sans-serif;

}

:deep(.input) {  /*输入框的样式*/
  width: 300%;
  padding: 16px 30px;
  background-color: #f7f8ff;
  border-radius: 12px;
  border: 1px solid #d3d4dc;
  margin-top: 8px;
}

.forgot-password {
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 1px;
  color:blue;
  cursor: pointer;  /*鼠标移动到上面会变成手*/

}

</style>




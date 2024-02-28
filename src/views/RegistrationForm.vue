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
            <el-button type="primary" @click="handleLogin" class="login-button">登录</el-button>
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

// 登录处理函数
// 登录处理函数
// 登录处理函数
const handleLogin = async () => {
  try {
    // 发起登录请求到后端服务器
    const response = await fetch('http://127.0.0.1:8089/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: param.username, password: param.password }),
    });

    // 检查响应状态
    if (!response.ok) {
      // 登录失败，抛出错误
      throw new Error('登录失败');
    }

    // 登录成功，处理响应数据
    const data = await response.json();
    // 假设后端返回的数据中有 token 和其他登录信息
    localStorage.setItem('is_login', 'true');
    localStorage.setItem('token', data.token); // 保存认证令牌
    localStorage.setItem('user_id', data.user_id);
    localStorage.setItem('user_name', data.user_name);

    // 根据用户名设置权限（这部分逻辑可能需要根据你的实际需求进行调整）
    const keys = permiss.defaultList[data.user_name == 'admin' ? 'admin' : 'user'];
    permiss.handleSet(keys);
    // 保存权限到本地存储（这部分逻辑也可能需要调整）
    localStorage.setItem('login-param', JSON.stringify(keys));

    // 跳转到主页
    await router.push('/');
    ElMessage.success('登录成功');
  } catch (error) {
    // 处理错误
    ElMessage.error('登录失败: ' + error.message);
  }
};

// 登录信息接口
interface LoginInfo {
  username: string;
  password: string;
}

// 从本地存储中获取保存的登录参数
const lgStr = localStorage.getItem('login-param');
const defParam = lgStr ? JSON.parse(lgStr) : null;
// 记住密码的状态
const checked = ref(lgStr ? true : false);

// 使用 Vue Router 的 router 实例
const router = useRouter();
// 响应式登录参数对象
const param = reactive<LoginInfo>({
  username: defParam ? defParam.username : '',
  password: defParam ? defParam.password : '',
});

// 登录表单的验证规则
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
// 权限状态管理
const permiss = usePermissStore();
// 登录表单实例
const login = ref<FormInstance>();
// 提交表单的处理函数
// 提交表单的处理函数
const validateAndLogin = async (formEl: FormInstance | undefined): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    if (!formEl) {
      reject('Form instance is undefined');
      return;
    }
    formEl.validate((valid: boolean) => {
      if (valid) {
        resolve(true);
      } else {
        reject('Form validation failed');
      }
    });
  });
};

const submitForm = async (formEl: FormInstance | undefined) => {
  try {
    // 使用 await 调用 validateAndLogin 函数
    await validateAndLogin(formEl);
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
  } catch (error) {
    ElMessage.error('登录失败');
  }
};

// 标签状态管理
const tags = useTagsStore();
// 清除所有标签
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




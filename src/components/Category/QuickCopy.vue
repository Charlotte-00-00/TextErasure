<template>
  <div class="page-container">
    <h1>快速复制</h1>
    <el-form :model="form" label-position="top">
      <el-form-item label="复制组数量">
        <el-input-number v-model="form.quantity" :min="1" :max="100"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="generate">生成</el-button>
      </el-form-item>
    </el-form>

    <div v-for="(item, index) in copyItems" :key="index" class="copy-item">
      <div class="content-wrapper">
        <el-input type="textarea" v-model="item.text" placeholder="请输入要复制的内容"></el-input>
        <el-button @click="copyText(item.text)">复制</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        quantity: 1
      },
      copyItems: []
    };
  },
  methods: {
    generate() {
      const quantity = this.form.quantity;
      this.copyItems = Array.from({ length: quantity }, () => ({
        text: ""
      }));
    },
    copyText(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      this.$message.success("已复制到剪贴板");
    }
  }
};
</script>

<style scoped>	
.copy-item {
  margin-bottom: 10px;
}

.copy-item .el-input{
	width: 40%;
	flex: 1;
}

.content-wrapper {
  display: flex;
  align-items: center;
}

.el-button {
  margin-left: 10px;
}
</style>
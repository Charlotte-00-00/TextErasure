<template>
  <div class="page">

    <!-- 第一层 -->
    <div class="flex-row">
      <div class="flex-col-title">
        <!-- 工具箱标题 -->
        <span class="text-title ">工 具 箱</span>
      </div>
      <div class="flex-col">
      </div>
    </div>
    <!-- 第二层 -->
    <div class="flex-row">
      <div class="flex-col" >
        <div class="section " @click="jump1">
          <img class="image self-center" src="../assets/img/Category/Icon1.png" />
          <span class="font text ml-text">写字板</span>
        </div>
      </div>
      <div class="flex-col">
        <div class="section" @click="jump2">
          <img class="image self-center" src="../assets/img/Category/Icon2.png" />
          <span class="font text ml-text">进制转换</span>
        </div>
      </div>
      <div class="flex-col">
        <div class="section" @click="jump3">
          <img class="image self-center" src="../assets/img/Category/Icon3.png" />
          <span class="font text ml-text">图片压缩</span>
        </div>
      </div>
      <div class="flex-col">
        <div class="section" @click="jump4">
          <img class="image self-center" src="../assets/img/Category/Icon4.png" />
          <span class="font text ml-text">图片加水印</span>
        </div>
      </div>
    </div>

    <!-- 第三层 -->
    <div class="flex-row">
      <div class="flex-col">
        <div class="section" @click="jump5">
          <img class="image self-center" src="../assets/img/Category/Icon5.png" />
          <span class="font text ml-text">单位转换</span>
        </div>
      </div>
      <div class="flex-col">
        <div class="section" @click="jump6">
          <img class="image self-center" src="../assets/img/Category/Icon6.png" />
          <span class="font text ml-text">字符计数器</span>
        </div>
      </div>
      <div class="flex-col">
        <div class="section" @click="jump7">
          <img class="image self-center" src="../assets/img/Category/Icon7.png" />
          <span class="font text ml-text">综合计算器</span>
        </div>
      </div>
      <div class="flex-col">
        <div class="section" @click="jump8">
          <img class="image self-center" src="../assets/img/Category/Icon8.png" />
          <span class="font text ml-text">快速复制</span>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>

/* 样式 */
.page {
  display: flex; /* 使用Flexbox布局 */
  flex-direction: column; /* 垂直方向排列子元素 */
  justify-content: center; /* 水平居中子元素 */
  align-items: center; /* 如果你想要垂直居中，可以添加这个属性 */
  min-height: 45vh; /* 确保页面至少有视口的高度，以便内容居中 */
  padding: 20px; /* 根据需要添加一些内边距 */
}

.flex-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-left: 100px; /* 添加左边距，可以根据需要调整数值 */
  margin-bottom: 50px;
}


/* 样式 */
.section {
  display: flex;
  align-items: center;
  background-color: aliceblue;
  padding: 20px;
  border-radius: 8px;
  max-width: 250px; /* 最大宽度 */
  max-height: 80px; /* 最大高度 */
  cursor: pointer; /* 添加光标样式，表示可点击 */
  transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; /* 平滑过渡效果 */
}

.section:hover {
  background-color: #e0e0e0; /* 悬停时的背景色 */
  border-color: #409EFF; /* 悬停时的边框颜色 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 悬停时的阴影效果 */
}

.image {
  width: 50px; /* 根据需要调整图片大小 */
  height: auto;
}

.font{
  /* 字体样式 */
}
.flex-col {
  flex: 1;
}
.flex-col-title{

}

.text-title{

  font-size: 48px;
  font-family: 华文中宋;
  line-height: 28px;
  color: #18191c;
  margin-bottom: 16px;
  margin-left: 40px;

}

.text, .ml-text{
  font-size: 18px;
  font-family: 华文中宋;
  line-height: 28px;
  color: #18191c;
  padding: 0 20px;

}

.self-center {
  align-self: center;
}

</style>
<script lang="ts">
export default{
  data(){
    return {}
  },
  methods:{
    jump1() {
      this.$router.push('/Tablet')
    },
    jump2() {
      this.$router.push('/DecimalConversion')
    },
    jump3(){
      this.$router.push('/ImgCompress')
    },
    jump4(){
      this.$router.push('/ImgWatermark')
    },
    jump5(){
      this.$router.push('/WeightConversion')
    },
    jump6(){
      this.$router.push('/CharacterCount')
    },
    jump7(){
      this.$router.push('/ComprehensiveCalculation')
    },
    jump8(){
      this.$router.push('/QuickCopy')
    },
  }
}
</script>
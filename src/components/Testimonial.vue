<template>
  <el-carousel :interval="6000" type="card" height="600px">
    <el-carousel-item v-for="item in carouseData" :key="item.url" height="auto" autoplay>
      <div class="carousel-background" :style="{ backgroundImage: 'url(' + item.url + ')' }"></div>
    </el-carousel-item>
  </el-carousel>
</template>

  <script setup>
  import { ref } from 'vue';
  import img1 from '/src/assets/img/Testimonial/1.png';
  import img2 from '/src/assets/img/Testimonial/2.png';
  import img3 from '/src/assets/img/Testimonial/3.png';
  import img4 from '/src/assets/img/Testimonial/4.png';
  import img5 from '/src/assets/img/Testimonial/5.png';
  import img6 from '/src/assets/img/Testimonial/6.png';

  const carouseData = ref([
    { url: img1 },
    { url: img2 },
    { url: img3 },
    { url: img4 },
    { url: img5 },
    { url: img6 },
  ]);
  </script>

<style scoped>
.carousel-background {
  width: 70%; /* 确保背景图覆盖整个轮播项 */
  height: 420px; /* 与 el-carousel 的高度一致 */
  background-size: cover; /* 背景图覆盖整个元素，保持比例 */
  background-position: center; /* 背景图居中显示 */
  border:  1px solid #000;
  border-radius:15px;

}
</style>
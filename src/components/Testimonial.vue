<script setup>
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
  <div class="flex-col items-center section_13">
    <span class="text_35">用户 真实反馈</span>
    <img class="mt-50 image_8" src="../assets/img/ec78d6e2359276b993db62213890d2f1.png" />
  </div>
</template>

<style scoped lang="css">
.section_13 {
  padding: 100.5px 0 100px;
  background-color: #f1f2f4;
}
.text_35 {
  color: #191f33;
  font-size: 40px;
  font-family: Inter;
  line-height: 48px;
  text-align: center;
  width: 300px;
}
.image_8 {
  width: 100vw;
  height: 15.3125vw;
}
</style>
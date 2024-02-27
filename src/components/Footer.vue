<script setup>
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
  <div class="flex-row relative group">
    <div class="flex-row pos">
      <span class="font text">盐城工学院版权所有</span>
      <span class="font text_2">(86)-515-8816866</span>
    </div>
    <span class="text_3 pos_2">
    邮编：224051 地址：（江苏省盐城市希望大道中路1号） copyright:yancheng istitute of technology 2024
  </span>
    <div class="flex-row justify-end group_12 pos_3">
      <span class="font_4 text_4">email：894508104@qq.com</span>
      <span class="ml-28 font_4 text_5">email：2044237586@qq.com</span>
      <span class="ml-28 font_4 text_6">email：2519219745@qq.com</span>
      <span class="ml-28 font_4">email：160031194@qq.com</span>
    </div>
    <div class="flex-row equal-division group_4">
      <div class="flex-col items-start group_5 group_10">
        <span class="font_2">石智轩</span>
        <span class="mt-36 font_3">QQ：894508104</span>
      </div>
      <div class="flex-col items-start group_5 group_11">
        <span class="font_2 text_1">陈雨桐</span>
        <span class="font_3 mt-35">QQ：2044237586</span>
      </div>
      <div class="flex-col items-start group_5 group_1">
        <span class="font_2 text_16">王腾</span>
        <span class="mt-36 font_3">QQ：2519219745</span>
      </div>
      <div class="flex-col items-start group_5 group_7">
        <span class="font_2 text_17">冯杰</span>
        <span class="mt-36 font_3">QQ：1600311994</span>
      </div>
    </div>
    <div class="flex-row justify-end group_6 pos_4">
      <span class="font_5 ">联系方式：18121656915</span>
      <span class="ml-28 font_5">联系方式：17586408802</span>
      <span class="ml-28 font_7 ">联系方式：19551532198</span>
      <span class="ml-28 font_6">联系方式：19102501034</span>
    </div>
    <div class="flex-row justify-between group_9 pos_5">
      <span class="font_4 text_11">院校：盐城工学院</span>
      <span class="font_4 text_12">院校：盐城工学院</span>
      <span class="font_4 text_13">院校：盐城工学院</span>
      <span class="font_4 text_14">院校：盐城工学院</span>
    </div>
  </div>
</template>

<style scoped lang="css">

.mt-35 {
  margin-top: 35px;
}
.group {
  padding: 90px 284px 95px;
  height: 384px;
  background: black;
}
.pos {
  position: absolute;
  left: 284px;
  top: 100px;
}
.font {
  font-size: 18px;
  font-family: Inter;
}
.text {
  color: #5e6670;
  line-height: 17px;

}
.text_2 {
  color: #ffffff;
  line-height: 20px;
}
.text_3 {
  color: #767f8c;
  font-size: 14px;
  font-family: Inter;
  line-height: 20px;
  width: 310px;
}
.pos_2 {
  position: absolute;
  left: 284px;
  top: 137px;
}
.group_12 {
  width: 1400px;
}
.pos_3 {
  position: absolute;
  left: 284px;
  top: 194px;
}
.font_4 {
  font-size: 16px;

  line-height: 15px;
  color: #9199a3;
  margin-left: 80px;
}
.font_5 {
  font-size: 16px;

  line-height: 15px;
  color: #9199a3;
  margin-right: 120px;
}
.font_6 {
  font-size: 16px;

  line-height: 15px;
  color: #9199a3;

}
.font_7 {
  font-size: 16px;

  line-height: 15px;
  color: #9199a3;
  margin-left: 50px;
}
.text_5 {
  margin-right: 13px;
}
.text_6 {
  margin-right: 20px;
}
.equal-division {
  position: absolute;
  right: 327.5px;
  top: 90px;
}
.group_4 {
  width: 960px;
}
.group_5 {
  flex: 1 1 240px;
}
.group_10 {
  padding: 10px 53.5px;
}
.font_2 {
  font-size: 20px;
  font-family: Inter;
  line-height: 18.5px;
  color: #ffffff;
  margin-left: 70px;
}
.font_3 {
  font-size: 16px;
  line-height: 20px;
  color: #9199a3;
  margin-left: 80px;
}
.group_11 {
  padding: 10px 45.5px 10px 53.5px;
}
.text_1 {
  line-height: 18.5px;
}
.group_1 {
  padding: 10px 52.5px 10px 53.5px;
}
.text_16 {
  line-height: 18.5px;
}
.group_7 {
  padding: 10px 51.5px 10px 53.5px;
}
.text_17 {
  line-height: 18.5px;
}
.group_6 {
  padding: 0 46px;
  width: 1600px;
}
.pos_4 {
  position: absolute;
  left: 50%;
  top: 234px;
  transform: translateX(-50%);
}
.text_8 {
  margin-left: 2px;
  margin-right: 60px;
}
.text_9 {
  margin-right: 53px;
}
.text_10 {
  margin-right: 60px;
}
.group_9 {
  width: 1352px;
}
.pos_5 {
  position: absolute;
  left: 50%;
  top: 274px;
  transform: translateX(-50%);
}
.text_11 {
  margin-left: 420px;
}
.text_12 {
  margin-left: 100px;
}
.text_13 {
  margin-left: 20px;

}
.text_14 {
  margin-left: 20px;

}
</style>
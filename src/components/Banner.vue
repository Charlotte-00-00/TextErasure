<script setup>
import {useRouter} from 'vue-router';
import {reactive, onMounted} from 'vue';

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
  <div class="flex-row justify-between section_2">
    <div class="flex-row items-center">
      <div class="flex-row items-center shrink-0 group_2">
        <img class="image" src="../assets/img/2498c09dc049cd4a9b87547dbb60ae7f.png"/>
        <div class="flex-row items-center ml-216">
          <div class="flex-row items-center shrink-0">
            <div class="flex-col justify-start items-center text-wrapper_34">
              <span class="font text_124">产品模块</span>
            </div>
            <img class="ml-6 image_2" src="../assets/img/209804f13482c2016c246c0f2e8e6360.png"/>
          </div>
          <div class="flex-row items-center shrink-0 group_4">
            <div class="flex-col justify-start items-center text-wrapper_2"><span class="font text">用户中心</span>
            </div>
            <img class="ml-6 image_2" src="../assets/img/209804f13482c2016c246c0f2e8e6360.png"/>
          </div>
          <span class="font text_2">错题集</span>
          <span class="font text_3">社区</span>
        </div>
      </div>
      <span class="font text_4 ml-102">工具箱</span>
    </div>
    <div class="flex-row items-center relative group_3">
      <span class="shrink-0 font text_5">帮助</span>
      <div class="flex-col justify-start items-center shrink-0 text-wrapper ml-15">
        <span class="text_6">呼叫 客服</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.ml-216 {
  margin-left: 216px;
}

.ml-102 {
  margin-left: 102px;
}

.ml-15 {
  margin-left: 15px;
}

.section_2 {
  padding: 10.5px 0 10.5px;
  background-color: #ffffffde;
}

.group_2 {
  padding: 0 16px;
  overflow: hidden;
  width: 992.5px;
  height: 31.5px;
}

.image {
  width: 99px;
  height: 32px;
}

.text-wrapper_34 {
  padding: 3.5px 0 3.5px;
  overflow: hidden;
  width: 63px;
  height: 21px;
}

.font {
  font-size: 16px;
  font-family: Inter;
  line-height: 14.5px;
  color: #171618;
}

.text_124 {
  font-size: 15.5px;
}

.image_2 {
  width: 10px;
  height: 5px;
}

.group_4 {
  margin-left: 131px;
}

.text-wrapper_2 {
  padding: 3.5px 0 3.5px;
  overflow: hidden;
  width: 63px;
  height: 21px;
}

.text {
  font-size: 15.5px;
}

.text_2 {
  margin-left: 133.5px;
  font-size: 15.5px;
  line-height: 14.5px;
}

.text_3 {
  margin-left: 139px;
  font-size: 15.5px;
  line-height: 14.5px;
}

.text_4 {
  font-size: 15.5px;
  line-height: 14.5px;
}

.group_3 {
  margin-right: 8px;
}

.text_5 {
  font-size: 15.5px;
  line-height: 14.5px;
}

.text-wrapper {
  padding: 8px 0 5.5px;
  background-color: #2b44e7;
  border-radius: 8px;
  width: 113.5px;
  height: 31.5px;
}

.text_6 {
  color: #ffffff;
  font-size: 15.5px;
  font-family: Inter-Semi;
  font-weight: 700;
  line-height: 18.5px;
  text-align: center;
  width: 85px;
  height: 18px;
}
</style>
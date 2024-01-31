<script setup>
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
  <div class="flex-col section_24">
    <div class="flex-row justify-between items-center group_59">
      <div class="flex-row">
        <div class="flex-col self-start group_60">
          <div class="flex-row self-start group_61">
            <span class="font_23 text_55 text_95">Call now:</span>
            <span class="font_23 text_96 ml-3">(86) 555-0115</span>
          </div>
          <span class="mt-14 self-stretch font_25">
          6391 Elgin St. Celina, Delaware 10299, New York, United States of America
        </span>
        </div>
        <div class="flex-col group_62 ml-110">
          <span class="self-stretch font_24 text_97">Quick Link</span>
          <div class="mt-14 flex-col self-start group_67">
            <div class="flex-col justify-start items-center self-start text-wrapper_25">
              <span class="font_26 text_103">About</span>
            </div>
            <div class="mt-4 flex-col justify-start items-center self-stretch text-wrapper_27">
              <span class="text_108">Contact</span>
            </div>
            <div class="mt-4 flex-col justify-start items-center self-start text-wrapper_29">
              <span class="font_5 text_112">Pricing</span>
            </div>
            <div class="mt-4 flex-col justify-start items-center self-start text-wrapper_30">
              <span class="font_5 text_114">Blog</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex-row group_63">
        <div class="flex-col group_64">
          <span class="self-start font_24 text_98">Candidate</span>
          <span class="self-start font_26 text_101">Browse Jobs</span>
          <div class="flex-col justify-start self-start text-wrapper_28">
            <span class="font_26 text_105">Browse Employers</span>
          </div>
          <span class="self-stretch font_26 text_109">Candidate Dashboard</span>
          <span class="self-start font_26 text_113">Saved Jobs</span>
        </div>
        <div class="flex-col group_65 ml-77">
          <span class="self-start font_24 text_126">Employers</span>
          <span class="self-start font_26 text_102">Post a Job</span>
          <span class="self-start font_26 text_106">Browse Candidates</span>
          <span class="self-stretch font_26 text_110">Employers Dashboard</span>
          <div class="flex-col justify-start items-center self-start text-wrapper_31">
            <span class="font_5 text_115">Applications</span>
          </div>
        </div>
        <div class="flex-col self-start group_66 ml-77">
          <span class="self-start font_24 text_100">Support</span>
          <div class="flex-col justify-start items-center self-start text-wrapper_26">
            <span class="font_5 text_104">Faqs</span>
          </div>
          <span class="self-start font_26 text_107">Privacy Policy</span>
          <span class="self-stretch font_26 text_111">Terms & Conditions</span>
        </div>
      </div>
    </div>
    <div class="flex-row justify-between section_25">
      <span class="font_25 text_116">@ 2021 Jobpilot - Job Portal. All rights Rserved</span>
      <div class="flex-row items-center">
        <img class="image_26" src="../assets/img/850ad8205c5770afe1ff56d5ea4fa1af.png" />
        <img class="ml-20 image_28" src="../assets/img/b11bdb741ee1ad8be4adb1e5cec7449b.png" />
        <img class="ml-20 image_27" src="../assets/img/6130d5acc782f0aea7444502df7fc08b.png" />
        <img class="ml-20 image_29" src="../assets/img/59d2c4b6c137fc2c91916d533c8a2607.png" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.ml-3 {
  margin-left: 3px;
}
.ml-110 {
  margin-left: 110px;
}
.ml-77 {
  margin-left: 77px;
}
.font_5 {
  font-size: 16px;
  font-family: Inter;
  line-height: 14.5px;
  color: #9199a3;
}
.section_24 {
  background-color: #18191c;
}
.group_59 {
  padding: 100px 300px 80px;
}
.group_60 {
  width: 292.5px;
}
.group_61 {
  overflow: hidden;
  width: 206px;
  height: 28px;
}
.font_23 {
  font-size: 18.5px;
  font-family: Inter;
  line-height: 28px;
}
.text_55 {
  width: 80px;
}
.text_95 {
  margin-top: 2.5px;
  color: #5e6670;
  font-size: 18px;
}
.text_96 {
  margin-right: 22.5px;
  color: #ffffff;
  font-size: 18px;
  word-break: break-all;
  width: 99px;
}
.font_25 {
  font-size: 14px;
  font-family: Inter;
  line-height: 20px;
  color: #767f8c;
}
.group_62 {
  margin-top: 2px;
  width: 97px;
}
.font_24 {
  font-size: 20px;
  font-family: Inter;
  line-height: 18.5px;
  color: #ffffff;
}
.text_97 {
  line-height: 32px;
}
.group_67 {
  overflow: hidden;
  width: 62px;
}
.text-wrapper_25 {
  padding: 12px 0 12px;
  overflow: hidden;
  width: 46px;
}
.font_26 {
  font-size: 16px;
  font-family: Inter;
  line-height: 24px;
  color: #9199a3;
}
.text_103 {
  line-height: 12px;
}
.text-wrapper_27 {
  padding: 12px 0 12px;
  overflow: hidden;
  width: 62px;
}
.text_108 {
  color: #ffffff;
  font-size: 16px;
  font-family: Inter;
  line-height: 12px;
}
.text-wrapper_29 {
  padding: 12px 0 8.5px;
  overflow: hidden;
  width: 52px;
}
.text_112 {
  line-height: 15.5px;
}
.text-wrapper_30 {
  padding: 12px 0 8.5px;
  overflow: hidden;
  width: 34px;
}
.text_114 {
  line-height: 15px;
}
.group_63 {
  margin-right: 61px;
}
.group_64 {
  margin-bottom: 4px;
  width: 163px;
}
.text_98 {
  line-height: 15.5px;
}
.text_101 {
  margin-top: 32.5px;
  text-align: center;
  width: 95px;
}
.text-wrapper_28 {
  margin-top: 8px;
  padding: 8px 0 4px;
  overflow: hidden;
  width: 139px;
  height: 36px;
}
.text_105 {
  text-align: center;
}
.text_109 {
  margin-top: 12px;
  text-align: center;
}
.text_113 {
  margin-top: 16px;
  text-align: center;
  width: 86px;
}
.group_65 {
  width: 164.5px;
}
.text_126 {
  line-height: 18.5px;
}
.text_102 {
  margin-top: 29px;
  text-align: center;
  width: 65px;
}
.text_106 {
  margin-top: 15.5px;
  text-align: center;
  width: 145px;
}
.text_110 {
  margin-top: 16.5px;
  text-align: center;
}
.text-wrapper_31 {
  margin-top: 8px;
  padding: 12px 0 9px;
  overflow: hidden;
  width: 93px;
}
.text_115 {
  line-height: 15.5px;
}
.group_66 {
  width: 137px;
}
.text_100 {
  line-height: 19px;
}
.text-wrapper_26 {
  margin-top: 20.5px;
  padding: 12px 0 9px;
  overflow: hidden;
  width: 37px;
}
.text_104 {
  line-height: 15px;
}
.text_107 {
  margin-top: 12px;
  text-align: center;
  width: 102px;
}
.text_111 {
  margin-top: 16px;
  text-align: center;
}
.section_25 {
  padding: 24px 300px 22.5px 300.5px;
  background-color: #18191c;
  box-shadow: 0px 1px 0px #2f3338 inset;
}
.text_116 {
  width: 256px;
}
.image_26 {
  width: 10px;
  height: 20px;
}
.image_28 {
  width: 20px;
  height: 14px;
}
.image_27 {
  width: 20px;
  height: 20px;
}
.image_29 {
  width: 20px;
  height: 16px;
}
</style>
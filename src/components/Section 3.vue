<script setup>
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
  <div class="flex-col section_22">
    <span class="self-center font_8 text_88">知名合作商</span>
    <div class="mt-70 flex-col self-stretch group_53">
      <div class="flex-row items-center group_54">
        <img class="image_16" src="../assets/img/701da13a5b5dd4c9d4e9da225fa3c6f9.png" />
        <img class="image_17" src="../assets/img/2ce525a1866170fed3c694df52d99104.png" />
        <img class="image_13" src="../assets/img/38541e2e5a139b7731bec619ecc6666f.png" />
        <img class="image_18" src="../assets/img/2e989f0f0f7dad5b519e9f1d930f629f.png" />
        <img class="image_14" src="../assets/img/4277e195b5e48fdb03158d0f517dacdc.png" />
        <img class="image_15" src="../assets/img/6a3cc454c0354dd2f57e5278a24b3173.png" />
      </div>
      <div class="flex-row justify-between items-center mt-39">
        <img class="image_20" src="../assets/img/5abe7d6bcab25d1e0aadb50e49552cbf.png" />
        <img class="image_22" src="../assets/img/627fab1fcd0bb4577716a9312a461a27.png" />
        <img class="image_24" src="../assets/img/e4623a135715cbab94e5c32c5a494c7a.png" />
        <img class="image_23" src="../assets/img/b938207f39599f0948419ccb1308f263.png" />
        <img class="image_19" src="../assets/img/c0d4bfe6f6bee02baef1745fdaba6834.png" />
        <img class="image_21" src="../assets/img/8248f2746d54ab82541073bee529ba17.png" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.mt-39 {
  margin-top: 39px;
}
.font_8 {
  font-size: 25px;
  font-family: Inter;
  line-height: 34.5px;
  color: #171618;
}
.section_22 {
  padding: 5.5px 321.5px 67px 321.5px;
  background-color: #38388a1f;
}
.text_88 {
  line-height: 23px;
}
.group_53 {
  padding-left: 26px;
  padding-right: 21px;
  border-left: solid 2px #38388a1f;
  border-right: solid 2px #38388a1f;
  border-top: solid 2px #38388a1f;
  border-bottom: solid 2px #38388a1f;
}
.group_54 {
  padding-left: 16px;
  padding-right: 14px;
}
.image_16 {
  width: 92px;
  height: 22px;
}
.image_17 {
  margin-left: 99.5px;
  width: 148px;
  height: 23px;
}
.image_13 {
  margin-left: 99px;
  width: 93px;
  height: 50px;
}
.image_18 {
  margin-left: 102px;
  width: 142px;
  height: 21px;
}
.image_14 {
  margin-left: 97.5px;
  width: 102px;
  height: 30px;
}
.image_15 {
  margin-left: 117.5px;
  width: 102px;
  height: 32px;
}
.image_20 {
  width: 124px;
  height: 38px;
}
.image_22 {
  width: 106px;
  height: 30px;
}
.image_24 {
  width: 122px;
  height: 24px;
}
.image_23 {
  width: 108px;
  height: 29px;
}
.image_19 {
  width: 128px;
  height: 45px;
}
.image_21 {
  margin-right: 4px;
  width: 122px;
  height: 37px;
}
</style>
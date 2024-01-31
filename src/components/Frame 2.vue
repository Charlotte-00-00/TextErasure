<script setup>
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
  <div class="flex-col justify-start items-start relative section_23">
  <span class="text_93 pos_11">
    Thank you for getting in touch!
    <br />
    Kindly. Fill the form, have a great day!
  </span>
    <div class="flex-row group_55 pos_8">
      <div class="flex-col justify-start items-start pos_9">
        <div class="flex-col justify-start items-start relative group_57">
          <img class="image_25" src="../assets/img/987ce4ed2ce5c6172b546a5ac4e6e311.png" />
          <span class="text_89 pos_19">Let’s Connect with us! Discuss for grow ...</span>
        </div>
      </div>
      <span class="text_94 pos_14">YourTrans</span>
    </div>
  </div>
</template>

<style scoped lang="css">
.section_23 {
  padding: 354px 0 316px;
  overflow: hidden;
  background-color: #c3d3cf;
  height: 706px;
}
.text_93 {
  color: #ffffff;
  font-size: 24px;
  font-family: Rubik;
  line-height: 36px;
}
.pos_11 {
  position: absolute;
  left: 1000px;
  top: 420px;
}
.group_55 {
  height: 710.5px;
}
.pos_8 {
  position: absolute;
  left: -27px;
  right: 0;
  top: -23px;
}
.pos_9 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
}
.group_57 {
  margin-left: 123px;
  padding-top: 195px;
  width: 1299px;
}
.image_25 {
  width: 587px;
  height: 307px;
}
.text_89 {
  color: #ffffff;
  font-size: 40px;
  font-family: JetBrains Mono;
  font-weight: 500;
  line-height: 100px;
  text-transform: uppercase;
  text-shadow: 0 0.5px #e0e0e0, 0 -0.5px #e0e0e0, 0.5px 0 #e0e0e0, -0.5px 0 #e0e0e0;
  word-break: break-all;
}
.pos_19 {
  position: absolute;
  left: 900px;
  top: 100px;
}
.text_94 {
  color: #ffffff;
  font-size: 280px;
  font-family: Rubik;
  font-weight: 700;
  line-height: 202px;
  text-shadow: 0 0.5px #e0e0e0, 0 -0.5px #e0e0e0, 0.5px 0 #e0e0e0, -0.5px 0 #e0e0e0;
  opacity: 0.3;
}
.pos_14 {
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
<script setup>
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
<!--  //  工 具 箱-->
  <div class="flex-col relative section_8">
    <div class="flex-row justify-between items-center self-center relative group_16">
      <span class="text_24 pos_15">工 具 箱</span>
      <div class="flex-col justify-start items-center text-wrapper_7 pos_16">
        <span class="font_4 text_11">View All</span>
      </div>
    </div>

<!--    // 手写文字转换-->
    <div class="flex-col justify-start self-stretch group_40">
      <div class="flex-row equal-division">
        <div class="flex-col justify-start items-start equal-division-item_3 group_70">
          <div class="flex-row items-center section_28 pos_17">
            <img class="image_32" src="../assets/img/3457728af5f54011e9e353b3e12b4d9d.png" />
            <div class="flex-col items-start group_73 ml-17">
              <span class="font_15 text_121">手写文字转换</span>
              <span class="font_25 text_26 mt-15">357 Open position</span>
            </div>
          </div>
        </div>
      </div>
    </div>


<!--    // 文档类型转换-->
<!--    <div class="flex-col justify-start self-stretch group_41">-->
<!--      <div class="flex-row equal-division">-->
<!--        <div class="flex-col justify-start items-start equal-division-item_4 group_71">-->
<!--          <div class="flex-row items-center section_29 pos_18">-->
<!--            <img class="image_33" src="../assets/img/3457728af5f54011e9e353b3e12b4d9d.png" />-->
<!--            <div class="flex-col items-start group_74 ml-18">-->
<!--              <span class="font_16 text_122">文档类型转换</span>-->
<!--              <span class="font_26 text_27 mt-16">357 Open position</span>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->


  </div>
</template>

<style scoped lang="css">
.ml-17 {
  margin-left: 17px;
}
.mt-15 {
  margin-top: 15px;
}
.font_4 {
  font-size: 16px;
  font-family: Inter-Semi;
  line-height: 24px;
  font-weight: 700;
  color: #0a65cc;
}
.section_8 {
  margin-top: -11px;
  background-color: #ffffff;
  box-shadow: 0px -1px 0px #e4e5e8 inset;
}
.group_16 {
  padding-top: 100px;
  font-family: Microsoft Yahei;
  overflow: hidden;
  width: 1320px;
  height: 148px;
}
.text_24 {
  color: #18191c;
  font-size: 60px;
  font-family: Microsoft Yahei;
  font-weight: 800;
  line-height: 48px;
  text-align: justify;
  width: 500px;
}
.pos_15 {
  position: absolute;
  left: 200px;
  top: 50px;
  bottom: 0px;
}
.text-wrapper_7 {
  padding: 11.5px 0 10.5px;
  border-radius: 3px;
  width: 111px;
  border-left: solid 1px #e7f0fa;
  border-right: solid 1px #e7f0fa;
  border-top: solid 1px #e7f0fa;
  border-bottom: solid 1px #e7f0fa;
}
.pos_16 {
  position: absolute;
  right: 0px;
  bottom: 0px;
}
.text_11 {
  width: 60px;
}
.group_40 {
  overflow: hidden;
}
.equal-division {
  padding: 7px 0 206px;
}
.equal-division-item_3 {
  position: relative;
  flex: 1 1 0;
}
.group_70 {
  padding: 50px 0;
  height: 209px;
}
.section_28 {
  padding-left: 24px;
  background-color: #ffffff;
  border-radius: 12px;
}
.pos_17 {
  position: absolute;
  left: 424px;
  top: 80px;
}
.image_32 {
  border-radius: 8px;
  width: 68px;
  height: 68px;
  visibility: visible;
}
.group_73 {
  padding: 28.5px 0 28.5px;
  overflow: hidden;
  width: 203px;
  height: 109px;
}
.font_15 {
  font-size: 18.5px;
  font-family: Inter;
  line-height: 26px;
  color: #5b5a59;
}
.text_121 {
  color: #18191c;
  font-size: 18px;
  line-height: 17px;
}
.font_25 {
  font-size: 14px;
  font-family: Inter;
  line-height: 20px;
  color: #767f8c;
}
.text_26 {
  color: #5e6670;
  width: 109px;
}
</style>
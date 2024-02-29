<script setup>
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
  <div class="flex-col section_14">
    <span class="self-center font_13 text_27 text_36">自定义 错题</span>
    <div class="flex-col items-center self-stretch group_22">
      <span class="font_8">根据用户自身的需求，用户自行选择合适的错题模板，</span>
      <span class="font_8">将不同学课的题目整理到文档中</span>
    </div>
    <div class="flex-row justify-center self-stretch group_23">
      <div class="flex-col self-start group_24">
        <span class="self-start font_14 text_37">生成错题集文档</span>
        <span class="self-stretch font_15 text_38 text_122">
        organized into doc types, which you can customize without limits.
        <br />
        For each doc type, define your own
      </span>
        <div class="flex-col self-stretch group_25">
          <div class="flex-row justify-end items-end relative">
            <div class="flex-col justify-start items-center text-wrapper_11">
              <span class="text_40">Terminology</span>
            </div>
            <span class="font_17 text_42">,</span>
            <div class="flex-row items-end pos">
              <div class="flex-col justify-start items-center text-wrapper_12">
                <span class="font_16">Properties</span>
              </div>
              <span class="font_17 text_43">,</span>
            </div>
          </div>
          <div class="flex-row items-center relative group_26">
            <div class="flex-col justify-start items-start text-wrapper_13">
              <span class="font_18 text_44">Hierarchy rules</span>
            </div>
            <span class="font_17">,</span>
            <span class="font_15 text_48">, and</span>
            <span class="font_15 text_125 text_46">. Doc types</span>
            <div class="flex-row pos_2">
              <div class="flex-col justify-start text-wrapper_14"><span class="font_19 text_47">Workflows</span></div>
              <div class="flex-col justify-start items-start text-wrapper_15 ml-49">
                <span class="font_18 text_45">Content templates</span>
              </div>
            </div>
          </div>
        </div>
        <span class="self-start font_15 text_49">
        can be seen as flexible databases with shared properties,
        <br />
        hierarchical relationships, and integrated workflows.
      </span>
      </div>
      <div class="flex-col justify-start items-center image-wrapper ml-91">
        <img class="image_9" src="../assets/img/e8460b51ec7d139eab7fe5bd06aa639b.png" />
      </div>
    </div>
    <div class="flex-row justify-evenly self-stretch group_27">
      <div class="flex-col section_15">
        <div class="flex-col justify-start items-start self-stretch text-wrapper_16">
          <span class="font_3 text_50">自定义 选择错题</span>
        </div>
        <span class="mt-20 self-start font_20 text_52">只是粗心大意?</span>
        <span class="mt-20 self-start font_20 text_54">不熟悉的题型</span>
        <span class="mt-20 self-start font_20 text_65">多次错误的题型</span>
        <span class="mt-20 self-start font_20 text_67">不能够错的类型</span>
      </div>
      <div class="flex-col group_28">
        <span class="self-start font_14 text_51">选择您认为要放入错题集的题目</span>
        <div class="flex-col self-stretch group_29 mt-17">
          <span class="self-start font_15 text_53">building blocks:</span>
          <div class="flex-col self-stretch">
            <div class="flex-row items-end self-stretch relative group_30">
              <div class="flex-col justify-start items-center text-wrapper_17">
                <span class="font_18 text_55 text_123">Doc types</span>
              </div>
              <span class="font_17 text_59">,</span>
              <div class="flex-col justify-start items-center group_31 pos_3">
                <span class="font_17">,</span>
                <div class="flex-col justify-start items-end group_31 pos_4">
                  <span class="font_17 text_60">,</span>
                  <div class="flex-row items-end pos_5">
                    <div class="flex-col justify-start items-start text-wrapper_18">
                      <span class="font_18 text_44">Kanban boards</span>
                    </div>
                    <span class="font_17 text_61 ml-146">,</span>
                  </div>
                </div>
              </div>
              <div class="flex-col justify-start items-center text-wrapper_19 pos_6">
                <span class="font_19 text_57">Lists</span>
              </div>
              <div class="flex-col justify-start text-wrapper_20 pos_7"><span class="font_16 text_58">Groups</span></div>
            </div>
            <div class="flex-row items-center self-start">
              <div class="flex-col justify-start text-wrapper_1">
                <span class="font_19 text_64 text_118">Swimlanes</span>
              </div>
              <span class="font_15">, and</span>
              <div class="flex-col justify-start text-wrapper_1 view">
                <span class="font_19 text_64 text_120">Filters</span>
              </div>
              <span class="font_15 text_62">. You can iterate on your processes by</span>
            </div>
          </div>
          <span class="self-start font_15 text_66">simply adding and editing these blocks.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.ml-49 {
  margin-left: 49px;
}
.ml-91 {
  margin-left: 91px;
}
.mt-17 {
  margin-top: 17px;
}
.ml-146 {
  margin-left: 146px;
}
.font_3 {
  font-size: 25px;
  font-family: Inter-Semi;
  font-weight: 700;
}
.font_8 {
  font-size: 25px;
  font-family: Inter;
  line-height: 34.5px;
  color: #171618;
}
.section_14 {
  padding: 66.5px 0 258.5px;
  background-color: #e7ecee;
}
.font_13 {
  font-size: 50px;

  letter-spacing: -1.5px;
  font-weight: 900;
  color: #171618;
}
.text_27 {
  text-align: center;
  width: 300px;
}
.text_36 {
  line-height: 53.5px;
}
.group_22 {
  margin-top: 24.5px;
}
.group_23 {
  margin-top: 136px;
  padding: 0 318.5px;
}
.group_24 {
  margin-top: 74.5px;
  width: 580px;
}
.font_14 {
  font-size: 25px;
  font-family: Inter;
  line-height: 24px;
  font-weight: 700;
  color: #171618;
}
.text_37 {
  line-height: 24px;
}
.group_25 {
  margin-top: 25px;
}
.text-wrapper_11 {
  padding: 4px 0 2px;
  background-color: #ffd231;
  border-radius: 6px;
  height: 24px;
}
.text_40 {
  color: #171618;
  font-size: 18.5px;
  font-family: Inter-Semi;
  font-weight: 700;
  line-height: 18px;
}
.font_17 {
  font-size: 18.5px;
  font-family: Inter;
  line-height: 5px;
  color: #5b5a59;
}
.text_42 {
  margin-right: 131.5px;
  margin-bottom: 2px;
}
.pos {
  position: absolute;
  right: 28px;
  top: 0;
}
.text-wrapper_12 {
  padding: 4.5px 0 2.5px;
  background-color: #dbdeef;
  border-radius: 6px;
  height: 24px;
}
.font_16 {
  font-size: 18.5px;
  font-family: Inter-Semi;
  line-height: 17px;
  font-weight: 700;
  color: #5b5a59;
}
.text_43 {
  margin-bottom: 2px;
}
.group_26 {
  margin-right: 11px;
}
.text-wrapper_13 {
  overflow: hidden;
  background-color: #dbdeef;
  border-radius: 6px;
  width: 144.5px;
  height: 24px;
}
.font_18 {
  font-size: 18.5px;
  font-family: Inter-Semi;
  line-height: 24px;
  font-weight: 700;
  color: #5b5a59;
}
.text_44 {
  margin-left: 5.5px;
  line-height: 24px;
  width: 122px;
}
.pos_2 {
  position: absolute;
  right: 86.5px;
  top: 50%;
  transform: translateY(-50%);
}
.text-wrapper_14 {
  padding: 4px 0 6px;
  background-color: #dbdeef;
  border-radius: 6px;
  height: 24px;
}
.font_19 {
  font-size: 18.5px;
  font-family: Inter-Semi;
  line-height: 14.5px;
  font-weight: 700;
  color: #5b5a59;
}
.text_47 {
  margin-left: 4.5px;
  margin-right: 8px;
  line-height: 14.5px;
}
.text-wrapper_15 {
  overflow: hidden;
  background-color: #dbdeef;
  border-radius: 6px;
  width: 175.5px;
  height: 24px;
}
.text_45 {
  margin-left: 5px;
  line-height: 24px;
  width: 151px;
}
.image-wrapper {
  padding-bottom: 16.5px;
  filter: drop-shadow(0px 16px 16px #38388a1f);
  overflow: hidden;
  width: 605.5px;
  height: 361.5px;
}
.image_9 {
  overflow: hidden;
  width: 605px;
  height: 345px;
}
.group_27 {
  margin-top: 249px;
  padding-left: 414.5px;
  padding-right: 177px;
  height: 244px;
}
.section_15 {
  padding: 32px 32px 42px;
  background-color: #ffffff;
  border-radius: 16px;
  width: 399px;
  height: 244px;
}
.text-wrapper_16 {
  padding-top: 2px;
  overflow: hidden;
  height: 29px;
}
.text_50 {
  margin-left: 4px;
  color: #000000;
  font-size: 24px;
  line-height: 29px;
  width: 158px;
}
.font_20 {
  font-size: 16px;
  font-family: Inter;
  line-height: 14.5px;
  color: #000000;
}
.text_52 {
  line-height: 15px;
}
.text_54 {
  line-height: 15px;
}
.text_65 {
  line-height: 15px;
}
.text_67 {
  line-height: 15px;
}
.group_28 {
  padding: 50.5px 162px 49px;
  overflow: hidden;
  width: 929.5px;
}
.text_51 {
  line-height: 23.5px;
}
.group_29 {
  overflow: hidden;
  height: 104px;
}
.group_30 {
  padding: 0 142px;
}
.text-wrapper_17 {
  overflow: hidden;
  background-color: #ffd231;
  border-radius: 6px;
  width: 99px;
  height: 24px;
}
.text_59 {
  margin-bottom: 2px;
}
.group_31 {
  padding: 17px 0 2px;
  width: 293px;
}
.pos_3 {
  position: absolute;
  right: 61px;
  top: 0;
}
.pos_4 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.text_60 {
  margin-right: 75px;
}
.pos_5 {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.text-wrapper_18 {
  overflow: hidden;
  background-color: #dbdeef;
  border-radius: 6px;
  width: 143.5px;
  height: 24px;
}
.text_61 {
  margin-bottom: 2px;
}
.text-wrapper_19 {
  padding: 4.5px 0 6px;
  background-color: #dbdeef;
  border-radius: 6px;
  width: 50.5px;
}
.pos_6 {
  position: absolute;
  right: 149px;
  top: 0;
}
.text_57 {
  line-height: 13.5px;
}
.text-wrapper_20 {
  padding: 4.5px 0 2.5px;
  background-color: #dbdeef;
  border-radius: 6px;
}
.pos_7 {
  position: absolute;
  right: 65.5px;
  top: 0;
}
.text_58 {
  margin-left: 5px;
  margin-right: 7.5px;
}
.text-wrapper_1 {
  padding: 4px 0 6px;
  background-color: #dbdeef;
  border-radius: 6px;
  height: 24px;
}
.text_64 {
  line-height: 14px;
}
.text_118 {
  margin-left: 4.5px;
  margin-right: 7.5px;
}
.view {
  margin-left: 9.5px;
}
.text_120 {
  margin-left: 5.5px;
  margin-right: 6.5px;
}
.font_15 {
  font-size: 18.5px;
  font-family: Inter;
  line-height: 26px;
  color: #5b5a59;
}
.text_66 {
  width: 305px;
}
.text_62 {
  margin-right: 50px;
  width: 275px;
}
.text_53 {
  word-break: break-all;
  width: 554px;
}
.text_49 {
  width: 509px;
}
.text_125 {
  width: 85px;
}
.text_46 {
  margin-left: 186.5px;
}
.text_48 {
  margin-left: 102px;
}
.text_38 {
  word-break: break-all;
}
.text_122 {
  margin-top: 19.5px;
}
.text_55 {
  width: 80px;
}
.text_123 {
  color: #171618;
  line-height: 24px;
}
</style>
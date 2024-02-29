<script >
export default {
  data() {
    return {}
  },
  methods: {
    jump1 () {
      this.$router.push('/Login')
    },
    jump2 () {
      this.$router.push('/Register')
    }
  }
}
</script>

<template>
  <div class="flex-row justify-center items-center section_3">
    <img class="image_3" src="../assets/img/a9c6749cddfed3927f77e602dae3b000.png" />
    <div class="flex-col justify-start items-start text-wrapper_5">
      <span class="font_3 text_7 text_119">猪猪 错题集</span>
    </div>
    <div class="flex-col justify-start items-start section_4">
      <div class="flex-row items-center group_5">
        <div class="flex-row items-center group_6">
          <img class="shrink-0 image_4" src="../assets/img/6a2f67ba5e369a480b4d8c86ec4f41d6.png" />
          <span class="font_25 text_12 ml-13">China</span>
        </div>
        <div class="section_5 ml-19"></div>
        <div class="flex-col justify-start items-center text-wrapper_6 ml-19">
          <span class="font_5 text_10">快速检索功能模块</span>
        </div>
      </div>
    </div>

<!--    <div class="flex-col justify-start items-center text-wrapper_3">-->
<!--      <span class="font_4 text_125">新用户 注册</span>-->
    <el-button type="primary" @click="jump2" class="text-wrapper_3 .text_125" >新用户 注册 </el-button>
<!--    </div>-->

<!--    <div class="flex-col justify-start items-center text-wrapper_4">-->

    <el-button type="primary" @click="jump1" class="text-wrapper_4 .text_125" >用户 登录 </el-button>

    </div>
<!--  </div>-->
</template>

<style scoped lang="css">
.ml-19 {
  margin-left: 19px;
}
.ml-13 {
  margin-left: 13px;
}
.section_3 {
  padding: 20px 300px;
  background-color: #ffffff;
}
.image_3 {
  width: 90px;
  height: 69px;
}
.text-wrapper_5 {
  margin-left: 22px;
  padding-top: 2.5px;
  overflow: hidden;
  width: 141px;
  height: 40px;
}
.font_3 {
  font-size: 25px;
  font-family: Inter-Semi;
  font-weight: 700;
}
.section_4 {
  margin-left: 31px;
  padding: 7px 0 9px;
  background-color: #ffffff;
  border-radius: 5px;
  width: 668px;
  height: 50px;
  border-left: solid 1px #e4e5e8;
  border-right: solid 1px #e4e5e8;
  border-top: solid 1px #e4e5e8;
  border-bottom: solid 1px #e4e5e8;
}
.group_5 {
  margin-left: 22px;
  overflow: hidden;
  width: 243px;
}
.group_6 {
  padding: 2px 0;
  overflow: hidden;
  width: 75px;
  height: 20px;
}
.image_4 {
  width: 24px;
  height: 16px;
}
.section_5 {
  background-color: #e4e5e8;
  width: 1px;
  height: 32px;
}
.text-wrapper_6 {
  padding: 4.5px 0 5px;
  overflow: hidden;
  width: 128px;
  height: 24px;
}
.font_5 {
  font-size: 16px;

  line-height: 14.5px;
  color: #9199a3;
}
.text_10 {
  line-height: 15px;
}
.text-wrapper_3 {
  margin-left: 21px;
  padding: 11.5px 0 10.5px;
  border-radius: 3px;
  width: 132px;
  height: 48px;
  font-size: 16px;
  font-family: Inter-Semi,system-ui;
  border-left: solid 1px #cee0f5;
  border-right: solid 1px #cee0f5;
  border-top: solid 1px #cee0f5;
  border-bottom: solid 1px #cee0f5;
}


:deep(.font_bottom) {
  width:30px;
  font-size: 16px;
  line-height: 24px;
  font-weight: 20;
  color: #0a65cc;
  margin-top: 12px;
}
:deep(.text-wrapper_4) {
  margin-left: 12px;
  padding: 13.5px 0 10.5px;
  font-size: 16px;
  font-family: Inter-Semi,system-ui;
  font-weight: 400;
  background-color: #0a65cc;
  border-radius: 3px;
  width: 132px;
  height: 48px;

}
.text_7 {
  width: 113px;
}
.text_119 {
  color: #18191c;
  font-size: 24px;
  line-height: 40px;
}
.text_125 {
  width: 85px;
}
:deep(.text_99) {
  color: #ffffff;
}
.font_25 {
  font-size: 14px;

  line-height: 20px;
  color: #767f8c;
}
.text_12 {
  color: #18191c;
  line-height: 11px;
}

</style>
<script >
export default {
  data() {
  return {}
},
  methods: {
  jump1 () {
  this.$router.push('HelloWorld')
},
  jump2 () {
    this.$router.push('dashboard')
  }
}
}
</script>

<template>

  <div class="flex-col section_6">
    <div class="flex-row justify-between items-start group_7">
    <div class="flex-col relative group_9">
        <div class="flex-col self-stretch group_8">
        <span class=" relative font_7 text_13">
          猪猪 错题集
          <br />
          一个
        </span>
          <div class="flex-row items-baseline self-start">
            <span class="shrink-0 font_7 text_14">最懂</span>
            <span class="font_7 text_15">错题的网站</span>
          </div>

                    </div>
                    <div class="flex-col items-center self-end group_10 mt-107">
                      <span class="font_8">次世代</span>
                      <span class="font_8">人工智能错题集平台</span>
                      <span class="font_8">帮助您解决平时不知如何整理错题的难点</span>
                    </div>
                  </div>
                  <img class="image_5" src="../assets/img/main_f_ico.png" />
                </div>
                <div>
                <el-button type="primary" @click="jump1" class="shangchuan" > 上传题目 </el-button>
                <el-button type="primary" @click="jump2" class="houtai" > 后台管理 </el-button>
                </div>

                <div class="flex-col justify-start items-center group_11 mt-186">
                  <div class="flex-row items-center">
                    <div class="flex-row items-center equal-division-item">
                      <img class="shrink-0 image_6" src="../assets/img/a5a7f439108d78a7d4462538a8717185.png" />
                      <div class="flex-col items-start shrink-0 group_12 ml-21">
                        <span class="font_9 text_17">用户 错题集</span>
                        <span class="mt-10 font_10 text_20">在线整理</span>
                      </div>
                    </div>
                    <div class="ml-24 flex-col justify-start equal-division-item_2 group_1">
                      <div class="flex-row items-center section_7 pos_1">
                        <img class="image_6" src="../assets/img/6cf2c6fafdf314c69c1b377e389363e9.png" />
                        <div class="flex-col items-start group_13 ml-21">
                          <span class="font_9 text_17">教师 发布</span>
                          <span class="mt-10 font_10 text_21">帮助教师发布题目</span>
                        </div>
                      </div>
                    </div>
                    <div class="ml-24 flex-row items-center equal-division-item">
                      <img class="image_6" src="../assets/img/Category/Icon10.png" />
                      <div class="flex-col items-start group_14 ml-21">
                        <span class="font_9 text_18">与同学交流</span>
                        <span class="font_10 text_22 mt-15">交流错题经验</span>
                      </div>
                    </div>
                    <div class="ml-24 flex-row items-center equal-division-item">
                      <img class="image_6" src="../assets/img/a5a7f439108d78a7d4462538a8717185.png" />
                      <div class="ml-20 flex-col items-start group_15">
                        <span class="font_9 text_19">用户中心</span>
                        <span class="font_10 text_23 mt-15">修改个人信息</span>
                      </div>
               </div>
            </div>
      </div>
    </div>
</template>

<style scoped lang="css">

.mt-107 {
  margin-top: 107px;
}
.mt-186 {
  margin-top: 186px;
}
.ml-21 {
  margin-left: 21px;
}
.mt-15 {
  margin-top: 15px;

}
.section_6 {
  padding-top: 90px;




}
.group_7 {
  padding: 0 122.5px;
}
.group_9 {
  padding-bottom: 32.5px;
  overflow: hidden;
  width: 650px;
  height: 400px;
}
.group_8 {
  margin-right: 51px;
  padding-left: 102px;
  height: 157px;
  width: 600px;
}
.font_7 {
  font-size: 76px;
  font-family: Inter;
  letter-spacing: -2px;
  line-height: 78.5px;
  font-weight: 900;
}
.text_13 {
  color: #171618;
}
.text_14 {
  color: #2b44e7;
}
.text_15 {
  margin-left: -7px;
  margin-right: -166px;
  color: #000000;
  width: 400px;
}
.group_10 {
  margin-right: 87px;
}
.font_8 {
  font-size: 25px;
  font-family: Inter;
  line-height: 34.5px;
  color: #171618;
}
.image_5 {
  margin-right: 193.5px;
  margin-top: 63px;
  width: 492px;
  height: 382px;
}
.group_11 {
  padding-top: 3.5px;
  overflow: hidden;
  height: 119px;
}
.image_6 {
  border-radius: 4px;
  width: 72px;
  height: 72px;
}
.group_12 {
  width: 179.5px;
}
.font_9 {
  font-size: 25px;
  font-family: Inter;
  line-height: 32px;
  color: #18191c;
}
.text_17 {
  font-size: 24px;
  width: 150px;
}
.font_10 {
  font-size: 16px;
  font-family: Inter;
  line-height: 14.5px;
  color: #767f8c;
}
.text_20 {
  line-height: 14.5px;
}
.equal-division-item {
  padding: 20px;
  background-color: #ffffff ;
  border-radius: 8px;
  height: 112px;

}
.equal-division-item_2 {
  position: relative;
}
.group_1 {
  padding-bottom: 12px;
  filter: drop-shadow(0px 12px 24px #002c6d1a);
  overflow: hidden;
  width: 312px;
  height: 124px;
}
.section_7 {
  padding: 20px 0 20px 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 12px 48px #002c6d1a;
}
.pos_1 {
  position: absolute;
  left: 0px;
  top: 5px;
  bottom: 5px;
}
.group_13 {
  width: 200px;
}
.text_21 {
  line-height: 15px;
}
.group_14 {
  width: 179.5px;
}
.text_18 {
  font-size: 24px;
  line-height: 22.5px;
}
.text_22 {
  line-height: 15px;
}
.group_15 {
  width: 179.5px;
}
.text_19 {
  font-size: 24px;
  line-height: 22.5px;
}
.text_23 {
  line-height: 15px;
}

.shangchuan {
  margin-top: 10px;
  margin-left: 250px;
  width: 150px;
  height: 60px;
  font-size: 20px;
  font-family: 方正姚体;
}

.houtai{
  margin-top: 10px;
  margin-left: 30px;
  width: 150px;
  height: 60px;
  font-size: 20px;
  font-family: 方正姚体;
}



</style>
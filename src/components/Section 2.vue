<script setup>
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
  <div class="flex-col group_32">
    <div class="flex-col self-center relative group_33">
      <span class="self-center font_13 text_68">讨论组</span>
      <span class="self-stretch font_8 text_69 mt-29">
      每一位 用户都可以发表自己对错题的看法，
      <br />
      为其他用户提供不一样的见解
    </span>
    </div>
    <div class="flex-row self-stretch">
      <div class="flex-col group_35">
      <span class="self-stretch font_15">
        猪猪错题集是一个特别方便的学习软件
        <br />
        可以一键生成错题，还可以举一反三查看类似题
        <br />
        对于整理错题与巩固知识都是不错的选择
        <br />
      </span>
        <span class="mt-26 self-center font_15 text_71">best   ❤</span>
      </div>
      <div class="flex-col group_36 ml-15">
      <span class="self-stretch font_15 text_38">
        炒鸡好用，管理、导出都很方便
        <br />
      </span>
        <span class="self-stretch font_15 text_38 text_70">
          简直解放双手，不用再花很多时问来抄题目了（感谢感谢）
        <br />
      </span>
        <span class="self-stretch font_15 text_38">
          但是数学试卷拍的时候会有一些画图的笔记，在消除笔记的时候会把图片全部抹掉了
        <br />
        希望能更细一点，能保持数学模型的原样是最好的了。
        <br />
      </span>
        <span class="self-center font_15 text_73">no going back ❤</span>
      </div>
      <div class="flex-col justify-start items-center group_37 ml-15">
      <span class="font_15 text_63">
        每次孩子的错题都要一题一题抄下来，不仅费时间还没有效率。
        <br />
        有了猪猪错题集以后省时省力，还可以拍笔记，转换文档各种功能
        <br />
        以后再也不用担心整理错题的问题了
      </span>
      </div>
    </div>
    <div class="flex-row self-stretch group_42">
      <div class="flex-col justify-start items-center group_43">
        <div class="flex-col group_44">
        <span class="font_15">
          比自己抄错题效率高很多
          <br />
          希望以后能联动作业帮或者小猿提高题库量
          <br />
        </span>
          <span class="font_15 text_38">
            （我们都是从他们那边搜题然后截屏过来不是很方便）
          <br />
        </span>
          <span class="font_15 text_38">
            字体大小改变能更人性化
          <br />
          非常感谢！
        </span>
        </div>
      </div>
      <div class="flex-col justify-start items-center group_45 ml-15">
        <div class="flex-col group_47">
        <span class="font_15">
          建议高年级的孩子一定要有整理错题本的习惯！
          <br />
          一个错题本，可以帮助你彻底告别低效的“题海战术”。
          <br />
          不断集中时间、精力，攻击自己的易错题、错题和难题
          <br />
        </span>
          <span class="mt-26 font_15 text_38">
            把有限的火力，全部集中在自己的薄弱短板上
          <br />
          当然提分效率最高！
          <br />
          继续加油吧！
        </span>
        </div>
      </div>
      <div class="flex-col justify-start items-center group_46 ml-15">
        <div class="flex-col group_48">
        <span class="self-stretch font_15 text_38">
          太棒了！拍照清晰，去手写完美！
          <br />
        </span>
          <span class="self-start font_15 text_80">匹配的准确率也高，用起来很顺手。期待后面的新功能</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="css">
.mt-29 {
  margin-top: 29px;
}
.ml-15 {
  margin-left: 15px;
}
.font_8 {
  font-size: 25px;
  font-family: Inter;
  line-height: 34.5px;
  color: #171618;
}
.font_13 {
  font-size: 52.5px;
  font-family: Inter;
  letter-spacing: -1.5px;
  font-weight: 900;
  color: #171618;
}
.group_32 {
  margin-top: 77.5px;
  padding: 0 321.5px 98px 321.5px;
  height: 1200px;
}
.group_33 {
  padding-bottom: 182px;
  width: 500px;
}
.text_68 {
  line-height: 47.5px;
}
.text_69 {
  text-align: center;
}
.group_35 {
  padding: 58px 56.5px 220.5px;
  flex: 1 1 415px;
  border-radius: 16px;
  height: 358.5px;
  border-left: solid 1px #38388a1f;
  border-right: solid 1px #38388a1f;
  border-top: solid 1px #38388a1f;
  border-bottom: solid 1px #38388a1f;
}
.font_15 {
  font-size: 18.5px;
  font-family: Inter;
  line-height: 26px;
  color: #5b5a59;
}
.text_38 {
  word-break: break-all;
}
.text_71 {
  word-break: break-all;
  width: 72px;
}
.group_36 {
  padding: 57.5px 56.5px 168.5px;
  flex: 1 1 415px;
  border-radius: 16px;
  height: 358.5px;
  border-left: solid 1px #38388a1f;
  border-right: solid 1px #38388a1f;
  border-top: solid 1px #38388a1f;
  border-bottom: solid 1px #38388a1f;
}
.text_70 {
  margin-top: 3.5px;
}
.text_73 {
  margin-top: 25.5px;
  word-break: break-all;
  width: 232.5px;
}
.group_37 {
  padding: 57.5px 0 272.5px;
  flex: 1 1 415px;
  border-radius: 16px;
  height: 358.5px;
  border-left: solid 1px #38388a1f;
  border-right: solid 1px #38388a1f;
  border-top: solid 1px #38388a1f;
  border-bottom: solid 1px #38388a1f;
}
.text_63 {
  width: 300px;
}
.group_42 {
  margin-top: 66px;
}
.group_43 {
  padding-bottom: 169.5px;
  flex: 1 1 415px;
  border-radius: 16px;
  height: 358.5px;
  border-left: solid 1px #38388a1f;
  border-right: solid 1px #38388a1f;
  border-top: solid 1px #38388a1f;
  border-bottom: solid 1px #38388a1f;
}
.group_44 {
  padding: 57.5px 0 51px;
  width: 300px;
}
.group_45 {
  padding: 56px 0 144.5px;
  flex: 1 1 415px;
  border-radius: 16px;
  height: 358.5px;
  border-left: solid 1px #38388a1f;
  border-right: solid 1px #38388a1f;
  border-top: solid 1px #38388a1f;
  border-bottom: solid 1px #38388a1f;
}
.group_47 {
  padding-bottom: 76.5px;
  overflow: hidden;
  width: 300px;
  height: 156px;
}
.group_46 {
  padding: 56px 0 222.5px;
  flex: 1 1 415px;
  border-radius: 16px;
  height: 358.5px;
  border-left: solid 1px #38388a1f;
  border-right: solid 1px #38388a1f;
  border-top: solid 1px #38388a1f;
  border-bottom: solid 1px #38388a1f;
}
.group_48 {
  padding: 2.5px 0 24px;
  overflow: hidden;
  width: 304px;
  height: 78px;
}
.text_80 {
  word-break: break-all;
  width: 262.5px;
}
.image_12 {
  margin-right: 30.5px;
  margin-top: 82px;
  width: 1056px;
  height: 1080px;
}
</style>
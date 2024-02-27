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
        All eFounders teams have moved
        <br />
        to Nexus for all things product
        <br />
        management and it is truly a
        <br />
      </span>
        <span class="mt-26 self-center font_15 text_71">game-changer.</span>
      </div>
      <div class="flex-col group_36 ml-15">
      <span class="self-stretch font_15 text_38">
        ability to adapt to our processes,
        <br />
      </span>
        <span class="self-stretch font_15 text_38 text_70">
        not the other way around.Now
        <br />
      </span>
        <span class="self-stretch font_15 text_38">
        that we have all user insights
        <br />
        visible in our PRDs doc, there is
        <br />
      </span>
        <span class="self-center font_15 text_73">no going back ❤</span>
      </div>
      <div class="flex-col justify-start items-center group_37 ml-15">
      <span class="font_15 text_63">
        Nexus is the gear that keeps our
        <br />
        product feedback management
        <br />
        running like clockwork.
      </span>
      </div>
    </div>
    <div class="flex-row self-stretch group_42">
      <div class="flex-col justify-start items-center group_43">
        <div class="flex-col group_44">
        <span class="font_15">
          Managing feedback throughout
          <br />
          the whole Nexus has been a
          <br />
        </span>
          <span class="font_15 text_38">
          tedious task until we discovered
          <br />
        </span>
          <span class="font_15 text_38">
          Nexus: a simple tool enabling you
          <br />
          to do complex things.
        </span>
        </div>
      </div>
      <div class="flex-col justify-start items-center group_45 ml-15">
        <div class="flex-col group_47">
        <span class="font_15">
          Nexus makes it easy to contact
          <br />
          the most relevant users
          <br />
          whenever I need feedback on a
          <br />
        </span>
          <span class="mt-26 font_15 text_38">
          new product initiative. It helps me
          <br />
          capture all the necessary
          <br />
          customer context without friction.
        </span>
        </div>
      </div>
      <div class="flex-col justify-start items-center group_46 ml-15">
        <div class="flex-col group_48">
        <span class="self-stretch font_15 text_38">
          for everyone when it comes to
          <br />
        </span>
          <span class="self-start font_15 text_80">product feedback</span>
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
  width: 472px;
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

</style>
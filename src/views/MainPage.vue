<script setup lang="ts">
  import Banner from '../components/Banner.vue';               // 导航栏
  import Navigation  from "../components/Navigation.vue";      // 搜索栏
  import Frame1 from "../components/Frame 1.vue";              // 主功能
  import Category from "../components/Category.vue";           // 工具箱
  import Testimonial from "../components/Testimonial.vue";     //  用户评价
  import Section1 from '../components/Section 1.vue';          // 介绍1--自定义错题
  import RoadMap  from "../components/RoadMap.vue";             // 路线图
  import Section2 from '../components/Section 2.vue';          // 讨论组
  import Section3 from '../components/Section 3.vue';          // 合作商
  import OurTeams from "../components/OurTeams.vue";           // 我们的团队
  import News from "../components/News.vue";                    // 新闻
  import Frame2 from "../components/Frame 2.vue";              //联系栏
  import MessageBoard from "../components/MessageBoard.vue";  // 留言板
  import Footer from "../components/Footer.vue";               // 底栏
  import FloatingWindow from '../components/FloatingWindow.vue';  // 导入悬浮窗组件
</script>

<!--   App.vue  -->
  <template>
    <div>
<!--       创建一个滚动容器 -->
      <div class="scroll-container" ref="scrollContainerRef">
<!--         布局头部 -->
        <Banner />
        <Navigation />
        <div class="section">  <!-- 主功能页添加图片背景-->
          <div class="section-shadow">  <!-- 添加阴影-->
              <Frame1 />
          </div>
        </div>
        <Category />
        <Testimonial />
        <Section1 />
        <Section2 />
        <RoadMap/>
        <Section3 />
        <OurTeams/>
        <MessageBoard/>
        <news/>
        <Frame2 />
        <Footer />
      </div>
        <FloatingWindow />
    </div>
  </template>




<style lang="scss" scoped>

/* 添加样式以实现滚动效果 */
.scroll-container {
  height: 100vh; /* 或其他合适的高度值 */
  overflow: auto; /* 启用滚动 */
  padding: 20px; /* 或其他合适的内边距 */
}

.section {

  background-image: url('../assets/img/ffe7fbbff928a639566523362a584959.png');
  background-size: 100% 100%;
  background-repeat: no-repeat;

}


.section-shadow {
  padding-bottom: 18px;
  background-color: #f1f2f499;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
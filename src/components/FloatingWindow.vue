<template>
  <!-- 悬浮窗 -->
    <!-- top按钮 -->
    <div class="button_up top" @click="scrollToTop" :class="btnClass">
      <img class="icon" src="../assets/img/FloatingWindow/up.png" alt="Top Button">
    </div>
    <!-- bottom按钮 -->
    <div class="button_down bottom" @click="scrollToBottom" :class="btnClass">
      <img class="icon" src="../assets/img/FloatingWindow/down.png" alt="Bottom Button">
    </div>
    <!-- left按钮 -->
    <div class="button_list left" :class="btnClass">
      <img class="icon" src="../assets/img/FloatingWindow/list.png" alt="Left Button">
    </div>
    <!-- 中心按钮 -->
    <div class="button center" @click="toggleIcons">
      <img class="icon" src="../assets/img/FloatingWindow/plus.png" alt="Center Button">
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';



export default defineComponent({
  setup() {
    // 使用 ref 创建一个响应式引用，用于控制按钮的显示状态
    const isExpanded = ref(false);

    // 使用 ref 创建一个响应式引用，用于控制按钮的类名
    const btnClass = ref('hidden');

    // 定义一个方法，用于处理中心按钮的点击事件，切换按钮的显示状态
    function toggleIcons() {
      isExpanded.value = !isExpanded.value;
      btnClass.value = isExpanded.value ? 'open' : 'close';
    }

// 触发滚动到页面底部的事件
    function scrollToBottom() {
      // 使用 Vue 的 $nextTick 确保 DOM 更新后再进行滚动
      this.$nextTick(() => {
        // 获取滚动容器的引用，这里假设你有一个 ID 为 'scroll-container' 的元素
        const scrollContainer = document.getElementById('scroll-container');

        // 如果找到了滚动容器，滚动到底部
        if (scrollContainer) {
          scrollContainer.scrollTop = scrollContainer.scrollHeight;
        }
      });
    }

// 触发滚动到顶部的事件
    function scrollToTop() {
          this.$router.push('MainPage'); // 确保路径正确
    }


    // 返回响应式数据和方法，以便在模板中使用
    return {
      isExpanded,
      btnClass,
      toggleIcons,
      scrollToTop,
      scrollToBottom
    };
  }
});
</script>


<style  lang="scss">
.suspenPopup {
  position: absolute;
  width: 100%; /* 宽度设置为100%，以便占据整个页面宽度 */
  z-index: 1000;
}

.button {
  border-radius: 50%;
  position: absolute;
  width: 45px;
  height: 45px;
  background: rgb(235, 155, 50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  /* 使用绝对定位将按钮放置在右下角 */
  top: 850px; /* 从底部向上偏移 */
  left: 25px; /* 从右侧向内偏移 */
}


.button_up {
  border-radius: 50%;
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgb(235, 155, 50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  /* 使用绝对定位将按钮放置在右下角 */
  top: 850px; /* 从底部向上偏移 */
  left: 25px; /* 从右侧向内偏移 */
}

.button_down {
  border-radius: 50%;
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgb(235, 155, 50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  /* 使用绝对定位将按钮放置在右下角 */
  top: 850px; /* 从底部向上偏移 */
  left: 25px; /* 从右侧向内偏移 */
}

.button_list {
  border-radius: 50%;
  position: absolute;
  width: 30px;
  height: 30px;
  background: rgb(235, 155, 50);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  /* 使用绝对定位将按钮放置在右下角 */
  top: 850px; /* 从底部向上偏移 */
  left: 25px; /* 从右侧向内偏移 */
}

.icon {
  width: 80%;
  height: auto;
}

.top, .bottom, .left, .center {
  &.open {
    opacity: 1;
  }
  &.close {
    opacity: 0;
  }
}

.top {
  transform-origin: 50% 0;
}

.bottom {
  transform-origin: 50% 100%;
}

.left {
  transform-origin: 0 50%;
}

.center {
  transform-origin: 50% 50%;
}

.top.open {
  transform: rotate(360deg) translateY(-35px) translateX(15px);
}

.left.open {
  transform: rotate(360deg) translateY(10px) translateX(50px);
}

.bottom.open {
  transform: rotate(360deg) translateY(50px) translateX(15px);
}



.hidden {
  opacity: 0;
}
</style>
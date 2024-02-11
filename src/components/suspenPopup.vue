<template>
  <div class="suspenPopup"
       :style="{top: `${elTop}px`, left: `${elLeft}px`, width: `${width}px`, height: `${height}px`, zIndex: `${zIndex}`}"
       @touchmove.prevent.stop="onTouchMove" @touchstart="onTouchStart">
    <!-- 插槽-自定义内容 -->
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: [String, Number],
      default: 100
    },
    width: {
      type: [String, Number],
      default: 100
    },
    top: {
      type: [String, Number],
      default: 'auto'
    },
    left: {
      type: [String, Number],
      default: 'auto'
    },
    zIndex: {
      type: Number,
      default: 999
    }
  },

  data() {
    return {
      elTop: 0, // 组件距离顶部距离
      elLeft: 0, // 组件距离左边距离
      windowHeight: 0, // 窗口高度
      windowWidth: 0, // 窗口宽度
      rate: 0, // px和rpx换算比例
      windowTop: 0, // 窗口距离屏幕顶部距离
      startX: 0, // 开始移动触摸点x坐标，相对页面左上角
      startY: 0, // 开始移动点触摸点y坐标，相对页面左上角
      startTop: 0, // 悬浮框顶部距离顶部距离
      startLeft: 0, // 悬浮窗左边距离页面左边距离
    }
  },
  created() {
    // 使用window对象获取屏幕尺寸
    this.windowWidth = window.innerWidth;
    this.windowHeight = window.innerHeight;
    this.windowTop = window.scrollY;

    // 设置初始位置
    this.elTop = this.top === 'auto' ? this.windowTop : this.top;
    this.elLeft = this.left === 'auto' ? 0 : this.left;
  },
  methods: {
    onTouchStart(e) {
      this.startX = e.touches[0].clientX;
      this.startY = e.touches[0].clientY;
      this.startTop = this.elTop;
      this.startLeft = this.elLeft;
    },
    onTouchMove(e) {
      let x = e.touches[0].clientX;
      let y = e.touches[0].clientY;

      if (x < 0) x = 0;
      let elLeft = this.startLeft + (x - this.startX);

      elLeft = Math.min(elLeft, this.windowWidth - this.width);
      this.elLeft = elLeft > 0 ? elLeft : 0;

      if (y < 0) y = 0;
      let elTop = this.startTop + (y - this.startY);

      elTop = Math.min(elTop, this.windowHeight - this.height + this.windowTop);
      this.elTop = Math.max(elTop, this.windowTop);
    },
  },
};
</script>

<style lang="scss" >
.suspenPopup {
  z-index:1000;
}
</style>
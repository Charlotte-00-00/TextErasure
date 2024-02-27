<template>
  <h1 class="title">  技术路线  </h1>
  <el-timeline>
    <el-timeline-item center timestamp="2023/10/12" placement="top">
      <el-card >
        <h4>前端技术</h4>
        <p>HTML + CSS + JavaScript + TypeScript
          Vue.js框架：用于构建用户界面的渐进式框架。
          Vite：快速开发构建
          UI组件库：Element UI及Vuetify，tailwind，用于快速开发美观的界面</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2023/10/12" placement="top">
      <el-card>
        <h4>后端技术</h4>
        <p>Django框架：基于Python的Web框架，用于处理服务器端的逻辑。
          DRF（Django REST Framework）：构建Web APIs的强大灵活的工具集。
          深度学习模型：使用PyTorch框架的opencv及百度Paddle框架的paddleocr,deeplabv3+等实现错题的智能识别和处理。</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="2023/10/12" placement="top">
      <el-card>
        <h4>数据库</h4>
        <p>MySQL：关系型数据库，用于存储用户数据、错题信息等。
          Redis：作为缓存层，提高数据访问速度和处理并发请求的能力。</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item timestamp="2023/10/12" placement="top">
      <el-card>
        <h4>部署与运维</h4>
        <p>Docker容器化部署：确保环境一致性和可移植性。
          Kubernetes或Docker Swarm：用于集群管理和自动容灾。
          CI/CD流程：自动化构建、测试和部署应用。</p>
      </el-card>
    </el-timeline-item>
    <el-timeline-item center timestamp="2023/10/12" placement="top">
      <el-card>
        <h4>其他工具</h4>
        <p>Nginx：作为反向代理服务器，处理静态文件服务和负载均衡。
          Git：版本控制系统，用于团队协作和代码管理。</p>
      </el-card>
    </el-timeline-item>

<!--    <el-timeline-item center timestamp="2023/10/12" placement="top">-->
<!--      1-->
<!--    </el-timeline-item>-->
<!--    <el-timeline-item timestamp="2023/10/12" placement="top">-->
<!--      2-->
<!--    </el-timeline-item>-->

    <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
</template>

<script lang="ts" setup>
import { MoreFilled } from '@element-plus/icons-vue'

const activities = [
  {
    content: '编写后端',
    timestamp: '2024/1/12',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: '编写前端',
    timestamp: '2024/2/12',
    color: '#0bbd87',
  },
  {
    content: '第一次测试',
    timestamp: '2024-04-03 ',
    size: 'large',
  },
  {
    content: '第二次测试',
    timestamp: '2024-04-03 ',
    type: 'primary',
    hollow: true,
  },
  {
    content: '部署运维',
    timestamp: '2024-04-03 ',
  },
]
</script>

<style scoped>
.title {
  font-size: 40px;
  color: #333333;
  padding-bottom: 8px;
  position: relative;
  text-align: center;
}

</style>
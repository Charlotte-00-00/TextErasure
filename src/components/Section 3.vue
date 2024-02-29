<script setup>
import { useRouter } from 'vue-router';
import { reactive, onMounted } from 'vue';

const props = defineProps({});

const data = reactive({});

const router = useRouter();
</script>

<template>
  <div class="flex-col section_22">

    <div class="mt-70 flex-col self-stretch group_53">
      <div class="flex-row items-center group_54">
        <img class="image_16" src="../assets/img/daotu.jpg" />

      </div>

    </div>
  </div>
</template>

<style scoped lang="css">

.section_22 {
  padding: 5.5px 321.5px 67px 321.5px;
  background-color: #38388a1f;
}

.group_53 {
  padding-left: 26px;
  padding-right: 21px;
  border-left: solid 2px #38388a1f;
  border-right: solid 2px #38388a1f;
  border-top: solid 2px #38388a1f;
  border-bottom: solid 2px #38388a1f;
}
.group_54 {
  padding-left: 16px;
  padding-right: 14px;
}
.image_16 {
  width: 1080px;
  height: 500px;
}

</style>
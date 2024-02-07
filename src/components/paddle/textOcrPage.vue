<template>
  <div class="scroll-container">
    <div v-loading="loading" :element-loading-text="loadingText" element-loading-background="rgba(122, 122, 122, 0.8)">
        <div  style="border:2px solid black; margin-top: 10px; width:1400px; margin-left: 10px;">
          <h1 class="title" >
                文本 OCR 在线识别
            </h1>
        </div>
        <div style="margin-top:100px;">
            <el-upload
                class="avatar-uploader"
                action="/api/paddleApp/upload-image-ocr"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"

            >
            <img v-if="imageUrlForRecognition" :src="imageUrlForRecognition" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus></Plus></el-icon>
            </el-upload>

            <el-card shadow="never">
                 <template #header>
                    <div class="card-header">
                        <span>OCR 识别结果</span>
                    </div>
                 </template>
                 <div style="text-align: center;font-size: 20px;color:royalblue" v-for="o in resultTextForRecognition" :key="o" class="text item">{{o[1][0] ?o[1][0]:'' }}</div>

            </el-card>
          </div>

        <div   style="border:2px solid black; margin-top: 10px; width:1400px; margin-left: 10px;">
          <h1 class="title" >
            文本 OCR 在线消除
          </h1>
        </div>

          <div style="margin-top:100px">
            <el-upload
                class="avatar-uploader"

                action="/api/paddleApp/upload-image"
                :show-file-list="false"
                :on-success="handleAvatarSuccess2"
                :before-upload="beforeAvatarUpload">
              <img v-if="imageUrlForRemoval" :src="imageUrlForRemoval" class="avatar" />
              <el-icon v-else class="avatar-uploader-icon"><Plus></Plus></el-icon>
            </el-upload>

            <el-card shadow="never">
              <template #header>
                <div class="card-header">
                  <span>OCR 消除结果</span>
                </div>
              </template>
<!--              <div style="text-align: center;">-->
<!--                &lt;!&ndash; 使用 img 标签显示图片 &ndash;&gt;-->
<!--                <img :src="imageUrlForRemoval" alt="OCR Result" style="max-width: 100%; height: auto;">-->
<!--              </div>-->
              <div v-html="resultTextForRemoval" style="text-align: center; font-size: 20px; color: royalblue;"></div>

            </el-card>
          </div>
    </div>
  </div>
</template>



<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps } from 'element-plus'

const loading = ref(false)
const loadingText = ref('识别中，请耐心等待')


const loadingForRecognition = ref(false)
const loadingForRemoval = ref(false)

// ... 其他代码 ...
// 为 OCR 识别创建独立的状态
const imageUrlForRecognition = ref('')
const resultTextForRecognition = ref('')

// 为 OCR 消除创建独立的状态
const imageUrlForRemoval = ref('')
const resultTextForRemoval = ref('')

const imageUrlForRemoval1 = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
  const resultData = response.data;
  resultTextForRecognition.value = resultData.result; // 假设后端返回的数据结构是 { status: 'success', result: '实际的 OCR 结果' }
  imageUrlForRecognition.value = URL.createObjectURL(uploadFile.raw!);
  loading.value = false;
  loadingForRecognition.value = false;
};

// 对于 handleAvatarSuccess2 也做类似的更改

const handleAvatarSuccess2: UploadProps['onSuccess'] = (response, uploadFile) => {
  const resultData = response.data
  resultTextForRemoval.value = resultData.result
  imageUrlForRemoval.value = URL.createObjectURL(uploadFile.raw!)
  loading.value =false
  loadingForRemoval.value = false
}

const handleAvatarError: UploadProps['onError'] = (err, uploadFile, fileList) => {
  ElMessage.error('OCR 识别上传失败')
  loadingForRecognition.value = false
}

const handleAvatarError2: UploadProps['onError'] = (err, uploadFile, fileList) => {
  ElMessage.error('OCR 消除上传失败')
  loadingForRemoval.value = false
}


const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
// 上传文件检查
  if (!(rawFile.type === 'image/jpeg' || rawFile.type === 'image/png')) {
    ElMessage.error('Avatar picture must be JPG format!')
    return false
  } else if (rawFile.size / 1024 / 1024 > 2) {
    ElMessage.error('Avatar picture size can not exceed 2MB!')
    return false
  }
  loading.value = true
  return true
}

</script>








<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-left: 600px;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.el-card{
  margin-top: 50px;
  height: 100%;
}

.el-card__header{
  font-weight: 550;
  font-size: 30px;
  margin-left: 600px;
}
.img{
  width: 400px;
}
.title{
  margin-top:10px;
  margin-left: 550px;
}
.scroll-container {
  height: 100vh; /* 或其他合适的高度值 */
  overflow: auto; /* 启用滚动 */
  padding: 20px; /* 或其他合适的内边距 */
}

</style>




<!--<script lang="ts" setup>-->
<!--import { ref } from 'vue'-->
<!--import { ElMessage } from 'element-plus'-->
<!--import { Plus } from '@element-plus/icons-vue'-->
<!--import type { UploadProps } from 'element-plus'-->

<!--const imageUrl = ref('')-->
<!--const resultText = ref('')-->
<!--const loading = ref(false)-->
<!--const loadingText = ref('识别中，请耐心等待')-->


<!--const handleAvatarSuccess: UploadProps['onSuccess'] = (-->
<!--  response,-->
<!--  uploadFile-->
<!--) => {-->
<!--  const resultData = response.data-->
<!--  resultText.value = resultData.result-->
<!--  imageUrl.value = URL.createObjectURL(uploadFile.raw!)-->
<!--  loading.value =false-->

<!--}-->

<!--const handleAvatarSuccess2: UploadProps['onSuccess'] = (-->
<!--    response,-->
<!--    uploadFile-->
<!--) => {-->
<!--  const resultData = response.data-->
<!--  resultText.value = resultData.result-->
<!--  imageUrl.value = URL.createObjectURL(uploadFile.raw!)-->
<!--  loading.value =false-->

<!--}-->


<!--const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {-->

<!--  if (!(rawFile.type === 'image/jpeg' || rawFile.type === 'image/png')) {-->
<!--    ElMessage.error('Avatar picture must be JPG format!')-->
<!--    return false-->
<!--  } else if (rawFile.size / 1024 / 1024 > 2) {-->
<!--    ElMessage.error('Avatar picture size can not exceed 2MB!')-->
<!--    return false-->
<!--  }-->
<!--  loading.value = true-->
<!--  return true-->
<!--}-->


<!--</script>-->





// 改
<!--<template>-->
<!--  <div v-loading="loading" :element-loading-text="loadingText" element-loading-background="rgba(122, 122, 122, 0.8)">-->
<!--            <div  style="border:1px solid black">-->
<!--                <h1>-->
<!--                    文本 OCR 在线识别-->
<!--                </h1>-->
<!--            </div>-->
<!--            <div style="margin-top:100px">-->

<!--              <el-upload-->
<!--                  class="avatar-uploader"-->
<!--                  action="/api/paddleApp/upload-image"-->
<!--                  :show-file-list="false"-->
<!--                  :on-success="handleAvatarSuccess"-->
<!--                  :on-error="handleAvatarError"-->
<!--                  :before-upload="beforeAvatarUpload">-->
<!--              </el-upload>-->
<!--                <el-card shadow="never">-->
<!--                     <template #header>-->
<!--                        <div class="card-header">-->
<!--                            <span>OCR 识别结果</span>-->
<!--                        </div>-->
<!--                     </template>-->
<!--                     <div style="text-align: center;font-size: 20px;color:royalblue" v-for="o in resultText" :key="o" class="text item">{{o[1][0] ?o[1][0]:'' }}</div>-->
<!--                </el-card>-->
<!--              </div>-->

<!--            <div  style="border:1px solid black">-->
<!--              <h1>-->
<!--                文本 OCR 在线消除-->
<!--              </h1>-->
<!--            </div>-->

<!--              <div style="margin-top:100px">-->
<!--                <el-upload-->
<!--                    class="avatar-uploader"-->
<!--                    action="/api/paddleApp/upload-image"-->
<!--                    :show-file-list="false"-->
<!--                    :on-success="handleAvatarSuccess2"-->
<!--                    :on-error="handleAvatarError2"-->
<!--                    :before-upload="beforeAvatarUpload">-->
<!--                </el-upload>-->
<!--                <el-card shadow="never">-->
<!--                  <template #header>-->
<!--                    <div class="card-header">-->
<!--                      <span>OCR 消除结果</span>-->
<!--                    </div>-->
<!--                  </template>-->
<!--                  <div style="text-align: center;font-size: 20px;color:royalblue" :src="resultText"> </div>-->
<!--                </el-card>-->
<!--              </div>-->

<!--    </div>-->
<!--</template>-->

<script setup lang="ts">

</script>

<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="exWordToPdf.css">
    <title>工具箱_转文档</title>
  </head>
  <body>
  <div class="title">
    <br><br>
    <img src="../assets/picture/logo_exWordtoPdf.png" alt="">
    <p class="p1">文档类型转换</p>
  </div>
  <div class="word">
    <p class="p2">
      <br>同学！
      <br>我们上线了文件转换功能，
      <br>你可以将图片转化为pdf格式或者将pdf转化为word，
      <br>快来试试吧！
    </p>
  </div>
  <div class="box">
    <img src="../assets/picture/WORD.png" alt="" style="margin: 180px 20px;">
    <img src="../assets/picture/arrow.png" alt="" style="margin: 200px 10px;">
    <img src="../assets/picture/PDF.png" alt="" style="margin: 180px 10px;">
    <img src="../assets/picture/OR.png" alt="" style="margin: 0 0;">
    <img src="../assets/picture/PDF.png" alt="" style="margin: 180px 10px;">
    <img src="../assets/picture/arrow.png" alt="" style="margin: 200px 20px;">
    <img src="../assets/picture/WORD.png" alt="" style="margin: 180px 0px;">
    <div class="file-upload1">
      <label for="upload1" class="file-upload-label1">Word转PDF</label>
      <input type="file" id="upload1">
    </div>
    <div class="file-upload2">
      <label for="upload2" class="file-upload-label2">Pdf转Word</label>
      <input type="file" id="upload2">
    </div>
  </div>
  </body>
  </html>
</template>

<style scoped>
* {
  user-select: none;
}

body {
  background-image: url('../assets/picture/Background.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  /* 使背景图片固定 */
  margin: 0;
  /* 去掉默认的页面外边距 */
  padding: 0;
  /* 去掉默认的页面内边距 */
}

.title {
  width: 370px;
  height: 164px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 22px;
  position: absolute;
  top: 8%;
  left: 7%;
}

.word{
  width: 800px;
  height: 164px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 22px;
  position: absolute;
  top: 8%;
  left: 40%;
}

.box {
  position: absolute;
  width: 1500px;
  height: 657px;
  left: 100px;
  top: 270px;
  background: rgb(208, 213, 219);
  border-radius: 112px;
}

.p1{
  font-size:x-large;
  font-weight: 800;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 30%;
}

.p2{
  font-size:large;
  font-weight: 500;
  text-align: center;
}

.file-upload1 {
  position: absolute;
  bottom: 15%;
  left: 17%;
  overflow: hidden;
  display: inline-block;
}

.file-upload1 input {
  position: absolute;
  font-size: 800px;
  right: 0;
  top: 0;
  opacity: 0;
}

.file-upload-label1 {
  display: inline-block;
  padding: 10px 15px;
  background-color: rgb(22, 45, 58);
  color: #fff;
  cursor: pointer;
  border-radius: 22px;
}

.file-upload2 {
  position: absolute;
  bottom: 15%;
  right: 17%;
  overflow: hidden;
  display: inline-block;
}

.file-upload2 input {
  position: absolute;
  font-size: 800px;
  right: 0;
  top: 0;
  opacity: 0;
}

.file-upload-label2 {
  display: inline-block;
  padding: 10px 15px;
  background-color: rgb(22, 45, 58);
  color: #fff;
  cursor: pointer;
  border-radius: 22px;
}


</style>
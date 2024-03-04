<script setup lang="ts">

</script>

<template>
  <head>
    <meta charset="UTF-8">
    <title>最新动态</title>
  </head>
  <body>
  <div class="newsCenterPanel">
    <div class="title">
      <a href="#" target="_self">最新动态</a>
    </div>
    <div class="newsCenterPanel_inner">

      <div class="newContentBox odd">
        <a hidefocus="true" href="#">
          <div class="time">
            <p class="day">2</p>
            <p class="ym">2024-1</p>
          </div>
          <div class="newTitle">[精]错题集 正式上线</div>

          <div class="newTitleIcon"></div>
          <div class="border"></div>
          <div class="newContent">
            1月2日，猪猪错题集 “错题集”正式上线，用户将能通过保存自己的错题，轻松打造属于自己的错题复习本
          </div>
        </a>
      </div>
      <div class="newContentBox even">
        <a hidefocus="true" href="#">
          <div class="time">
            <p class="day">29</p>
            <p class="ym">2024-4</p>
          </div>
          <div class="newTitle">[精]讨论组 正式上线</div>

          <div class="newTitleIcon"></div>
          <div class="border"></div>
          <div class="newContent">
            讨论组……
          </div>
        </a>
      </div>
      <div class="newContentBox odd">
        <a hidefocus="true" href="#">
          <div class="time">
            <p class="day">8</p>
            <p class="ym">2019-1</p>
          </div>
          <div class="newTitle">20230109功能更新（1月第二周）</div>

          <div class="newTitleIcon"></div>
          <div class="border"></div>
          <div class="newContent">
            手机码验证防刷、作品分享
          </div>
        </a>
      </div>
      <div class="newContentBox even">
        <a hidefocus="true" href="#">
          <div class="time">
            <p class="day">8</p>
            <p class="ym">2019-1</p>
          </div>
          <div class="newTitle">20230109功能更新（1月第二周）</div>

          <div class="newTitleIcon"></div>
          <div class="border"></div>
          <div class="newContent">
            。。。。。。
          </div>
        </a>
      </div>
      <div class="newContentBox odd">
        <a hidefocus="true" href="#">
          <div class="time">
            <p class="day">7</p>
            <p class="ym">2019-1</p>
          </div>
          <div class="newTitle">20230109功能更新（1月第二周）</div>

          <div class="newTitleIcon"></div>
          <div class="border"></div>
          <div class="newContent">
            。。。。。
          </div>
        </a>
      </div>
      <div class="newContentBox even">
        <a hidefocus="true" href="#">
          <div class="time">
            <p class="day">4</p>
            <p class="ym">2019-1</p>
          </div>
          <div class="newTitle">20230109功能更新（1月第二周）</div>

          <div class="newTitleIcon"></div>
          <div class="border"></div>
          <div class="newContent">
            .......
          </div>
        </a>
      </div>
      <div class="newContentBox odd">
        <a hidefocus="true" href="#">
          <div class="time">
            <p class="day">3</p>
            <p class="ym">2019-1</p>
          </div>
          <div class="newTitle">20230109功能更新（1月第二周）</div>

          <div class="newTitleIcon"></div>
          <div class="border"></div>
          <div class="newContent">
            .....
          </div>
        </a>
      </div>
      <div class="newContentBox even">
        <a hidefocus="true" href="#">
          <div class="time">
            <p class="day">2</p>
            <p class="ym">2019-1</p>
          </div>
          <div class="newTitle">20230109功能更新（1月第二周）</div>
          <div class="newTitleIcon"></div>
          <div class="border"></div>
          <div class="newContent">
            增加了前端主页的联系栏
          </div>
        </a>
      </div>
    </div>
  </div>

  </body>


</template>

<style scoped>

*{padding: 0;margin: 0;font-family: "微软雅黑";}
ul{list-style: none;}
a{text-decoration: none;}
.newsCenterPanel{width: 100%; height: 793px; background: #fff; overflow: hidden; *padding-bottom: 50px}
.newsCenterPanel .title{position: relative; width: 410px; height: 85px; line-height: 85px; margin: 35px auto 30px auto; font-size: 50px; font-weight: normal; padding-top: 30px}
.newsCenterPanel .title a{display: block; width: 100%; color: #2e2e30; text-align: center; }
.newsCenterPanel_inner{width: 1200px; margin: 0 auto}
.newsCenterPanel_inner .newContentBox{float: left; width: 550px; height: 138px; text-align: left; vertical-align: top; position: relative}
.newsCenterPanel_inner .newContentBox.odd{margin-right: 100px}
.newsCenterPanel_inner .newContentBox a{cursor: pointer}
.newsCenterPanel_inner .newContentBox .newTitle{float: left; line-height: 44px; height: 50px; font-size: 16px; color: #333; width: 400px; white-space: nowrap; word-break: normal; overflow: hidden; text-overflow: ellipsis}
.newsCenterPanel_inner .newContentBox a:hover .newTitleIcon{background-color: #4a68ec}
.newsCenterPanel_inner .newContentBox .newTitleIcon{width: 19px; height: 19px;  background-color: #a6a6a6; position: absolute; right: 0; top: 14px}
.newsCenterPanel_inner .newContentBox .border{position: absolute; left: 87px; top: 44px; width: 21px; border-top: 1px solid #4a68ec}
.newsCenterPanel_inner .newContentBox .newContent{float: left; height: 50px; width: 464px; font-size: 14px; line-height: 28px; color: #b0b0b0; margin-bottom: 50px; overflow: hidden; word-wrap: break-word; text-overflow: ellipsis; display: -webkit-box;}
.newContentBox .time{width: 54px; height: 54px; border: 1px solid #4a68ec; background: #fff; text-align: center; margin-right: 30px; margin-top: 14px; float: left}
.newContentBox .time .day{font-size: 20px; color: #4c67e8; padding: 6px 0 0 0}
.newContentBox .time .ym{font-size: 12px; color: #b3b9f5}
.newContentBox a:hover .time{background: #4a68ec}
.newContentBox a:hover .day{color: #fff}
.newContentBox a:hover .ym{color: #b5bcf3}

</style>
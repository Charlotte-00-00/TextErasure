<template>
  <div class="block team">
    <h2 class="title">我们的团队</h2>
    <p class="sub-title">盐工程序开发顶级团队</p>
    <div class="items">
      <ul>
        <li v-for="member in teamMembers" :key="member.id">
          <a href="#">
            <img :src="member.image" :alt="member.name" />
            <div class="item-txt">
              <p class="title">{{ member.name }}</p>
              <p class="desc">{{ member.description }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamIntroduction',
  data() {
    return {
      teamMembers: [
        { id: 1, name: '陈雨桐', image: '../src/assets/img/OurTeams/team-pic1.png', description: '致力于成为六边形战士' },
        { id: 2, name: '石智轩', image: '../src/assets/img/OurTeams/team-pic2.png', description: '简介2' },
        { id: 3, name: '王腾', image: '../src/assets/img/OurTeams/team-pic3.png', description: '简介3' },
        { id: 4, name: '冯杰', image: '../src/assets/img/OurTeams/team-pic4.png', description: '简介4' },
        // ...其他团队成员
      ]
    };
  }
};
</script>

<style scoped>
/* 通用样式 */
* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
  color: inherit;
  font-weight: normal;
  font-family: "microsoft yahei";
  box-sizing: border-box;
}

/* 公共头部样式 */
.block h2.title {
  font-size: 30px;
  color: #333333;
  padding-bottom: 8px;
  position: relative;
  text-align: center;
}

.block p.sub-title {
  font-size: 14px;
  color: #999999;
  text-align: center;
}

.block h2.title:after {
  display: block;
  content: "";
  position: absolute;
  width: 70px;
  height: 3px;
  background: #4c80e7;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
}

/* 团队介绍样式 */
.team {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding: 90px 0 110px;
  background: aliceblue;
}

.team h2.title {
  color: black;
  font-size:45px;
}

.team p.sub-title {
  color: black;
}

.team .items {
  padding-top: 70px;
  width: 100%;
  height: auto;
  overflow: hidden;
}

.team .items ul {
  width: 1240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.team .items ul li {
  width: 610px;
  height: 180px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px 50px 20px 20px;
  transition: all 0.3s;
}

.team .items ul li:hover {
  box-shadow: 0px 0px 10px rgba(244, 244, 244, 0.8);
  transition: all 0.3s;
}

.team .items ul li a {
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}

.team .items ul li .item-txt {
  padding-left: 35px;
}

.team .items ul li .item-txt .title {
  font-size: 24px;
  color: #333333;
  padding-bottom: 20px;
}

.team .items ul li .item-txt .desc {
  font-size: 16px;
  color: #333333;
  line-height: 30px;
}

/* 图片样式 */
img {
  vertical-align: middle;
  max-width: 100%;
}
</style>
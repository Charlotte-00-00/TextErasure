<script setup lang="ts">

</script>

<template>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>CSS卡片样式留言板团队介绍</title>

    <link rel="stylesheet" href="./style.css">
  </head>
  <body>
  <!-- partial:index.partial.html -->
  <div class="content">
    <ul class="team">
      <li class="member co-funder">
        <div class="thumb"><img src="https://assets.codepen.io/3/internal/avatars/users/default.png?fit=crop&format=auto&height=120&width=120"></div>
        <div class="description">
          <h3>Chris Coyier</h3>
          <p>Chris is a front-end developer and designer. He writes a bunch of HTML, CSS, and JavaScript and shakes the pom-poms for CodePen.<br><a href="https://codepen.io/chriscoyier/">@chriscoyier</a></p>
        </div>
      </li>
      <li class="member co-funder">
        <div class="thumb"><img src="https://assets.codepen.io/2/internal/avatars/users/default.png?height=120&width=120"></div>
        <div class="description">
          <h3>Alex Vazquez</h3>
          <p>Alex is a full stack developer. Alex does JavaScript development for CodePen, both front end and back, and just about everything else.<br><a href="https://codepen.io/quezo/">@quezo</a></p>
        </div>
      </li>
      <li class="member">
        <div class="thumb"><img src="https://assets.codepen.io/652/internal/avatars/users/default.png?height=120&width=120"></div>
        <div class="description">
          <h3>Marie Mosley</h3>
          <p>Marie wears a lot of hats. She is our documentation lead, customer support maestra, editor, and community manager.<br><a href="https://codepen.io/mariemosley/">@mariemosley</a></p>
        </div>
      </li>
      <li class="member">
        <div class="thumb"><img src="https://assets.codepen.io/39255/internal/avatars/users/default.png?height=120&width=120"></div>
        <div class="description">
          <h3>Stephen Shaw</h3>
          <p>Stephen is a designer/developer residing in Houston. He likes to build animations with CSS & JavaScript.<br><a href="https://codepen.io/shshaw/">@shshaw</a></p>
        </div>
      </li>
      <li class="member">
        <div class="thumb"><img src="https://cpwebassets.codepen.io/assets/packs/about-rachelsmith-6878ca76a1d9200e6c296e810050b8cb.jpg?height=120&width=120"></div>
        <div class="description">
          <h3>Rachel Smith</h3>
          <p>Rachel is a full stack'er in Australia. Not only a creative and talented designer and developer, but a great technical writer.<br><a href="https://codepen.io/rachsmith/">@rachsmith</a></p>
        </div>
      </li>
      <li class="member">
        <div class="thumb"><img src="https://cpwebassets.codepen.io/assets/packs/about-robertkieffer-77c28f3a6efe082fd1903affae540b8a.jpg?height=120"></div>
        <div class="description">
          <h3>Robert Kieffer</h3>
          <p>Robert is a full-stack dev with a penchant for open-source work. He dwells in the murky depthsmurky depths of JS.<br><a href="https://codepen.io/broofa/">@broofa</a></p>
        </div>
      </li>
      <li class="member">
        <div class="thumb"><img src="https://cpwebassets.codepen.io/assets/packs/about-deevazquez-c8e8b7f9e803f462b7be19ea60b9272f.jpg?height=120&width=120"></div>
        <div class="description">
          <h3>Dee Vazquez</h3>
          <p>Dee is a full stack developer who started her career in finance. She can jump from Rails to React to Go, and also manage our finances.<br><a href="https://codepen.io/deequez/">@deequez</a></p>
        </div>
      </li>
    </ul>
  </div>
  <!-- partial -->

  </body>
  </html>

</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap");

:root {
  --yellow: #ffdd40;
  --dark: #2f313a;
  --deg: -86deg;
  --trans: all 0.4s ease 0s;
}

body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  font-family: "Lato", Arial, Helvetica, serif;
  background: linear-gradient(90deg, #131417, var(--dark) 35% 65%, #131417);
  font-size: 1em;
}

body *,
body *:before,
body *:after {
  box-sizing: border-box;
}

.content {
  width: 90vmin;
}

h2 {
  text-align: center;
}

.team {
  padding: 2em 0 2em 2.5em;
  margin: 0;
}

.member {
  margin: 1.5em 0 0.5em;
  padding: 0.73em;
  background: linear-gradient(
      83deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
  );
  position: relative;
  list-style: none;
  display: inline-block;
  transform: scale(0.85);
  transition: var(--trans);
}

.member:nth-of-type(even) {
  text-align: right;
  background: linear-gradient(
      -83deg,
      var(--yellow) 0 97%,
      #fff0 calc(97% + 1px) 100%
  );
}

.thumb {
  width: 13vmin;
  height: 13vmin;
  float: left;
  margin-right: 1.25em;
  background: linear-gradient(
      var(--deg),
      var(--dark) 0 70%,
      var(--yellow) 0% 100%
  );
  transform: rotate(-4deg);
  transition: var(--trans);
  border-radius: 0.25em;
  overflow: hidden;
  margin-left: -3em;
  padding: 0.5em;
}

.member:nth-of-type(even) .thumb {
  --deg: 86deg;
  float: right;
  margin-left: 2em;
  margin-right: -3em;
  transform: rotate(4deg);
}

.thumb img {
  width: 100%;
  height: 100%;
  border-radius: 0.25em;
  filter: grayscale(1);
  background: var(--dark);
}

.member:hover {
  transform: scale(1);
  transition: var(--trans);
  filter: drop-shadow(0px 20px 10px #0008);
}

.member:hover .thumb {
  padding: 0.1em;
  transition: var(--trans);
  transform: rotate(-1deg);
  --deg: -89deg;
}

.member:nth-of-type(even):hover .thumb {
  --deg: 91deg;
}

.member:hover .thumb img {
  filter: none;
  transition: var(--trans);
}

.description {
  padding-top: 1vmin;
}

.description p {
  padding: 0 2em;
  margin-bottom: 1em;
}

h3 {
  background: linear-gradient(182deg, #fff0 60%, var(--dark) 0 100%);
  display: inline;
  transform: rotate(-2deg);
  position: absolute;
  margin: 0;
  margin-top: -2.25em;
  left: 9vmin;
  padding: 0.5em 0.75em;
  color: var(--yellow);
  border-radius: 0.25em;
  font-size: 1.35em;
  transform-origin: left bottom;
}

.member:nth-of-type(even) h3 {
  left: inherit;
  right: 9vmin;
  transform: rotate(2deg);
  transform-origin: right bottom;
  background: linear-gradient(-182deg, #fff0 60%, var(--dark) 0 100%);
}

.member:hover h3 {
  transition: var(--trans);
  transform: rotate(0deg);
  background: linear-gradient(180deg, #fff0 59%, var(--dark) 0 100%);
}

.co-funder:after {
  content: "CO-FUNDER";
  font-size: 0.75em;
  position: absolute;
  top: -1.5em;
  background: var(--yellow);
  right: 4em;
  transform: rotate(3deg);
  padding: 0.35em 0.75em 0.5em;
  border-radius: 0.25em;
  color: var(--dark);
  font-weight: bold;
}

.co-funder:nth-of-type(even):after {
  right: inherit;
  left: 4em;
  transform: rotate(-3deg);
}

.description p a {
  display: inline-block;
  margin: 0.5em 0 0 0;
  background: var(--dark);
  color: var(--yellow);
  padding: 0.1em 0.5em 0.35em;
  border-radius: 0.5em;
  text-decoration: none;
  transition: var(--trans);
}
.description p a:hover {
  transition: var(--trans);
  color: var(--dark);
  background: var(--yellow);
  font-weight: bold;
}

.description p a img {
  float: left;
  width: 22px;
  filter: invert(1);
  border-radius: 0.15em;
  padding: 2px;
  background: #fff;
  margin-right: 2px;
}
</style>
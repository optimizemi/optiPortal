<template>
  <div id="app">
    <NavBar />
    <!-- <amplify-authenticator class="auth"> -->
    <router-view class="view"></router-view>
    <!-- </amplify-authenticator> -->
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
@import "./assets/buefy.scss";

:root {
  /* Colors */
  --amazonOrange: #2db8e5;
  --button-click: #70c2dd;
  --lightAmazonOrange: #ffac31;
  --darkAmazonOrange: #e88b01;
  --squidInk: #232f3e;
  --lightSquidInk: #31465f;
  --deepSquidInk: #152939;
  --grey: #828282;
  --lightGrey: #c4c4c4;
  --silver: #e1e4ea;
  --darkBlue: #31465f;
  --red: #dd3f5b;
  --white: #ffffff;
  --light-blue: #00a1c9;
  --optiMizeBlue: #2db8e5;
}

.auth {
  margin-top: 80px;
  padding: 0;
  box-shadow: none;
  min-width: 100% !important;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.view {
  padding: 20px;
}

h1 {
  font-weight: bold;
  font-size: 30px;
}
h2 {
  font-weight: bold;
  font-size: 26px;
}
h3 {
  font-weight: bold;
  font-size: 22px;
}
</style>

<template>
  <v-app id="app" style="background-color: #141b1f !important">
    <Navbar />
    <v-container>
      <v-row style="justify-content: center">
        <v-col xl="8">
          <router-view />
        </v-col>
      </v-row>
    </v-container>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

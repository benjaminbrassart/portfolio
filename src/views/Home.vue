<template>
  <div class="white--text">
    <v-avatar size="256">
      <img src="https://static.bbrassart.fr/img/pic_resume.jpg" />
    </v-avatar>
    <div class="text-h2 mt-3">
      <p>{{ $t("content.home.header-1") }}</p>
      <p>{{ $t("content.home.header-2") }}</p>
    </div>
    <v-divider class="my-5" />
    <v-container class="text-h6">
      <p class="text-left">{{ $t("content.home.welcome") }}</p>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
});
</script>

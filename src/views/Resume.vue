<template>
  <div>
    <h1 class="text-h4 white--text">Curriculum vitæ</h1>
    <v-divider class="mt-3 mb-2" />
    <v-btn
      outlined
      color="primary"
      link
      href="https://static.bbrassart.fr/pdf/resume.pdf"
      target="_blank"
    >
      <v-icon class="mr-2">mdi-file-pdf</v-icon>
      <span>{{ $t("content.resume.download") }}</span>
    </v-btn>
    <v-card> </v-card>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Resume",
});
</script>

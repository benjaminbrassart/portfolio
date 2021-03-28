<template>
  <v-card tile>
    <v-card-title>{{ $t("content.contact.header") }}</v-card-title>
    <v-container>
      <v-textarea auto-grow>
        <template slot="label">
          {{ $t("content.contact.message-content") }}
        </template>
      </v-textarea>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact",
});
</script>

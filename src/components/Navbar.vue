<template>
  <v-navigation-drawer v-model="drawer.enabled" expand-on-hover app>
    <v-divider />

    <v-list dense>
      <v-list-item v-for="item in routes" :key="item.label" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ $t(item.label) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      drawer: {
        enabled: true,
        mini: true,
      },
      routes: [
        {
          label: "routes.home",
          icon: "mdi-home",
          to: "/",
        },
        {
          label: "routes.resume",
          icon: "mdi-file-account",
          to: "resume",
        },
        {
          label: "routes.contact",
          icon: "mdi-email",
          to: "/contact",
        },
        {
          label: "routes.links",
          icon: "mdi-link-variant",
          to: "/links",
        },
      ],
    };
  },
});
</script>
<style lang="">
</style>

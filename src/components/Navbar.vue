<template>
  <v-navigation-drawer v-model="drawer.enabled" expand-on-hover app>
    <v-divider />

    <v-list dense>
      <v-list-item v-for="item in routes" :key="item.label" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-left">
            {{ $t(item.label) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list dense>
      <v-list-item link v-bind="attrs" v-on="on" disabled>
        <v-list-item-icon>
          <v-icon>mdi-translate</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-left">
            {{ $t("content.global.change-locale") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script lang="ts">
import i18n from "@/i18n";
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  methods: {
    changeLocale(locale: string) {
      if (!i18n.availableLocales.includes(locale)) throw "locale not available";
    },
  },
  data() {
    return {
      i18n,
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
          to: "/resume",
        },
        {
          label: "routes.projects",
          icon: "mdi-briefcase-check",
          to: "/projects",
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

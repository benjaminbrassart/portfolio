<template>
  <v-navigation-drawer
    v-if="vertical"
    v-model="drawer"
    permanent
    expand-on-hover
    app
  >
    <v-list dense>
      <v-list-item v-for="item in routes" :key="item.label" :to="item.to" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-left">
            {{ $t(item.label) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-group prepend-icon="mdi-link-variant">
        <template v-slot:activator>
          <v-list-item-title class="text-left">
            {{ $t("routes.links") }}
          </v-list-item-title>
        </template>
        <v-list-item
          v-for="item in links"
          :key="item.label"
          :href="item.to"
          target="_blank"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title
              class="text-left d-flex justify-space-between align-center"
            >
              {{ item.label }}
              <div class="text-right">
                <v-icon class="grey--text text--darken-2">
                  mdi-open-in-new
                </v-icon>
              </div>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-group>
    </v-list>

    <v-divider />

    <v-list dense>
      <v-list-item disabled>
        <v-list-item-icon>
          <v-icon>mdi-translate</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title class="text-left">
            {{ $t("content.drawer.change-locale") }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider />

    <v-list dense>
      <v-list-item
        link
        href="https://github.com/benjaminbrassart/portfolio"
        target="_blank"
      >
        <v-list-item-icon>
          <v-icon>mdi-code-tags</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title
            class="text-left d-flex justify-space-between align-center"
          >
            {{ $t("content.drawer.source-code") }}
            <div class="text-right">
              <v-icon class="grey--text text--darken-2">
                mdi-open-in-new
              </v-icon>
            </div>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
  <v-bottom-navigation
    v-else
    dense
    color="accent"
    shift
    :value="route"
    width="100%"
    style="overflow-x: auto; overflow-y: hidden"
  >
    <v-btn v-for="item in routes" :key="item.label" :to="item.to" link>
      <span>{{ $t(item.label) }}</span>
      <v-icon>{{ item.icon }}</v-icon>
    </v-btn>
    <v-divider vertical />
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-btn link v-bind="attrs" v-on="on">
          <span> {{ $t("routes.links") }}</span>
          <v-icon>mdi-link-variant</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="item in links"
          :key="item.label"
          link
          :href="item.to"
          target="_blank"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.label }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-divider vertical />
    <v-btn disabled link>
      <span> {{ $t("content.drawer.change-locale") }}</span>
      <v-icon>mdi-translate</v-icon>
    </v-btn>
  </v-bottom-navigation>
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
  computed: {
    vertical() {
      return this.$vuetify.breakpoint.mdAndUp;
    },
  },
  data() {
    return {
      i18n,
      drawer: true,
      route: 1,
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
        //{
        //  label: "routes.links",
        //  icon: "mdi-link-variant",
        //  to: "/links",
        //},
      ],
      links: [
        {
          label: "LinkedIn",
          icon: "mdi-linkedin",
          to: "https://www.linkedin.com/in/benjamin-brassart-92a915178/",
        },
        {
          label: "GitHub",
          icon: "mdi-github",
          to: "https://github.com/benjaminbrassart/",
        },
      ],
    };
  },
});
</script>

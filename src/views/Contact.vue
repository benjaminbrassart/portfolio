<template>
  <div>
    <h1 class="text-h4 white--text">{{ $t("content.contact.header") }}</h1>
    <v-divider class="mt-3 mb-2" />
    <v-container>
      <v-row>
        <v-col>
          <v-text-field dense outlined v-model="form.name" :rules="rules.name">
            <template slot="label">
              {{ $t("content.contact.message-name") }}
            </template>
            <template slot="prepend">
              <v-icon>mdi-account</v-icon>
            </template>
          </v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            dense
            outlined
            v-model="form.email"
            :rules="rules.email"
          >
            <template slot="label">
              {{ $t("content.contact.message-email") }}
            </template>
            <template slot="prepend">
              <v-icon>mdi-email</v-icon>
            </template>
          </v-text-field>
        </v-col>
      </v-row>
      <v-textarea
        auto-grow
        dense
        outlined
        v-model="form.content"
        :rules="rules.content"
      >
        <template slot="label">
          {{ $t("content.contact.message-content") }}
        </template>
        <template slot="prepend">
          <v-icon>mdi-lead-pencil</v-icon>
        </template>
      </v-textarea>
      <p class="text-left">
        {{ $t("content.contact.data-privacy") }}
      </p>
    </v-container>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import i18n from "@/i18n";

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export default Vue.extend({
  name: "Contact",
  methods: {
    sendClick(): boolean {
      return true;
    },
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        content: "",
      },
      rules: {
        name: [
          (v: string) =>
            v.length >= 3 || i18n.t(`content.contact.error.name.minimum`),
          (v: string) =>
            v.length <= 64 || i18n.t(`content.contact.error.name.maximum`),
        ],
        email: [
          (v: string) =>
            emailRegex.test(v) || i18n.t(`content.contact.error.email.invalid`),
          (v: string) =>
            v.length <= 255 || i18n.t(`content.contact.error.email.maximum`),
        ],
        content: [
          (v: string) =>
            v.length >= 20 || i18n.t(`content.contact.error.name.minimum`),
          (v: string) =>
            v.length <= 2000 || i18n.t(`content.contact.error.name.maximum`),
        ],
      },
    };
  },
});
</script>

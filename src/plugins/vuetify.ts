import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import fr from "vuetify/src/locale/fr";

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: "mdiSvg",
    },
    theme: {
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#90A4AE",
                secondary: "#455A64",
                accent: "#29B6F6",
                error: "#FF5252",
                info: "#2196F3",
                success: "#4CAF50",
                warning: "#FFC107",
            },
        },
    },
    lang: {
        locales: { fr },
        current: "fr",
    },
});

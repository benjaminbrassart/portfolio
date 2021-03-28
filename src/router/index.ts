import i18n from "@/i18n";
import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue"),
        meta: {
            title: "home",
        },
    },
    {
        path: "/resume",
        name: "Resume",
        component: () => import("@/views/Resume.vue"),
        meta: {
            title: "resume",
        },
    },
    {
        path: "/projects",
        name: "Projects",
        component: () => import("@/views/Projects.vue"),
        meta: {
            title: "projects",
        },
    },
    {
        path: "/contact",
        name: "Contact",
        component: () => import("@/views/Contact.vue"),
        meta: {
            title: "contact",
        },
    },
];

const prefix = "Benjamin BRASSART";

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach((to, _from, next) => {
    if (to.meta?.title) {
        document.title = `${prefix} – ${i18n.t(`routes.${to.meta.title}`)}`;
    } else document.title = prefix;
    next();
});

export default router;

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue").default;
import VueRouter from "vue-router";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component(
    "empires-component",
    require("./components/assessment/EmpiresComponent.vue").default
);
Vue.component(
    "units-component",
    require("./components/assessment/UnitsComponent.vue").default
);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
    key: "laravel-test",
    storage: window.localStorage,
});

const store = new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state: {
        kingId: 0,
    },
    mutations: {
        setSelectedId(state, id) {
            state.kingId = id;
        },
    },
    getters: {
        getPreviousId: (state) => {
            return state.kingId;
        },
    },
});

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    history: true,
    routes: [
        {
            path: "/",
            name: "empires",
            components: {
                "empires-component":
                    require("./components/assessment/EmpiresComponent.vue")
                        .default,
            },
        },
        {
            path: "/units",
            name: "units",
            components: {
                "units-component":
                    require("./components/assessment/UnitsComponent.vue")
                        .default,
            },
        },
    ],
});

const app = new Vue({
    el: "#app",
    router,
    store,
});

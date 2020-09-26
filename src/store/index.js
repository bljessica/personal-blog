import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        logined: false,
        currentUser: null
    },
    getters: {
        logined: state => state.logined,
        currentUser: state => state.currentUser
    },
    mutations: {
        signIn(state, user) {
            state.logined = true;
            state.currentUser = user;
        },
        signOut(state) {
            state.logined = false;
            state.currentUser = null;
        },
        modifyInfo(state, user) {
            state.currentUser = user;
        }
    }
});

export default store;
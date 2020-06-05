import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/pages/PostList.vue'
import sArticle from '@/pages/sArticle.vue'
import sEditor from '@/pages/sEditor.vue'
import NotFound from '@/pages/NotFound.vue'
import store from './store'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: PostList },
        {
            path: '/post/:postid', component: sArticle, name: 'post', props: true,
            beforeEnter: async function (to, from, next) {
                if (await store.getPost(to.params.postid) != null) {
                    next();
                }
                else next("/404");
            }
        },
        {
            path: '/post/:postid/edit', component: sEditor, name: 'edit', props: true,
            beforeEnter: async function (to, from, next) {
                if (await store.getPost(to.params.postid) != null) {
                    next();
                }
                else next("/404");
            }
        },
        { path: '/post/new', component: sEditor, name: 'new', props: true },
        { path: '/404', alias: '*', component: NotFound }
    ],
    mode: 'history'
})
import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/pages/PostList.vue'
import sArticle from '@/pages/sArticle.vue'
import sEditor from '@/pages/sEditor.vue'
import NotFound from '@/pages/NotFound.vue'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', component: PostList },
        { path: '/post/:postid', component: sArticle, name: 'post', props: true },
        { path: '/post/:postid/edit', component: sEditor, name: 'edit', props: true },
        { path: '/post/new', component: sEditor, name: 'new', props: { postdata: { blocks: [] } } },
        { path: '/404', alias: '*', component: NotFound }
    ],
    //mode: 'history',
    base: '/'
})
<template>
    <div v-if="loading">Loading...</div>
    <article v-else>
        <router-link class="button" :to="{name: 'edit', params: { postid: $route.params.postid, postdata: post } }">Edit</router-link>
        <div>{{ new Date(post.time).toLocaleDateString() }}</div>
        <div>{{ post.author }}</div>
        <s-block v-for="(block, index) in post.blocks" :item="block" :key="index"></s-block>
    </article>
</template>

<script>
    import sBlock from '@/components/sBlock'
    import firebase from '@/firebase.js'

    export default {
        props: ['postdata'],
        async created() {
            if (!this.postdata && this.$route.params.postid) {
                this.loading = true;
                var postRef = firebase.database().ref("posts/").child(this.$route.params.postid);
                this.post = (await postRef.once('value')).val();
                this.loading = false;
            }
        },
        data() {
            return {
                loading: false,
                post: this.postdata,
                editPath: "/post/" + this.$route.params.postid + "/edit"
            }
        },
        components: {
            "s-block": sBlock
        }
    };
</script>

<style>
</style>
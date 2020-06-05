<template>
    <div v-if="loading">Loading...</div>
    <article v-else>
        <router-link class="button" :to="{name: 'edit', params: { postid: $route.params.postid } }">Edit</router-link>
        <div>{{ new Date(post.time).toLocaleDateString() }}</div>
        <div>{{ post.author }}</div>
        <s-block v-for="(block, index) in post.blocks" :item="block" :key="index"></s-block>
    </article>
</template>

<script>
    import sBlock from '@/components/sBlock'
    import store from '@/store'

    export default {
        async created() {
            if (this.$route.name == "new") {
                this.post = { blocks: [] };
            }
            else {
                this.loading = true;
                this.post = await store.getPost(this.$route.params.postid);
                this.loading = false;
            }

        },
        data() {
            return {
                loading: false,
                post: {}
            }
        },
        components: {
            "s-block": sBlock
        }
    };
</script>

<style>
</style>
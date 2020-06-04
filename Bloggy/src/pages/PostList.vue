<template>
    <div>
        <router-link class="button" :to="{ name: 'new'}">New post</router-link>
        <ul>
            <li v-for="(post, index) in posts" :key="index">
                <article>
                    <img src="https://placeimg.com/400/300/any">
                    <h2>{{ post.title }}</h2>
                    <aside> {{ post.blocks[1].content }} </aside>
                    <div class="scrim"></div>
                    <router-link class="button" :to="{name: 'post', params: { postid:index, postdata: post } }">Read more</router-link>
                </article>
            </li>
        </ul>
    </div>
</template>

<script>
    import firebase from '@/firebase.js'

    export default {
        //name: 'Home',
        data: function () {
            return {
                posts: []
            }
        },
        async created() {
            var postRef = firebase.database().ref("posts");
            this.posts = (await postRef.once('value')).val();
        }
    };
</script>

<style scoped>
    ul {
        margin: auto;
        max-width: 1000px;
    }

    li {
        margin: var(--base-line-height) 0;
    }

    article {
        background-color: var(--post-background);
        height: calc(12*var(--base-line-height));
        position: relative;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-areas: "img text";
        color: white;
        border-radius: 1em;
        overflow: hidden;
        max-width: unset;
        padding: 0;
    }

    article > img {
        grid-area: img;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    article > h2 {
        grid-area: img;
        margin: 0;
        text-shadow: 0px 0px 4px black;
        text-align: center;
        align-self: center;
        justify-self: center;
    }

    article > aside {
        grid-area: text;
        margin: var(--base-line-height) var(--base-line-height) 0 var(--base-line-height);
        overflow: hidden;
    }

    article > .scrim {
        grid-area: text;
        background: linear-gradient(transparent 0%, transparent 60%, var(--post-background) 90%);
    }

    article > a {
        grid-area: text;
        justify-self: center;
        align-self: end;
        margin: calc(0.5*var(--base-line-height));
    }

    @media only screen and (max-width: 600px) {
        article {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "img";
        }

        article > aside {
            display: none;
        }

        article > .scrim {
            grid-area: img;
            display: none;
        }

        article > a {
            grid-area: img;
        }
    }
</style>
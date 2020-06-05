import firebase from './firebase'

export default {
    posts: [],
    getPosts: async function () {
        var postRef = firebase.database().ref("posts");
        this.posts = (await postRef.once('value')).val();
    },
    getPost: async function (id) {
        var post = this.posts[id];
        if (post == null) {
            var postRef = firebase.database().ref("posts/").child(id);
            post = (await postRef.once('value')).val();
            if (post) this.posts.push(post);
        }
        return post;
    },
    uploadPost: async function (post, id) {
        var postRef = null;
        if (id) {
            postRef = firebase.database().ref("posts/").child(id);
        }
        else {
            postRef = firebase.database().ref("posts/").push();
        }

        postRef.set(post, function (error) {
            if (error) {
                // The write failed...
            } else {
                //console.log("Post saved!");
            }
        });
    }
}
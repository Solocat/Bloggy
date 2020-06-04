<template>
    <div v-if="loading">Loading...</div>
    <div id="editor" v-else>
        <aside>
            <edit-tools @useTool="useTool" :visible="selectedIndex >= 0" :editing="editing" :hiddenTools="hiddenEditTools()" :topOffset="editToolsTop"></edit-tools>
        </aside>
        <main>
            <button @click="upload">Save post</button>
            <button @click="clear">Clear post</button>
            <article>
                <s-block v-for="(block, index) in post.blocks" :item="block" :editing="blockIsEditing(index)" :key="index" @click="selectBlock(index, false)" :class="{selected: index == selectedIndex}"></s-block>
            </article>
            <add-tools @useTool="addBlock"></add-tools>
        </main>
    </div>
</template>

<script>
    Array.prototype.move = function (from, to) {
        this.splice(to, 0, this.splice(from, 1)[0]);
    };

    import sArticle from './sArticle'
    import editTools from '@/components/editTools'
    import addTools from '@/components/addTools'
    import firebase from '@/firebase.js'
    export default {
        mixins: [sArticle], //inherit from article
        methods: {
            hiddenEditTools() {
                var excluded = [];
                if (this.editing) excluded.push("edit");
                else excluded.push("save");

                if (this.selectedIndex <= 0) excluded.push("move up");
                if (this.selectedIndex >= this.post.blocks.length - 1) excluded.push("move down");

                return excluded;
            },
            upload() {
                this.unselect();
                var postRef = null;
                if (this.$route.params.postid) {
                    postRef = firebase.database().ref("posts/").child(this.$route.params.postid);
                }
                else {
                    postRef = firebase.database().ref("posts/").push();
                }
                this.post.title = this.post.blocks[0].content;
                this.post.time = Date.now();
                this.post.author = "me";
                postRef.set(this.post, function (error) {
                    if (error) {
                        // The write failed...
                    } else {
                        //console.log("Post saved!");
                    }
                });
            },
            clear() {
                this.unselect();
                this.post = {};
            },
            blockIsEditing(i) {
                return (this.editing == true && i == this.selectedIndex);
            },
            addBlock(t) {
                this.unselect();

                this.post.blocks.push({
                    type: t,
                    content: ""
                });

                this.selectBlock(this.post.blocks.length - 1, true);
                this.editing = true;
            },
            deleteBlock(i) {
                this.post.blocks.splice(i, 1);
            },
            selectBlock(i, isnew) {
                if (this.selectedIndex == i) return;
                this.unselect();

                this.editing = isnew; //start editing new block
                this.selectedIndex = i;

                //move tools when dom updated
                this.$nextTick(function () {
                    var element = document.getElementsByTagName("article")[0].children[i];
                    this.editToolsTop = element.offsetTop;
                });
            },
            unselect() {
                if (this.selectedIndex < 0) return;
                if (this.selectedBlock && !this.selectedBlock.content) this.deleteBlock(this.selectedIndex);

                this.selectedIndex = -1;
                this.editing = false;
            },

            useTool(tool) {
                if (tool == "delete") {
                    this.deleteBlock(this.selectedIndex);
                    this.unselect();
                }
                else if (tool == "move up" && this.selectedIndex > 0) {
                    this.post.blocks.move(this.selectedIndex, this.selectedIndex - 1);
                    this.selectBlock(this.selectedIndex - 1, false);
                }
                else if (tool == "move down" && this.selectedIndex < this.post.blocks.length - 1) {
                    this.post.blocks.move(this.selectedIndex, this.selectedIndex + 1);
                    this.selectBlock(this.selectedIndex + 1, false);
                }
                else if (tool == "edit") {
                    //var el = document.getElementsByClassName("s-block")[this.selectedIndex];
                    this.editing = true;
                }
                else if (tool == "save") {
                    this.unselect();
                }
            }
        },
        computed: {
            selectedBlock() {
                return this.post.blocks[this.selectedIndex];
            }
        },
        data() {
            return {
                editing: false,
                selectedIndex: -1,
                editToolsTop: 0
            }
        },
        components: {
            "edit-tools": editTools,
            "add-tools": addTools
        }
    }
</script>

<style scoped>
    #editor {
        display: flex;
        flex-direction: row;
        margin: auto;
        position: relative;
    }

    aside {
        flex-shrink: 0;
        margin-right: calc(var(--base-line-height));
    }


    article:hover {
        background: repeating-linear-gradient(transparent 0 var(--base-line-height), #DEF var(--base-line-height) calc(2*var(--base-line-height)));
    }

    .s-block:hover {
        background-color: #FEDA;
    }
</style>
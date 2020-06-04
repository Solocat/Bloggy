<template>
    <component :is="blocktype" :item="item" :editing="editing" class="s-block" :class="{editing: editing}" @click="onClick" @input="onInput" />

</template>

<script>
    import sQuote from './sQuote'
    import sText from './sText'
    import sImage from './sImage'

    export default {
        props: ['item', 'editing'],
        components: {
            "s-quote": sQuote,
            "s-text": sText,
            "s-image": sImage
        },
        computed: {
            blocktype() {
                if (this.item.type == "img") {
                    return "s-image"
                }
                else if (this.item.type == "blockquote") {
                    return "s-quote";
                }
                else {
                    return "s-text";
                }
            }
        },
        methods: {
            onClick() {
                this.$emit('click')
            },
            onInput(value) {
                this.item.content = value;
            }
        }
    }
</script>

<style>
</style>
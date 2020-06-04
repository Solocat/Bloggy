<template>
    <blockquote @click="onClick">
        <s-text :item="{type: 'header', content: this.item.content}" :editing="this.editing" @input="onInput" />
        <s-text :item="{type: 'footer', content: this.item.footer}" :editing="this.editing" @input="onInputFooter" />
    </blockquote>
</template>

<script>
    import sText from './sText'
    export default {
        props: ['item', 'editing'],
        methods: {
            onClick() {
                this.$emit('click');
            },
            onInput(value) {
                this.item.content = value;
            },
            onInputFooter(value) {
                this.item.footer = value;
            }
        },
        components: {
            "s-text": sText
        }
    }
</script>

<style scoped>
    blockquote {
        margin: 0;
        margin-top: var(--base-line-height);
        margin-left: calc(-1.5rem - 4px);
        padding-left: 1.5rem;
        border-left: 4px solid #333;
    }

    header {
        font-family: "Gentium Book Basic", serif;
        font-style: italic;
        font-size: 1.1rem;
    }

    header::before {
        position: absolute;
        margin-left: -1em;
        width: 1em;
        text-align: right;
        content: '\201C';
    }

    header::after {
        content: '\201D';
    }

    blockquote.editing > header::after {
        display: none;
    }

    footer {
        font-size: 0.8rem;
        color: #555;
    }

    footer::before {
        position: absolute;
        margin-left: -1em;
        width: 1em;
        text-align: right;
        content: '\2014';
    }
</style>
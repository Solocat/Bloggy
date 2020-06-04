<template>
    <div class="image" @click="onClick">
        <img :src="this.item.content" />
        <input v-show="this.editing" type="file" accept="image/*" @input="onInput" />
    </div>
</template>

<script>
    export default {
        props: ['item', 'editing'],
        methods: {
            onInput(event) {
                var file = event.target.value.split('\\').pop();
                this.$emit('input', file);
            },
            onClick() {
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>
    .image {
        width: calc(12/26*100%);
        margin-right: calc(2*var(--base-line-height));
        float: left;
    }

    img {
        width: 100%;
    }

    @media (max-width: 560px) {
        .image {
            width: 100%
        }
    }
</style>
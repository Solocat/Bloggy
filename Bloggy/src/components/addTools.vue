<template>
    <div id="addTools">
        <ul>
            <li v-for="tool in addTools" @mouseover="hover(tool.text)" @click="useTool(tool)" :key="tool.text">
                <img :src="tool.icon" class="icon">
            </li>
        </ul>
        <span class="tooltip">{{addTooltip}}</span>
    </div>
</template>

<script>
    import heading from '@/assets/svg/heading.svg'
    import paragraph from '@/assets/svg/paragraph.svg'
    import image from '@/assets/svg/image.svg'
    import quote from '@/assets/svg/quote-right.svg'
    export default {
        methods: {
            hover(text) {
                this.addTooltip = text
            },
            useTool(tool) {
                this.$emit("useTool", tool.type);
            }
        },
        data: function () {
            return {
                addTooltip: "tooltip",
                addTools: [
                    {
                        icon: heading,
                        text: "Add heading",
                        type: "h3"
                    },
                    {
                        icon: paragraph,
                        text: "Add paragraph",
                        type: "p"
                    },
                    {
                        icon: image,
                        text: "Add image",
                        type: "img"
                    },
                    {
                        icon: quote,
                        text: "Add block quote",
                        type: "blockquote"
                    }
                ]
            }
        }
    }
</script>

<style scoped>

    #addTools {
        display: inline-block;
    }

    li {
        display: inline-block;
        margin-right: 0.3em;
        cursor: pointer;
    }

    #addTools:hover .tooltip {
        visibility: visible;
    }

</style>
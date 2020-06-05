<template>
    <ul :style="styleOb">
        <li v-for="tool in visibleTools" v-if="tool.show" :key="tool.text">
            <span class="tooltip">{{tool.text}}</span>
            <img :src="require(`@/assets/svg/${tool.icon}`)" class="icon" @click="useTool(tool)">
        </li>
    </ul>
</template>

<script>
    export default {
        props: ["visible", "editing", "hiddenTools", "topOffset"],
        computed: {
            visibleTools() { //TODO
                var tools = this.tools.filter(tool => {
                    return !this.hiddenTools.includes(tool.text);
                })

                return tools;
            },
            styleOb() {
                return {
                    top: this.topOffset + 'px',
                    visibility: this.visible ? "visible" : "hidden"
                };
            }
        },
        methods: {
            useTool(tool) {
                this.$emit("useTool", tool.text);
            }
        },
        data: function () {
            return {
                tools: [
                    {
                        icon: "angle-up.svg",
                        text: "move up",
                        show: true
                    },
                    {
                        icon: "edit.svg",
                        text: "edit",
                        show: true,
                        filter: function () { return !this.editing; }
                    },
                    {
                        icon: "check.svg",
                        text: "save",
                        show: true,
                        filter: function () { return this.editing; }
                    },
                    {
                        icon: "wrench.svg",
                        text: "change",
                        show: false
                    },
                    {
                        icon: "trash-alt.svg",
                        text: "delete",
                        show: true
                    },
                    {
                        icon: "angle-down.svg",
                        text: "move down",
                        show: true
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    ul {
        position: relative;
        display: inline-block;
        margin-right: 1em;
        text-align: right;
    }

    li {
        cursor: pointer;
    }

    li > .icon {
        width: 1em;
        vertical-align: middle;
    }

    li:hover > .tooltip {
        visibility: visible;
    }
</style>
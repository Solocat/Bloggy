<template>
    <ul :style="styleOb">
        <li v-for="tool in visibleTools" v-if="tool.show" :key="tool.text">
            <span class="tooltip">{{tool.text}}</span>
            <img :src="tool.icon" class="icon" @click="useTool(tool)">
        </li>
    </ul>
</template>

<script>
    import up from '@/assets/svg/angle-up.svg'
    import edit from '@/assets/svg/edit.svg'
    import check from '@/assets/svg/check.svg'
    import wrench from '@/assets/svg/wrench.svg'
    import trash from '@/assets/svg/trash-alt.svg'
    import down from '@/assets/svg/angle-down.svg'
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
                        icon: up,
                        text: "move up",
                        show: true
                    },
                    {
                        icon: edit,
                        text: "edit",
                        show: true,
                        filter: function () { return !this.editing; }
                    },
                    {
                        icon: check,
                        text: "save",
                        show: true,
                        filter: function () { return this.editing; }
                    },
                    {
                        icon: wrench,
                        text: "change",
                        show: false
                    },
                    {
                        icon: trash,
                        text: "delete",
                        show: true
                    },
                    {
                        icon: down,
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
        /*visibility: hidden;*/
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
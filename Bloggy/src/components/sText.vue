
<script>
    export default {
        props: ['item', 'editing'],
        render(createElement) {
            var data = {};
            var type = this.item.type;
            data = {
                on: {
                    click: this.onClick
                }
            };
            var child = [];
            if (this.editing == true) {
                child.push(createElement("textarea", {
                    domProps: {
                        innerHTML: this.item.content
                    },
                    attrs: {
                        rows: this.rows(),
                        placeholder: "Write here"
                    },
                    directives: [{
                        name: 'focus'
                    }],
                    on: {
                        input: this.onInput,
                        keydown: this.onKeydown
                    }
                }));
            }
            else if (!this.item.content) return null;
            else {
                data.domProps = {
                    innerHTML: this.item.content
                };

            }

            return createElement(type, data, child);
        },
        directives: {
            focus: {
                inserted: function (el) {
                    el.focus()
                }
            }
        },
        methods: {
            rows() {
                var el;

                if (!this.$el) return 1; //new block on the block
                else if (!this.$el.children || !this.$el.children[0]) {
                    el = this.$el;
                }
                else {
                    el = this.$el.children[0];
                }

                var computed = window.getComputedStyle(el);
                var lh = parseInt(computed.getPropertyValue('line-height'));
                var rows = parseInt(el.scrollHeight / lh);

                return rows;
            },
            onInput(event) {
                this.$emit('input', event.target.value);
                //this.$emit('update:text', event.target.value);
            },
            onClick() {
                this.$emit('click');
            },
            onKeydown(event) {
                if (event.keyCode == 13) {
                    event.preventDefault();
                }
            }
        }
    }
</script>

<style>
</style>
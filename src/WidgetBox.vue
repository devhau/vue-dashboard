<template>
    <div
        :class="classes"
        :style="style"
        ref="dragHandle">
        <i v-if="draggable" class="fa fa-arrows fa-2x widget-move" aria-hidden="true"></i>
        <slot>
            <component :is="'Widget'+type" :option="data"/>
        </slot>
        <div
            class="resize-handle"
            ref="resizeHandle"
        ></div>
    </div>
</template>

<style>
    .widget-box {
        border: 1px solid #ccc;
        background: #ddd;
        position: absolute;
        z-index: 1;
        box-sizing: border-box;
        padding: 5px;
    }
    .widget-box .widget-move{
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 10;
        display: none;
    }
    .widget-box:hover .widget-move{
        display: block;
    }
     .widget-box:hover .widget-move:hover{
         cursor: move;
     }
    .widget-box.dragging,
    .widget-box.resizing {
        z-index: 2;
        opacity: 0.7;
    }

    .widget-box:not(.dragging):not(.resizing) {
        transition: transform ease-out 0.1s, width ease-out 0.1s, height ease-out 0.1s;
    }

    .widget-box .resize-handle {
        position: absolute;
        right: -5px;
        bottom: -5px;
        width: 15px;
        height: 15px;
        cursor: se-resize;
    }
</style>

<script>
    import * as utils from './utils'
    import { List as ContainerList } from './DashboardContainer.vue'
    import Widgets from './Widgets/index.js'
    export default {
        components:{...Widgets},
        props: {
            boxId: {
                required: true
            },
            dragSelector: {
                type: String,
                default: '*'
            },
        draggable:{
            type:Boolean,
            default:false
        }
        },
        data () {
            return {
                container: null,
                dragging: false,
                resizing: false,
                type:"Base",
                data:{}
            }
        },
        computed: {
            style () {
                if (this.container && this.container.isBoxVisible(this.boxId)) {
                    var pixelPosition = this.container.getPixelPositionById(this.boxId)
                    return {
                        display: 'block',
                        width: pixelPosition.w + 'px',
                        height: pixelPosition.h + 'px',
                        transform: `translate(${pixelPosition.x}px, ${pixelPosition.y}px)`
                    }
                }

                return {
                    display: 'none'
                }
            },
            classes () {
                return {
                    'widget-box': true,
                    'dragging': this.dragging,
                    'resizing': this.resizing
                }
            }
        },
        methods: {
            findContainer () {
                let current = this
                while (current.$parent) {
                    current = current.$parent
                    if (ContainerList.has(current)) {
                        return current
                    }
                }
                return null
            }
        },
        mounted () {
            this.container = this.findContainer()
            if (!this.container) {
                throw new Error('Can not find container')
            }

            // register component on parent
            this.container.registerBox(this);
            this.data=this.container.getBoxLayoutById(this.boxId);
            if(this.data.type!==undefined){
                this.type= this.data.type;
            }
            // moving
            this.$dragHandle = this.$el || this.$refs.dragHandle
            this.$dragHandle.addEventListener('mousedown', evt => {
                if (!utils.matchesSelector(evt.target, this.dragSelector)) {
                    return
                }

                evt.preventDefault()
                this.dragging = true
                this.$emit('dragStart')
                let mouseX = evt.clientX
                let mouseY = evt.clientY

                const handleMouseUp = evt => {
                    window.removeEventListener('mouseup', handleMouseUp, true)
                    window.removeEventListener('mousemove', handleMouseMove, true)

                    this.dragging = false

                    var offset = {
                        x: evt.clientX - mouseX,
                        y: evt.clientY - mouseY
                    }
                    this.$emit('dragEnd', { offset })
                }

                const handleMouseMove = evt => {
                    var offset = {
                        x: evt.clientX - mouseX,
                        y: evt.clientY - mouseY
                    }
                    this.$emit('dragUpdate', { offset })
                }

                window.addEventListener('mouseup', handleMouseUp, true)
                window.addEventListener('mousemove', handleMouseMove, true)
            })

            // resizing
            this.$resizeHandle = this.$refs.resizeHandle
            if (this.$resizeHandle) {
                this.$resizeHandle.addEventListener('mousedown', evt => {
                    evt.preventDefault()
                    evt.stopPropagation()
                    this.resizing = true
                    this.$emit('resizeStart')
                    let mouseX = evt.clientX
                    let mouseY = evt.clientY

                    const handleMouseUp = evt => {
                        window.removeEventListener('mouseup', handleMouseUp, true)
                        window.removeEventListener('mousemove', handleMouseMove, true)

                        this.resizing = false

                        var offset = {
                            x: evt.clientX - mouseX,
                            y: evt.clientY - mouseY
                        }
                        this.$emit('resizeEnd', { offset })
                    }

                    const handleMouseMove = evt => {
                        var offset = {
                            x: evt.clientX - mouseX,
                            y: evt.clientY - mouseY
                        }
                        this.$emit('resizeUpdate', { offset })
                    }

                    window.addEventListener('mouseup', handleMouseUp, true)
                    window.addEventListener('mousemove', handleMouseMove, true)
                })
            }
        },
        beforeDestroy () {
            // register component on parent
            if (this.container) {
                this.container.unregisterBox(this)
            }
        }
    }
</script>

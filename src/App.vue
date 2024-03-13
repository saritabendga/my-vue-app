<template>
  <div>
        <p v-on:mouseover="changeVal" v-on:mouseout="resetVal" v-my-hover="directiveVal"> Hover to change color
        </p>
    </div>
</template>

<script>
export default {
    name: "App",
    data() {
        return {
            directiveVal: "",
        }
    },
    methods: {
        changeVal() {
            this.directiveVal = "hover"
        },
        resetVal() {
            this.directiveVal = "out"
        }
    },
  directives: {
        'my-hover': {
            mounted(el, binding) {
                console.log("binding", binding.value);
                if (binding.value === 'hover') {
                    el.style.backgroundColor = 'red'
                    el.style.color = 'white'
                } else {
                    el.style.backgroundColor = 'white'
                    el.style.color = 'black'
                }
            },
            updated(el, binding) {
                console.log("binding updated", binding.value);
                if (binding.value === 'hover') {
                    el.style.backgroundColor = 'red'
                    el.style.color = 'white'
                } else {
                    el.style.backgroundColor = 'white'
                    el.style.color = 'black'
                }
            },
        }
    }
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
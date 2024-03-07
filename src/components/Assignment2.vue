<<<<<<< HEAD
 
<template>
  <p v-text= "textContent"> </p>
  <div v-html="htmlContent"></div>
  <div>
    Wakeup , {{ message }} 
  </div>
  <button v-bind:buttonTitle="isdisabled">Button</button>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        textContent : "Hello, Vue !! ",
        htmlContent : '<span><strong>This is a <mark>  HTML content. </mark></strong></span>',
        message : "Its a brand new day !! ",
        isdisabled: 'false'
      }
    }
  }
</script> 
=======
 
<template>
  <p v-text= "textContent"> </p>
  <div v-html="htmlContent"></div>
  <div>
    Wakeup , {{ message }} 
  </div>
  <button v-bind:buttonTitle="isdisabled">Button</button>
</template>
<script>
  export default {
    name: "App",
    data() {
      return {
        textContent : "Hello, Vue !! ",
        htmlContent : '<span><strong>This is a <mark>  HTML content. </mark></strong></span>',
        message : "Its a brand new day !! ",
        isdisabled: 'false'
      }
    }
  }
</script> 
>>>>>>> 7a45f0ca9ca2bf2656f34602263cf981fcd91201

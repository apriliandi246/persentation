<script>
   import { fly } from "svelte/transition";
</script>

<style>
   .container {
      display: flex;
      align-items: center;
      justify-content: space-around;
   }

   img {
      padding: 30px;
      width: 260px;
      display: block;
      max-height: 100%;
   }

   h1 {
      font-size: 130px;
      font-family: monospace;
   }
</style>

<div
   class="container"
   in:fly|local={{ x: 900, duration: 500 }}
   out:fly|local={{ x: -900, duration: 300 }}>
   <img
      src="https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.png"
      alt="sveltejs" />
   <img src="https://v3.vuejs.org/logo.png" alt="vuejs" />
   <img
      src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
      alt="reactjs" />

   <h1>❓</h1>
</div>

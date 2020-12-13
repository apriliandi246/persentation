<script>
   import { scale } from "svelte/transition";
</script>

<style>
   img {
      width: 90%;
      max-height: 100%;
      margin-bottom: 20px;
   }

   p {
      width: 900px;
      margin: auto;
      font-size: 23px;
      text-align: left;
      font-weight: 400;
      line-height: 37px;
      letter-spacing: 1.4px;
      font-family: system-ui;
   }

   div {
      margin-top: -14px;
      text-align: center;
   }
</style>

<div in:scale={{ duration: 400 }}>
   <img
      src="https://raw.githubusercontent.com/sveltejs/branding/master/svelte-horizontal.png"
      alt="sveltejs" />
   <p>
      Svelte is a radical new approach to building user interfaces. Whereas
      traditional frameworks like React and Vue do the bulk of their work in the
      browser, Svelte shifts that work into a compile step that happens when you
      build your app. Instead of using techniques like virtual DOM diffing,
      Svelte writes code that surgically updates the DOM when the state of your
      app changes.
   </p>
</div>

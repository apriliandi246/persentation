<script>
   import { fly } from "svelte/transition";
   import { cubicInOut } from "svelte/easing";
</script>

<style>
   div {
      margin-top: -14px;
      text-align: center;
      position: absolute;
   }

   img {
      width: 50%;
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
</style>

<div
   in:fly|local={{ x: 900, duration: 490 }}
   out:fly|local={{ x: -900, duration: 490, easing: cubicInOut }}>
   <img src="/img/svelte.png" alt="sveltejs" />
   <p>
      Svelte is a radical new approach to building user interfaces. Whereas
      traditional frameworks like React and Vue do the bulk of their work in the
      browser, Svelte shifts that work into a compile step that happens when you
      build your app
   </p>
</div>

<script>
   import { currentSlide } from "../store/slide.js";
   import One from "../slides/one.svelte";
   import Two from "../slides/two.svelte";
   import Three from "../slides/three.svelte";
   import Four from "../slides/four.svelte";
</script>

<style>
   .container {
      margin: auto;
      width: 100vh;
      height: 100vh;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
   }
</style>

<div class="container">
   {#if $currentSlide === 1}
      <One />
   {/if}

   {#if $currentSlide === 2}
      <Two />
   {/if}

   {#if $currentSlide === 3}
      <Three />
   {/if}

   {#if $currentSlide === 4}
      <Four />
   {/if}
</div>

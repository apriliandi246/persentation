<script>
   import { currentSlide, slides } from "./store/store.js";
   import One from "./slides/one.svelte";
   import Two from "./slides/two.svelte";
   import Three from "./slides/three.svelte";
   import Menus from "./components/Menus.svelte";

   function handleKeydown(event) {
      if (event.key === "ArrowDown" && $currentSlide !== $slides.length) {
         $currentSlide++;
      }

      if (event.key === "ArrowRight" && $currentSlide !== $slides.length) {
         $currentSlide++;
      }

      if (event.key === "ArrowLeft" && $currentSlide !== 1) {
         $currentSlide--;
      }

      if (event.key === "ArrowUp" && $currentSlide !== 1) {
         $currentSlide--;
      }
   }
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

<Menus />

<div class="container">
   {#if $currentSlide === 1}
      <One />
   {:else if $currentSlide === 2}
      <Two />
   {:else if $currentSlide === 3}
      <Three />
   {/if}
</div>

<svelte:window on:keydown={handleKeydown} />

<svelte:head>
   <title>Slide {$currentSlide}</title>
</svelte:head>

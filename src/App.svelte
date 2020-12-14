<script>
   import { currentSlide, slides } from "./store/store.js";
   import One from "./slides/one.svelte";
   import Two from "./slides/two.svelte";
   import Three from "./slides/three.svelte";
   import Four from "./slides/four.svelte";
   import Menus from "./components/Menus.svelte";

   function changeSlide(event) {
      if (event.key === "ArrowRight" && $currentSlide !== $slides.length)
         $currentSlide += 1;

      if (event.key === "ArrowLeft" && $currentSlide !== 1) $currentSlide -= 1;
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

<svelte:head>
   <title>Slide {$currentSlide}</title>
</svelte:head>

<svelte:body on:keydown={changeSlide} />

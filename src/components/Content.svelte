<script lang="ts">
   import slides from "../slide/slides";
   import { currentSlide, showMenus, showLinks } from "../store/slide";

   $: content = slides[$currentSlide - 1].slide;

   function changeSlide(event: { key: string }) {
      if (event.key === "ArrowRight" && $currentSlide !== slides.length) {
         $showLinks = false;
         $showMenus = false;
         $currentSlide += 1;
      }

      if (event.key === "ArrowLeft" && $currentSlide !== 1) {
         $showLinks = false;
         $showMenus = false;
         $currentSlide -= 1;
      }
   }

   function hideMenus() {
      $showMenus = false;
      $showLinks = false;
   }
</script>

<div class="container" on:click={hideMenus}>
   <svelte:component this={content} />
</div>

<svelte:body on:keydown={changeSlide} />

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

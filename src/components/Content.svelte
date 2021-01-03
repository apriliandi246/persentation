<script>
   import slides from "../slide/slides";
   import { currentSlide, showMenus, showLinks } from "../store";

   function changeSlide(event) {
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

   $: content = slides[$currentSlide - 1].slide;
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
   <svelte:component this={content} />
</div>

<svelte:body on:keydown={changeSlide} />

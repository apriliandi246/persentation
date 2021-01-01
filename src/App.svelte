<script>
   import slides from "./slide/slides";
   import { currentSlide } from "./store";
   import Menus from "./components/Menus.svelte";
   import Content from "./components/Content.svelte";

   function changeSlide(event) {
      if (event.key === "ArrowRight" && $currentSlide !== slides.length)
         $currentSlide += 1;

      if (event.key === "ArrowLeft" && $currentSlide !== 1) $currentSlide -= 1;
   }
</script>

<svelte:head>
   <title>Slide {$currentSlide}</title>
</svelte:head>

<svelte:body on:keydown={changeSlide} />

<Menus />

<Content />

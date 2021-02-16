<script lang="ts">
   import { currentSlide, showLinks, showMenus } from "./store/slide";
   import Menus from "./components/Menus.svelte";
   import Content from "./components/Content.svelte";

   function hideMenus() {
      $showMenus = false;
      $showLinks = false;
   }
</script>

<svelte:head>
   <style>
      #dark-mode {
         background-color: #131c25;
      }

      #dark-mode p,
      #dark-mode h1 {
         color: #ffffff;
      }
   </style>

   <title>Slide {$currentSlide}</title>
</svelte:head>

<svelte:body on:click|self={hideMenus} />

<Menus />

<Content />

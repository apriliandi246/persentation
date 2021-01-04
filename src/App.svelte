<script lang="ts">
   import { currentSlide } from "./store/slide";
   import Menus from "./components/Menus.svelte";
   import Content from "./components/Content.svelte";
</script>

<svelte:head>
   <title>Slide {$currentSlide}</title>
</svelte:head>

<Menus />

<Content />

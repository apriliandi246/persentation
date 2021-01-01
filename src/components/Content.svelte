<script>
   import slides from "../slide/slides";
   import { currentSlide } from "../store";

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

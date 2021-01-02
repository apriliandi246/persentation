<script>
   import slides from "../slide/slides";
   import { currentSlide, showMenus } from "../store";
   import { scale } from "svelte/transition";

   function toogleMenu() {
      $showMenus = !$showMenus;
   }

   function chooseSlide(event) {
      $currentSlide = parseInt(event.target.value);
   }
</script>

<style>
   .menus {
      top: 25px;
      left: 30px;
      z-index: 999;
      position: absolute;
   }

   .menus__blocks {
      height: 20px;
      display: flex;
      cursor: pointer;
      flex-direction: column;
      justify-content: space-between;
   }

   .menus__block {
      width: 28px;
      height: 3px;
      display: inline-block;
      background-color: #3b3737;
   }

   .menus__menu {
      width: 250px;
      margin-top: 22px;
      box-shadow: 0 0 1px 1px #0000001a;
   }

   select {
      width: 100%;
      border: none;
      outline: none;
      padding: 10px;
      color: #000000;
      cursor: pointer;
      font-size: 1rem;
      -moz-appearance: none;
      letter-spacing: 1.2px;
      box-sizing: border-box;
      font-family: system-ui;
      -webkit-appearance: none;
      background-color: #fafafa;
      transition: background-color 0.2s;
   }

   select:hover {
      background-color: #f7efef;
   }

   .curSlide {
      font-weight: bold;
      background-color: #d8d2c9;
   }
</style>

<div class="menus">
   <div class="menus__blocks" on:click={toogleMenu}>
      <span class="menus__block" />
      <span class="menus__block" />
      <span class="menus__block" />
   </div>

   {#if $showMenus === true}
      <div
         class="menus__menu"
         in:scale={{ duration: 300 }}
         out:scale={{ duration: 300 }}>
         <!-- svelte-ignore a11y-no-onchange -->
         <select on:change={chooseSlide}>
            <option selected hidden>Choose Your Slide</option>

            {#each slides as slide}
               <option
                  value={slide.id}
                  selected={slide.id === $currentSlide}
                  class:curSlide={slide.id === $currentSlide}>
                  Slide
                  {slide.id}
               </option>
            {/each}
         </select>
      </div>
   {/if}
</div>

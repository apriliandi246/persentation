<script>
   import slides from "../slide/slides";
   import { currentSlide } from "../store";
   import { scale } from "svelte/transition";

   let showMenus = false;

   function toogleMenu() {
      showMenus = !showMenus;
   }

   function chooseSlide(event) {
      $currentSlide = parseInt(event.target.value);
   }
</script>

<style>
   .menu-toggle {
      top: 0;
      z-index: 99;
      padding: 10px;
      margin-top: 20px;
      margin-left: 30px;
      position: absolute;
      text-align: center;
      border-radius: 3px;
      background-color: #fafafa;
      transition: padding-left 0.2s;
      box-shadow: 0 0 1.3px 1.3px #0000001a;
   }

   .toggle-menu {
      height: 20px;
      display: flex;
      position: relative;
      flex-direction: column;
      transition: transform 0.1s;
      justify-content: space-between;
   }

   .toggle-menu__trigger {
      top: -7px;
      opacity: 0;
      z-index: 2;
      left: -11px;
      width: 42px;
      height: 27px;
      cursor: pointer;
      position: absolute;
   }

   .toggle-menu__block {
      width: 28px;
      height: 3px;
      display: block;
      transition: all 0.3s;
      background-color: #3b3737;
   }

   .toggle-menu__block:nth-child(2) {
      transform-origin: 0 0;
   }

   .toggle-menu__block:nth-child(4) {
      transform-origin: 0 100%;
   }

   .toggle-menu__trigger:checked ~ .toggle-menu__block:nth-child(2) {
      transform: rotate(45deg) translate(1px, -1px);
   }

   .toggle-menu__trigger:checked ~ .toggle-menu__block:nth-child(3) {
      opacity: 0;
      transform: scale(0);
   }

   .toggle-menu__trigger:checked ~ .toggle-menu__block:nth-child(4) {
      transform: rotate(-45deg) translate(-1px, 1px);
   }

   .space {
      padding-left: 18.5px;
   }

   .menus {
      top: 0;
      left: 0;
      z-index: 99;
      width: 250px;
      margin-top: 80px;
      margin-left: 30px;
      position: absolute;
      border-radius: 3px;
      box-shadow: 0 0 1px 1px #0000001a;
   }

   select {
      width: 100%;
      border: none;
      outline: none;
      padding: 12px;
      color: #000000;
      cursor: pointer;
      font-size: 1rem;
      border-radius: 2px;
      -moz-appearance: none;
      letter-spacing: 1.2px;
      box-sizing: border-box;
      font-family: system-ui;
      -webkit-appearance: none;
      background-color: #fafafa;
      transition: background-color 0.2s;
   }

   option {
      font-family: system-ui;
   }

   select:hover {
      background-color: #f7efef;
   }

   .curSlide {
      font-weight: bold;
      background-color: #d8d2c9;
   }
</style>

<div class="menu-toggle" class:space={showMenus === true}>
   <div class="toggle-menu">
      <input
         type="checkbox"
         on:change={toogleMenu}
         class="toggle-menu__trigger" />

      <span class="toggle-menu__block" />
      <span class="toggle-menu__block" />
      <span class="toggle-menu__block" />
   </div>
</div>

{#if showMenus === true}
   <div
      class="menus"
      in:scale={{ duration: 300 }}
      out:scale={{ duration: 300 }}>
      <!-- svelte-ignore a11y-no-onchange -->
      <select on:change={chooseSlide}>
         <option selected hidden>Choose Your Slide</option>

         {#each slides as slide}
            <option
               selected={slide.id === $currentSlide}
               value={slide.id}
               class:curSlide={slide.id === $currentSlide}>
               Slide
               {slide.id}
            </option>
         {/each}
      </select>
   </div>
{/if}

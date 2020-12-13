<script>
   import { scale } from "svelte/transition";
   import { currentSlide, slides } from "../store/store.js";

   let showMenus = false;

   function handleToggle() {
      showMenus = !showMenus;
   }

   function chooseSlide(event) {
      $currentSlide = parseInt(event.target.value);
   }
</script>

<style>
   .menu-toggle {
      top: 0;
      padding: 10px;
      margin-top: 20px;
      margin-left: 25px;
      position: absolute;
      text-align: center;
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
      background-color: #000000;
   }

   .toggle-menu__block:nth-child(2) {
      transform-origin: 0 0;
   }

   .toggle-menu__block:nth-child(4) {
      transform-origin: 0 100%;
   }

   .toggle-menu__trigger:checked ~ .toggle-menu__block:nth-child(2) {
      background-color: #000000;
      transform: rotate(45deg) translate(1px, -1px);
   }

   .toggle-menu__trigger:checked ~ .toggle-menu__block:nth-child(3) {
      opacity: 0;
      transform: scale(0);
   }

   .toggle-menu__trigger:checked ~ .toggle-menu__block:nth-child(4) {
      background-color: #000000;
      transform: rotate(-45deg) translate(-1px, 1px);
   }

   .pl {
      padding-left: 17px;
   }

   .menus {
      top: 0;
      left: 0;
      width: 250px;
      margin-top: 90px;
      margin-left: 60px;
      position: absolute;
      border-radius: 2px;
      box-shadow: 0 0 1px 1px #0000001a;
   }

   .menus__button {
      width: 100%;
      border: none;
      outline: none;
      padding: 10px;
      color: #000000;
      cursor: pointer;
      font-size: 1.8rem;
      text-align: center;
      letter-spacing: 1px;
      box-sizing: border-box;
      font-family: system-ui;
      background-color: #fafafa;
      transition: color 0.2s, background-color 0.2s;
   }

   .menus__current-slide {
      width: 100%;
      border: none;
      outline: none;
      padding: 10px;
      color: #000000;
      font-size: 1rem;
      text-align: left;
      letter-spacing: 1.2px;
      box-sizing: border-box;
      font-family: system-ui;
      background-color: #fafafa;
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

   select:hover,
   .menus__button:hover {
      background-color: #f7efef;
   }
</style>

<div class="menu-toggle" class:pl={showMenus === true}>
   <div class="toggle-menu">
      <input
         type="checkbox"
         class="toggle-menu__trigger"
         on:change={handleToggle} />
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
      <button class="menus__button">🌝</button>
      <p class="menus__current-slide">Current slide : {$currentSlide}</p>

      <!-- svelte-ignore a11y-no-onchange -->
      <select on:change={chooseSlide}>
         <option selected hidden>Choose Your Slide</option>
         {#each $slides as slide}
            <option value={slide}>Slide {slide}</option>
         {/each}
      </select>
   </div>
{/if}

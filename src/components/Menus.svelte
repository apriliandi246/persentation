<script>
   import Links from "./Links.svelte";
   import slides from "../slide/slides";
   import { theme } from "../store/theme";
   import { scale } from "svelte/transition";
   import { cubicInOut } from "svelte/easing";
   import { currentSlide, showMenus, showLinks } from "../store/slide";

   function chooseSlide(event) {
      $currentSlide = parseInt(event.target.value);
   }

   function showListOfLinks() {
      $showLinks = !$showLinks;
   }

   function toogleMenu() {
      $showLinks = false;
      $showMenus = !$showMenus;
   }

   function toggleTheme() {
      if ($theme === "Light") {
         $theme = "Dark";
         localStorage.setItem("theme", "Dark");
      } else {
         $theme = "Light";
         localStorage.setItem("theme", "Light");
      }
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
      height: 24px;
      display: flex;
      cursor: pointer;
      flex-direction: column;
      justify-content: space-between;
   }

   .menus__block {
      height: 4px;
      width: 31.4px;
      display: inline-block;
      background-color: #290606;
   }

   .menus__menu {
      width: 250px;
      margin-top: 22px;
      box-shadow: 0 0 1px 1px #0000001a;
   }

   .curSlide {
      color: #ffffff;
      font-weight: bold;
      background-color: #ef482a;
   }

   .menus__links {
      display: flex;
      justify-content: space-between;
   }

   select,
   .menus__links,
   .toggle-theme {
      width: 100%;
      border: none;
      outline: none;
      padding: 11px;
      color: #000000;
      cursor: pointer;
      font-size: 1rem;
      -moz-appearance: none;
      letter-spacing: 1.2px;
      box-sizing: border-box;
      -webkit-appearance: none;
      background-color: #fafafa;
      transition: background-color 0.2s;
   }

   select:hover,
   .linksActive,
   .menus__links:hover,
   .toggle-theme:hover {
      background-color: #f7efef;
   }

   select,
   .menus__links,
   .toggle-theme .menus__links p {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
         Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   }
</style>

<div class="menus">
   <div class="menus__blocks" on:click={toogleMenu}>
      <span class="menus__block" />
      <span class="menus__block" />
      <span class="menus__block" />
   </div>

   {#if $showMenus}
      <div
         class="menus__menu"
         in:scale={{ duration: 200, easing: cubicInOut }}
         out:scale={{ duration: 200, easing: cubicInOut }}>
         <p class="toggle-theme" on:click={toggleTheme}>
            {$theme === 'Light' ? 'Light' : 'Dark'}
         </p>

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

         <div
            class="menus__links"
            on:click={showListOfLinks}
            class:linksActive={$showLinks}>
            <p>Links</p>
            <span>{$showLinks ? '▼' : '▶'}</span>
         </div>
      </div>
   {/if}

   {#if $showLinks}
      <Links />
   {/if}
</div>

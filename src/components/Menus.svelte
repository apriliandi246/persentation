<script lang="ts">
   import Links from "./Links.svelte";
   import slides from "../slide/slides";
   import { theme } from "../store/theme";
   import { scale, fade } from "svelte/transition";
   import { currentSlide, showMenus, showLinks } from "../store/slide";

   let selectValue: string = "1";

   $: {
      $currentSlide = parseInt(selectValue);
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

<div class="menus">
   <div class="menus__blocks" on:click={toogleMenu}>
      <span class="menus__block" />
      <span class="menus__block" />
      <span class="menus__block" />
   </div>

   {#if $showMenus}
      <div
         class="menus__menu"
         in:scale={{ duration: 250 }}
         out:fade={{ duration: 120 }}
      >
         <!-- svelte-ignore a11y-no-onchange -->
         <select bind:value={selectValue}>
            <option selected hidden>Choose Your Slide</option>

            {#each slides as slide}
               <option
                  value={slide.id}
                  selected={slide.id === $currentSlide}
                  class:curSlide={slide.id === $currentSlide}
               >
                  Slide
                  {slide.id}
               </option>
            {/each}
         </select>

         <div
            class="menus__links"
            on:click={showListOfLinks}
            class:linksActive={$showLinks}
         >
            <p>Links</p>
            <span>{$showLinks ? "▼" : "▶"}</span>
         </div>

         <p class="toggle-theme" on:click={toggleTheme}>
            {$theme === "Light" ? "Light Mode" : "Dark Mode"}
         </p>
      </div>
   {/if}

   {#if $showLinks}
      <Links />
   {/if}
</div>

<svelte:head>
   <style>
      #dark-mode .menus__blocks .menus__block {
         background-color: #ffffff;
      }

      #dark-mode .menus__menu select,
      #dark-mode .menus__menu .menus__links,
      #dark-mode .menus__menu .toggle-theme {
         color: #ffffff;
         background-color: #131c25;
      }

      #dark-mode .menus .menus__menu {
         border: 3px solid #2a3e4b;
         box-shadow: 8px 8px 1px 1px #2a3e4b;
      }

      #dark-mode .menus__menu select option {
         color: #ffffff;
         background-color: #192734;
      }

      #dark-mode .menus__menu select:hover,
      #dark-mode .menus__menu .menus__links:hover,
      #dark-mode .menus__menu .toggle-theme:hover {
         background-color: #192734;
      }

      #dark-mode .menus .curSlide {
         background-color: #ef482a;
      }
   </style>
</svelte:head>

<style>
   .menus {
      top: 30px;
      left: 40px;
      z-index: 999;
      position: absolute;
   }

   .menus__blocks {
      width: 32px;
      height: 24px;
      display: flex;
      cursor: pointer;
      flex-direction: column;
      justify-content: space-between;
   }

   .menus__block {
      height: 4px;
      width: 100%;
      display: inline-block;
      background-color: #290606;
   }

   .menus__menu {
      width: 250px;
      margin-top: 22px;
      border-radius: 3px;
      border: 3px solid #b8bec5;
      box-shadow: 8px 8px 1px 1px #b8bec5;
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
      background-color: #ffffff;
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
      font-family: Ubuntu;
   }
</style>

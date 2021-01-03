<script>
   import links from "../slide/links";
   import slides from "../slide/slides";
   import { scale } from "svelte/transition";
   import { cubicInOut } from "svelte/easing";
   import { currentSlide, showMenus, showLinks } from "../store";

   function toogleMenu() {
      $showLinks = false;
      $showMenus = !$showMenus;
   }

   function chooseSlide(event) {
      $currentSlide = parseInt(event.target.value);
   }

   function showListOfLinks() {
      $showLinks = !$showLinks;
   }
</script>

<style>
   :root {
      --fontFamily: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
         Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   }

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
      background-color: #3b3737;
   }

   .menus__menu {
      width: 250px;
      margin-top: 22px;
      box-shadow: 0 0 1px 1px #0000001a;
   }

   select,
   .menus__links {
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
      font-family: var(--fontFamily);
      transition: background-color 0.2s;
   }

   .menus__links p {
      font-family: var(--fontFamily);
   }

   .linksActive,
   select:hover,
   .menus__links:hover {
      background-color: #f7efef;
   }

   .curSlide {
      font-weight: bold;
      background-color: #d8d2c9;
   }

   .menus__links {
      display: flex;
      justify-content: space-between;
   }

   .list-links {
      top: 140px;
      left: 250px;
      display: flex;
      padding: 14px;
      color: #000000;
      position: absolute;
      flex-direction: column;
      background-color: #fafafa;
      box-shadow: 0 0 1px 1px #0000001a;
   }

   .list-links a {
      color: #000000;
      line-height: 26px;
      margin-bottom: 8px;
      text-decoration: none;
      letter-spacing: 1.7px;
      font-family: var(--fontFamily);
   }

   .list-links a:hover,
   .list-links a:focus {
      color: #0000ff;
      text-decoration: underline;
   }

   .list-links a:last-child {
      margin-bottom: 0;
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
      <div
         class="list-links"
         in:scale={{ duration: 200, easing: cubicInOut }}
         out:scale={{ duration: 200, easing: cubicInOut }}>
         {#each links as link}
            <a href={link} target="_blank" rel="noopener">{link}</a>
         {/each}
      </div>
   {/if}
</div>

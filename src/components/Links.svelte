<script lang="ts">
   import links from "../slide/links";
   import { scale, fade } from "svelte/transition";
</script>

<div
   class="list-links"
   in:scale={{ duration: 250 }}
   out:fade={{ duration: 120 }}
>
   {#each links as link}
      <a href={link} target="_blank" rel="noopener">{link}</a>
   {/each}
</div>

<svelte:head>
   <style>
      #dark-mode .menus .list-links {
         background-color: #131c25;
         border: 3px solid #2a3e4b;
         box-shadow: 9px 9px 1px 1px #2a3e4b;
      }

      #dark-mode .menus .list-links a {
         color: #ffffff;
      }
   </style>
</svelte:head>

<style>
   .list-links {
      top: 90px;
      left: 300px;
      display: flex;
      padding: 14px;
      color: #000000;
      overflow-y: auto;
      max-height: 300px;
      position: absolute;
      border-radius: 3px;
      flex-direction: column;
      background-color: #ffffff;
      border: 3px solid #b8bec5;
      box-shadow: 8px 8px 1px 1px #b8bec5;
   }

   .list-links a {
      color: #000000;
      font-size: 1rem;
      line-height: 26px;
      margin-bottom: 8px;
      font-family: Ubuntu;
      text-decoration: none;
      letter-spacing: 1.5px;
   }

   .list-links a:last-child {
      margin-bottom: 0;
   }

   .list-links a:hover,
   .list-links a:focus {
      text-decoration: underline;
   }
</style>

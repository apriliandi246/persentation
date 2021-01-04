<script lang="ts">
   import links from "../slide/links";
   import { scale } from "svelte/transition";
   import { cubicInOut } from "svelte/easing";
</script>

<style>
   .list-links {
      top: 126px;
      left: 280px;
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
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
         Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
   }

   .list-links a:last-child {
      margin-bottom: 0;
   }

   .list-links a:hover,
   .list-links a:focus {
      color: #0000ff;
      text-decoration: underline;
   }
</style>

<div
   class="list-links"
   in:scale={{ duration: 200, easing: cubicInOut }}
   out:scale={{ duration: 200, easing: cubicInOut }}>
   {#each links as link}
      <a href={link} target="_blank" rel="noopener">{link}</a>
   {/each}
</div>

<script lang="ts">
   import links from "../slide/links";
   import { scale } from "svelte/transition";
</script>

<div class="list-links" transition:scale={{ duration: 300 }}>
   {#each links as link}
      <a href={link} target="_blank" rel="noopener">{link}</a>
   {/each}
</div>

<style>
   .list-links {
      top: 126px;
      left: 280px;
      display: flex;
      padding: 14px;
      color: #000000;
      overflow-y: auto;
      max-height: 300px;
      position: absolute;
      flex-direction: column;
      background-color: #fafafa;
      box-shadow: 0 0 1px 1px #0000001a;
   }

   .list-links a {
      color: #000000;
      line-height: 26px;
      margin-bottom: 8px;
      font-family: Ubuntu;
      text-decoration: none;
      letter-spacing: 1.7px;
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

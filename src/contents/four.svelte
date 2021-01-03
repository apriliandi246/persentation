<script>
   import { fly } from "svelte/transition";
   import { cubicInOut } from "svelte/easing";
</script>

<style>
   div {
      display: flex;
      align-items: center;
      justify-content: space-around;
   }

   h1 {
      font-size: 100px;
      letter-spacing: 5px;
      font-family: monospace;
   }
</style>

<div
   in:fly|local={{ x: 900, duration: 490 }}
   out:fly|local={{ x: -900, duration: 490, easing: cubicInOut }}>
   <h1>Which one</h1>
   <h1>❓</h1>
</div>

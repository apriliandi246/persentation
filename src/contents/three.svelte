<script lang="ts">
   import { fly } from "svelte/transition";
   import { cubicInOut } from "svelte/easing";
</script>

<style>
   div {
      margin-top: -14px;
      text-align: center;
      position: absolute;
   }

   img {
      width: 80%;
      max-height: 100%;
   }

   p {
      font-size: 23px;
      font-weight: 400;
      line-height: 37px;
      letter-spacing: 1.4px;
      font-family: system-ui;
   }
</style>

<div
   in:fly|local={{ x: 900, duration: 490 }}
   out:fly|local={{ x: -900, duration: 490, easing: cubicInOut }}>
   <img src="/img/vue.png" alt="vuejs" />
   <p>The Progressive JavaScript Framework</p>
</div>

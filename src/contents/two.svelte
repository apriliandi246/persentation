<script lang="ts">
   import { fly } from "svelte/transition";
   import { cubicInOut } from "svelte/easing";
</script>

<style>
   div {
      margin-top: -22px;
      text-align: center;
      position: absolute;
   }

   img {
      width: 60%;
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
   <img src="/img/react.png" alt="reactjs" />
   <p>A JavaScript library for building user interfaces</p>
</div>

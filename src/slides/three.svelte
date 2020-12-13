<script>
   import { scale } from "svelte/transition";
</script>

<style>
   div {
      margin-top: -14px;
      text-align: center;
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

<div in:scale={{ duration: 400 }}>
   <img src="https://v3.vuejs.org/logo.png" alt="reactjs" />
   <p>The Progressive JavaScript Framework</p>
</div>

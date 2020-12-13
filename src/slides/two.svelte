<script>
   import { scale } from "svelte/transition";
</script>

<style>
   div {
      margin-top: -22px;
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
   <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
      alt="reactjs" />
   <p>A JavaScript library for building user interfaces</p>
</div>

<script>
   import { scale, fly } from "svelte/transition";
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
   in:fly|local={{ x: 900, duration: 500 }}
   out:fly|local={{ x: -900, duration: 400 }}>
   <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
      alt="reactjs" />
   <p>A JavaScript library for building user interfaces</p>
</div>

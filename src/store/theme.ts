import { Writable, writable } from "svelte/store";

export let theme: Writable<string>;

if (typeof window !== "undefined") {
   theme = writable(localStorage.getItem("theme") || "Light");
} else {
   theme = writable(null);
}

theme.subscribe((val) => {
   if (typeof window !== "undefined") {
      if (val === "Dark") {
         document.body.setAttribute("id", "dark-mode");
      } else {
         document.body.removeAttribute("id");
      }
   }
});

import { writable } from "svelte/store";

export const currentSlide = writable(1);
export const showMenus = writable(false);
export const showLinks = writable(false);

export let theme;

if (typeof window !== "undefined") {
   theme = writable(localStorage.getItem("theme") || "Light");
} else {
   theme = writable(null);
}

theme.subscribe((val) => {
   if (typeof window !== "undefined") {
      if (val === "Dark") {
         window.document.body.classList.add("dark-mode");
      } else {
         window.document.body.classList.remove("dark-mode");
      }
   }
});

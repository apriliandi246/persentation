import { writable } from "svelte/store";

export const currentSlide = writable(1);
export const showMenus = writable(false);

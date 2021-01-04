import { Writable, writable } from "svelte/store";

export const currentSlide: Writable<number> = writable(1);
export const showMenus: Writable<boolean> = writable(false);
export const showLinks: Writable<boolean> = writable(false);

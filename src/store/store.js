import { writable } from "svelte/store";

export const slides = writable([1, 2, 3, 4]);
export const currentSlide = writable(1);

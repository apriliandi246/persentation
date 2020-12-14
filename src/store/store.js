import { writable } from "svelte/store";

// total slide
export const slides = writable([1, 2, 3, 4]);

// current active slide
export const currentSlide = writable(1);

import { writable } from "svelte/store";

export const slides = writable([1, 2, 3]);
export const currentSlide = writable(1);

import { writable } from "svelte/store";

const calculation = writable([]);
const result = writable(0);

export {calculation, result};
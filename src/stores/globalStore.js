import { writable } from "svelte/store";

export let globalStore = writable({
    accessToken: "pk.eyJ1Ijoiam5jb2NvbnRyb2wiLCJhIjoiY2t1NHY3a2VvMWRrbjJ1cWhxZHN5MGk5bCJ9.OoZejpFa8_eKmfGKt2_j-g",
    searchTerm: "",
    searchResults: [],
})
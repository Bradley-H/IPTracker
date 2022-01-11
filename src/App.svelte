<script>
    // IMPORTS //
    import leaflet from 'leaflet';
    // COMPONENTS //
    import Header from './components/Header.svelte';
    import IPInfo from './components/IPInfo.svelte';
    import Prompt from './components/Prompt.svelte'
    // STORES //
    import {globalStore} from './stores/globalStore';
    // SVELTE IMPORTS //
    import { onMount} from 'svelte';
    // VARIABLES //
    let map;
    $: ErrorMessage = null
    // LIFE CYCLE //
    onMount(() => {
            map = leaflet.map('map')
            map.setView([51.505, -0.09], 13);
            leaflet.marker([51.505, -0.09]).addTo(map);
            leaflet.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${$globalStore.accessToken}`, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: $globalStore.accessToken
        }).addTo(map);
    })

    // FUNCTIONS //
    async function getIPInfo(){
        try {
            let endpoint = `https://api.ipgeolocation.io/ipgeo?apiKey=a428a4e0c6e54370854d3527665fb010&ip=${$globalStore.searchTerm}`
            let response = await fetch(endpoint);
            let query = await response.json();
           let { ip, isp, state_prov, city, time_zone, latitude, longitude } = query; 
           let UTC = time_zone.offset;
           $globalStore.searchResults = {ip, isp, state_prov, city, UTC, latitude, longitude};
           map.setView([$globalStore.searchResults.latitude, $globalStore.searchResults.longitude], 13);
           leaflet.marker([$globalStore.searchResults.latitude, $globalStore.searchResults.longitude]).addTo(map);
        } catch (error) {
            ErrorMessage = "Couldn't find that IP address";
        } 
}

function preventLetters(e){
    if(e.keyCode < 48 || e.keyCode > 57){
        ErrorMessage = "Please use numbers only. Ex: 123.456.789.0";
        e.preventDefault();
    }
}
</script>


<style>
    main{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
    }

    #map{
        height: 100%;
        z-index: 10;
    }
</style>

<main>
<Header on:click={getIPInfo} on:keypress={(e) => e.key === "Enter" ? getIPInfo() : preventLetters(e)} />
<svelte:component this={IPInfo}/>
<!-- THE MAP -->
<div id="map"></div>
{#if ErrorMessage !== null}
    <Prompt {ErrorMessage} on:click={() => ErrorMessage = null}/>
{/if}
</main>
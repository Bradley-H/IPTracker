<script>
    // STORES //
    import {globalStore} from '../stores/globalStore';
    // CONSTANTS //
    $: IPInformation = [
    {id: 0, text: "IP Address", value: ip},
    {id: 1, text: "Location", value: `${location}, ${city}`},
    {id: 2, text: "Timezone", value: `UTC${UTC}`},
    {id: 3, text: "ISP", value: isp},
]

$: ip = $globalStore.searchResults.ip;
$: location = $globalStore.searchResults.state_prov;
$: city = $globalStore.searchResults.city;
$: UTC = $globalStore.searchResults.UTC;
$: isp = $globalStore.searchResults.isp;
</script>

{#if $globalStore.searchResults.length !== 0}
<section class="ui center aligned header">
    {#each IPInformation as IP (IP.id)}
        <div>
            <h3>{IP.text}:</h3>
            <span>{IP.value}</span>
        </div>
    {/each}
</section>
{/if}

<style>
    .ui.header {
        display: grid;
        grid-template-columns: repeat(2, 1fr) !important;
        background-color: white !important;
        margin: 1rem !important;
        justify-content: center;
        align-items: center;
        text-align: center;
        z-index: 22;
        position: absolute;
        top: 120px;
        align-self: center;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
                    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
                    0 12.5px 10px rgba(0, 0, 0, 0.06),
                    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
                    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
                    0 100px 80px rgba(0, 0, 0, 0.12);
        border-radius: 10px;
    }

    span {
        font-weight: normal;
        font-size: 14px;
    }

    div {
        display: flex;
        flex-direction: column;
        margin: 0.5rem .5rem 0.5rem 0
    }

    @media (max-width: 799px) {
        .ui.header{
           width: 90%;
           height: 12.5rem;
        }
    }

    @media (min-width: 800px) {
        .ui.header {
            display: flex !important;
            height: 7rem;
            padding: 3.5rem !important;
        }

        div {
            margin-left: 2rem !important;
        }

        span{
            font-size: 16px;
        }
    }
</style>

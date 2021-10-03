<script>
    import {globalStore} from '../stores/globalStore.js'
</script>


<style lang="scss">
    header{
        display: grid;
        height: 14rem;
        width: 100%;
        background-image: url('/images/pattern-bg.png');
        object-fit: contain;
        background-size: cover;

        justify-content: center;
        top: 0;
        left: 0;
        padding: 0 4rem;
    }

    div{
        display: flex;
        position: relative;
    }

    input{
        height: 3.5rem;
        min-width: 290px;
        max-width: 55rem;
        border: none;
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        &:focus{
            outline: 0;
        }
    }

    h2{
        text-align: center;
        color: white;
        position: relative;
        top: 1rem;
    }

    i{
        display: flex;
        width: 3rem;
        height: 3.5rem;
        justify-content: center;
        align-items: center;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: black;
        color: white;
        cursor: pointer;
    }
</style>


<header>
    <h2>IP Address Tracker</h2>
    <div>
        <input 
        bind:value={$globalStore.searchTerm}
        on:keypress
        class="ui input" type="text" 
        placeholder="Search here or leave empty for your IP address"/>
        <i on:click class="fas fa-chevron-right"></i>
    </div>

</header>
<script>
    export let ErrorMessage;
</script>


<style>
    .overlay{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.7);
        transition: opacity 500ms;
        height: 100%;
        width: 100%;
        opacity: 1;
        z-index: 10;
        transform: translate(0, 0%);
    }

    div{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        width: 55%;
        padding: 20px;
        text-align: center;
        z-index: 11;
    }
</style>



<div>
    <h3>{ErrorMessage}</h3>
    <button class="ui blue fluid button" on:click>OK</button>
</div>


<div class="overlay"></div>
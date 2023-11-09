<script>
    export let data

    let trains = data.trains
</script>
<main class=" flex flex-row flex-wrap justify-evenly">
    {#each trains as train}
        <div class="card card-bordered w-11/12 lg:w-2/5 pt-3 border-primary overflow-hidden">
            <h2 class="card-title text-center w-11/12 mx-auto">{train.name}</h2>
            <div class="card-body">
                <p class="whitespace-pre-wrap">{train.description}</p>
            </div>
            <div class="card-actions mb-3 px-2">
                {#if train.completion !== 100}
                    <p class="text-right w-full">Obtention: en cours</p>
                    {:else}
                    <p class="text-right w-full">Obtention: {train.obtention_date.toLocaleDateString()}</p>
                {/if}
            </div>
            <progress class="progress progress-success" max="100" value={train.completion}></progress>
        </div>
    {/each}
</main>
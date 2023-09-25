<script>
    export let data

    let exp = data.exp
</script>
<svelte:head>
    <title>{exp.title} chez {exp.societe}</title>
</svelte:head>
<main class="py-10">

    <h1 class="text-4xl font-bold text-center">{exp.title}</h1>
    <div>
        <p class="whitespace-pre-wrap w-11/12 mx-auto my-12">{exp.description}</p>
    </div>

    <div class="w-11/12 mx-auto">
        <h2 class="text-3xl">Technos utilisées</h2>
        <div class=" flex flex-row flex-wrap justify-around gap-3">
            {#each exp.exp_to_tech as tech}
                <span class="badge bg-info py-3">{tech.technos.name}</span>
            {/each}
        </div>
    </div>


</main>

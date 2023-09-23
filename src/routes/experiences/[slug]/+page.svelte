<script>
    export let data

    let exp = data.exp
</script>
<svelte:head>
    <title>{exp.title} chez {exp.societe}</title>
</svelte:head>
<main class="py-10">
    <h1 class="text-4xl font-bold text-center">{exp.title}</h1>

    <div class="w-5/12 mx-auto">
        <h2>Technos utilisées</h2>
        <div class=" flex flex-row flex-wrap justify-around">
            {#each exp.exp_to_tech as tech}
                <span class="badge badge-info">{tech.technos.name}</span>
            {/each}
        </div>
    </div>


</main>

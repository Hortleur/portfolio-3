<script>
    export let data

    let exps = data.exps
</script>
<svelte:head>
    <title>Expériences</title>
</svelte:head>
<main class="flex flex-row flex-wrap justify-around">
    {#each exps as exp}
        <div class="card card-bordered w-11/12 my-2 xl my-0 xl:w-1/3 glass">
            <div class="card-body">
                <h2 class="card-title">{exp.title}</h2>
                <p>{exp.status} Chez {exp.societe}</p>
                {#if (exp.image)}
                    <div>
                        <img src="exp.img" alt="text">
                    </div>
                {/if}
                <div>
                    <p class=" line-clamp-2">{exp.description}</p>
                </div>
                <div>
                    <h3>Technos</h3>
                    {#each exp.exp_to_tech as tech}
                        <span class="badge badge-info">{tech.technos.name}</span>
                    {/each}
                </div>
                <div class="card-actions">
                    <a href="/experiences/{exp.id}" class="btn btn-primary">
                        Voir plus
                    </a>
                </div>
            </div>
        </div>
    {/each}
</main>

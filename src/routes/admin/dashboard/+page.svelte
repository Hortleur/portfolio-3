<script>
    import TechTable from "$lib/components/techTable.svelte";
    import ExpTable from "$lib/components/expTable.svelte"
    export let data
    let toShow = "exps"
    let tabs = [
        {
            name: 'Expériences',
            isActive: false,
            subject: 'exps'
        },
        {
            name: 'Formations',
            isActive: false,
            subject: 'trainings'
        },
        {
            name: 'Technos',
            isActive: false,
            subject: 'tech'
        }
    ]

    const changeTable = (subject) => {
        toShow = subject
    }
</script>

<main>
    <div class="tabs bg-accent justify-center">
        {#each tabs as tab}
            <span class="tab tab-lifted" on:click|preventDefault={() => changeTable(tab.subject)}>{tab.name}</span>
        {/each}
    </div>
    {#if (toShow === "tech")}
        <div class="w-3/5 mx-auto my-10 rounded-lg bg-accent">
            <h2 class="text-center text-2xl">Techs</h2>
            <TechTable techs={data.techs} />
        </div>
    {/if}
    {#if (toShow === "exps")}
        <div class="w-3/5 mx-auto my-10 rounded-lg bg-accent">
            <h2 class="text-center text-2xl">Exps</h2>
            <ExpTable exps={data.exps} techs={data.techs} />
        </div>
    {/if}

</main>
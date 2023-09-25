<script>
    import TechTable from "$lib/components/techTable.svelte";
    import ExpTable from "$lib/components/expTable.svelte"
    import TrainTable from "$lib//components/trainTable.svelte"
    export let data
    let tabs = [
        {
            name: 'Expériences',
            isActive: false,
            subject: 'exps',
            component: ExpTable
        },
        {
            name: 'Formations',
            isActive: false,
            subject: 'trainings',
            component: TrainTable
        },
        {
            name: 'Technos',
            isActive: false,
            subject: 'tech',
            component: TechTable
        }
    ]

    const changeTable = (subject) => {
        actualTab = tabs[subject]
    }

    let actualTab = tabs[0]
</script>

<main>
    <div class="tabs bg-accent justify-center">
        {#each tabs as tab}
            <span class="tab tab-lifted" on:click|preventDefault={() => changeTable(tabs.indexOf(tab))}>{tab.name}</span>
        {/each}
    </div>
    <svelte:component this={actualTab.component} exps={data.exps} techs={data.techs} trains={data.trainings}/>

</main>
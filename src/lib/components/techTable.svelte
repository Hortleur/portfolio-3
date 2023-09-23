<script>

    export let techs

    let techToEdit
    let editTech = false
    let addTech = false
    let level= 0

    const edit = (id) => {
        techToEdit = techs.find((tech) => tech.id === id)
        editTech = true
    }

    const add = () => {
        addTech = true
    }
</script>

<div class="overflow-x-auto">
    {#if (!editTech && !addTech)}
    <table class="table table-xs">
        <thead>
        <tr>
            <th></th>
            <th>Name</th>
            <th>Level</th>
            <th>Icone</th>
            <th>Couleur</th>
            <th>Favori</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {#each techs as tech}
            <tr>
                <th>{tech.id}</th>
                <td>{tech.name}</td>
                <td>{tech.level}</td>
                <td>{tech.iconName}</td>
                <td class="text-[{tech.color}]">{tech.color}</td>
                <td>
                    {#if (tech.favorite === true)}
                        &#128170
                        {:else if (tech.favorite === false)}
                        &#128169
                        {:else}
                        &#128168
                    {/if}
                </td>
                <td>
                    <button class="btn btn-success" on:click={edit(tech.id)}>Editer</button>
                    <form action="?/deleteTech" method="POST">
                        <input type="text" name="id" id="id" bind:value={tech.id} class="hidden">
                        <button class="btn btn-error" type="submit">Supprimer</button>
                    </form>

                </td>
            </tr>
        {/each}
        </tbody>
        <tfoot>
            <button class="btn btn-success my-5 ml-5" on:click={add}>Ajouter</button>
        </tfoot>
    </table>
    {/if}
    {#if (editTech)}
        <div class="w-11/12 lg:w-7/12 mx-auto flex flex-col flex-nowrap item-center justify-center my-10">
            <h2 class="text-center text-2xl">Edit</h2>
            <form action="?/editTech" method="POST">
                <input type="number" name="id" id="id" bind:value={techToEdit.id}>
                <label for="name" class="flex flex-col">
                    <span>Name</span>
                    <input bind:value={techToEdit.name} name="name" id="name" class="input input-bordered" type="text"/>
                </label>
                <label for="level" class="flex flex-col">
                    <span>Level: {techToEdit.level}</span>
                    <input bind:value={techToEdit.level} name="level" id="level" class="range range-info" type="range"/>
                </label>
                <label for="color" class="flex flex-col">
                    <span>Color</span>
                    <input bind:value={techToEdit.color} name="color" id="color" class="" type="color"/>
                </label>
                <label for="iconName" class="flex flex-col">
                    <span>Icon</span>
                    <input bind:value={techToEdit.iconName} name="iconName" id="iconName" class="input input-bordered" type="text"/>
                </label>
                <div>
                    <button class="btn btn-success" type="submit">Update</button>
                    <button class="btn btn-error" on:click|preventDefault={()=>{editTech = false}}>Cancel</button>
                </div>
            </form>
        </div>
    {/if}
    {#if (addTech)}
        <div class="w-11/12 lg:w-7/12 mx-auto flex flex-col flex-nowrap item-center justify-center my-10">
            <h2 class="text-center text-2xl">Edit</h2>
            <form action="?/addTech" method="POST">
                <label for="name" class="flex flex-col">
                    <span>Name</span>
                    <input name="name" id="name" class="input input-bordered" type="text"/>
                </label>
                <label for="level" class="flex flex-col">
                    <span>Level:{level} </span>
                    <input bind:value={level} name="level" id="level" class="range range-info" type="range"/>
                </label>
                <label for="color" class="flex flex-col">
                    <span>Color</span>
                    <input name="color" id="color" class="" type="color"/>
                </label>
                <label for="iconName" class="flex flex-col">
                    <span>Icon</span>
                    <input name="iconName" id="iconName" class="input input-bordered" type="text"/>
                </label>
                <div>
                    <button class="btn btn-success" type="submit">Add</button>
                    <button class="btn btn-error" on:click|preventDefault={()=>{addTech = false}}>Cancel</button>
                </div>
            </form>
        </div>
    {/if}
</div>
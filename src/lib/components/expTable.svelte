<script>
    export let exps
    export let techs

    let expsToEdit
    let editExp = false
    let addExp = false

    const edit = (id) => {
        expsToEdit = exps.find((exp) => exp.id === id)
        expsToEdit.id = id
        editExp = true
    }

    const add = () => {
        addExp = true
    }

    const isChecked = (techId) => {
        return expsToEdit.exp_to_tech.some(expTech => expTech.technos.id === techId);
    };
</script>

<div class="overflow-x-auto">
    {#if (!editExp && !addExp)}
        <table class="table table-xs">
            <thead>
            <tr>
                <th></th>
                <th>Title</th>
                <th>Description</th>
                <th>Image</th>
                <th>Societe</th>
                <th>Status</th>
                <th>Technos</th>
            </tr>
            </thead>
            <tbody>
            {#each exps as exp}
                <tr>
                    <th>{exp.id}</th>
                    <td>{exp.title}</td>
                    <td>{exp.description}</td>
                    <td>{exp.image}</td>
                    <td>{exp.societe}</td>
                    <td>{exp.status}</td>
                    <td>
                        {#each exp.exp_to_tech as tech}
                            <span class="badge">{tech.technos.name}</span>
                        {/each}
                    </td>
                    <td>
                        <button class="btn btn-success" on:click={edit(exp.id)}>Editer</button>
                        <form action="?/deleteExp" method="POST">
                            <input type="text" name="id" id="id" bind:value={exp.id} class="hidden">
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
    {#if (editExp)}
        <div class="w-11/12 lg:w-7/12 mx-auto flex flex-col flex-nowrap item-center justify-center my-10">
            <h2 class="text-center text-2xl">Edit</h2>
            <form action="?/editExp" method="POST">
                <input type="text" name="id" id="id" value={expsToEdit.id} class="hidden">
                <label for="title" class="flex flex-col">
                    <span>Title</span>
                    <input name="title" id="title" class="input input-bordered" type="text" bind:value={expsToEdit.title}/>
                </label>
                <label for="description" class="flex flex-col">
                    <span>Description</span>
                    <textarea name="description" id="description" cols="30" rows="5" class="textarea textarea-bordered" bind:value={expsToEdit.description}></textarea>
                </label>
                <label for="techs" class="flex flex-row flex-wrap justify-evenly">
                    <span>Technos:</span>
                    {#each techs as tech}
                        <div class="flex flex-row gap-2">
                            <input type="checkbox" name="technos" value="{tech.id}" id="tech.id" class="checkbox checkbox-md checked:checkbox-primary" checked={isChecked(tech.id)}>
                            <span>{tech.name}</span>
                        </div>
                    {/each}
                </label>
                <label for="societe" class="flex flex-col">
                    <span>Société</span>
                    <input type="text" name="societe" id="societe" class="input input-bordered" bind:value={expsToEdit.societe}>
                </label>
                <label for="status" class="flex flex-col">
                    <span>Status</span>
                    <select class="select select-bordered" name="status" bind:value={expsToEdit.status}>
                        <option value="CDI">CDI</option>
                        <option value="CDD">CDD</option>
                        <option value="Freelance">Freelance</option>
                    </select>
                </label>
                <div>
                    <button class="btn btn-success" type="submit">Update</button>
                    <button class="btn btn-error" on:click|preventDefault={()=>{editExp = false}}>Cancel</button>
                </div>
            </form>
        </div>
    {/if}
    {#if (addExp)}
        <div class="w-11/12 lg:w-7/12 mx-auto flex flex-col flex-nowrap item-center justify-center my-10">
            <h2 class="text-center text-2xl">Add</h2>
            <form action="?/addExp" method="POST" class=" flex flex-col gap-4">
                <label for="title" class="flex flex-col">
                    <span>Title</span>
                    <input name="title" id="title" class="input input-bordered" type="text"/>
                </label>
                <label for="description" class="flex flex-col">
                    <span>Description</span>
                    <textarea name="description" id="description" cols="30" rows="5" class="textarea textarea-bordered"></textarea>
                </label>
                <label for="techs" class="flex flex-row flex-wrap justify-evenly">
                    <span>Technos:</span>
                    {#each techs as tech}
                        <div class=" flex flex-row gap-2">
                            <input type="checkbox" name="technos" value="{tech.id}" id="tech.id" class="checkbox checkbox-md checked:checkbox-primary">
                            <span>{tech.name}</span>
                        </div>
                    {/each}
                </label>
                <label for="societe" class="flex flex-col">
                    <span>Société</span>
                    <input type="text" name="societe" id="societe" class="input input-bordered">
                </label>
                <label for="status" class="flex flex-col">
                    <span>Status</span>
                    <select class="select select-bordered" name="status">
                        <option value="CDI">CDI</option>
                        <option value="CDD">CDD</option>
                        <option value="Freelance">Freelance</option>
                    </select>
                </label>
                <div>
                    <button class="btn btn-success" type="submit">Add</button>
                    <button class="btn btn-error" on:click|preventDefault={()=>{addExp = false}}>Cancel</button>
                </div>
            </form>
        </div>
    {/if}
</div>
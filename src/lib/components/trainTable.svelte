<script>
    export let trains

    let trainToEdit
    let editTrain = false
    let addTrain = false
    let completion = 0

    const edit = (id) => {
        trainToEdit = trains.find((train) => train.id === id)
        trainToEdit.id = id
        let transformedDate = trainToEdit.obtention_date.toISOString()
        trainToEdit.obtention_date = transformedDate.split('T')[0]
        editTrain = true
    }

    const add = () => {
        addTrain = true
    }
</script>

<div class="overflow-x-auto">
    {#if (!editTrain && !addTrain)}
        <table class="table table-xs">
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Description</th>
                <th>Year</th>
                <th>Completion</th>
            </tr>
            </thead>
            <tbody>
            {#each trains as train}
                <tr>
                    <th>{train.id}</th>
                    <td>{train.name}</td>
                    <td>{train.description}</td>
                    <td>{train.obtention_date}</td>
                    <td>{train.completion}</td>
                    <td>
                        <button class="btn btn-success" on:click={edit(train.id)}>Editer</button>
                        <form action="?/deleteTrain" method="POST">
                            <input type="text" name="id" id="id" bind:value={train.id} class="hidden">
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
    {#if (editTrain)}
        <div class="w-11/12 lg:w-7/12 mx-auto flex flex-col flex-nowrap item-center justify-center my-10">
            <h2 class="text-center text-2xl">Edit</h2>
            <form action="?/editTrain" method="POST">
                <input type="text" name="id" id="id" value={trainToEdit.id} class="hidden">
                <label for="name" class="flex flex-col">
                    <span>Name</span>
                    <input name="name" id="name" class="input input-bordered" type="text" bind:value={trainToEdit.name}/>
                </label>
                <label for="description" class="flex flex-col">
                    <span>Description</span>
                    <textarea name="description" id="description" cols="30" rows="5" class="textarea textarea-bordered" bind:value={trainToEdit.description}></textarea>
                </label>
                <label for="obtention_date" class="flex flex-col">
                    <span>Year</span>
                    <input name="obtention_date" id="obtention_date" type="date" class="" bind:value={trainToEdit.obtention_date}>
                </label>
                <label for="completion" class="flex flex-col">
                    <span>Completion: {trainToEdit.completion}</span>
                    <input type="range" name="completion" id="completion" class="range range-info" bind:value={trainToEdit.completion}>
                </label>
                <div>
                    <button class="btn btn-success" type="submit">Update</button>
                    <button class="btn btn-error" on:click|preventDefault={()=>{editTrain = false}}>Cancel</button>
                </div>
            </form>
        </div>
    {/if}
    {#if (addTrain)}
        <div class="w-11/12 lg:w-7/12 mx-auto flex flex-col flex-nowrap item-center justify-center my-10">
            <h2 class="text-center text-2xl">Add</h2>
            <form action="?/addTrain" method="POST" class=" flex flex-col gap-4">
                <label for="name" class="flex flex-col">
                    <span>Name</span>
                    <input name="name" id="name" class="input input-bordered" type="text"/>
                </label>
                <label for="description" class="flex flex-col">
                    <span>Description</span>
                    <textarea name="description" id="description" cols="30" rows="5" class="textarea textarea-bordered"></textarea>
                </label>
                <label for="obtention_date" class="flex flex-col">
                    <span>Year</span>
                    <input type="date" name="obtention_date" id="obtention_date">
                </label>
                <label for="completion" class="flex flex-col">
                    <span>Completion: {completion}</span>
                    <input type="range" name="completion" id="completion" bind:value={completion} class="range range-info" min="0" max="100">
                </label>
                <div>
                    <button class="btn btn-success" type="submit">Add</button>
                    <button class="btn btn-error" on:click|preventDefault={()=>{addTrain = false}}>Cancel</button>
                </div>
            </form>
        </div>
    {/if}
</div>
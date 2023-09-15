<script>
  import Icon from "@iconify/svelte";
  export let data;

  let techs = data.techs;
</script>

<main class=" flex flex-col items-center gap-5 my-6">
  {#each techs as tech}
    <div
      class=" radial-progress grid place-items-center w-56 h-56"
      style="--value:{tech.level}; color:{tech.color}"
    >
      <Icon icon={tech.iconName} width="56" />
      <h2 class=" text-['{tech.color}'] font-semibold text-xl mt-3">
        {tech.name}
      </h2>
    </div>
  {/each}
</main>

<style>
  .radial-progress::after {
    background-color: transparent;
  }
</style>

<script>
  import { enhance} from "$app/forms";
</script>

<main class=" grid place-items-center h-[90dvh]">
  <form
    action="?/login"
    method="post"
    class=" flex flex-col flex-nowrap justify-around gap-3"
    use:enhance
  >
    <label for="email" class=" flex flex-col">
      <span>Email</span>
      <input
        type="email"
        name="email"
        id="email"
        class="input input-sm input-primary"
      />
    </label>
    <label for="password" class=" flex flex-col">
      <span>Password</span>
      <input
        type="password"
        name="password"
        id="password"
        class="input input-sm input-primary"
      />
    </label>
    <button type="submit" class=" btn btn-primary">Connexion</button>
  </form>
</main>

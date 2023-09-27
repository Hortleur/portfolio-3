<script>
import Icon from "@iconify/svelte";
</script>

<main class="xl:grid xl:place-items-center">
  <div class=" w-11/12 xl:w-6/12 mt-10 mx-auto">
    <img
            src="https://zbebkfnexgoiafydkmjb.supabase.co/storage/v1/object/public/images/logo/LOGO_KB_CLR.png?t=2023-09-12T19%3A48%3A53.134Z"
            alt="logo"
            class=" w-6/12 mx-auto"
    />
  </div>

  <div class=" w-11/12 mx-auto xl:w-6/12 xl:grid xl:place-items-center text-xl text-center mt-10 gap-3">
    <p>Salut, c’est Kevin.</p>
    <p>
      Vous avez un projet web et vous avez besoin qu’il soit rapide, efficace et
      visible ?
    </p>
    <p>Ou encore un problème qu'une solution sur mesure pourrait résoudre ?</p>
    <a href="/contact" class="btn btn-primary">Parlons-nous!</a>
    <p class="mt-5">Retrouvez moi sur:</p>
    <ul class="flex flex-row flex-nowrap gap-10 mx-auto justify-center">
      <li>
        <a href="" class="flex flex-col hover:text-cyan-700">
          <Icon icon="line-md:linkedin" width="52" class="mx-auto"/>
          <span>LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="" class="flex flex-col hover:text-cyan-700">
          <Icon icon="line-md:github-loop" width="52" class="mx-auto"/>
          <span>Github</span>
        </a>
      </li>
    </ul>
  </div>
</main>

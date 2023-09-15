<script>
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import "../app.css";
  import Header from "$lib/components/header.svelte";

  let dayTheme = "";
  let nightTheme = "luxury";
  let today = new Date();
  let hour = today.getHours();

  onMount(() => {
    if (today.toString().includes("Summer")) {
      dayTheme = "lemonade";
    } else if (today.toString().includes("Winter")) {
      dayTheme = "winter";
    } else if (today.toString().includes("autumn")) {
      dayTheme = "autumn";
    } else {
      dayTheme = "garden";
    }

    if (hour < 7 || hour > 19) {
      document.documentElement.setAttribute("data-theme", nightTheme);
    } else {
      document.documentElement.setAttribute("data-theme", dayTheme);
    }

    themeChange(false);
  });
</script>

<Header />
<slot />

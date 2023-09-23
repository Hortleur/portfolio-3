<script>
  import { onMount } from "svelte";
  import { themeChange } from "theme-change";
  import "../app.css";
  import Header from "$lib/components/header.svelte";

  let dayTheme = "";
  let nightTheme = "luxury";
  let today = new Date();
  let hour = today.getHours();
  let month = today.getMonth() + 1;

  onMount(() => {
      if (month >= 3 && month <= 5) {
          dayTheme = "lemonade"; // Printemps
      } else if (month >= 6 && month <= 8) {
          dayTheme = "garden"; // Été
      } else if (month >= 9 && month <= 11) {
          dayTheme = "autumn"; // Automne
      } else {
          dayTheme = "winter"; // Hiver
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

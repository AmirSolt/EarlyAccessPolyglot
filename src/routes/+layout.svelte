<script lang="ts">
  import { AppShell, AppBar } from "@skeletonlabs/skeleton";
  import "../app.postcss";
</script>

<AppShell>
  <svelte:fragment slot="header">
    <!-- App Bar -->
    <AppBar>
      <svelte:fragment slot="lead">
        <a href="/" class="flex justify-center items-center">
          <img src="logo.png" alt="Logo" class="w-12" />
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />

  <svelte:fragment slot="footer">
    <hr />
    <div class="flex flex-col justify-center items-end m-4">
      <a href="/" class="flex justify-center items-center">
        <img src="logo.png" alt="Logo" class="w-12" />
      </a>
      <p>POLYTUBE 2024</p>
      <a href="/terms-of-service">Terms of Service</a>
      <a href="/privacy-policy">Privacy Policy</a>
    </div>
  </svelte:fragment>
</AppShell>

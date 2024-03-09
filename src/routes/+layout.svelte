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
          <strong class="text-xl text-secondary-500 uppercase">Polygtube</strong
          >
        </a>
      </svelte:fragment>
    </AppBar>
  </svelte:fragment>
  <!-- Page Route Content -->
  <slot />
</AppShell>

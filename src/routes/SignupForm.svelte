<script lang="ts">
  import { page } from "$app/stores";
  let { referrer } = $page.data;
</script>

<h1 class="text-3xl">Limited early access slots available</h1>

<form
  action="?/register"
  method="post"
  class="flex flex-col justify-center items-center gap-4"
>
  <input type="hidden" name="referrer" value={referrer} />

  <label class="label w-full">
    <span>Email</span>
    <input
      class="input w-full"
      type="email"
      name="email"
      placeholder="example@email.com"
      required
    />
  </label>
  <label class="label w-full">
    <span>First Name </span>
    <input
      class="input w-full"
      type="text"
      name="first_name"
      placeholder="(Optional)"
    />
  </label>
  <label class="label w-full">
    <span>Last Name </span>
    <input
      class="input w-full"
      type="text"
      name="last_name"
      placeholder="(Optional)"
    />
  </label>
  <label class="label w-full">
    <span
      >What is your main platform? (Youtube, Tiktok, Instagram, Website, ...)</span
    >
    <input
      class="input w-full"
      type="text"
      name="channel_url"
      placeholder="https://www.example.com/"
    />
  </label>

  <div class="flex flex-col justify-start items-start w-full">
    <span>What social platforms are you on:</span>
    <div class="flex justify-start items-start gap-4 m-2">
      <div class="space-y-2">
        <label class="flex items-center space-x-2">
          <input
            class="checkbox"
            type="checkbox"
            name="platforms"
            value="Youtube"
          />
          <p>Youtube</p>
        </label>
        <label class="flex items-center space-x-2">
          <input
            class="checkbox"
            type="checkbox"
            name="platforms"
            value="Tiktok"
          />
          <p>Tiktok</p>
        </label>
        <label class="flex items-center space-x-2">
          <input
            class="checkbox"
            type="checkbox"
            name="platforms"
            value="Instagram"
          />
          <p>Instagram</p>
        </label>
      </div>
      <div class="space-y-2">
        <label class="flex items-center space-x-2">
          <input
            class="checkbox"
            type="checkbox"
            name="platforms"
            value="Facebook"
          />
          <p>Facebook</p>
        </label>
        <label class="flex items-center space-x-2">
          <input
            class="checkbox"
            type="checkbox"
            name="platforms"
            value="WeChat"
          />
          <p>WeChat</p>
        </label>
        <label class="flex items-center space-x-2">
          <input
            class="checkbox"
            type="checkbox"
            name="platforms"
            value="Other"
          />
          <p>Other</p>
        </label>
      </div>
    </div>
  </div>

  <div></div>
  <button
    type="submit"
    class="btn text-2xl variant-filled-secondary w-full md:w-1/2"
  >
    Sign up
  </button>
</form>

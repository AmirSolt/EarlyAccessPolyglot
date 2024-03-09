<h1 class="text-3xl">Limited early access slots available</h1>

<form
  action="?/register"
  method="post"
  class="flex flex-col justify-center items-center gap-4"
>
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
    <span>Youtube Channel URL</span>
    <input
      class="input w-full"
      type="text"
      name="youtube_url"
      placeholder="https://www.youtube.com/@example"
      required
    />
  </label>
  <div></div>
  <button
    type="submit"
    class="btn text-2xl variant-filled-secondary w-full md:w-1/2"
  >
    Sign up
  </button>
</form>

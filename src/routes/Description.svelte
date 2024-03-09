<script>
  import { onMount } from "svelte";

  onMount(() => {
    const images = document.querySelectorAll(".slideshow-container img");
    let currentIndex = 0;

    function showImage(index) {
      images.forEach((image, i) => {
        if (i === index) {
          image.classList.add("active", "anim");
        } else {
          image.classList.remove("active");
        }
      });
    }

    function nextSlide() {
      console.log(">>>");
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });
</script>

<div class="w-full flex flex-col justify-center items-center">
  <div class="flex justify-center items-center">
    <img src={`GB.png`} alt="English Channel" class="w-40 md:w-64" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 24"
      width="64"
      height="24"
    >
      <g transform="translate(64,0) scale(-1,1)">
        <path d="M4 12l14-12v9h42v6H18v9z" />
      </g>
    </svg>

    <div class="slideshow-container">
      <img
        src="SP.png"
        alt="Translated Channel"
        class="w-40 md:w-64 anim active"
      />
      <img src="CH.png" alt="Translated Channel" class="w-40 md:w-64" />
      <img src="FR.png" alt="Translated Channel" class="w-40 md:w-64" />
      <img src="IN.png" alt="Translated Channel" class="w-40 md:w-64" />
    </div>
  </div>
</div>

<style>
  .slideshow-container img {
    display: none;
    opacity: 0;
  }

  .slideshow-container img.active {
    display: block;
    opacity: 1;
  }

  .slideshow-container img.anim {
    animation: frame 3s ease-in-out forwards;
  }

  @keyframes frame {
    0% {
      transform: translate3d(0, 25%, 0);
      opacity: 0.2;
    }

    25% {
      transform: translate3d(0, 0%, 0);
      opacity: 1;
    }

    75% {
      transform: translate3d(0, 0%, 0);
      opacity: 1;
    }

    100% {
      transform: translate3d(0, -10%, 0);
      opacity: 0;
    }
  }
</style>

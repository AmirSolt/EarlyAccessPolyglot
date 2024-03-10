<script lang="ts">
  import { onMount } from "svelte";

  onMount(() => {
    const frames = document.querySelectorAll(".slideshow-container .frame");
    let currentIndex = 0;

    function showImage(index: number) {
      frames.forEach((frame, i) => {
        if (i === index) {
          frame.classList.add("active", "anim");
        } else {
          frame.classList.remove("active");
        }
      });
    }

    function nextSlide() {
      console.log(">>>");
      currentIndex = (currentIndex + 1) % frames.length;
      showImage(currentIndex);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
  });
</script>

<div class="w-full flex flex-col justify-center items-center">
  <div class="flex justify-center items-center">
    <div>
      <img class="w-20 md:w-32" src="EN.png" alt="" />
      <img
        src="video.png"
        alt="Original Video"
        class="absolute w-12 md:w-16 video-trans"
      />
    </div>
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
      <div class="frame active anim">
        <img class="w-20 md:w-32" src="SP.png" alt="" />
        <img
          src="video.png"
          alt="Original Video"
          class="absolute w-12 md:w-16 video-trans"
        />
      </div>
      <div class="frame">
        <img class="w-20 md:w-32" src="CH.png" alt="" />
        <img
          src="video.png"
          alt="Original Video"
          class="absolute w-12 md:w-16 video-trans"
        />
      </div>
      <div class="frame">
        <img class="w-20 md:w-32" src="FR.png" alt="" />
        <img
          src="video.png"
          alt="Original Video"
          class="absolute w-12 md:w-16 video-trans"
        />
      </div>
      <div class="frame">
        <img class="w-20 md:w-32" src="IN.png" alt="" />
        <img
          src="video.png"
          alt="Original Video"
          class="absolute w-12 md:w-16 video-trans"
        />
      </div>
    </div>
  </div>
</div>

<style>
  .video-trans {
    transform: translate3d(100%, -100%, 0);
  }

  .slideshow-container .frame {
    display: none;
    opacity: 0;
  }

  .slideshow-container .frame.active {
    display: block;
    opacity: 1;
  }

  .slideshow-container .frame.anim {
    animation: frame 3s linear forwards;
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

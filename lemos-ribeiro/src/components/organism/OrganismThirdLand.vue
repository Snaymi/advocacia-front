<script setup lang="ts">
import bgThirdLand from '../../img/bg-third-land.webp'
import logo from '../../img/logo.svg'
</script>

<template>
  <section class="relative h-auto min-h-[350px] w-full overflow-hidden lg:h-[350px]">
    <!-- background -->
    <img
      :src="bgThirdLand"
      class="absolute inset-0 h-full w-full object-cover"
      alt=""
    />

    <div class="absolute inset-0 bg-black/45 lg:bg-black/20"></div>

    <!-- container -->
    <div
      class="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col items-start justify-center gap-10 px-5 py-14 sm:px-8 sm:py-16 md:px-10 lg:flex-row lg:items-center lg:gap-0 lg:px-[160px]"
    >
      <!-- texto -->
      <div class="w-full max-w-full lg:flex-1 lg:max-w-[520px]">
        <h2
          class="mb-4 text-[28px] leading-[1.2] font-semibold text-white sm:text-[30px] lg:text-[32px]"
        >
          Nosso objetivo não é apenas “defender”
        </h2>

        <p
          class="mb-6 max-w-[560px] text-[15px] leading-relaxed text-gray-200 sm:text-[16px]"
        >
          é prevenir baixa de caixa, mitigar litígios e estruturar bases
          jurídicas que sustentam o crescimento.
        </p>

        <button
          class="w-full cursor-pointer rounded-[3px] bg-[#B69800] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-[5px] hover:bg-[#FFD501] hover:text-black sm:w-auto sm:px-8 sm:text-base"
        >
          Quero agendar uma reunião
        </button>
      </div>

      <!-- logo -->
      <div
        class="flex w-full items-center justify-center lg:h-full lg:flex-1 lg:justify-end"
      >
        <img
          :src="logo"
          class="w-[120px] opacity-95 sm:w-[145px] lg:w-[200px]"
          alt="Logo"
        />
      </div>
    </div>
  </section>
</template>
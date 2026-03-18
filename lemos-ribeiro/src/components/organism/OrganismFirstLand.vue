<script setup lang="ts">
import { MoleculeHeader } from '../molecule'
import bgFirstLand from '../../img/bg-first-land.webp'
</script>

<template>
  <section class="relative h-screen w-full flex justify-center items-center lg:block overflow-hidden bg-black/70 lg:bg-transparent ">
    <!-- imagem -->
    <img
      :src="bgFirstLand"
      class="absolute inset-0 h-full w-full object-cover hidden lg:block"
      alt=""
    />

    <div class="absolute bg-gradient-to-r -left-30 from-black/60 to-transparent"></div>

    <div
      class="relative z-10 mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-32 md:px-12 md:pt-36 lg:px-[160px] lg:pt-[180px] xl:pt-[200px]"
    >
      <p
        class="mb-4 text-sm font-bold tracking-wide text-[#B69800] sm:text-base"
      >
        Blindagem societária e patrimonial
      </p>

      <h1
        class="mb-6 max-w-full font-['Inter'] text-[30px] leading-[1.1] font-semibold text-white sm:text-[34px] md:text-[38px] lg:max-w-[500px] lg:text-[40px] xl:max-w-[750px] xl:text-[48px]"
      >
        Estratégia Jurídica para
        Empresas que Não Podem Parar
      </h1>

      <p
        class="mb-8 max-w-full text-[16px] leading-relaxed text-gray-300 sm:text-[17px] md:max-w-[600px] lg:max-w-[520px] lg:text-[18px]"
      >
        Proteção, Blindagem e Governança Jurídica para empresas de médio e
        grande porte.
      </p>

      <button
        class="w-full rounded-[3px] bg-[#B69800] px-6 py-4 text-sm font-medium text-white transition duration-300 hover:-translate-y-[5px] hover:bg-[#FFD501] hover:text-black sm:w-auto sm:px-8 sm:text-base cursor-pointer"
      >
        Solicitar Diagnóstico Jurídico Empresarial
      </button>
    </div>
  </section>
</template>
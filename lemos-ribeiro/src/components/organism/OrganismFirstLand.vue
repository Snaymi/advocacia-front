<script setup lang="ts">
import { MoleculeHeader } from '../molecule'
import bgFirstLand from '../../img/bg-first-land.webp'
</script>

<template>
  <section class="relative h-screen w-full overflow-hidden">

    <!-- imagem -->
    <img
      :src="bgFirstLand"
      class="absolute inset-0 w-full h-full object-cover"
      alt=""
    />

    
    <div class="absolute bg-gradient-to-r -left-30 from-black/60 to-transparent"></div>

   
    <div class="relative z-10 max-w-[1400px] mx-auto px-[160px] pt-[180px] xl:pt-[200px]">

      <p class="text-[#B69800] font-bold tracking-wide mb-4">
        Blindagem societária e patrimonial
      </p>

      <h1 class="text-white font-['Inter'] text-[40px] xl:text-[48px] leading-[1.1] font-semibold max-w-[500px] xl:max-w-[750px] mb-6">
        Estratégia Jurídica para
        Empresas que Não Podem Parar
      </h1>

      <p class="text-gray-300 text-[18px] max-w-[520px] mb-8">
        Proteção, Blindagem e Governança Jurídica para empresas de médio e grande porte.
      </p>

      <button
        class="bg-[#B69800] text-white font-medium px-8 py-4 hover:text-black hover:bg-[#FFD501] transition duration-300 hover:-translate-y-[5px] cursor-pointer rounded-[3px]"
      >
        Solicitar Diagnóstico Jurídico Empresarial
      </button>

    </div>

  </section>
</template>
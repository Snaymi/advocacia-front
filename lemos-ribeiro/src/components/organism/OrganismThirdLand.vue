<script setup lang="ts">
import bgThirdLand from '../../img/bg-third-land.webp'
import logo from '../../img/logo.svg'
</script>

<template>
    <section class="relative h-[350px] w-full overflow-hidden">

        <!-- background -->
        <img :src="bgThirdLand" class="absolute inset-0 w-full h-full object-cover" alt="" />

        <!-- container -->
        <div class="w-full max-w-[1400px] px-6 lg:px-[160px] h-full mx-auto relative z-10 flex items-center">

            <!-- texto -->
            <div class="flex-1 max-w-[520px]">

                <h2 class="text-white text-[32px] leading-[1.2] font-semibold mb-4">
                    Nosso objetivo não é apenas “defender”
                </h2>

                <p class="text-gray-200 text-[15px] mb-6">
                    é prevenir baixa de caixa, mitigar litígios e estruturar
                    bases jurídicas que sustentam o crescimento.
                </p>

                <button class="bg-[#B69800] text-white font-medium px-8 py-4 hover:text-black hover:bg-[#FFD501] transition duration-300 hover:-translate-y-[5px] cursor-pointer rounded-[3px]">
                    Quero agendar uma reunião
                </button>

            </div>

            <!-- logo -->
            <div class="flex-1 flex justify-end items-center h-full">

                <img :src="logo" class="w-[180px] lg:w-[200px]" alt="Logo">

            </div>

        </div>

    </section>
</template>
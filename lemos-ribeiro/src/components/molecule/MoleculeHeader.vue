<script setup lang="ts">
import logo from '../../img/logo.svg'
</script>

<template>
  <header class="w-full bg-gradient-to-b from-black via-black/70 to-transparent fixed top-0 left-0 z-50">

    <div class="max-w-[1400px] mx-auto flex items-center justify-between h-[120px] px-[160px]">

      <!-- Logo + Nome -->
      <div class="flex items-center  gap-3">

        <img
          :src="logo"
          class="border border-white p-1 w-[60px]"
          alt="Logo"
        />

        <h2 class="text-white uppercase tracking-[0.25em] font-['Cinzel'] text-[18px]">
          Lemos Ribeiro
        </h2>

      </div>

      <!-- Menu -->
      <nav class="hidden md:flex items-center gap-[110px] text-white font-light tracking-wider">

        <a href="#" class="hover:text-gray-300 transition-colors">
          Início
        </a>

        <a href="#" class="hover:text-gray-300 transition-colors">
          Sobre
        </a>

        <a href="#" class="hover:text-gray-300 transition-colors">
          Contato
        </a>

      </nav>

    </div>

  </header>
</template>
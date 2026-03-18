<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import logo from '../../img/logo.svg'

const isMenuOpen = ref(false)

const navItems = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

function openMenu() {
  isMenuOpen.value = true
}

function closeMenu() {
  isMenuOpen.value = false
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeMenu()
}

watch(isMenuOpen, (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
})

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <header
    class="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black via-black/70 to-transparent"
  >
    <div
      class="mx-auto flex h-[88px] w-full max-w-[1400px] items-center justify-between px-4 sm:px-6 md:h-[120px] lg:px-[160px]"
    >
      <!-- Logo + Nome -->
      <a href="#inicio" class="flex items-center gap-3">
        <img
          :src="logo"
          class="w-[46px] border border-white p-1 md:w-[60px]"
          alt="Logo Lemos Ribeiro"
        />

        <h2
          class="font-['Cinzel'] text-[13px] uppercase tracking-[0.16em] text-white sm:text-[15px] md:text-[18px] md:tracking-[0.25em]"
        >
          Lemos Ribeiro
        </h2>
      </a>

      <!-- Menu desktop -->
      <nav
        class="hidden items-center gap-[110px] font-light tracking-wider text-white lg:flex"
        aria-label="Menu principal"
      >
        <a
          v-for="item in navItems"
          :key="item.label"
          :href="item.href"
          class="transition-colors hover:text-gray-300"
        >
          {{ item.label }}
        </a>
      </nav>

      <!-- Botão mobile -->
      <button
        type="button"
        class="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        :aria-label="isMenuOpen ? 'Fechar menu' : 'Abrir menu'"
        @click="toggleMenu"
      >
        <svg
          v-if="!isMenuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
        </svg>

        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </div>

    <!-- Overlay mobile -->
    <transition
      enter-active-class="transition-opacity duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black/70 backdrop-blur-[3px] lg:hidden"
        @click="closeMenu"
      />
    </transition>

    <!-- Menu lateral mobile -->
    <transition
      enter-active-class="transition-transform duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition-transform duration-300 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <aside
        v-if="isMenuOpen"
        id="mobile-menu"
        class="fixed top-0 right-0 z-[60] flex h-screen w-[88%] max-w-[380px] flex-col border-l border-white/10 bg-[#0b0b0b] px-6 pb-8 pt-6 shadow-2xl lg:hidden"
        aria-label="Menu lateral mobile"
      >
        <div class="mb-10 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <img
              :src="logo"
              class="w-[44px] border border-white p-1"
              alt="Logo Lemos Ribeiro"
            />

            <div>
              <p class="font-['Cinzel'] text-[14px] uppercase tracking-[0.18em] text-white">
                Lemos Ribeiro
              </p>
              <p class="mt-1 text-xs text-white/60">
                Navegação
              </p>
            </div>
          </div>

          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Fechar menu"
            @click="closeMenu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav class="flex flex-col" aria-label="Links mobile">
          <a
            v-for="item in navItems"
            :key="item.label"
            :href="item.href"
            class="border-b border-white/10 py-4 text-[18px] text-white transition-colors hover:text-[#B69800]"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="mt-auto pt-8">
          <a
            href="#contato"
            class="flex w-full items-center justify-center rounded-[3px] bg-[#B69800] px-5 py-4 text-center font-medium text-white transition duration-300 hover:bg-[#FFD501] hover:text-black"
            @click="closeMenu"
          >
            Solicitar atendimento
          </a>
        </div>
      </aside>
    </transition>
  </header>
</template>
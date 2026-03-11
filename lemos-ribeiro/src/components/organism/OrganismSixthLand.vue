<script setup lang="ts">
import { computed, ref } from 'vue'

type Testimonial = {
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'O escritório trouxe clareza para decisões que afetavam diretamente nosso caixa. Os pareceres mudaram como o conselho enxerga risco.',
    author: 'Carla Pontes',
    role: 'Gerente Jurídica Corporativa',
  },
  {
    quote:
      'Passamos a negociar contratos com muito mais segurança. O jurídico deixou de ser reativo e virou parte da estratégia da operação.',
    author: 'Renato Almeida',
    role: 'Diretor Financeiro',
  },
  {
    quote:
      'A reorganização societária trouxe previsibilidade e reduziu ruídos internos. Hoje temos uma base mais sólida para crescer.',
    author: 'Marina Tavares',
    role: 'Sócia Executiva',
  },
]

const currentIndex = ref(0)

const currentTestimonial = computed(() => testimonials[currentIndex.value])

function nextTestimonial() {
  currentIndex.value =
    currentIndex.value === testimonials.length - 1 ? 0 : currentIndex.value + 1
}

function prevTestimonial() {
  currentIndex.value =
    currentIndex.value === 0 ? testimonials.length - 1 : currentIndex.value - 1
}

function goToTestimonial(index: number) {
  currentIndex.value = index
}
</script>

<template>
  <section class="w-full py-[80px] font-['Inter']">
    <div class="mx-auto w-full max-w-[1400px] px-6">
      <div class="mx-auto max-w-[1600px]">
        <h2
          class="mx-auto max-w-[956px] text-center text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-[#123F63] "
        >
          Empresas que enxergam o jurídico como estratégia escolhem o Lemos
          Ribeiro
        </h2>

        <div class="relative mt-[34px]">
          <button
            type="button"
            aria-label="Depoimento anterior"
            class="absolute left-[-8px] top-1/2 z-10 -translate-y-1/2 text-[72px] font-extralight leading-none text-[#B7A6B2] transition hover:opacity-80 md:left-[-40px]"
            @click="prevTestimonial"
          >
            ‹
          </button>

          <div class="mx-auto flex max-w-[950px] flex-col items-center text-center">
            <p
              class=" text-[20px] italic font-normal leading-[1.2] tracking-[-0.02em] text-[#B7A6B2]"
            >
              “{{ currentTestimonial.quote }}”
            </p>

            <strong
              class="mt-[44px] text-[14px] font-semibold leading-none text-[#B7A6B2]"
            >
              {{ currentTestimonial.author }}
            </strong>

            <p
              class="mt-4 text-[14px] font-normal leading-none text-[#B7A6B2]"
            >
              {{ currentTestimonial.role }}
            </p>

            <div class="mt-[48px] flex items-center gap-6">
              <button
                v-for="(_, index) in testimonials"
                :key="index"
                type="button"
                :aria-label="`Ir para depoimento ${index + 1}`"
                class="h-[14px] w-[14px] rounded-full transition"
                :class="
                  index === currentIndex ? 'bg-white' : 'bg-white/25 hover:bg-white/45'
                "
                @click="goToTestimonial(index)"
              />
            </div>
          </div>

          <button
            type="button"
            aria-label="Próximo depoimento"
            class="absolute right-[-8px] top-1/2 z-10 -translate-y-1/2 text-[72px] font-extralight leading-none text-[#B7A6B2] transition hover:opacity-80 md:right-[-40px]"
            @click="nextTestimonial"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
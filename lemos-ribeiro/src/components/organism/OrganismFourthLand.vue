<script setup lang="ts">
import { ref } from 'vue'

type SolutionCard = {
  title: string
  description: string
}

const cards: SolutionCard[] = [
  {
    title: 'Governança & Compliance Empresarial',
    description:
      'Estruturação, revisão e implementação de políticas internas para reduzir risco institucional e garantir aderência regulatória.',
  },
  {
    title: 'Contratos Comerciais Estratégicos',
    description:
      'Redação, análise e negociação de instrumentos com foco em proteção jurídica e previsibilidade financeira.',
  },
  {
    title: 'Blindagem Societária e Patrimonial',
    description:
      'Modelagem societária, reorganização, acordos de sócios e construção de estruturas para proteção contra riscos externos.',
  },
  {
    title: 'Consultoria Jurídica Continuada (Board Advisor)',
    description:
      'Acompanhamento mensal para decisões estratégicas do negócio, com apoio direto a diretores e conselho.',
  },
  {
    title: 'M&A e Operações de Investimento',
    description:
      'Due diligence, valuation jurídico e segurança documental para aquisições, fusões, aportes e entrada de fundos.',
  },
  {
    title: 'Gestão Preventiva de Passivos Trabalhistas',
    description:
      'Diretrizes jurídicas, política interna e cláusulas preventivas para reduzir risco e LTV de litígios com ex-colaboradores.',
  },
]

const cardsTrack = ref<HTMLElement | null>(null)

function scrollCards(direction: number) {
  if (!cardsTrack.value) return

  const firstCard = cardsTrack.value.firstElementChild as HTMLElement | null
  if (!firstCard) return

  const trackStyles = window.getComputedStyle(cardsTrack.value)
  const gap = parseInt(trackStyles.columnGap || trackStyles.gap || '0', 10)
  const cardWidth = firstCard.offsetWidth
  const amount = cardWidth + gap

  cardsTrack.value.scrollBy({
    left: amount * direction,
    behavior: 'smooth',
  })
}
</script>

<template>
  <section class="w-full">
    <div class="mx-auto w-full max-w-[1400px] px-5 pt-[56px] font-['Inter'] sm:px-8 sm:pt-[64px] md:px-10 md:pt-[72px] lg:px-[160px] lg:pt-[80px]">
      <div class="max-w-[980px]">
        <h1
          class="text-[30px] font-semibold leading-[1.02] tracking-[-0.03em] text-[#123F63] sm:text-[34px] md:text-[36px] lg:text-[40px] lg:leading-[0.98]"
        >
          Soluções Jurídicas de Alta <br class="hidden sm:block" />
          Performance Empresarial
        </h1>

        <p
          class="mt-5 max-w-[550px] text-[15px] font-medium leading-[1.45] text-[#A0919B] sm:mt-6 sm:text-base sm:leading-[1.35] md:max-w-[620px] lg:leading-[1.25]"
        >
          Estratégia orientada a dados, contratos inteligentes e governança
          jurídica para empresas que precisam reduzir risco, proteger margens e
          crescer com previsibilidade.
        </p>
      </div>

      <div class="mt-8 sm:mt-10 md:mt-12 lg:mt-14">
        <div
          ref="cardsTrack"
          class="no-scrollbar flex gap-4 overflow-x-auto scroll-smooth pb-3 sm:gap-5 md:gap-6 lg:gap-8"
        >
          <article
            v-for="card in cards"
            :key="card.title"
            class="flex h-[280px] w-[85vw] min-w-[85vw] max-w-[85vw] shrink-0 items-center justify-center rounded-[24px] border border-[#E7E3E6] bg-[#F6F6F7] px-5 py-7 text-center shadow-sm sm:h-[300px] sm:w-[320px] sm:min-w-[320px] sm:max-w-[320px] md:h-[320px] md:w-[340px] md:min-w-[340px] md:max-w-[340px] lg:h-[320px] lg:w-[355px] lg:min-w-[355px] lg:max-w-[355px] lg:px-6 lg:py-8"
          >
            <div class="max-w-[295px]">
              <h2
                class="text-[18px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#1B4865] sm:text-[19px] lg:text-[20px] lg:leading-[1.12]"
              >
                {{ card.title }}
              </h2>

              <p class="mt-4 text-[15px] leading-[1.45] text-[#9E929B] sm:mt-5 sm:text-[15px] md:mt-6 md:text-base md:leading-[1.35]">
                {{ card.description }}
              </p>
            </div>
          </article>
        </div>

        <div class="mt-4 flex justify-end gap-3 pr-1 sm:mt-5 sm:gap-5 md:mt-6 md:gap-6 lg:gap-8">
          <button
            type="button"
            aria-label="Voltar cards"
            class="flex h-10 w-10 items-center justify-center rounded-full text-[1.6rem] font-semibold leading-none text-[#123F63] transition hover:scale-105 hover:opacity-80 sm:h-11 sm:w-11 sm:text-[2rem]"
            @click="scrollCards(-1)"
          >
            &lt;
          </button>

          <button
            type="button"
            aria-label="Avançar cards"
            class="flex h-10 w-10 items-center justify-center rounded-full text-[1.6rem] font-semibold leading-none text-[#123F63] transition hover:scale-105 hover:opacity-80 sm:h-11 sm:w-11 sm:text-[2rem]"
            @click="scrollCards(1)"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
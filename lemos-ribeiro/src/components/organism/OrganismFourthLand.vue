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
    <div class="mx-auto w-full max-w-[1400px] px-[160px] pt-[80px] font-['Inter']">
      <div class="max-w-[980px]">
        <h1
          class="text-[40px] font-semibold leading-[0.98] tracking-[-0.03em] text-[#123F63]"
        >
          Soluções Jurídicas de Alta <br />
          Performance Empresarial
        </h1>

        <p
          class="mt-6 max-w-[550px] text-base font-medium leading-[1.25] text-[#A0919B]"
        >
          Estratégia orientada a dados, contratos inteligentes e governança
          jurídica para empresas que precisam reduzir risco, proteger margens e
          crescer com previsibilidade.
        </p>
      </div>

      <div class="mt-10 md:mt-14">
        <div
          ref="cardsTrack"
          class="no-scrollbar flex gap-8 overflow-x-auto scroll-smooth pb-3"
        >
          <article
            v-for="card in cards"
            :key="card.title"
            class="flex h-[320px] w-[355px] min-w-[355px] max-w-[355px] shrink-0 items-center justify-center rounded-[24px] border border-[#E7E3E6] bg-[#F6F6F7] px-6 py-8 text-center shadow-sm"
          >
            <div class="max-w-[295px]">
              <h2
                class="text-[20px] font-semibold leading-[1.12] tracking-[-0.02em] text-[#1B4865]"
              >
                {{ card.title }}
              </h2>

              <p class="mt-6 text-base leading-[1.35] text-[#9E929B]">
                {{ card.description }}
              </p>
            </div>
          </article>
        </div>

        <div class="mt-4 flex justify-end gap-6 pr-1 md:mt-6 md:gap-8">
          <button
            type="button"
            aria-label="Voltar cards"
            class="flex h-11 w-11 items-center justify-center rounded-full text-[2rem] font-semibold leading-none text-[#123F63] transition hover:scale-105 hover:opacity-80"
            @click="scrollCards(-1)"
          >
            &lt;
          </button>

          <button
            type="button"
            aria-label="Avançar cards"
            class="flex h-11 w-11 items-center justify-center rounded-full text-[2rem] font-semibold leading-none text-[#123F63] transition hover:scale-105 hover:opacity-80"
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
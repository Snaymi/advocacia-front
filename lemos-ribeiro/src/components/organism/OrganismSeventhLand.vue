<script setup lang="ts">
import advogadaImg from '../../img/advogada.webp'
</script>

<template>
  <section class="w-full bg-[#efefef]">
    <div
      class="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-[60px] px-6 py-[80px] font-['Inter'] lg:grid-cols-2 lg:px-[80px]"
    >
      <div class="max-w-[620px]">
        <h2
          class="text-[40px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#123F63]"
        >
          Decisões devem ser <br />
          tomadas com segurança.
        </h2>

        <p
          class="mt-8 max-w-[620px] text-base leading-[1.25] text-[#A0919B]"
        >
          Nenhuma grande decisão empresarial deve ser tomada sem segurança
          jurídica. Solicite agora seu Diagnóstico Jurídico Inicial e antecipe
          riscos antes que virem prejuízo.
        </p>

        <ul class="mt-10 space-y-1 text-[22px] leading-[1.25] text-[#A0919B]">
          <li>• (21) 2233-4455</li>
          <li>• (21) 99999-1234</li>
          <li>• contato@lemosribeiro.com.br</li>
        </ul>
      </div>

      <div class="flex justify-center lg:justify-end">
        <img
          :src="advogadaImg"
          alt="Advogada"
          class="block h-auto w-full max-w-[720px] rounded-[8px] object-cover"
        />
      </div>
    </div>
  </section>
</template>
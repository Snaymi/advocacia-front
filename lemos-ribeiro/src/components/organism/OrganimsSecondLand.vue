<script setup lang="ts">
import advogadoImg from '../../img/advogado.webp'
</script>

<template>
  <section class="bg-white">
    
    <div class="w-full max-w-[1400px] mx-auto px-6 lg:px-[160px] py-[80px]">

      <div class="grid lg:grid-cols-2 gap-[80px] items-center">


        <div>
          <img
            :src="advogadoImg"
            alt="Advogado"
            class="w-full rounded-md object-cover"
          >
        </div>

        
        <div class="max-w-[500px]">
        
          <h2 class="text-[#12374B] text-[40px] leading-[1.1] font-bold mb-6">
            17 anos orientando
            empresas na tomada de
            decisão jurídica
          </h2>

          <p class="text-[#9E8F9A] text-[16px] leading-relaxed mb-6">
            O Escritório de Advocacia Lemos Ribeiro atua há mais de 17 anos com foco corporativo,
            ajudando empresas de médio e grande porte a reduzir riscos, fortalecer governança e
            executar planos de negócios com segurança jurídica.
          </p>

          <p class="text-[#9E8F9A] text-[16px] leading-relaxed">
            Somos um escritório de perfil consultivo e board advisor trabalhamos lado a lado
            com diretoria, CFOs, jurídicos internos e conselhos para antecipar cenários de forma
            estratégica.
          </p>

        </div>

      </div>

    </div>

  </section>
</template>
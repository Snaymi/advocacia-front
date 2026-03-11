<script setup lang="ts"></script>

<template>
  <footer class="w-full bg-[#5A4A00] font-['Inter'] text-white">
    <div
      class="mx-auto flex w-full max-w-[1400px] flex-col gap-10 px-6 py-12 md:px-10 lg:min-h-[317px] lg:flex-row lg:justify-between lg:px-[80px] lg:py-[72px]"
    >
      <div class="max-w-[430px]">
        <h3 class="text-[28px]  leading-none">
          Lemos Ribeiro &amp; Associados
        </h3>

        <p class="mt-3 text-[18px] leading-[1.25]">
          O jurídico que atua no mesmo nível do seu conselho.
        </p>

        <div class="mt-10 space-y-1 text-[18px] leading-[1.35]">
          <p>CNPJ: 48.527.891/0001-06</p>
          <p>OAB: 00.000/BR - Registro Institucional</p>
        </div>
      </div>

      <div class="max-w-[520px]">
        <div>
          <h4 class="text-[28px]  leading-none">Endereço</h4>
          <p class="mt-3 text-[18px] leading-[1.35]">
            Av. Pres. Vargas, 980 – 12º andar, Centro, Rio de Janeiro / RJ
          </p>
        </div>

        <div class="mt-8">
          <h4 class="text-[28px] font-semibold leading-none">Telefone</h4>
          <p class="mt-3 text-[18px] leading-[1.35]">
            (21) 3200-4500 / (21) 99879-1245
          </p>
        </div>
      </div>

      <div class="lg:min-w-[220px]">
        <h4 class="text-[28px] font-semibold leading-none">Siga nossas redes</h4>

        <div class="mt-6 flex items-center gap-4">
          <a
            href="#"
            aria-label="Instagram"
            class="transition hover:opacity-80"
          >
            <svg
              class="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="5"
                stroke="currentColor"
                stroke-width="2"
              />
              <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                stroke-width="2"
              />
              <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
            </svg>
          </a>

          <a
            href="#"
            aria-label="LinkedIn"
            class="transition hover:opacity-80"
          >
            <svg
              class="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 10V17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M12 17V13.5C12 11.8431 13.3431 10.5 15 10.5C16.6569 10.5 18 11.8431 18 13.5V17"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
              <circle cx="8" cy="7" r="1.2" fill="currentColor" />
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </a>

          <a
            href="#"
            aria-label="YouTube"
            class="transition hover:opacity-80"
          >
            <svg
              class="h-10 w-10"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="2.5"
                y="5.5"
                width="19"
                height="13"
                rx="4"
                stroke="currentColor"
                stroke-width="2"
              />
              <path d="M10 9L15 12L10 15V9Z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
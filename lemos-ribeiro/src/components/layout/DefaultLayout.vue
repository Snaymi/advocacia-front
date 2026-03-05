<script setup lang="ts">
import { MoleculeFooter, MoleculeHeader } from '../molecule';


</script>

<template>
    <div class="w-full mx-auto min-h-screen">
        <MoleculeHeader />
        <RouterView />
        <MoleculeFooter />
    </div>

</template>
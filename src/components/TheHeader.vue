<template>
    <h1 class="text-3xl font-bold">{{ title }}</h1>
</template>

<script setup lang="ts">
defineProps<{
    title: string
}>()
</script>

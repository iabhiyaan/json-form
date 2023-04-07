<template>
  <div v-if="!isSubmitField" class="my-4">
    <div class="flex items-center">
      <input
        :id="field.id"
        :name="field.id"
        :type="field.type"
        :placeholder="`${field.placeholder} ${field.required ? '*' : ''}`"
        :required="field.required"
        class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
        :class="[
          field.type === 'checkbox'
            ? 'focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
            : '',
        ]"
      />
      <label
        v-if="field.type === 'checkbox'"
        :for="field.id"
        class="ml-3 text-sm font-medium text-gray-700"
        >{{ field.label }}</label
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Field } from "@/types/Fields.js";
import { computed } from "vue";

const props = defineProps<{
  field: Field;
}>();

const isSubmitField = computed(() => props.field.type === "submit");
</script>

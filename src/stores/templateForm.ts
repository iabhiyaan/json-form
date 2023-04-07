import { ref } from "vue";
import { defineStore } from "pinia";

import type { TemplateData } from '../types/Fields'

export const useTemplateFormStore = defineStore("templateForm", () => {
  const templateData = ref<TemplateData | null>(null);

  return { templateData };
});

import { ref } from "vue";
import { defineStore } from "pinia";

import type { Newsletter } from '../types/Newsletter'

export const useNewsletterStore = defineStore("newsletter", () => {
  const newsletterFields = ref<Newsletter | null>(null);

  return { newsletterFields };
});

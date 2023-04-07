<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import { useNewsletterStore } from "@/stores/newsletter";
import Fields from "@/components/Fields.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheSubHeading from "@/components/TheSubHeading.vue";
import FormButton from "@/components/FormButton.vue";

const newsletterStore = useNewsletterStore();

const { newsletterFields } = storeToRefs(newsletterStore);

onMounted(() => {
  if (!newsletterFields.value) {
    fetch("/newsletter.json")
      .then((blob) => blob.json())
      .then((res) => {
        newsletterFields.value = res;
      });
  }
});
</script>

<template>
  <section>
    <TheHeader v-if="newsletterFields?.title" :title="newsletterFields.title" />
    <TheSubHeading
      v-if="newsletterFields?.description"
      :subHeading="newsletterFields.description"
    />
    <form>
      <Fields
        v-for="field in newsletterFields?.fields"
        :key="field.id"
        :field="field"
      />
      <div class="text-center">
        <FormButton />
      </div>
    </form>
  </section>
</template>

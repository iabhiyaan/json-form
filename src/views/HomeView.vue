<script setup lang="ts">
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import { useTemplateFormStore } from "@/stores/templateForm";

import Fields from "@/components/Fields.vue";
import TheHeader from "@/components/TheHeader.vue";
import TheSubHeading from "@/components/TheSubHeading.vue";
import FormButton from "@/components/FormButton.vue";

const templateFormStore = useTemplateFormStore();

const { templateData: templateForm } = storeToRefs(templateFormStore);

onMounted(() => {
  if (!templateForm.value) {
    fetch("/form.json")
      .then((blob) => blob.json())
      .then((res) => {
        templateForm.value = res;
      });
  }
});
</script>

<template>
  <section>
    <TheHeader v-if="templateForm?.title" :title="templateForm.title" />
    <TheSubHeading
      v-if="templateForm?.description"
      :subHeading="templateForm.description"
    />
    <form>
      <Fields
        v-for="field in templateForm?.fields"
        :key="field.id"
        :field="field"
      />
      <div class="text-center">
        <FormButton />
      </div>
    </form>
  </section>
</template>

<style></style>

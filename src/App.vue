<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-full">
    <nav class="bg-white border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">

            <div class="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <RouterLink
                class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
                exactActiveClass="border-indigo-500 text-gray-900 border-b-2" to="/">
                Home
              </RouterLink>
              <RouterLink exactActiveClass="border-indigo-500 text-gray-900 border-b-2"
                class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
                to="/newsletter-subscription">
                Newsletter
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Mobile menu, show/hide based on menu state. -->
      <div class="sm:hidden" id="mobile-menu">
        <div class="pt-2 pb-3 space-y-1">

          <RouterLink
            class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            exactActiveClass="border-indigo-500 text-gray-900 border-b-2" to="/">
            Home
          </RouterLink>
          <RouterLink exactActiveClass="border-indigo-500 text-gray-900 border-b-2"
            class="text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium"
            to="/newsletter-subscription">
            Newsletter
          </RouterLink>
        </div>
      </div>
    </nav>

    <div class="py-10">
      <main>
        <div class="max-w-3xl mx-auto sm:px-6 lg:px-8">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>
<template>
  <div class="footer py-4 d-flex flex-lg-column" id="kt_footer">
    <div
      class="d-flex flex-column flex-md-row align-items-center justify-content-between"
      :class="{
        'container-fluid': footerWidthFluid,
        'container-xxl': !footerWidthFluid,
      }"
    >
      <div class="text-gray-900 order-2 order-md-1">
        <span class="text-muted fw-semibold me-1">{{ new Date().getFullYear() }}&copy;</span>
        <a
          href="https://yovanenovore.cloud/"
          target="_blank"
          class="text-gray-800 text-hover-primary"
          >YovanEnovore</a
        >
      </div>
      <ul class="menu menu-gray-600 menu-hover-primary fw-semibold order-1">
        <li class="menu-item">
          <a href="#" target="_blank" class="menu-link px-2">Soporte</a>
        </li>
        <li class="menu-item">
          <a href="#" target="_blank" class="menu-link px-2">Acerca de</a>
        </li>
        <li class="menu-item">
          <a href="#" target="_blank" class="menu-link px-2">Compra</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { footerWidthFluid } from "@/layouts/default-layout/config/helper";

export default defineComponent({
  name: "KTFooter",
  setup() {
    return {
      footerWidthFluid,
    };
  },
});
</script>

<template>
  <div class="card-header border-0 pt-5">
    <h3 class="card-title align-items-start flex-column">
      <span class="card-label fw-bold text-gray-900"
        >Administrción de productos</span
      >
    </h3>
  </div>
  <div class="card-body pt-5">
    <template v-for="(item, index) in items" :key="index">
      <div
        :class="{ 'mb-7': items.length - 1 !== index }"
        class="d-flex align-items-center"
      >
        <div class="symbol symbol-50px me-5">
          <span :class="`bg-light-${item.color}`" class="symbol-label">
            <KTIcon
              :icon-name="item.icon"
              :icon-class="`text-${item.color} fs-2x`"
            />
          </span>
        </div>
        <div class="d-flex flex-column">
          <router-link
            :to="item.url"
            class="text-gray-900 text-hover-primary fs-6 fw-bold"
            active-class="btn-active-primary"
            >{{ item.title }}</router-link
          >
          <span class="text-muted fw-semibold">{{ item.description }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<!-- nav-link btn btn-icon btn-active-color-primary btn-color-gray-500 btn-active-light] -->

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-tasks-overview",
  components: {},
  setup() {
    const items = [
      {
        icon: "abstract-26",
        color: "success",
        title: "Productos",
        description: "Crear, editar y eliminar productos",
        url: "/productos",
      },
      {
        icon: "pencil",
        color: "warning",
        title: "Categorias",
        description: "Crear, editar y eliminar categorias",
        url: "/categorias",
      },
    ];

    return {
      items,
    };
  },
});
</script>

<template>
  <div class="card" :class="widgetClasses">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Administrar Categorías</span>
        <span class="text-muted mt-1 fw-semibold fs-7">
          Aquí puedes administrar las categorías de productos
        </span>
      </h3>
      <div class="card-toolbar">
        <div class="card-toolbar">
          <button
            type="button"
            class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary w-60px h-60px"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
            @click="$router.push('/categorias/crear')"
          >
            <KTIcon icon-name="plus-square" icon-class="fs-5x" />
          </button>
        </div>
      </div>
    </div>
    <div class="row g-1 g-xl-8 mb-1 px-8 py-5">
      <div v-for="category in categories" :key="category.id" class="col-xl-4">
        <StatisticsWidget1
          :id="category.id"
          widget-classes="card-xl-stretch mb-xl-8"
          background="abstract-4.svg"
          :title="category.name"
          description="Descripción"
        ></StatisticsWidget1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StatisticsWidget1 from "@/components/widgets/statsistics/Widget1.vue";
import type { Category } from "@/models/Category";
import CategoryService from "@/services/CategoryService";

export default defineComponent({
  name: "Categorias",

  data(): { categories: Category[] } {
    return {
      categories: [] as Category[],
    };
  },

  async created() {
    const categories = await CategoryService.getAll();
    this.categories = categories.reverse();
  },

  components: {
    StatisticsWidget1,
  },
  props: {
    widgetClasses: String,
  },
});
</script>

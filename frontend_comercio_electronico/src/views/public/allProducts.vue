<template>
  <div class="d-flex flex-wrap flex-stack my-5">
    <h2 class="fw-semibold my-2">Catálogo de productos</h2>
    <div class="d-flex align-items-center my-2">
      <Search></Search>

      <div class="menu-item px-0 my-0">
        <router-link
          :to="path"
          :class="{ active: themeMode === 'light' }"
          class="menu-link px-0 py-0"
          @click="setMode('light')"
        >
          <span class="menu-icon" data-kt-element="icon">
            <KTIcon icon-name="night-day" icon-class="fs-2" />
          </span>
        </router-link>
      </div>
      <div class="menu-item px-0 my-0">
        <router-link
          :to="path"
          :class="{ active: themeMode === 'dark' }"
          class="menu-link px-0 py-0"
          @click="setMode('dark')"
        >
          <span class="menu-icon" data-kt-element="icon">
            <KTIcon icon-name="moon" icon-class="fs-2" />
          </span>
        </router-link>
      </div>

      <button
        class="btn btn-primary btn-sm ms-3"
        @click="$router.push('/inicio')"
        data-bs-toggle="tooltip"
        title="Coming soon"
      >
        <KTIcon icon-name="faceid" icon-class="fs-2x" />
      </button>
    </div>
  </div>

  <div class="row g-6 g-xl-9">
    <div
      class="col-sm-6 col-xl-4"
      v-for="product in products"
      :key="product.id"
    >
      <div class="card h-100">
        <Card2
          :id="product.id"
          :productName="product.name"
          :productPrice="product.price"
          :productDescription="product.description"
          :productCategory="product.category.name"
        ></Card2>
        <KTModalCard
          title="Invite Friends Modal Example"
          description="Click on the below buttons"
          button-text="Invite Friends"
        ></KTModalCard>
      </div>
    </div>
  </div>

  <div class="d-flex flex-stack flex-wrap pt-10">
    <div class="fs-6 fw-semibold text-gray-700">
      Mostrando 1 - 10 de 100 productos
    </div>

    <ul class="pagination">
      <li class="page-item previous">
        <a href="#" class="page-link"><i class="previous"></i></a>
      </li>

      <li class="page-item active">
        <a href="#" class="page-link">1</a>
      </li>

      <li class="page-item">
        <a href="#" class="page-link">2</a>
      </li>

      <li class="page-item">
        <a href="#" class="page-link">3</a>
      </li>

      <li class="page-item">
        <a href="#" class="page-link">4</a>
      </li>

      <li class="page-item">
        <a href="#" class="page-link">5</a>
      </li>

      <li class="page-item">
        <a href="#" class="page-link">6</a>
      </li>

      <li class="page-item next">
        <a href="#" class="page-link"><i class="next"></i></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, computed } from "vue";
import Card2 from "@/components/cards/Card2.vue";
import Search from "@/layouts/default-layout/components/search/Search.vue";
import ProductService from "@/services/ProductService";
import type { Product } from "@/models/Product";
import { useThemeStore } from "@/stores/theme";
import { useConfigStore } from "@/stores/config";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "profile-campaigns",

  data() {
    return {
      products: [] as Product[],
    };
  },

  async created() {
    try {
      const allProducts = await ProductService.getAll();
      this.products = allProducts.filter(product => product.state);
    } catch (error) {
      console.error("Error loading products", error);
    }
  },

  components: {
    Card2,
    Search,
  },

  setup() {
    const storeTheme = useThemeStore();
    const storeConfig = useConfigStore();
    const route = useRoute();

    const themeMode = computed(() => {
      return storeTheme.mode;
    });

    const path = computed(() => route.path);

    const setMode = (mode: "dark" | "light" | "system") => {
      let configMode = mode;

      storeConfig.setLayoutConfigProperty("general.mode", configMode);

      storeTheme.setThemeMode(configMode);
    };

    return {
      getAssetPath,
      themeMode,
      path,
      setMode,
    };
  },
});
</script>

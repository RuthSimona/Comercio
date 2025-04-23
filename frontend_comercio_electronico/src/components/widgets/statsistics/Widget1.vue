<template>
  <router-link :to="`/categorias/editar/${id}`" class="card-link">
    <div
      :class="['card bgi-no-repeat', widgetClasses]"
      :style="{
        backgroundImage: `url(${getAssetPath('/media/svg/shapes/' + background)})`,
        backgroundPosition: 'right top',
        backgroundSize: '30% auto',
      }"
    >
      <div class="card-body">
        <div class="card-title fw-bold text-muted text-hover-primary fs-4 d-block">
          {{ title }}
        </div>
        <div class="fw-bold text-primary my-6">{{ time }}</div>
        <p class="text-gray-900-75 fw-semibold fs-5 m-0">
          <span v-html="description"></span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-1",
  props: {
    id: Number,
    widgetClasses: String,
    background: String,
    title: String,
    time: String,
    description: String,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>

<style>
.card-link {
  text-decoration: none; 
  display: block; 
  transition: transform 0.3s ease; 
}

.card-link:hover {
  transform: scale(1.05); 
}

.card-link:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
</style>
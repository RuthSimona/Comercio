<template>
  <div class="card-header border-0">
    <h3 class="card-title fw-bold text-gray-900">Authors</h3>
  </div>

  <div class="card-body pt-2">
    <template v-for="(item, index) in list" :key="index">
      <!--begin::Item-->
      <div
        :class="{ 'mb-7': list.length - 1 !== index }"
        class="d-flex align-items-center"
      >
        <!--begin::Avatar-->
        <div class="symbol symbol-50px me-5">
          <img :src="item.avatar" class="" alt="" />
        </div>
        <!--end::Avatar-->

        <!--begin::Text-->
        <div class="flex-grow-1">
          <a href="#" class="text-gray-900 fw-bold text-hover-primary fs-6">{{
            item.name
          }}</a>

          <span class="text-muted d-block fw-semibold">{{
            item.description
          }}</span>
        </div>
        <!--end::Text-->
      </div>
      <!--end::Item-->
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "kt-authors",
  components: {},
  setup() {
    const list = ref([
      {
        avatar: "media/avatars/yovan.jpeg",
        name: "Emma Smiths",
        description: "Project Manager",
      },
      {
        avatar: "media/avatars/300-5.jpg",
        name: "Sean Bean",
        description: "PHP, SQLite, Artisan CLI",
      },
      {
        avatar: "media/avatars/300-11.jpg",
        name: "Brian Cox",
        description: "PHP, SQLite, Artisan CLI",
      },
      {
        avatar: "media/avatars/300-23.jpg",
        name: "Dan Wilson",
        description: "PHP, SQLite, Artisan CLI",
      },
      {
        avatar: "media/avatars/300-10.jpg",
        name: "Natali Trump",
        description: "NET, Oracle, MySQL",
      },
      {
        avatar: "media/avatars/300-9.jpg",
        name: "Francis Mitcham",
        description: "PHP, SQLite, Artisan CLI",
      },
      {
        avatar: "media/avatars/300-12.jpg",
        name: "Jessie Clarcson",
        description: "Angular, React",
      },
    ]);

    return {
      list,
    };
  },
});
</script>

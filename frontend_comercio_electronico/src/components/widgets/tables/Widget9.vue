<template>
  <div class="card" :class="widgetClasses">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Members Statistics</span>

        <span class="text-muted mt-1 fw-semibold fs-7">Over 500 members</span>
      </h3>

      <div
        class="card-toolbar"
        data-bs-toggle="tooltip"
        data-bs-placement="top"
        data-bs-trigger="hover"
        title="Click to add a user"
      >
        <a
          href="#"
          class="btn btn-sm btn-light-primary"
          data-bs-toggle="modal"
          data-bs-target="#kt_modal_invite_friends"
        >
          <KTIcon icon-name="plus" icon-class="fs-3" />
          New Member
        </a>
      </div>
    </div>
    <div class="card-body py-3">
      <div class="table-responsive">
        <table
          class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4"
        >
          <thead>
            <tr class="fw-bold text-muted">
              <th class="w-25px">
                <div
                  class="form-check form-check-sm form-check-custom form-check-solid"
                >
                  <input
                    class="form-check-input"
                    type="checkbox"
                    @change="
                      checkedRows.length === 6
                        ? (checkedRows.length = 0)
                        : (checkedRows = [0, 1, 2, 3, 4, 5])
                    "
                  />
                </div>
              </th>
              <th class="min-w-150px">Usuario</th>
              <th class="min-w-140px">Company</th>
              <th class="min-w-120px">Progress</th>
              <th class="min-w-100px text-end">Actions</th>
            </tr>
          </thead>

          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td>
                  <div
                    class="form-check form-check-sm form-check-custom form-check-solid"
                  >
                    <input
                      class="form-check-input widget-9-check"
                      type="checkbox"
                      :value="index"
                      v-model="checkedRows"
                    />
                  </div>
                </td>

                <td>
                  <div class="d-flex align-items-center">
                    <div class="symbol symbol-45px me-5">
                      <img :src="item.image" alt="" />
                    </div>
                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-gray-900 fw-bold text-hover-primary fs-6"
                        >{{ item.name }}</a
                      >

                      <span
                        class="text-muted fw-semibold text-muted d-block fs-7"
                        >{{ item.skills }}</span
                      >
                    </div>
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-gray-900 fw-bold text-hover-primary d-block fs-6"
                    >{{ item.companyName }}</a
                  >
                  <span
                    class="text-muted fw-semibold text-muted d-block fs-7"
                    >{{ item.companySkills }}</span
                  >
                </td>

                <td class="text-end">
                  <div class="d-flex flex-column w-100 me-2">
                    <div class="d-flex flex-stack mb-2">
                      <span class="text-muted me-2 fs-7 fw-semibold">
                        {{ item.value }}%
                      </span>
                    </div>

                    <div class="progress h-6px w-100">
                      <div
                        class="progress-bar"
                        :class="`bg-${item.color}`"
                        role="progressbar"
                        :style="{ width: item.value + '%' }"
                        :aria-valuenow="item.value"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </td>

                <td class="text-end">
                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon icon-name="switch" icon-class="fs-3" />
                  </a>

                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon icon-name="pencil" icon-class="fs-3" />
                  </a>

                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                  >
                    <KTIcon icon-name="trash" icon-class="fs-3" />
                  </a>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import type { Product } from "@/models/Product";

export default defineComponent({
  name: "kt-widget-9",
  components: {},
  props: {
    widgetClasses: String,
  },

  setup() {
    const checkedRows = ref<Array<number>>([]);
    const list = ref([]); // Inicializa list como un ref vacío

    // Función para cargar usuarios
    const loadUsers = async () => {
      try {
        const users = await UserService.getAllUsers(); // Llama al servicio
        list.value = users.map(user => ({
          ...user,
          image: getAssetPath(user.image || "media/avatars/blank.png"), // Asume que cada usuario tiene una propiedad image
          color: "primary", // Asume un color por defecto, ajusta según necesidad
        }));
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    onMounted(loadUsers); // Carga los usuarios cuando el componente se monta

    return {
      list,
      checkedRows,
      getAssetPath,
    };
  },

});
</script>

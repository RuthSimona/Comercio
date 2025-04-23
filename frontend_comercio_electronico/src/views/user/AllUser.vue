<template>
  <div class="card" :class="widgetClasses">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1"
          >Administración de usuarios</span
        >
        <span class="text-muted mt-1 fw-semibold fs-7"
          >En esta sección puedes administrar los usuarios de tu tienda</span
        >
      </h3>
      <div class="card-toolbar">
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary w-60px h-60px"
          @click="$router.push('/usuarios/crear')"
        >
          <KTIcon icon-name="plus-square" icon-class="fs-5x" />
        </button>
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
              <th class="min-w-140px">Usuario</th>
              <th class="min-w-140px">Tipo</th>
              <th class="min-w-120px">Estado</th>
              <th class="min-w-100px text-end">Acción</th>
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
                        >{{ item.name }} {{ item.lastName }}</a
                      >
                      <span
                        class="text-muted fw-semibold text-muted d-block fs-7"
                        >{{ item.email }}</span
                      >
                    </div>
                  </div>
                </td>
                <td>
                  <span v-if="item.type === 0" class="badge badge-light-primary"
                    >Admin</span
                  >
                  <span
                    v-else-if="item.type === 1"
                    class="badge badge-light-warning"
                    >User</span
                  >
                  <span
                    v-else-if="item.type === 2"
                    class="badge badge-light-info"
                    >Customer</span
                  >
                  <span v-else class="badge badge-light-secondary"
                    >Desconocido</span
                  >
                </td>
                <td>
                  <span v-if="item.state" class="badge badge-light-success"
                    >Activo</span
                  >
                  <span v-else class="badge badge-light-danger">Inactivo</span>
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
import UserService from "@/services/UserService";
import type { Users } from "@/models/Users";
import { onMounted } from "vue";

export default defineComponent({
  name: "kt-widget-9",
  components: {},
  props: {
    widgetClasses: String,
  },

  setup() {
    const checkedRows = ref<Array<number>>([]);
    const list = ref([]);

    const loadUsers = async () => {
      try {
        const users = await UserService.getAll();
        list.value = users.map((user) => ({
          ...user,
          image: user.pathAvatar || "ruta/a/media/avatars/blank.png", 
          color: "primary", 
        }));
      } catch (error) {
        console.error("Error loading users:", error);
      }
    };

    onMounted(loadUsers); 

    return {
      list,
      checkedRows,
      getAssetPath,
    };
  },
});
</script>

<template>
  <div class="card" :class="widgetClasses">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1"
          >Administración de productos</span
        >
        <span class="text-muted mt-1 fw-semibold fs-7"
          >Aquí puedes administrar los productos de tu tienda</span
        >
      </h3>
      <div class="card-toolbar">
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary w-60px h-60px"
          @click="$router.push('/productos/crear')"
        >
          <KTIcon icon-name="plus-square" icon-class="fs-5x" />
        </button>
      </div>
    </div>
    <div class="card-body py-3 mt-8">
      <div class="tab-content">
        <div class="tab-pane fade active show" id="kt_table_widget_5_tab_1">
          <div class="table-responsive">
            <table
              class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3"
            >
              <thead>
                <tr class="fw-bold text-muted">
                  <th class="w-25px">
                    <div
                      class="form-check form-check-sm form-check-custom form-check-solid"
                    >
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </th>
                  <th class="min-w-150px">Nombre</th>
                  <th class="min-w-140px">Descripción</th>
                  <th class="min-w-120px">Precio</th>
                  <th class="min-w-120px">Stock</th>
                  <th class="min-w-120px">Estado</th>
                  <th class="min-w-100px text-end">Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="product in products" :key="product.id">
                  <td>
                    <div
                      class="form-check form-check-sm form-check-custom form-check-solid"
                    >
                      <input class="form-check-input" type="checkbox" />
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >{{ product.name }}</a
                    >
                  </td>
                  <td class="text-muted fw-semibold">
                    {{ product.description }}
                  </td>
                  <td class="text-gray-900 fw-bold text-hover-primary fs-6">
                    {{ product.price }}
                  </td>
                  <td class="text-gray-900 fw-bold text-hover-primary fs-6">
                    {{ product.stock }}
                  </td>
                  <td>
                    <span v-if="product.state" class="badge badge-light-success"
                      >Activo</span
                    >
                    <span v-else class="badge badge-light-danger"
                      >Inactivo</span
                    >
                  </td>
                  <td class="text-end">
                    <router-link
                      :to="`/productos/editar/${product.id}`"
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                    >
                      <KTIcon icon-name="pencil" icon-class="fs-3" />
                    </router-link>

                    <a
                      href="#"
                      @click="deleteProduct(product.id)"
                      class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                    >
                      <KTIcon icon-name="trash" icon-class="fs-3" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductService from "@/services/ProductService";
import type { Product } from "@/models/Product";
import Swal from "sweetalert2";

export default defineComponent({
  name: "listProducts",

  data() {
    return {
      products: [] as Product[],
    };
  },

  async created() {
    this.products = await ProductService.getAll();
    console.log(this.products);
  },

  methods: {
    async deleteProduct(productId: number) {
      const result = await Swal.fire({
        title: "¿Estás seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar!",
        cancelButtonText: "Cancelar",
      });

      if (result.isConfirmed) {
        try {
          await ProductService.delete(productId);
          this.products = this.products.filter(
            (product) => product.id !== productId
          );
          Swal.fire("Eliminado!", "El producto ha sido eliminado.", "success");
        } catch (error) {
          Swal.fire("Error!", "No se pudo eliminar el producto.", "error");
        }
      }
    },
  },

  props: {
    widgetClasses: String,
  },
});
</script>

<template>
  <div class="modal fade" id="kt_modal_invite_friends" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog mw-650px">
      <div class="modal-content">
        <div class="modal-header pb-0 border-0 justify-content-end">
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <KTIcon icon-name="cross" icon-class="fs-1" />
          </div>
        </div>
        <div class="modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15">
          <div class="text-center mb-13">
            <h1 class="mb-3">Catálogo de productos</h1>
            <div class="text-gray-500 fw-semibold fs-5">
              Compra el producto que deseas.
            </div>
          </div>
          <div class="btn btn-light-primary fw-bold w-100 mb-8">
            <img alt="Logo" :src="getAssetPath('media/icons/duotune/ecommerce/ecm004.svg')" class="h-40px me-3" />
            Acceder a tu cuenta
          </div>
          <div class="btn btn-light-primary fw-bold w-100 mb-8">
            <img alt="Logo" :src="getAssetPath('media/icons/duotune/ecommerce/ecm001.svg')" class="h-40px me-3" />
            Agregar al carrito
          </div>
          <div class="btn btn-light-primary fw-bold w-100 mb-8">
            <img alt="Logo" :src="getAssetPath('media/icons/duotune/ecommerce/ecm003.svg')" class="h-40px me-3" />
            Comprar
          </div>
          <div class="separator d-flex flex-center mb-8">
            <span class="text-uppercase bg-body fs-7 fw-semibold text-gray-400 px-3">or</span>
          </div>
          <div class="mb-10">
            ID del Producto: {{ id }}
            <div class="fs-6 fw-semibold mb-2">Carrito de compras</div>
            <table class="table">
              <thead class="thead-light">
                <tr>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Precio</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>MacAir 20231</td>
                  <td>2</td>
                  <td>2000Bs</td>
                  <td>4000Bs</td>
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
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "invite-friends-modal",
  props: {
    id: Number,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>

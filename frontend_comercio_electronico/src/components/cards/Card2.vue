<template>
  <button
    type="button"
    class="btn btn-light btn-active-light-primary"
    data-bs-toggle="modal"
    :data-bs-target="`#kt_modal_invite_friends`"
    @click="openModalWithProductId(id)"
  >
    <div class="card h-100">
      <div class="card-header flex-nowrap border-0 pt-9">
        <div class="card-title m-0">
          {{ productName }}
        </div>
      </div>
      <div class="card-body d-flex flex-column px-9 pt-6 pb-8">
        <div class="fs-2tx fw-bold mb-3">{{ productPrice }}Bs</div>
        <div class="text-muted">
          {{ productDescription }}
        </div>
        <div class="mt-2">
          <span :class="`badge ${getCategoryColor(productCategory)}`">{{
            productCategory.toUpperCase()
          }}</span>
        </div>
      </div>
    </div>
  </button>
  <KTInviteFriendsModal></KTInviteFriendsModal>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown3 from "@/components/dropdown/Dropdown3.vue";
import KTCreateAPIKeyModal from "@/components/modals/forms/CreateAPIKeyModal.vue";
import KTInviteFriendsModal from "@/components/modals/general/InviteFriendsModal.vue";
import ProductService from "@/services/ProductService";
import type { Product } from "@/models/Product";
import OrderService from "@/services/OrderService";
import Swal from "sweetalert2";
export default defineComponent({
  data() {
    return {
      productId: null,
    };
  },
  mounted() {
    // Aquí puedes usar el productId como necesites
  },

  name: "card-2",
  components: {
    Dropdown3,
    KTCreateAPIKeyModal,
    KTInviteFriendsModal,
  },

  props: {
    id: Number,
    productName: String,
    productPrice: Number,
    productDescription: String,
    productCategory: {
      type: String,
      required: true,
    },
  },

  methods: {
    getCategoryColor(category) {
      const colors = [
        "bg-primary",
        "bg-secondary",
        "bg-success",
        "bg-danger",
        "bg-warning",
        "bg-info",
        "bg-light",
      ];
      let hash = 0;
      for (let i = 0; i < category.length; i++) {
        hash = category.charCodeAt(i) + ((hash << 5) - hash);
      }
      const index = Math.abs(hash) % colors.length;
      return colors[index];
    },

    async openModalWithProductId(id) {
      const userId = 1;
      try {
        const selectedProduct = await ProductService.getById(id);
        const product = selectedProduct[0];
        const price = Number(product.price);
        const quantity = 1;
        const total = price * quantity;
        this.createOrder(userId, [
          {
            productName: product.name,
            quantity: quantity,
            price: price,
            total: total,
          },
        ]);
      } catch (error) {
        console.error("Error al obtener el producto seleccionado:", error);
      }
    },
    async createOrder(userId, items) {
      try {
        const order = {
          userId,
          items,
        };
        const response = await OrderService.createOrder(order);
        Swal.fire({
          title: "¡Orden creada!",
          text: `Tu orden con ID ${response} ha sido creada exitosamente.`,
          icon: "success",
        });
      } catch (error) {
        console.error("Error creating order:", error);
      }
    },
  },

  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>

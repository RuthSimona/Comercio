<template>
  <div :class="widgetClasses" class="card">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1"
          >Administración de Ventas</span
        >
      </h3>
    </div>
    <div class="card-body py-3">
      <div class="table-responsive">
        <table class="table align-middle gs-0 gy-4">
          <thead>
            <tr class="fw-bold text-muted bg-light">
              <th class="ps-4 min-w-200px rounded-start">Código de Venta</th>
              <th class="min-w-125px">Email</th>
              <th class="min-w-125px">Cantidad</th>
              <th class="min-w-200px">Nombre del Cliente</th>
              <th class="min-w-50px">Estado</th>
              <th class="min-w-200px text-end rounded-end">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <template v-for="order in orders" :key="order.id">
              <tr>
                <td>{{ order.orderCode }}</td>
                <td>{{ order.user.email }}</td>
                <td>{{ order.items.length }}</td>
                <td>{{ order.user.name }} {{ order.user.lastName }}</td>
                <td>
                  <span
                    :class="`badge badge-light-${
                      order.status ? 'success' : 'danger'
                    }`"
                  >
                    {{ order.status ? "Active" : "Inactive" }}
                  </span>
                </td>
                <td class="text-end">
                  <RouterLink
                    :to="`/ventas/detalles/${order.orderCode}`"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon icon-name="eye" icon-class="fs-3" />
                  </RouterLink>
                  <a
                    href="#"
                    class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
                  >
                    <KTIcon icon-name="switch" icon-class="fs-3" />
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
import { defineComponent, onMounted, ref } from "vue";
import OrderService from "@/services/OrderService";

export default defineComponent({
  name: "kt-widget-11",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const orders = ref(null);

    const loadOrders = async () => {
      orders.value = await OrderService.getOrders();
    };

    onMounted(loadOrders);

    return {
      orders,
    };
  },
});
</script>

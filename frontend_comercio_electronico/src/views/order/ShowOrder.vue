<template>
    <div :class="widgetClasses" class="card">
        <div class="card-header border-0 pt-5">
            <h3 class="card-title align-items-start flex-column">
                <span class="card-label fw-bold fs-3 mb-1">Detalles de la Orden</span>
            </h3>
        </div>
        <div class="card-body py-3" v-if="order">
            <h5>Código de Orden: {{ order.orderCode }}</h5>
            <div>Email del Cliente: {{ order.user.email }}</div>
            <div>Nombre del Cliente: {{ order.user.name }} {{ order.user.lastName }}</div>
            <div>Estado: <span :class="`badge badge-light-${order.status ? 'success' : 'danger'}`">{{ order.status ? "Activo" : "Inactivo" }}</span></div>
            <h6 class="mt-3">Items:</h6>
            <ul>
                <li v-for="item in order.items" :key="item.id">
                    Producto: {{ item.productName }}, Cantidad: {{ item.quantity }}
                </li>
            </ul>
        </div>
        <div v-else>
            <p>Cargando detalles de la orden...</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import OrderService from "@/services/OrderService";

export default defineComponent({
    name: "ShowOrderDetails",
    props: {
        widgetClasses: String,
    },
    setup() {
        const order = ref(null);
        const route = useRoute();

        const loadOrder = async () => {
            const codeOrder = route.params.codeOrder;
            try {
                const orders = await OrderService.getOrders();
                const matchingOrder = orders.find(o => o.orderCode === codeOrder);
                if (matchingOrder) {
                    order.value = matchingOrder;
                } else {
                    console.error("Orden no encontrada");
                }
            } catch (error) {
                console.error("Error loading orders:", error);
            }
        };

        onMounted(loadOrder);

        return {
            order,
        };
    },
});
</script>
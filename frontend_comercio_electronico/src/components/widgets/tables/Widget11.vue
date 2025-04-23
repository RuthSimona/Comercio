<template>
  <!--begin::Tables Widget 11-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Administración de Ventas</span>        
      </h3>     
    </div>
    <div class="card-body py-3">
      <div class="table-responsive">
        <table class="table align-middle gs-0 gy-4">
          <thead>
            <tr class="fw-bold text-muted bg-light">
              <th class="ps-4 min-w-200px rounded-start">Product</th>
              <th class="min-w-125px">Price</th>
              <th class="min-w-125px">Deposit</th>
              <th class="min-w-200px">Agent</th>
              <th class="min-w-50px">Status</th>
              <th class="min-w-200px text-end rounded-end"></th>
            </tr>
          </thead>
          <tbody>
            <template v-for="(item, index) in list" :key="index">
              <tr>
                <td>
                  <div class="d-flex align-items-center">
                    <div class="d-flex justify-content-start flex-column">
                      <a
                        href="#"
                        class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                        >{{ item.product.name }}</a
                      >
                      <span
                        class="text-muted fw-semibold text-muted d-block fs-7"
                        >{{ item.product.specs }}</span
                      >
                    </div>
                  </div>
                </td>

                <td>
                  <a
                    href="#"
                    class="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6"
                    >{{ item.price }}</a
                  >
                  <span class="text-muted fw-semibold text-muted d-block fs-7"
                    >Paid</span
                  >
                </td>
                <td>
                  <a
                    href="#"
                    class="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6"
                    >{{ item.deposit }}</a
                  >
                  <span class="text-muted fw-semibold text-muted d-block fs-7"
                    >Rejected</span
                  >
                </td>
                <td>
                  <a
                    href="#"
                    class="text-gray-900 fw-bold text-hover-primary d-block mb-1 fs-6"
                    >{{ item.agent.name }}</a
                  >
                  <span
                    class="text-muted fw-semibold text-muted d-block fs-7"
                    >{{ item.agent.position }}</span
                  >
                </td>
                <td>
                  <span
                    :class="`
                      badge badge-light-${item.status.color}
                      fs-7
                      fw-bold
                    `"
                    >{{ item.status.label }}</span
                  >
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "kt-widget-11",
  components: {},
  props: {
    widgetClasses: String,
  },
  setup() {
    const list = [
      {
        product: {
          image: getAssetPath("media/stock/600x400/img-26.jpg"),
          name: "Sant Extreanet Solution",
          specs: "HTML, JS, ReactJS",
        },
        price: "$2,790",
        deposit: "$520",
        agent: {
          name: "Bradly Beal",
          position: "Insurance",
        },
        status: {
          label: "Approved",
          color: "primary",
        },
      },  
    ];

    return {
      list,
      getAssetPath,
    };
  },
});
</script>

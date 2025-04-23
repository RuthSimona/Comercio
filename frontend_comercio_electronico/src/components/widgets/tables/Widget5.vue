<template>
  <div class="card" :class="widgetClasses">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Latest Products</span>
        <span class="text-muted mt-1 fw-semibold fs-7"
          >More than 400 new products</span
        >
      </h3>
      <div class="card-toolbar">
        <!--begin::Menu-->
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <KTIcon icon-name="category" icon-class="fs-2" />
        </button>
        <Dropdown1></Dropdown1>
        <!--end::Menu-->
      </div>
    </div>
    <div class="card-body py-3">
      <div class="tab-content">
        <div class="tab-pane fade active show" id="kt_table_widget_5_tab_1">
          <div class="table-responsive">
            <table
              class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4"
            >
              <thead>
                <tr class="border-0">
                  <th class="p-0 w-50px"></th>
                  <th class="p-0 min-w-150px"></th>
                  <th class="p-0 min-w-140px"></th>
                  <th class="p-0 min-w-110px"></th>
                  <th class="p-0 min-w-50px"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="getAssetPath('media/svg/brand-logos/plurk.svg')"
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >Brad Simmons</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Movie Creator</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">React, HTML</td>
                  <td class="text-end">
                    <span class="badge badge-light-success">Approved</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="
                            getAssetPath('media/svg/brand-logos/telegram.svg')
                          "
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >Popular Authors</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Most Successful</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">Python, MySQL</td>
                  <td class="text-end">
                    <span class="badge badge-light-warning">In Progress</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="getAssetPath('media/svg/brand-logos/vimeo.svg')"
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >New Users</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Awesome Users</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">
                    Laravel,Metronic
                  </td>
                  <td class="text-end">
                    <span class="badge badge-light-primary">Success</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="getAssetPath('media/svg/brand-logos/bebo.svg')"
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >Active Customers</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Movie Creator</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">AngularJS, C#</td>
                  <td class="text-end">
                    <span class="badge badge-light-danger">Rejected</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="
                            getAssetPath(
                              '/media/svg/brand-logos/kickstarter.svg'
                            )
                          "
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >Bestseller Theme</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Best Customers</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">ReactJS, Ruby</td>
                  <td class="text-end">
                    <span class="badge badge-light-warning">In Progress</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_table_widget_5_tab_2">
          <div class="table-responsive">
            <table
              class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4"
            >
              <thead>
                <tr class="border-0">
                  <th class="p-0 w-50px"></th>
                  <th class="p-0 min-w-150px"></th>
                  <th class="p-0 min-w-140px"></th>
                  <th class="p-0 min-w-110px"></th>
                  <th class="p-0 min-w-50px"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="getAssetPath('media/svg/brand-logos/plurk.svg')"
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >Brad Simmons</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Movie Creator</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">React, HTML</td>
                  <td class="text-end">
                    <span class="badge badge-light-success">Approved</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="
                            getAssetPath('media/svg/brand-logos/telegram.svg')
                          "
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >Popular Authors</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Most Successful</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">Python, MySQL</td>
                  <td class="text-end">
                    <span class="badge badge-light-warning">In Progress</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="getAssetPath('media/svg/brand-logos/bebo.svg')"
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >Active Customers</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Movie Creator</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">AngularJS, C#</td>
                  <td class="text-end">
                    <span class="badge badge-light-danger">Rejected</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="tab-pane fade" id="kt_table_widget_5_tab_3">
          <div class="table-responsive">
            <table
              class="table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4"
            >
              <thead>
                <tr class="border-0">
                  <th class="p-0 w-50px"></th>
                  <th class="p-0 min-w-150px"></th>
                  <th class="p-0 min-w-140px"></th>
                  <th class="p-0 min-w-110px"></th>
                  <th class="p-0 min-w-50px"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="
                            getAssetPath(
                              '/media/svg/brand-logos/kickstarter.svg'
                            )
                          "
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >Bestseller Theme</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Best Customers</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">ReactJS, Ruby</td>
                  <td class="text-end">
                    <span class="badge badge-light-warning">In Progress</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="getAssetPath('media/svg/brand-logos/bebo.svg')"
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >Active Customers</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Movie Creator</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">AngularJS, C#</td>
                  <td class="text-end">
                    <span class="badge badge-light-danger">Rejected</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="getAssetPath('media/svg/brand-logos/vimeo.svg')"
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >New Users</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Awesome Users</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">
                    Laravel,Metronic
                  </td>
                  <td class="text-end">
                    <span class="badge badge-light-primary">Success</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <div class="symbol symbol-45px me-2">
                      <span class="symbol-label">
                        <img
                          :src="
                            getAssetPath('media/svg/brand-logos/telegram.svg')
                          "
                          class="h-50 align-self-center"
                          alt=""
                        />
                      </span>
                    </div>
                  </td>
                  <td>
                    <a
                      href="#"
                      class="text-gray-900 fw-bold text-hover-primary mb-1 fs-6"
                      >Popular Authors</a
                    >
                    <span class="text-muted fw-semibold d-block"
                      >Most Successful</span
                    >
                  </td>
                  <td class="text-end text-muted fw-semibold">Python, MySQL</td>
                  <td class="text-end">
                    <span class="badge badge-light-warning">In Progress</span>
                  </td>
                  <td class="text-end">
                    <a
                      href="#"
                      class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary"
                    >
                      <KTIcon icon-name="arrow-right" icon-class="fs-2" />
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
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";

export default defineComponent({
  name: "kt-widget-5",
  components: {
    Dropdown1,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>

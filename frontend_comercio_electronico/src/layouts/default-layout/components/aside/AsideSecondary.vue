<template>
  <div
    v-if="asideSecondaryDisplay"
    class="aside-secondary d-flex flex-row-fluid"
  >
    <div class="aside-workspace my-5 p-5" id="kt_aside_wordspace">
      <div class="d-flex h-100 flex-column">
        <div
          class="flex-column-fluid hover-scroll-y"
          data-kt-scroll="true"
          data-kt-scroll-activate="true"
          data-kt-scroll-height="auto"
          data-kt-scroll-wrappers="#kt_aside_wordspace"
          data-kt-scroll-dependencies="#kt_aside_secondary_footer"
          data-kt-scroll-offset="0px"
        >
          <div class="tab-content">
            <div
              class="tab-pane fade active show"
              id="kt_aside_nav_tab_projects"
              role="tabpanel"
            >
              <CEYMenuAdmin></CEYMenuAdmin>
            </div>
            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_menu"
              role="tabpanel"
            >
              <KTMenu></KTMenu>
            </div>
            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_subscription"
              role="tabpanel"
            >
              <div class="mx-5">
                <div class="text-center pt-10 mb-20">
                  <h2 class="fs-2 fw-bold mb-7">My Subscription</h2>
                  <p class="text-gray-500 fs-4 fw-semibold mb-10">
                    There are no customers added yet.<br />
                    Kickstart your CRM by adding a your first customer
                  </p>
                  <a
                    href="#"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_upgrade_plan"
                    >Upgrade Plan</a
                  >
                </div>
                <div class="text-center px-4">
                  <img
                    class="mw-100 mh-300px"
                    alt=""
                    :src="getIllustrationsPath('18.png')"
                  />
                </div>
              </div>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_tasks"
              role="tabpanel"
            >
              <CEYMenuAdminProductos></CEYMenuAdminProductos>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_notifications"
              role="tabpanel"
            >
              <KTNotifications></KTNotifications>
            </div>

            <div
              class="tab-pane fade"
              id="kt_aside_nav_tab_authors"
              role="tabpanel"
            >
              <KTAuthors></KTAuthors>
            </div>
          </div>
        </div>

        <div class="flex-column-auto pt-10 px-5" id="kt_aside_secondary_footer">

          <a
          @click="signOut()"
            class="btn btn-bg-light btn-color-gray-600 btn-flex btn-active-color-primary flex-center w-100"
            data-bs-toggle="tooltip"
            data-bs-custom-class="tooltip-dark"
            data-bs-trigger="hover"
            data-bs-offset="0,5"
            data-bs-dismiss-="click"
          >
            <span class="btn-label">{{ t("exit") }}</span>
            <KTIcon icon-name="exit-right" icon-class="btn-icon fs-4 ms-2" />
          </a>
        </div>
      </div>
    </div>
  </div>

  <button
    v-if="asideSecondaryDisplay && minimizationEnabled"
    :class="{ active: minimizedAsideSecondary }"
    class="btn btn-sm btn-icon bg-body btn-color-gray-700 btn-active-primary position-absolute translate-middle start-100 end-0 bottom-0 shadow-sm d-none d-lg-flex mb-5"
    data-kt-toggle="true"
    data-kt-toggle-state="active"
    data-kt-toggle-target="body"
    data-kt-toggle-name="aside-minimize"
    style="margin-bottom: 1.35rem"
  >
    <KTIcon icon-name="arrow-left" icon-class="fs-2 rotate-180" />
  </button>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import KTMenu from "@/layouts/default-layout/components/aside/Menu.vue";
import Dropdown1 from "@/components/dropdown/Dropdown1.vue";
import CEYMenuAdminProductos from "@/layouts/default-layout/components/aside/tabs/AdminProductos.vue";
import KTAuthors from "@/layouts/default-layout/components/aside/tabs/Authors.vue";
import KTNotifications from "@/layouts/default-layout/components/aside/tabs/Notifications.vue";
import {
  asideSecondaryDisplay,
  minimizationEnabled,
  minimizedAsideSecondary,
} from "@/layouts/default-layout/config/helper";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import CEYMenuAdmin from "./MenuAdmin.vue";

export default defineComponent({
  name: "kt-aside-secondary",
  components: {
    KTMenu,
    Dropdown1,
    CEYMenuAdminProductos,
    KTAuthors,
    KTNotifications,
    CEYMenuAdmin
  },
  setup() {
    const { t } = useI18n();
    const store = useAuthStore();
    const router = useRouter();

    const signOut = () => {
      store.logout();
      router.push({ name: "sign-in" });
    };

    return {
      minimizedAsideSecondary,
      asideSecondaryDisplay,
      minimizationEnabled,
      getIllustrationsPath,
      t,
      getAssetPath,
      signOut,
    };
  },
});
</script>

<template>
  <div class="d-flex flex-shrink-0">
    <div class="d-flex ms-3">
      <a
        href="#"
        class="btn btn-icon flex-center bg-body btn-color-gray-600 btn-active-color-primary h-40px"
        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <KTIcon icon-name="night-day" icon-class="theme-light-show fs-2" />
        <KTIcon icon-name="moon" icon-class="theme-dark-show fs-2" />
      </a>
      <KTThemeModeSwitcher></KTThemeModeSwitcher>
      
    </div>
    <div class="d-flex align-items-center ms-3">
      <div
        class="btn btn-icon btn-primary w-40px h-40px pulse pulse-white"
        id="kt_drawer_chat_toggle"
      >
        <KTIcon icon-name="message-text-2" icon-class="fs-2" />
        <span class="pulse-ring"></span>
      </div>
    </div>
    <div class="d-flex align-items-center ms-3">
      <div
        class="cursor-pointer symbol symbol-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-overflow="true"
        data-kt-menu-placement="top-start"
        data-kt-menu-flip="top-end"
        data-bs-toggle="tooltip"
        data-bs-placement="right"
        data-bs-dismiss="click"
        title="User profile"
      >
        <img :src="getAssetPath('media/avatars/yovan.jpeg')" alt="metronic" />
      </div>
      <KTUserMenu></KTUserMenu>
    </div>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTThemeModeSwitcher from "@/layouts/default-layout/components/theme-mode/ThemeModeSwitcher.vue";
import KTUserMenu from "@/layouts/default-layout/components/menus/UserAccountMenu.vue";

export default defineComponent({
  name: "layout-topbar",
  components: {
    KTThemeModeSwitcher,
    KTUserMenu,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>

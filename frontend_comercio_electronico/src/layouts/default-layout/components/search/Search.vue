<template>
  <MenuComponent menu-selector="#kt-search-menu">
    <template v-slot:toggle>
      <div
        id="kt_header_search"
        class="header-search d-flex align-items-stretch"
        data-kt-menu-target="#kt-search-menu"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <div class="d-flex align-items-center" id="kt_header_search_toggle">
          <div class="btn btn-icon btn-active-light-primary">
            <KTIcon icon-name="magnifier" icon-class="fs-2 fs-md-1" />
          </div>
        </div>
        
      </div>
      
    </template>
    <template v-slot:content>
      
      <div
        class="menu menu-sub menu-sub-dropdown menu-column p-7 w-325px w-md-375px"
        data-kt-menu="true"
        id="kt-search-menu"
      >
        
        <div>
          
          <form class="w-100 position-relative mb-3" autocomplete="off">
            
            <KTIcon
              icon-name="magnifier"
              icon-class="fs-2 fs-lg-1 text-gray-500 position-absolute top-50 translate-middle-y ms-0"
            />
            

            
            <input
              ref="inputRef"
              v-model="search"
              @input="searching"
              type="text"
              class="form-control form-control-flush ps-10"
              name="search"
              placeholder="Search..."
            />
            

            
            <span
              v-if="loading"
              class="position-absolute top-50 end-0 translate-middle-y lh-0 me-1"
            >
              <span
                class="spinner-border h-15px w-15px align-middle text-gray-500"
              ></span>
            </span>
            

            
            <span
              v-show="search.length && !loading"
              @click="reset()"
              class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0"
            >
              <KTIcon icon-name="cross" icon-class="fs-2 fs-lg-1 me-0" />
            </span>
            

            
            <div class="position-absolute top-50 end-0 translate-middle-y">
              
              <div
                v-if="!search && !loading"
                @click="state = 'preferences'"
                class="btn btn-icon w-20px btn-sm btn-active-color-primary me-1"
                data-bs-toggle="tooltip"
                title="Show search preferences"
              >
                <KTIcon icon-name="setting-2" icon-class="fs-1" />
              </div>
              

              
              <div
                v-if="!search && !loading"
                @click="state = 'advanced-options'"
                class="btn btn-icon w-20px btn-sm btn-active-color-primary"
                data-bs-toggle="tooltip"
                title="Show more search options"
              >
                <KTIcon icon-name="down" icon-class="fs-2" />
              </div>
              
            </div>
            
          </form>
          

          
          <div class="separator border-gray-200 mb-6"></div>
          
          <Results v-if="state === 'results'"></Results>
          <PartialMain v-else-if="state === 'main'"></PartialMain>
          <Empty v-else-if="state === 'empty'"></Empty>
        </div>
        

        <form v-if="state === 'advanced-options'" class="pt-1">
          
          <h3 class="fw-semobold text-gray-900 mb-7">Advanced Search</h3>
          

          
          <div class="mb-5">
            <input
              type="text"
              class="form-control form-control-sm form-control-solid"
              placeholder="Contains the word"
              name="query"
            />
          </div>
          

          
          <div class="mb-5">
            
            <div class="nav-group nav-group-fluid">
              
              <label>
                <input
                  type="radio"
                  class="btn-check"
                  name="type"
                  value="has"
                  checked
                />
                <span
                  class="btn btn-sm btn-color-muted btn-active btn-active-primary"
                >
                  All
                </span>
              </label>
              

              
              <label>
                <input
                  type="radio"
                  class="btn-check"
                  name="type"
                  value="users"
                />
                <span
                  class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                >
                  Users
                </span>
              </label>
              

              
              <label>
                <input
                  type="radio"
                  class="btn-check"
                  name="type"
                  value="orders"
                />
                <span
                  class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                >
                  Orders
                </span>
              </label>
              

              
              <label>
                <input
                  type="radio"
                  class="btn-check"
                  name="type"
                  value="projects"
                />
                <span
                  class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                >
                  Projects
                </span>
              </label>
              
            </div>
            
          </div>
          

          
          <div class="mb-5">
            <input
              type="text"
              name="assignedto"
              class="form-control form-control-sm form-control-solid"
              placeholder="Assigned to"
              value=""
            />
          </div>
          

          
          <div class="mb-5">
            <input
              type="text"
              name="collaborators"
              class="form-control form-control-sm form-control-solid"
              placeholder="Collaborators"
              value=""
            />
          </div>
          

          
          <div class="mb-5">
            
            <div class="nav-group nav-group-fluid">
              
              <label>
                <input
                  type="radio"
                  class="btn-check"
                  name="attachment"
                  value="has"
                  checked
                />
                <span
                  class="btn btn-sm btn-color-muted btn-active btn-active-primary"
                >
                  Has attachment
                </span>
              </label>
              

              
              <label>
                <input
                  type="radio"
                  class="btn-check"
                  name="attachment"
                  value="any"
                />
                <span
                  class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4"
                >
                  Any
                </span>
              </label>
              
            </div>
            
          </div>
          

          
          <div class="mb-5">
            <select
              name="timezone"
              aria-label="Select a Timezone"
              data-control="select2"
              data-placeholder="date_period"
              class="form-select form-select-sm form-select-solid"
            >
              <option value="next">Within the next</option>
              <option value="last">Within the last</option>
              <option value="between">Between</option>
              <option value="on">On</option>
            </select>
          </div>
          

          
          <div class="row mb-8">
            
            <div class="col-6">
              <input
                type="number"
                name="date_number"
                class="form-control form-control-sm form-control-solid"
                placeholder="Lenght"
                value=""
              />
            </div>
            

            
            <div class="col-6">
              <select
                name="date_typer"
                aria-label="Select a Timezone"
                data-control="select2"
                data-placeholder="Period"
                class="form-select form-select-sm form-select-solid"
              >
                <option value="days">Days</option>
                <option value="weeks">Weeks</option>
                <option value="months">Months</option>
                <option value="years">Years</option>
              </select>
            </div>
            
          </div>
          

          
          <div class="d-flex justify-content-end">
            <button
              @click="state = 'main'"
              class="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
            >
              Cancel
            </button>

            <a href="#" class="btn btn-sm fw-bold btn-primary">Search</a>
          </div>
          
        </form>

        <form v-if="state === 'preferences'" class="pt-1">
          
          <h3 class="fw-semobold text-gray-900 mb-7">Search Preferences</h3>
          

          
          <div class="pb-4 border-bottom">
            <label
              class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
            >
              <span
                class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2"
              >
                Projects
              </span>

              <input
                class="form-check-input"
                type="checkbox"
                value="1"
                checked
              />
            </label>
          </div>
          

          
          <div class="py-4 border-bottom">
            <label
              class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
            >
              <span
                class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2"
              >
                Targets
              </span>
              <input
                class="form-check-input"
                type="checkbox"
                value="1"
                checked
              />
            </label>
          </div>
          

          
          <div class="py-4 border-bottom">
            <label
              class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
            >
              <span
                class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2"
              >
                Affiliate Programs
              </span>
              <input class="form-check-input" type="checkbox" value="1" />
            </label>
          </div>
          

          
          <div class="py-4 border-bottom">
            <label
              class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
            >
              <span
                class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2"
              >
                Referrals
              </span>
              <input
                class="form-check-input"
                type="checkbox"
                value="1"
                checked
              />
            </label>
          </div>
          

          
          <div class="py-4 border-bottom">
            <label
              class="form-check form-switch form-switch-sm form-check-custom form-check-solid flex-stack"
            >
              <span
                class="form-check-label text-gray-700 fs-6 fw-semibold ms-0 me-2"
              >
                Users
              </span>
              <input class="form-check-input" type="checkbox" value="1" />
            </label>
          </div>
          

          
          <div class="d-flex justify-content-end pt-7">
            <div
              @click="state = 'main'"
              class="btn btn-sm btn-light fw-bold btn-active-light-primary me-2"
            >
              Cancel
            </div>
            <button class="btn btn-sm fw-bold btn-primary">Save Changes</button>
          </div>
          
        </form>
      </div>
      
    </template>
  </MenuComponent>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import Results from "@/layouts/default-layout/components/search/partials/Results.vue";
import PartialMain from "@/layouts/default-layout/components/search/partials/Main.vue";
import Empty from "@/layouts/default-layout/components/search/partials/Empty.vue";
import MenuComponent from "@/components/menu/MenuComponent.vue";

export default defineComponent({
  name: "kt-search",
  components: {
    Results,
    PartialMain,
    Empty,
    MenuComponent,
  },
  setup() {
    const search = ref<string>("");
    const state = ref<
      "main" | "empty" | "advanced-options" | "preferences" | "results"
    >("main");
    const loading = ref<boolean>(false);
    const inputRef = ref<HTMLInputElement | null>(null);

    const searching = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.value.length <= 1) {
        load("main");
      } else {
        if (target.value.length > 5) {
          load("empty");
          return;
        }
        load("results");
      }
    };

    const load = (
      current: "main" | "empty" | "advanced-options" | "preferences" | "results"
    ) => {
      loading.value = true;
      setTimeout(() => {
        state.value = current;
        loading.value = false;
      }, 1000);
    };

    const reset = () => {
      search.value = "";
      state.value = "main";
    };

    const setState = (
      curr: "main" | "empty" | "advanced-options" | "preferences" | "results"
    ) => {
      state.value = curr;
    };

    return {
      search,
      state,
      loading,
      searching,
      reset,
      inputRef,
      setState,
      getAssetPath,
    };
  },
});
</script>

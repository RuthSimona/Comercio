<template>
  <div class="card mb-5 mb-xl-10" v-if="category">
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_profile_details"
      aria-expanded="true"
      aria-controls="kt_account_profile_details"
    >
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Detalles de la categoría</h3>
      </div>
      <div class="card-toolbar">
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary w-60px h-60px"
          @click="$router.push('/categorias/ver')"
        >
          <KTIcon icon-name="left-square" icon-class="fs-5x"></KTIcon>
        </button>
      </div>
    </div>
    <div id="kt_account_profile_details" class="collapse show">
      <VForm @submit="submit" :validation-schema="validationSchema">
        <div class="card-body border-top p-9">
          <div class="row mb-6">
            <label class="col-lg-4 col-form-label required fw-semibold fs-6">Nombre</label>
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="name"
                class="form-control form-control-lg form-control-solid"
                placeholder="Nombre de la categoría"
                v-model="category.name"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="name" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer d-flex justify-content-end py-6 px-9">
          <button
            type="submit"
            id="kt_account_profile_details_submit"
            ref="submitButton1"
            class="btn btn-primary"
            :disabled="loading"
          >
            <span class="indicator-label">Guardar cambios</span>
            <span class="indicator-progress" v-if="loading">Espere por favor...
              <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          </button>
        </div>
      </VForm>
    </div>
  </div>
  <div v-else>Cargando...</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";
import CategoryService from "@/services/CategoryService";
import type { Category } from "@/models/Category";
import { useAlerts } from "@/utils/alerts";

export default defineComponent({
  name: "EditCategory",

  data(): { categories: Category[] } {
    return {
      categories: [] as Category[],
    };
  },

  async created() {
    this.categories = await CategoryService.getAll();
  },

  components: {
    ErrorMessage,
    Field,
    VForm,
  },
  setup() {
    const category = ref<Category | null>(null);
    const loading = ref(false);
    const route = useRoute();
    const { handleSuccess, handleError } = useAlerts();

    const validationSchema = Yup.object().shape({
      name: Yup.string().required().label("Nombre de la categoría"),
    });

    const loadCategory = async (id: number) => {
      loading.value = true;
      try {
        const response = await CategoryService.getById(id);
        category.value = Array.isArray(response) ? response[0] : response;
      } catch (error) {
        category.value = null;
      } finally {
        loading.value = false;
      }
    };

    const submit = async () => {
      if (!category.value) return;
      loading.value = true;
      try {
        await CategoryService.update(category.value.id, category.value);
        handleSuccess("¡Categoría actualizada con éxito!", "/categorias/ver");
      } catch (error) {
        handleError(error as string);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      const categoryId = parseInt(route.params.id as string);
      if (!isNaN(categoryId)) {
        loadCategory(categoryId);
      } else {
        console.error("ID de categoría inválido");
      }
    });

    return {
      category,
      loading,
      validationSchema,
      loadCategory,
      submit,
    };
  },
});
</script>
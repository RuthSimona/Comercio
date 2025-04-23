<template>
  <div class="card" :class="widgetClasses">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">
          Crear una nueva categoría
        </span>
      </h3>
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
    <div class="card-body py-3 mt-8">
      <div class="tab-content">
        <VForm @submit="submit" :validation-schema="validationSchema">
          <div class="modal-body py-10 px-lg-17">
            <div class="mb-5 fv-row">
              <label class="required fs-5 fw-semibold mb-2">
                Nombre de la categoría
              </label>
              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder="Nombre de la categoría"
                name="name"
                v-model="category.name"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="name" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer flex-center">
            <button ref="submitButtonRef" type="submit" class="btn btn-primary">
              <span class="indicator-label">Enviar</span>
              <span class="indicator-progress">
                Por favor espera...
                <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
              </span>
            </button>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Field, Form as VForm, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import CategoryService from "@/services/CategoryService";
import type { Category } from "@/models/Category";
import { useAlerts } from "@/utils/alerts";

export default defineComponent({
  name: "CreateCategory",
  components: {
    Field,
    ErrorMessage,
    VForm,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const category = ref<Category>({ id: 0, name: "" });
    const { handleSuccess, handleError } = useAlerts();

    const validationSchema = Yup.object().shape({
      name: Yup.string().required("El nombre es obligatorio"),
    });

    const submit = async () => {
      if (!submitButtonRef.value) return;

      submitButtonRef.value.disabled = true;
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");

      try {
        await CategoryService.create(category.value);
        handleSuccess("¡Categoría creada con éxito!", "/categorias/ver");
      } catch (error) {       
        handleError(error as string);
      } finally {
        submitButtonRef.value.disabled = false;
        submitButtonRef.value.removeAttribute("data-kt-indicator");
      }
    };

    return {
      category,
      validationSchema,
      submit,
      submitButtonRef,
    };
  },
});
</script>

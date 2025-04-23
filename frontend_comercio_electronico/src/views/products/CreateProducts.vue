<template>
  <div class="card">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1"
          >Crear un nuevo producto</span
        >
      </h3>
      <div class="card-toolbar">
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary w-60px h-60px"
          @click="$router.push('/productos/ver')"
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
              <label class="required fs-5 fw-semibold mb-2"
                >Nombre del producto</label
              >
              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder="Nombre del producto"
                name="name"
                v-model="product.name"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="name" />
                </div>
              </div>
            </div>
            <div class="mb-5 fv-row">
              <label class="required fs-5 fw-semibold mb-2">Descripción</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder="Descripción del producto"
                name="description"
                v-model="product.description"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="description" />
                </div>
              </div>
            </div>
            <div class="mb-5 fv-row">
              <label class="required fs-5 fw-semibold mb-2">Precio</label>
              <Field
                type="number"
                class="form-control form-control-solid"
                placeholder="Precio del producto"
                name="price"
                v-model="product.price"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="price" />
                </div>
              </div>
            </div>
            <div class="mb-5 fv-row">
              <label class="required fs-5 fw-semibold mb-2">Stock</label>
              <Field
                type="number"
                class="form-control form-control-solid"
                placeholder="Stock del producto"
                name="stock"
                v-model="product.stock"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="stock" />
                </div>
              </div>
            </div>
            <div class="mb-5 fv-row">
              <label class="required fs-5 fw-semibold mb-2">Categoría</label>
              <select
                class="form-control form-control-solid"
                v-model="product.categoryId"
                name="categoryId"
                placeholder="Categoría del producto"
              >
                <option
                  v-for="category in categories"
                  :key="category.id"
                  :value="category.id"
                >
                  {{ category.name }}
                </option>
              </select>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="categoryId" />
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer flex-center">
            <button ref="submitButtonRef" type="submit" class="btn btn-primary">
              <span class="indicator-label">Enviar</span>
              <span class="indicator-progress">
                Por favor espera...
                <span
                  class="spinner-border spinner-border-sm align-middle ms-2"
                ></span>
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
import ProductService from "../../services/ProductService";
import { Field, Form as VForm, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import { useRouter } from "vue-router";
import type { Product } from "../../models/Product";
import { useAlerts } from "@/utils/alerts";
import type { Category } from "@/models/Category";
import CategoryService from "@/services/CategoryService";

export default defineComponent({
  name: "createProduct",

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
    const { handleSuccess, handleError } = useAlerts();

    const router = useRouter();
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const product = ref<Product>({
      id: 0,
      name: "",
      state: true,
      stock: 0,
      description: "",
      price: 0,
      categoryId: 0,
    });

    const validationSchema = Yup.object().shape({
      name: Yup.string().required('El nombre es requerido').label("Nombre del producto"),
      description: Yup.string().required('El precio es requerido').label("Descripción"),
      price: Yup.number().required().min(1, 'El precio debe ser mayor que 0').label("Precio"),
      stock: Yup.number().required().min(1, 'El stock debe ser mayor que 0').label("Stock"),
    });

    const submit = async () => {
      if (!submitButtonRef.value) {
        return;
      }
      submitButtonRef.value.disabled = true;
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");
      product.value.state = true;
      try {
        await ProductService.create(product.value);
        handleSuccess("¡Producto creado con éxito!", "/productos/ver");
      } catch (error) {
        handleError(error as string);
      } finally {
        submitButtonRef.value.disabled = false;
        submitButtonRef.value.removeAttribute("data-kt-indicator");
      }
    };

    return {
      product,
      validationSchema,
      submit,
      submitButtonRef,
    };
  },
});
</script>

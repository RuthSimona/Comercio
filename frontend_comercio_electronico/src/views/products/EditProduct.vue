<template>
  <div class="card mb-5 mb-xl-10" v-if="product">
    <div
      class="card-header border-0 cursor-pointer"
      role="button"
      data-bs-toggle="collapse"
      data-bs-target="#kt_account_profile_details"
      aria-expanded="true"
      aria-controls="kt_account_profile_details"
    >
      <div class="card-title m-0">
        <h3 class="fw-bold m-0">Detalles del producto</h3>
      </div>
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
    <div id="kt_account_profile_details" class="collapse show">
      <VForm @submit="submit" :validation-schema="validationSchema">
        <div class="card-body border-top p-9">
          <div class="row mb-6">
            <label class="col-lg-4 col-form-label required fw-semibold fs-6"
              >Nombre</label
            >
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="name"
                class="form-control form-control-lg form-control-solid"
                placeholder="Product name"
                v-model="product.name"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="name" />
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-6">
            <label class="col-lg-4 col-form-label fw-semibold fs-6">
              <span class="required">Estado</span>
              <i
                class="fas fa-exclamation-circle ms-1 fs-7"
                data-bs-toggle="tooltip"
                title="Product status"
              ></i>
            </label>
            <div class="col-lg-8 fv-row">
              <Field
                as="select"
                name="state"
                class="form-select form-select-solid form-select-lg fw-semibold"
                v-model="product.state"
              >
                <option value="1">Activo</option>
                <option value="0">Inactivo</option>
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="state" />
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-6">
            <label class="col-lg-4 col-form-label required fw-semibold fs-6"
              >Stock</label
            >
            <div class="col-lg-8 fv-row">
              <Field
                type="number"
                name="stock"
                class="form-control form-control-lg form-control-solid"
                placeholder="Stock quantity"
                v-model="product.stock"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="stock" />
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-6">
            <label class="col-lg-4 col-form-label required fw-semibold fs-6"
              >Descripción</label
            >
            <div class="col-lg-8 fv-row">
              <Field
                type="text"
                name="description"
                class="form-control form-control-lg form-control-solid"
                placeholder="Product description"
                v-model="product.description"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="description" />
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-6">
            <label class="col-lg-4 col-form-label required fw-semibold fs-6"
              >Precio</label
            >
            <div class="col-lg-8 fv-row">
              <Field
                type="number"
                name="price"
                class="form-control form-control-lg form-control-solid"
                placeholder="Product price"
                v-model="product.price"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="price" />
                </div>
              </div>
            </div>
          </div>

          <div class="row mb-6">
            <label class="col-lg-4 col-form-label required fw-semibold fs-6"
              >Categoría</label
            >
            <div class="col-lg-8 fv-row">
              <Field
              class="form-select form-select-solid form-select-lg fw-semibold"

              as="select"
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
              </Field>
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="categoryId" />
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
            <span class="indicator-progress" v-if="loading"
              >Espere por favor...
              <span
                class="spinner-border spinner-border-sm align-middle ms-2"
              ></span>
            </span>
          </button>
        </div>
      </VForm>
    </div>
  </div>
  <div v-else>Loading...</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import * as Yup from "yup";
import ProductService from "@/services/ProductService";
import type { Product } from "@/models/Product";
import { useAlerts } from "@/utils/alerts";
import type { Category } from "@/models/Category";
import CategoryService from "@/services/CategoryService";

export default defineComponent({
  name: "EditProduct",

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
    const product = ref<Product | null>(null);
    const loading = ref(false);
    const route = useRoute();
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const { handleSuccess, handleError } = useAlerts();

    const validationSchema = Yup.object().shape({
      name: Yup.string().required().label("Product Name"),
      description: Yup.string().required().label("Description"),
      price: Yup.number().integer().positive().required().label("Price"),
      stock: Yup.number().integer().positive().required().label("Stock"),
      state: Yup.string().required().label("Status"),
    });

    const loadProduct = async (id: number) => {
      loading.value = true;
      try {
        const response = await ProductService.getById(id);
        const loadedProduct = Array.isArray(response) ? response[0] : response;
        loadedProduct.price = Number(loadedProduct.price);
        loadedProduct.state = loadedProduct.state ? 1 : 0;
        product.value = loadedProduct;
      } catch (error) {
        product.value = null;
      } finally {
        loading.value = false;
      }
    };

    const submit = async () => {
      if (!product.value) return;
      loading.value = true;
      try {
        await ProductService.update(product.value.id, product.value);
        handleSuccess("¡Producto actualizado con éxito!", "/productos/ver");
      } catch (error) {
        handleError(error as string);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      const productId = parseInt(route.params.id as string);
      if (!isNaN(productId)) {
        loadProduct(productId);
      } else {
        console.error("Invalid product ID");
      }
    });

    return {
      product,
      loading,
      validationSchema,
      loadProduct,
      submit,
    };
  },
});
</script>

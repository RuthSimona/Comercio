<template>
  <div class="card">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bold fs-3 mb-1">Crear un nuevo usuario</span>
      </h3>
      <div class="card-toolbar">
        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary w-60px h-60px"
          @click="$router.push('/usuarios/ver')"
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
              <label class="required fs-5 fw-semibold mb-2">Nombre</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder="Nombre del usuario"
                name="name"
                v-model="user.name"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="name" />
                </div>
              </div>
            </div>
            <div class="mb-5 fv-row">
              <label class="required fs-5 fw-semibold mb-2">Apellido</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder="Apellido del usuario"
                name="lastName"
                v-model="user.lastName"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="lastName" />
                </div>
              </div>
            </div>
            <div class="mb-5 fv-row">
              <label class="required fs-5 fw-semibold mb-2">Email</label>
              <Field
                type="email"
                class="form-control form-control-solid"
                placeholder="Email del usuario"
                name="email"
                v-model="user.email"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>
            <div class="mb-5 fv-row">
              <label class="fs-5 fw-semibold mb-2">Teléfono</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder="Teléfono del usuario"
                name="phone"
                v-model="user.phone"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="phone" />
                </div>
              </div>
            </div>

            <!-- Campo de Contraseña -->
            <div class="mb-5 fv-row">
              <label class="required fs-5 fw-semibold mb-2">Contraseña</label>
              <Field
                type="password"
                class="form-control form-control-solid"
                placeholder="Contraseña del usuario"
                name="password"
                v-model="user.password"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="password" />
                </div>
              </div>
            </div>
            <div class="mb-5 fv-row">
              <label class="required fs-5 fw-semibold mb-2">Dirección</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder="Dirección del usuario"
                name="address"
                v-model="user.address"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="address" />
                </div>
              </div>
            </div>
            <div class="mb-5 fv-row">
              <label class="required fs-5 fw-semibold mb-2"
                >Fecha de Nacimiento</label
              >
              <Field
                type="date"
                class="form-control form-control-solid"
                name="dateOfBirth"
                v-model="user.dateOfBirth"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="dateOfBirth" />
                </div>
              </div>
            </div>
            <div class="mb-5 fv-row">
              <label class="fs-5 fw-semibold mb-2">Avatar (URL)</label>
              <Field
                type="text"
                class="form-control form-control-solid"
                placeholder="URL del avatar del usuario"
                name="pathAvatar"
                v-model="user.pathAvatar"
              />
              <div class="fv-plugins-message-container">
                <div class="fv-help-block">
                  <ErrorMessage name="pathAvatar" />
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
import UserService from "../../services/UserService";
import { Field, Form as VForm, ErrorMessage } from "vee-validate";
import * as Yup from "yup";
import { useRouter } from "vue-router";
import type { Users } from "@/models/Users";
import { useAlerts } from "@/utils/alerts";

export default defineComponent({
  name: "CreateUser",
  components: {
    ErrorMessage,
    Field,
    VForm,
  },
  setup() {
    const { handleSuccess, handleError } = useAlerts();
    const router = useRouter();
    const submitButtonRef = ref<null | HTMLButtonElement>(null);
    const user = ref<Users>({
      id: 0,
      name: "",
      lastName: "",
      email: "",
      password: "",
      state: true,
      type: 0,
      phone: "",
      address: "",
      dateOfBirth: "",
      pathAvatar: "",
    });
    const validationSchema = Yup.object().shape({
      name: Yup.string().required("El nombre es requerido").label("Nombre"),
      lastName: Yup.string()
        .required("El apellido es requerido")
        .label("Apellido"),
      email: Yup.string()
        .email("Debe ser un correo válido")
        .required("El correo es requerido")
        .label("Email"),
      phone: Yup.string().notRequired(),
      address: Yup.string()
        .required("La dirección es requerida")
        .label("Dirección"),
      dateOfBirth: Yup.date()
        .required("La fecha de nacimiento es requerida")
        .label("Fecha de Nacimiento"),
    });
    const submit = async () => {
      if (!submitButtonRef.value) return;
      submitButtonRef.value.disabled = true;
      submitButtonRef.value.setAttribute("data-kt-indicator", "on");
      try {
        await UserService.create(user.value);
        handleSuccess("¡Usuario creado con éxito!", "/usuarios/ver");
      } catch (error) {
        handleError(error as string);
      } finally {
        submitButtonRef.value.disabled = false;
        submitButtonRef.value.removeAttribute("data-kt-indicator");
      }
    };
    return {
      user,
      validationSchema,
      submit,
      submitButtonRef,
    };
  },
});
</script>

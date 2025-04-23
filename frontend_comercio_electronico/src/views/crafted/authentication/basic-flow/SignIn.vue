<template>
  <div class="w-lg-500px p-10">
    <VForm
      class="form w-100"
      id="kt_login_signin_form"
      @submit="onSubmit"
      :validation-schema="login"
      :initial-values="{ email: 'yovan@admin.com', password: 'hola123' }"
    >
      <div class="text-center mb-10">
        <h1 class="text-gray-900 mb-3">Acceso a la plataforma</h1>
        <div class="text-gray-500 fw-semibold fs-4">
          Nuevo en la plataforma?
          <router-link to="/sign-up" class="link-primary fw-bold">
            Crear una cuenta
          </router-link>
        </div>
      </div>
      <div class="fv-row mb-10">
        <label class="form-label fs-6 fw-bold text-gray-900">Email</label>
        <Field
          v-model="email"
          tabindex="1"
          class="form-control form-control-lg form-control-solid"
          type="text"
          name="email"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="email" />
          </div>
        </div>
      </div>
      <div class="fv-row mb-10">
        <div class="d-flex flex-stack mb-2">
          <label class="form-label fw-bold text-gray-900 fs-6 mb-0"
            >Clave</label
          >
          <router-link to="/password-reset" class="link-primary fs-6 fw-bold">
            Olvidaste tu clave?
          </router-link>
        </div>
        <Field
          v-model="password"
          tabindex="2"
          class="form-control form-control-lg form-control-solid"
          type="password"
          name="password"
          autocomplete="off"
        />
        <div class="fv-plugins-message-container">
          <div class="fv-help-block">
            <ErrorMessage name="password" />
          </div>
        </div>
      </div>
      <div class="text-center">
        <button
          tabindex="3"
          type="submit"
          ref="submitButton"
          id="kt_sign_in_submit"
          class="btn btn-lg btn-primary w-100 mb-5"
        >
          <span class="indicator-label"> Acceder </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
    </VForm>
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form as VForm } from "vee-validate";
import { useRouter } from "vue-router";
import Swal from "sweetalert2/dist/sweetalert2.js";
import * as Yup from "yup";
import { useAuthStore } from "@/stores/auth";

export default defineComponent({
  name: "sign-in",
  components: {
    Field,
    VForm,
    ErrorMessage,
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const error = ref(false);

    const submitButton = ref<HTMLButtonElement | null>(null);

    const login = Yup.object().shape({
      email: Yup.string().email().required('Email requerido, formato email válido').label("Email"),
      password: Yup.string().min(4, 'Debe ser superior a 8 caracteres').required('Clave requerida').label("Clave"),
    });

    function onSubmit() {
      const authStore = useAuthStore();
      const router = useRouter();

      if (!email.value || !password.value) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Both email and password are required!",
        });
        return;
      }

      authStore
        .login(email.value, password.value)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "Acceso concedido",
            text: "Bienvenido a la aplicación",
            showConfirmButton: false,
            timer: 1500,
          });
        })
        .catch(() => {
          error.value = true;
          Swal.fire({
            icon: "error",
            title: "Falló el inicio de sesión",
            text: "Verifica tus credenciales e intenta de nuevo",
          });
        });
    }

    return {
      login,
      submitButton,
      getAssetPath,
      onSubmit,
      email,
      password,
    };
  },
});
</script>

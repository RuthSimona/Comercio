import Swal from "sweetalert2";
import { useRouter } from 'vue-router';

export const useAlerts = () => {
  const router = useRouter();

  const handleSuccess = (message: string, route?: string): void => {
    Swal.fire({
      text: message,
      icon: "success",
      buttonsStyling: false,
      confirmButtonText: "Ok, ¡entendido!",
      customClass: { confirmButton: "btn btn-primary" },
    }).then(() => {
      if (route) router.push(route);
    });
  };

  const handleError = (message: string): void => {
    Swal.fire({
      timer: 1500,
      timerProgressBar: true,
      showCancelButton: false,
      showConfirmButton: true,
      text: message,
      icon: "error",
      buttonsStyling: false,
      confirmButtonText: "Ok, ¡entendido!",
      customClass: { confirmButton: "btn btn-primary" },
    });
  };

  return { handleSuccess, handleError };
};
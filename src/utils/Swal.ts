import Swal from "sweetalert2";

const msgSwal = (title: string, html: string, icon: any, timer: number) => {
  Swal.fire({
    title: title,
    html: html,
    icon: icon,
    timer: timer,
    showConfirmButton: false,
  });
};

export default msgSwal;

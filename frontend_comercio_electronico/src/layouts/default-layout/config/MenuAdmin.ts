import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfigs: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "dashboard",
        route: "/inicio",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "maquetts",
        route: "/builder",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      },
    ],
  },
  {
    heading: "admin",
    route: "/productos",
    pages: [
      {
        sectionTitle: "products",
        route: "/productos",
        keenthemesIcon: "wanchain",
        bootstrapIcon: "bi-printer",
        sub: [
          {
            heading: "Listar",
            route: "/productos/ver",
          },
          {
            heading: "Crear",
            route: "/productos/crear",            
          },
        ],
      },
      {
        sectionTitle: "categories",
        route: "/categorias",
        keenthemesIcon: "data",
        bootstrapIcon: "bi-cart",
        sub: [
          {
            heading: "Listar",
            route: "/categorias/ver",
          },
          {
            heading: "Crear",
            route: "/categorias/crear",
          },         
        ],
      },   
      {
        sectionTitle: "users",
        route: "/usuarios",
        keenthemesIcon: "user",
        bootstrapIcon: "bi-cart",
        sub: [
          {
            heading: "Listar",
            route: "/usuarios/ver",
          },
          {
            heading: "Crear",
            route: "/usuarios/crear",
          },         
        ],
      },   
      {
        heading: "Ventas",
        route: "/ventas/ver",
        keenthemesIcon: "shop",
        bootstrapIcon: "bi-calendar3-event",
      },      
    ],
  },

  {
    heading: "Tienda",
    route: "/catalogos",
    pages: [
      {
        heading: "Catalogo",
        route: "/catalogos",
        keenthemesIcon: "shop",
        bootstrapIcon: "bi-calendar3-event",
      },       
    ],
  },
];

export default MainMenuConfigs;

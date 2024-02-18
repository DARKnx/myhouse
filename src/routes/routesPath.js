import { AiOutlineHome, AiOutlineShoppingCart, AiOutlineSolution, AiOutlineSetting } from "react-icons/ai";

const routesPath = [
      {
        name: "Visão Geral",
        icon: AiOutlineHome,
        route: "/dashboard"
      },
      {
        name: "Carrinho",
        icon: AiOutlineShoppingCart,
        route: "/dashboard/cart"
      },
      {
        name: "Sobre mim",
        icon: AiOutlineSolution,
        route: "/dashboard/profile"
      },
      {
        name: "Configurações",
        icon: AiOutlineSetting,
        route: "/dashboard/settings"
      }
  
  ];

  export default routesPath
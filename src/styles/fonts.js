import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";

export const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
export const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const fonts = {
  poppins: poppins.style.fontFamily,
  roboto: roboto.style.fontFamily,
  heading: poppins.style.fontFamily,
  body: roboto.style.fontFamily,
};

export default fonts;

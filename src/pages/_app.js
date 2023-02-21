import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <div className={montserrat.className}>
        <Component {...pageProps} />
      </div>
    </ChakraProvider>
  );
}
export default MyApp;

import "@/styles/globals.css";
import { GlobalContextProvider } from "@/context/store";

export default function App({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider>
  );
}

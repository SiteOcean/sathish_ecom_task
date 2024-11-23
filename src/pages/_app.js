import ContextComponent from "@/store/contextData";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <ContextComponent><Component {...pageProps} /></ContextComponent>;
}

import Layout from "@/components/Layout";
import { AuthContextProvider } from "@/context/AuthContext";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps, router }) {
  console.log(router.components);
  return (
    <AuthContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthContextProvider>
  );
}

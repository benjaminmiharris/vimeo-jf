import Layout from "@/components/Layout";
import { AuthContextProvider } from "@/context/AuthContext";
import { SearchContextProvider } from "@/context/SearchContext";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps, router }) {
  console.log(router.components);
  return (
    <AuthContextProvider>
      <SearchContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SearchContextProvider>
    </AuthContextProvider>
  );
}

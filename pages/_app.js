import { useRouter } from "next/router";
import Layout from "../components/common/Layout";
import styles from "../styles/Home.module.css";
import "../styles/globals.css";
import Login from "./login/components/login";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pathName = router.pathname;
  console.log("pathName", pathName);

  return (
    <>
      {pathName == "/" || pathName == "/signUp" ? (
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      ) : (
        <Layout>
          <main
            className={pathName == "/main" ? styles.main : `${styles.noneMain}`}
          >
            <Component {...pageProps} />
          </main>
        </Layout>
      )}
    </>
  );
}

export default MyApp;

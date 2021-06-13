import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Toast } from "src/components/Toast";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
        
      </Head>
      <Header/>
        <Main page="about"/>
      <Toast/>


      <Footer />
    </div>
  );
}

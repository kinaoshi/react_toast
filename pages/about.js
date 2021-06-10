import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Footer } from "../components/Footer";
import { Main } from "../components/Main";
import { Toast } from "../components/Toast";
import { Header } from "components/Header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>about page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
        <Main page="about"/>
      <Toast/>


      <Footer />
    </div>
  );
}

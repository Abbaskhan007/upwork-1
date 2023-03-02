import "@/styles/globals.css";
import { JssProvider, SheetsRegistry, createGenerateId } from "react-jss";

import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  const sheets = new SheetsRegistry();
  const generateId = createGenerateId();

  return (
    <JssProvider registry={sheets} generateId={generateId}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </JssProvider>
  );
}

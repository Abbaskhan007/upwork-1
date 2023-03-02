import Document, { Html, Head, Main, NextScript } from "next/document";

export default class CustomDocuments extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="description"
            content="Level up your career and secure your dream job with the industry-recognized certification information at your fingertips. This site has certifications for various levels of skills like beginner, intermediate and advanced and also for all the niches that you can think of starting from artificial intelligence to security to cloud."
          />
          <meta
            name="keywords"
            content="Certifications, Online certifications, Security Certifications, Cloud Certifications, Cloud Certified, Cloud Engineering Certifications, Security Professional Certifications"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&family=Raleway&family=Work+Sans:wght@300&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.cdnfonts.com/css/oceanwide"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

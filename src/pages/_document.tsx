import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Nabeel Rahman" />
        <meta
          name="description"
          content="Portfolio of Nabeel Rahman – Full Stack Developer specializing in modern web technologies like Next.js, React, and Node.js."
        />
        <meta
          name="keywords"
          content="Nabeel Rahman, portfolio, web developer, full stack, Next.js, React, JavaScript, MongoDB, SQL"
        />
        <link rel="icon" href="/myprofile.jpg" type="image/svg+xml" />

        {/* Open Graph (for social media sharing) */}
        <meta property="og:title" content="Nabeel Rahman | Full Stack Web Developer" />
        <meta
          property="og:description"
          content="Explore the portfolio of Nabeel Rahman, a full stack developer building modern and scalable web applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nabeel-rahman-portfolio.vercel.app/" />
        {/* <meta property="og:image" content="https://nabeel-rahman-portfolio.vercel.app/preview-image.jpg" /> */}

        {/* Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nabeel Rahman | Full Stack Web Developer" />
        <meta
          name="twitter:description"
          content="Check out the work of Nabeel Rahman, a full stack web developer with experience in React, Next.js, and backend development."
        />
        {/* <meta name="twitter:image" content="https://nabeel-rahman-portfolio.vercel.app/preview-image.jpg" /> */}

        <title>Nabeel Rahman | Web Developer Portfolio</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

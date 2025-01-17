import "styles/globals.css";

import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";

const inter = Quicksand({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

import Link from "next/link"
import Image from "next/image"
import Head from "next/head";
import Header from "../../components/Header"

export default function about() {
  return (
    <>
      <Head>
        <title>Wallstreet Don - About Us</title>
      </Head>

      <Header />
      <h1>About Post from about</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  )
}
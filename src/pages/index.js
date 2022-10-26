import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon Next</title>

        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-blue-300'>Hello next</h1>
    </div>
  );
}

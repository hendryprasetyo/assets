import { getSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Widget from "../components/Widget";

export default function Home({ session }) {
  return (
    <>
      <div className="h-screen bg-gray-100 overflow-hidden">
        <Head>
          <title>Facebook</title>
        </Head>
        {/* Header */}
        <Header />
        <main className="flex">
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <Feed />
          {/* widgets */}
          <Widget />
        </main>
      </div>
    </>
  );
}
export async function getServerSideProps(ctx) {
  //get the user
  const session = await getSession(ctx);
  return {
    props: {
      session,
    },
  };
}

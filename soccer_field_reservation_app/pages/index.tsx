import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Login from "../components/Login";
import UserDashboard from "../components/UserDashboard";
import { useAuth } from "../context/AuthContext";

const Home: NextPage = () => {
  const { currentUser } = useAuth();
  // console.log(currentUser);
  return (
    <>
      <Head>
        <title>System rezerwacji boisk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {!currentUser && <Login />}
      {currentUser && <UserDashboard />}
    </>
  );
};

export default Home;

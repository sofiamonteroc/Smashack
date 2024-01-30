import Layout from "../components/layout";
import Main from "../components/main";
import Video from "../components/video";

export default function Home() {
  return (
    <>
      <Layout title={""}>
        <Video />
        <Main />
      </Layout>
    </>
  );
}

import Layout from "../components/layout";

const About = () => {
  return (
    <>
      <Layout title={`About`} description="About Us - Smashack">
        <div className="bg-[url('/img/local.webp')] bg-cover bg-center  h-screen flex items-center justify-center">
          <div className="text-center text-secondary pt-52">
            <h1 className="md:text-3xl uppercase font-black tracking-wider">
              Our History
            </h1>
            <div className="container mx-auto pt-5">
              <p className="md:w-96 md:h-64 md:p-4 w-64 border-8 p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                ultricies elementum sem nec sagittis. Ut libero enim, faucibus
                sed suscipit nec, venenatis eu ipsum. Donec faucibus a erat et
                rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Sed ultricies elementum sem nec sagittis. Ut libero enim,
                faucibus sed suscipit nec, venenatis eu ipsum.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;

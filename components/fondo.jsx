import Image from "next/image";

const Fondo = () => {
  return (
    <div className="relative">
      <Image
        src="/img/burger.webp"
        alt="comida"
        className="bg-cover w-full h-fit"
        priority="property"
        width={500}
        height={300}
      />

      <div className="absolute inset-x-0 top-0">
        <h2 className="md:text-9xl text-2xl pl-12 font-black tracking-wider text-secondary">
          There is only
          <span className=" pl-4  uppercase">One</span>
        </h2>
        <h3 className="md:pr-44 absolute inset-y-0 right-0 w-16 md:text-9xl text-4xl font-black uppercase text-primary [writing-mode:vertical-lr] [text-orientation:upright]">
          Smash
        </h3>
      </div>
    </div>
  );
};

export default Fondo;

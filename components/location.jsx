import Image from "next/image";
import { AiOutlineEnvironment } from "react-icons/ai";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdPhone } from "react-icons/md";

const location = ({ restaurant }) => {
  const { title, image, address, schedules, phone } = restaurant;

  return (
    <div className="md:grid md:grid-cols-2 md:place-items-stretch pt-6 md:py-8">
      <div className="md:pl-28 px-4">
        <Image
          className="rounded-md md:w-auto md:h-96"
          src={image}
          priority="property"
          alt="Location"
          width={500}
          height={300}
        />
      </div>

      <div className="md:py-8 md:space-y-10 space-y-5 py-8">
        <p className="md:text-5xl text-primary font-black uppercase text-center md:text-left">
          {title}
        </p>

        <div className="flex md:items-center pl-4">
          <AiOutlineEnvironment className="w-6 h-6 mr-2" />
          <p className="md:text-xl flex items-center">{address}</p>
        </div>

        <div className="flex pl-4">
          <AiOutlineClockCircle className="w-6 h-6 mr-2" />
          <p className="md:text-xl flex items-center w-3/5">{schedules}</p>
        </div>

        <div className="flex md:items-center pl-4">
          <MdPhone className="w-6 h-6 mr-2" />
          <p className="md:text-xl flex items-center">{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default location;

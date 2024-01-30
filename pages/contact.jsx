import { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/layout";
import { AiOutlineCheckCircle } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState();

  const [isFormOk, setIsFormOk] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const sendEmail = (data) => {
    console.log(data);

    emailjs
      .sendForm(
        "service_sjjucvh",
        "template_ora8jit",
        document.querySelector("form"),
        "nhs7pWIqr5vaA_Ddz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
    setIsFormOk(true);
  };

  return (
    <>
      <Layout title={`Contact`} description="Contact Us - Smashack">
        {isFormOk ? (
          <div className="flex items-center justify-center h-96 ">
            <div className="border-double border-8 border-black p-10 text-center text-2xl font-bold  text-green-700 tracking-wide">
              <div className="flex items-center justify-center mb-4">
                <AiOutlineCheckCircle className="w-24 h-16" />
              </div>

              <p className=" ">Your message has been sent successfully.</p>

              <p className="pt-4">We will get back to you soon.</p>
            </div>
          </div>
        ) : (
          <div className="mx-auto max-w-2xl px-4 my-10">
            <h1 className="text-2xl font-bold tracking-wide uppercase">
              Contact Us:
            </h1>

            <form onSubmit={handleSubmit(sendEmail)}>
              <div className="w-full flex flex-col my-4">
                <label className="font-bold" htmlFor="firstName">
                  First Name
                </label>
                <input
                  type="text"
                  className="p-2 border"
                  {...register("firstName", {
                    required: true,
                    minLength: {
                      value: 2,
                    },
                  })}
                  onBlur={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                />

                {errors.firstName?.type === "required" && (
                  <p className="text-red-600"> The First Name is required</p>
                )}

                {errors.firstName?.type === "minLength" && (
                  <p className="text-red-600">
                    First Name must be more than 2 Letters
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col my-4">
                <label className="font-bold" htmlFor="lastName">
                  Last Name
                </label>
                <input
                  type="text"
                  className="p-2 border"
                  {...register("lastName", {
                    required: true,
                    minLength: {
                      value: 2,
                    },
                  })}
                  onBlur={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                />

                {errors.lastName?.type === "required" && (
                  <p className="text-red-600"> The Last Name is required</p>
                )}

                {errors.lastName?.type === "minLength" && (
                  <p className="text-red-600">
                    Last Name must be more than 2 Letters
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col my-4">
                <label className="font-bold" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  className="p-2 border"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                    },
                  })}
                  onBlur={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                {errors.email?.type === "required" && (
                  <p className="text-red-600"> The email is required</p>
                )}

                {errors.email?.type === "pattern" && (
                  <p className="text-red-600"> The email is incorrect</p>
                )}
              </div>

              <div className="w-full flex flex-col my-4">
                <label className="font-bold" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  className="p-2 border"
                  {...register("subject", {
                    required: true,
                    minLength: {
                      value: 4,
                    },
                  })}
                  onBlur={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />

                {errors.subject?.type === "required" && (
                  <p className="text-red-600"> The subject is required</p>
                )}

                {errors.subject?.type === "minLength" && (
                  <p className="text-red-600">
                    Subject must be more than 4 Letters
                  </p>
                )}
              </div>

              <div>
                <label className="font-bold" htmlFor="message">
                  Message
                </label>

                <textarea
                  rows="4"
                  className="w-full border"
                  {...register("message", {
                    required: true,
                    minLength: {
                      value: 15,
                    },
                  })}
                  onBlur={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>

                {errors.message?.type === "required" && (
                  <p className="text-red-600"> The message is required</p>
                )}

                {errors.message?.type === "minLength" && (
                  <p className="text-red-600">
                    Message must be more than 15 Letters
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="p-4 w-48 mt-6 bg-black text-secondary font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        )}
      </Layout>
    </>
  );
};

export default Contact;

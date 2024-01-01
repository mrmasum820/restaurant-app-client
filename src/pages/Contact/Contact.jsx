import { Helmet } from "react-helmet-async";
import { FaPhoneAlt } from "react-icons/fa";
// import emailjs from "emailjs-com";

import Cover from "../Shared/Cover/Cover";
import contactImg from "../../assets/contact/banner.jpg";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {
    //
  };

  return (
    <div>
      <Helmet>
        <title>Bistro | Contact Us</title>
      </Helmet>
      <Cover img={contactImg} title={"Contact Us"} />

      <SectionTitle heading={"Our Location"} subheading={"Visit Us"} />

      <div className="md:flex">
        <div className="card w-96 bg-base-100 shadow-xl m-5">
          <div className="card-header py-4 px-8 bg-[#D1A054] text-white">
            <FaPhoneAlt />
          </div>
          <div className="card-body">
            <h2 className="card-title">Phone</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl m-5">
          <div className="card-header py-4 px-8 bg-[#D1A054] text-white">
            <FaPhoneAlt />
          </div>
          <div className="card-body">
            <h2 className="card-title">Address</h2>
            <p>+38 (012) 34 56 789</p>
          </div>
        </div>

        <div className="card w-96 bg-base-100 shadow-xl m-5">
          <div className="card-header py-4 px-8 bg-[#D1A054] text-white">
            <FaPhoneAlt />
          </div>
          <div className="card-body">
            <h2 className="card-title">Working Hours</h2>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
      </div>

      {/* contact form */}
      <SectionTitle heading="Contact Form" subheading="Send Us a Message" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-[#F3F3F3] md:p-20 my-10 rounded-md p-4"
      >
        <div className="md:flex">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name*</span>
            </label>
            <input
              type="text"
              {...register("name", { required: true, maxLength: 100 })}
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control w-full md:ml-4">
            <label className="label">
              <span className="label-text">Email*</span>
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Phone*</span>
          </label>
          <input
            type="tel"
            {...register("phone", { required: true })}
            placeholder="Your Phone"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Message*</span>
          </label>
          <textarea
            {...register("message", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Write your message here"
          ></textarea>
        </div>

        <input className="btn btn-sm my-4" type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default Contact;

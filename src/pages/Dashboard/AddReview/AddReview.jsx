import { useForm } from "react-hook-form";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddReview() {
  const [rating, setRating] = useState(3);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { name, details } = data;
    const formData = {
      name,
      details,
      rating,
    };

    fetch("https://bistro-restaurant-server-gray.vercel.app/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          reset();
          Swal.fire("Review added successfully");
        }
      });
  };

  return (
    <div className="w-full">
      <SectionTitle heading="Give a Review" subheading="Sharing is caring" />

      <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F3F3F3] p-4">
        <Rating style={{ maxWidth: 180 }} value={rating} onChange={setRating} />

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Which Recipe you liked most?*</span>
          </label>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 100 })}
            placeholder="Recipe you liked most"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Do you have any suggestion for us?
            </span>
          </label>
          <input
            type="text"
            {...register("suggestions", { required: true, maxLength: 100 })}
            placeholder="Suggestion"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Kindly express your care in a short way*
            </span>
          </label>
          <textarea
            {...register("details", { required: true })}
            className="textarea textarea-bordered h-24"
            placeholder="Review in details"
          ></textarea>
        </div>

        <input className="btn btn-sm my-4" type="submit" value="Send Review" />
      </form>
    </div>
  );
}

import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div className="hero md:min-h-[600px] min-h-[400px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content w-4/5 bg-[#151515] bg-opacity-60 py-14">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
            <p className="mb-5">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

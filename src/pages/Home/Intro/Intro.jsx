const Intro = () => {
  return (
    <div
      className="hero min-h-[400px]"
      style={{
        backgroundImage: "url(https://i.ibb.co/hHL79xz/chef-service.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content w-4/5 bg-white py-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-semibold text-black">
            Bistro Boss
          </h1>
          <p className="mb-5 text-black">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;

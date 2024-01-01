import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div className="w-full ml-10 my-10">
      <h3 className="text-3xl">Welcome back {user.displayName}</h3>
      {/* TODO:make the stats according to server */}
      <div className="stats shadow my-8 w-full">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Menu</div>
          <div className="stat-value text-primary">$205</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Shop</div>
          <div className="stat-value text-secondary">103</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Contact</div>
          <div className="stat-value text-primary">03</div>
        </div>
      </div>

      <div className="hero min-h-[400px] bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="md:w-1/2">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm shadow-2xl rounded-full"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-5xl font-bold">Your Activities</h1>
            <p className="pt-6">Orders: 6</p>
            <p>Reviews: 2</p>
            <p>Bookings: 1</p>
            <p>Payment: 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;

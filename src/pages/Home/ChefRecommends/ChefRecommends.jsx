import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";


const ChefRecommends = () => {
    const [menu] = useMenu();
    // console.log(menu.slice(0, 3));
    const recommends = menu.slice(0, 3);

    return (
        <div>
            <SectionTitle heading="Chef Recommends" subheading="Donot miss"></SectionTitle>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    recommends.map(item => <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={item.image} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.recipe}</p>
                            <div className="card-actions">
                                <Link to={`/order/salad`}>
                                    <button className="btn btn-outline w-40 mx-auto block border-0 border-b-4 mt-4">Add to cart</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;
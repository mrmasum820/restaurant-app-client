import FoodCard from "../../Shared/FoodCard/FoodCard";


const OrderPanel = ({ items }) => {
    return (
        <div className="grid md:grid-cols-3 gap-4 mb-5">
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default OrderPanel;
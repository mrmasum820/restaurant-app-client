import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle subheading={'check it out'} heading={'Featured Item'}></SectionTitle>
            <div className="md:flex justify-center items-center bg-black bg-opacity-30 pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi asperiores, officia atque earum soluta sed fuga accusamus nihil at dolorem possimus voluptate quas vitae hic quam incidunt obcaecati iusto expedita voluptates. Eum nemo non perspiciatis? Iste quidem placeat est recusandae? </p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
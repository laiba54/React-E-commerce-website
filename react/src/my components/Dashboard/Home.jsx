import WomenCollection from '../../assets/winter-collection.webp';
import {Link} from 'react-router-dom'
import CatagorySection from './CatagorySection'
import './Home.css'
import ProductsLists from './ProductsLists';


const Home = ({setCount}) => {
    return (
        <section>
            <main>
            <div className="hero-section">
            <div className="row">
            <div className="col-md-6 d-flex align-items-center" style={{ paddingLeft: '20px' }}>
                <img src={WomenCollection} className='hero-img' alt="img" height={600} />
            </div>
                <div className="col-md-6">
                    <p className='hero-subtext text-primary'>20% Discount</p>
                    <h1 className='hero-title'>Winter Collection</h1>
                    <p className="hero-text">Best Cloth Collection By 2024!</p>
                    <Link to="/" className="animated-button1"><span></span><span></span><span></span><span></span>Explore Now</Link>
                </div>
            </div>
        </div>
            </main>
        <div className="add-section">
            <CatagorySection />
            <ProductsLists setCount={setCount} pageSize={8}/>
        </div>
        </section>
    );
}

export default Home;

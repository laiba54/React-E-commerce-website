import catagory1 from '../../assets/catagory1.webp';
import catagory2 from '../../assets/catagory3.webp';
import catagory3 from '../../assets/catagory2.webp';

const CatagorySection = () => {
  return (
    <section style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="catagories-section">
        <h3 className="text-center mt-5 py-2">Shop By Categories</h3>
        <div className="d-flex justify-content-center my-3">
          <div className="row">
            <div className="col-md-6 col-12 col-lg-4">
              <div className="cards shadow-md border-0">
                <div className="image-container">
                  <img src={catagory1} className="card-img-top img-fluid" alt="img" />
                  <div className="overlay">
                    <h3>Women's</h3>
                    <button>Best New Deals</button>
                    <p className="text-primary">New Collection</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div className="cards shadow-md border-0">
                <div className="image-container">
                  <img src={catagory3} className="card-img-top img-fluid" alt="img" />
                  <div className="overlay-2">
                    <p className="text-primary">Discount!</p>
                    <h2>Jewellery</h2>
                    <h3>New Collection</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 col-lg-4">
              <div className="cards shadow-md border-0">
                <div className="image-container">
                  <img src={catagory2} className="card-img-top img-fluid" alt="img" />
                  <div className="overlay">
                    <h3>Men's Cloth</h3>
                    <button>Best New Deals</button>
                    <p className="text-primary">New Collection</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatagorySection;

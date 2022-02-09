import "./product-marquee.scss";

const ProductMarquee = () => {
  return (
    // <!-- product-marquee -->
    <section className='product-marquee'>
      <div className='primary-card'>
        <div>
          <h1 className='title'>Web Hosting</h1>
          <h2 className='heading'>
            Trust your site to the world’s #1 web host.
          </h2>
          <div className='bottom'>
            <button className='btn btn-dark'>See Plans and Pricing</button>
          </div>
        </div>
      </div>
      <div className='secondary-card'>
        <p>
          <strong>Trust Web Hosting, here's why:</strong>
        </p>
        <ul>
          <li>Expert hosting support available 24/7/365.</li>
          <li>Superior performance and load times.</li>
          <li>Reliable web hosting with 99.9% uptime guaranteed.</li>
        </ul>
      </div>
    </section>
  );
};

export default ProductMarquee;

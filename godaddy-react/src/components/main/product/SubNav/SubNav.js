import "./sub-nav.scss";

const SubNav = () => {
  return (
    // <!-- sub-nav -->
    <section className='sub-nav'>
      <div className='sub-nav-title'>
        <span>Hosting / Website Hosting</span>
      </div>
      <ul className='sub-nav-menu'>
        <li className='sub-nav-item active'>
          <a href='#'>Web Hosting</a>
        </li>
        <li className='sub-nav-item'>
          <a href='#'>Windows Hosting</a>
        </li>
        <li className='sub-nav-item'>
          <a href='#'>Business Hosting</a>
        </li>
        <li className='sub-nav-item'>
          <a href='#'>Dedicated Server</a>
        </li>
        <li className='sub-nav-item'>
          <a href='#'>VPS Hosting</a>
        </li>
        <li className='sub-nav-item'>
          <a href='#'>Reseller Hosting</a>
        </li>
      </ul>
    </section>
  );
};

export default SubNav;

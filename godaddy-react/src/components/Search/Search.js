import "./search.scss";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    //   <!-- search -->
    <div className='row search mt-3 ms-1 mt-lg-4'>
      <div className='col-12 col-lg-7 col-xl-6 col-xxl-7 p-0'>
        <div className='input-group'>
          <input
            type='text'
            className='form-control'
            placeholder='Find your perfect domain'
          />
          <span className='input-group-text search-icon px-md-5'>
            {/* <i className='d-lg-none fas fa-search'></i> */}
            <FaSearch className='d-lg-none'></FaSearch>
            <span className='d-none d-lg-flex fw-bold'>Search Domain</span>
          </span>
        </div>
      </div>
      <div
        className='
          prices
          col-12 col-lg-5 col-xl-6 col-xxl-5
          p-0
          d-none d-lg-flex
        '
      >
        <div className='com'>
          <img
            src='https://drive.google.com/uc?export=view&id=1Cnna6eFSwi1J4WJn5Ukbk7SfiLDNMPfA'
            alt='.com'
          />
          <span>&#x20B9; 199.00*</span>
        </div>
        <div className='in'>
          <img
            src='https://drive.google.com/uc?export=view&id=1cQG0UK28_xesR4dqUUmaMldrZlEMh6pr'
            alt='.in'
          />
          <span>&#x20B9; 149.00*</span>
        </div>
        <div className='global'>
          <img
            src='https://drive.google.com/uc?export=view&id=1T0Zsjm442lJELG8wspplnYZG2r9lr6q4'
            alt='.global'
          />
          <span>&#x20B9; 1,503.01*</span>
        </div>
        <div className='org d-lg-none d-xl-flex'>
          <img
            src='https://drive.google.com/uc?export=view&id=1HFVrDh5zg1vcjK9MURS470Hm3z53fPXH'
            alt='.org'
          />
          <span>&#x20B9; 99.00*</span>
        </div>
        <div className='co-in d-lg-none d-xxl-flex'>
          <img
            src='https://drive.google.com/uc?export=view&id=1dOa1x7J7hq8iiq-Y8gGkMP0oruJ6RXTp'
            alt='.co-in'
          />
          <span className='ps-2'>&#x20B9; 99.00*</span>
        </div>
      </div>
    </div>
  );
};

export default Search;

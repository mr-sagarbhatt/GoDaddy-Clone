const ErrorAlert = ({ error }) => {
  return (
    <>
      <div
        className='alert alert-danger d-flex align-items-center position-relative'
        role='alert'
      >
        <svg
          className='bi flex-shrink-0 me-2'
          width='24'
          height='24'
          role='img'
          aria-label='Danger:'
        >
          <use xlinkHref='#exclamation-triangle-fill' />
        </svg>
        <div>{error}</div>
        <button
          type='button'
          class='btn-close position-absolute end-0 me-4'
          data-bs-dismiss='alert'
          aria-label='Close'
        ></button>
      </div>
    </>
  );
};

export default ErrorAlert;

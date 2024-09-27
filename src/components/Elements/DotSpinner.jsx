// import '../css/ComponentesAdicionales/Spinner.css';

const DotSpinner = () => {
  return (
    <div className="dot-spinner">
      <div className="lds-spinner">
        <div></div><div></div><div></div><div></div><div></div><div></div>
        <div></div><div></div><div></div><div></div><div></div><div></div>
      </div>
      <div className="dot-spinner-message">
        ¡Espéranos! Estamos obteniendo tu información...
      </div>
    </div>
  );
};

export default DotSpinner;

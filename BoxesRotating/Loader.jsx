import "./Loader.css";

function Loader() {
  return (
    <div className="loader__container">
      <div className="boxes">
        {[...Array(4)].map((i) => (
          <div className="box" key={i}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Loader;
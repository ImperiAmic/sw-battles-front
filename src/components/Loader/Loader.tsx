import "./Loader.css";

const Loader: React.FC = () => {
  return (
    <div className="loader">
      <span className="loader__main-text">LOADING...</span>
      <span className="loader__secundary-text">
        (or as Chebwacca would say: RRRRRRWWWWWGGHHHHH!)
      </span>
      <img
        className="loader__image"
        src="/images/chewbacca.svg"
        alt="Bust of Chewbacca"
        height={240}
        width={240}
      />
    </div>
  );
};

export default Loader;

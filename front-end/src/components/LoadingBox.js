import Spinner from "react-bootstrap/Spinner";

function LoadingBox() {
  return (
    <div className="w-100 text-center">
      <Spinner animation="grow" />
    </div>
  );
}

export default LoadingBox;

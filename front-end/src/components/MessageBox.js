import Alert from "react-bootstrap/Alert";

function MessageBox({ variant, text }) {
  return <Alert variant={variant || "info"}><strong>{text}</strong></Alert>;
}

export default MessageBox;

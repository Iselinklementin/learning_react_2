import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

export default function AlertBox(props) {
  const { content, type } = props;
  return (
    <Alert variant={type} className={props.className}>
      {content}
    </Alert>
  );
}

AlertBox.proptTypes = {
  content: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
};

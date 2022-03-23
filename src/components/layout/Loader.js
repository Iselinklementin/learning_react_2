import { Spinner } from "react-bootstrap";
import styled from "styled-components";

const StyledLoader = styled(Spinner)`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 40%;
`;

function Loader() {
  return <StyledLoader animation="grow" variant="info" />;
}

export default Loader;

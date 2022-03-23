import PropTypes from "prop-types";
import styled from "styled-components";

const StyledHeading = styled.h1`
  margin-bottom: 0.5rem;
`;

export default function Heading(props) {
  const { className, content } = props;
  return <StyledHeading className={className}>{content}</StyledHeading>;
}

Heading.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
};

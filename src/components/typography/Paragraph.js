import PropTypes from "prop-types";
import styled from "styled-components";

const StyledSpan = styled.span`
  font-weight: bold;
`;

export default function Paragraph(props) {
  const { content, span, className } = props;
  return (
    <p className={className}>
      <StyledSpan>{span} </StyledSpan>
      {content}
    </p>
  );
}

Paragraph.propTypes = {
  content: PropTypes.string.isRequired,
  span: PropTypes.string,
  className: PropTypes.string,
};

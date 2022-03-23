import PropTypes from "prop-types";
import { Col, Card } from "react-bootstrap";
import styled from "styled-components";
import Paragraph from "../typography/Paragraph";

const StyledCard = styled(Card)`
  height: 100%;
  padding: 1rem;
`;

const StyledBody = styled(Card.Body)`
  padding: 1rem;
  text-align: center;
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const StyledImage = styled(Card.Img)`
  height: 230px;
  width: 100%;
  object-fit: contain;
`;

const StyledDiv = styled.div`
  > p {
    margin: 0.3rem;
  }
`;

export default function AmiiboChar({ type, gameSeries, image, name }) {
  return (
    <Col sm={6} lg={3}>
      <StyledCard>
        <StyledImage variant="top" src={image} />
        <StyledBody>
          <Card.Title>{name}</Card.Title>
          <StyledDiv>
            <Paragraph span="Type:" content={type} />
            <Paragraph span="GameSeries:" content={gameSeries} />
          </StyledDiv>
        </StyledBody>
      </StyledCard>
    </Col>
  );
}

AmiiboChar.propTypes = {
  type: PropTypes.string.isRequired,
  gameSeries: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

import PropTypes from "prop-types";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Paragraph from "../typography/Paragraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

const StyledCard = styled(Card)`
  border: none;
  background-color: #efeff0;
  height: 100%;
  padding: 1rem;

  &:hover {
    transform: scale(1.02);
  }
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledDiv = styled.div`
  > p {
    margin: 0;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 10px;
`;

export default function Amiibo({ character, gameSeries, image }) {
  return (
    <Col sm={6} lg={3}>
      <StyledLink to={`amiibo/${character}`}>
        <StyledCard>
          <StyledImage variant="top" src={image} />
          <StyledBody>
            <Card.Title>{character}</Card.Title>
            <StyledDiv>
              <StyledIcon icon={faAnglesRight} />
              <Paragraph span="GameSeries:" content={gameSeries} />
            </StyledDiv>
          </StyledBody>
        </StyledCard>
      </StyledLink>
    </Col>
  );
}

Amiibo.propTypes = {
  character: PropTypes.string.isRequired,
  gameSeries: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

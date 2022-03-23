import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "../constant/api";
import Heading from "../typography/Heading";
import { Container, Row } from "react-bootstrap";
import AmiiboChar from "./AmiiboChar";
import Paragraph from "../typography/Paragraph";
import Loader from "../layout/Loader";
import AlertBox from "../layout/AlertBox";

export default function AmiiboDetail() {
  const [amiibo, setAmiibo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { character } = useParams();
  let navigate = useNavigate();

  if (!character) {
    navigate("/");
  }

  const url = API + "/?character=" + character;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const json = await response.json();
          setAmiibo(json.amiibo);
        } else {
          setError("Error occured");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <AlertBox type="danger" content={error} />;
  }

  let count = 0;
  let char = amiibo[0].character;

  return (
    <Container className="mt-5 text-center">
      <Heading content={char} />
      <Paragraph content="Existing Amiibos:" />
      <Row className="g-5 gy-5 mt-4">
        {amiibo.map((amiibo) => {
          count++;
          const { character, gameSeries, image, name, type } = amiibo;
          return (
            <AmiiboChar
              key={count}
              name={name}
              image={image}
              gameSeries={gameSeries}
              character={character}
              type={type}
            />
          );
        })}
      </Row>
    </Container>
  );
}

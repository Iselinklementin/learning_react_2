import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { API } from "../constant/api";
import AlertBox from "../layout/AlertBox";
import Loader from "../layout/Loader";
import Heading from "../typography/Heading";
import Paragraph from "../typography/Paragraph";
import Amiibo from "./Amiibo";

function AmiiboSeries() {
  const [amiibos, setAmiibos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(API);

        if (response.ok) {
          const json = await response.json();

          // Return Amiibo figures, not cards
          const figures = json.amiibo.filter((amiibo) => {
            if (amiibo.type.includes("Figure")) return amiibo;
          });

          // Return only one of each character
          const filteredAmiibos = [...figures.reduce((map, obj) => map.set(obj.character, obj), new Map()).values()];
          setAmiibos(filteredAmiibos);
        } else {
          setError("A server error occured.");
        }
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <AlertBox type="danger" content={error} />;
  }

  let count = 0;

  return (
    <Container className="mt-5 text-center">
      <Heading content="Amiibo Characters" />
      <Paragraph content="Choose character:" />
      <Row className="g-5 gy-5 mt-5">
        {amiibos.map((amiibo) => {
          count++;
          const { character, gameSeries, image, name } = amiibo;
          return <Amiibo key={count} name={name} image={image} gameSeries={gameSeries} character={character} />;
        })}
      </Row>
    </Container>
  );
}

export default AmiiboSeries;

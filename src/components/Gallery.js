import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardRM from "./CardRM";
import "./gallery.css";

export default function Gallery() {
  const URL = "https://rickandmortyapi.com/api/character";
  let [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async (query = "") => {
    const response = await fetch(URL + query);
    const dataCharacters = await response.json();
    const characters = dataCharacters?.results?.map((character) => {
      return {
        id: character.id,
        img: character.image,
        url: character.url,
        name: character.name,
        gender: character.gender,
        status: character.status,
      };
    });
    setCharacters(characters);
  };

  return (
      <Container fluid>
        <Row>
          {characters?.map((ch) => {
            return (
              <Col key={ch.id}>
                <CardRM
                  key={ch.id}
                  name={ch.name}
                  img={ch.img}
                  gender={ch.gender}
                  url={ch.url}
                  status={ch.status}
                ></CardRM>
              </Col>
            );
          })}
        </Row>
        <Button className="btn-pag" variant="primary" size="lg">
          Prev
        </Button>
        <Button className="btn-pag" variant="primary" size="lg">
          Next
        </Button>
      </Container>
  );
}

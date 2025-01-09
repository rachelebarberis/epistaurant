// creeremo ora un componente per prenotare un tavolo al ristorante
// questo componente sarà dotato di un form nel quale l'utente compilerà
// le informazioni richieste
// una volta completo, il form verrà inviato ad una API tramite chiamata POST

import { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

// I form in React sono SEMPRE C O N T R O L L A T I
// controllato -> i valori dei singoli input field sono SEMPRE salvati in ogni momento nello STATO del componente

// creazione del form:

// name -> string
// phone -> string/number
// numberOfPeople -> string/number
// dateTime -> string
// smoking -> boolean
// specialRequests -> string

class ReservationForm extends Component {
  state = {
    reservation: {
      name: "",
      phone: "",
      numberOfPeople: "1",
      dateTime: "",
      smoking: false,
      specialRequest: "",
    },
  };
  render() {
    return (
      <Container>
        <Row className="justify-content-center my-3">
          <Col xs={12} md={6}>
            <div>
              <h2 className="text-center">Prenota un tavolo ORA!</h2>
            </div>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Il tuo nome</Form.Label>
                <Form.Control
                  value={this.state.reservation.name}
                  onChange={(e) =>{
                    this.setState({
                        reservation: {
                            ...this.state.reservation,
                            name: e.target.value,
                        },
                    })
                  }}
                  type="text"
                  placeholder="Mario Rossi"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Numero di telefono</Form.Label>
                <Form.Control type="tel"
                value={this.state.reservation.phone}
                onChange={(e) =>{
                  this.setState({
                      reservation: {
                          ...this.state.reservation,
                          phone: e.target.value,
                      },
                  })
                }}
                 />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>In quanti siete?</Form.Label>
                <Form.Select aria-label="Table size" 
                value={this.state.reservation.numberOfPeople}
                  onChange={(e) =>{
                    this.setState({
                        reservation: {
                            ...this.state.reservation,
                            numberOfPeople: e.target.value,
                        },
                    })
                  }}>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                  <option>8</option>
                </Form.Select>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Per quando?</Form.Label>
                <Form.Control type="datetime-local"
                value={this.state.reservation.dateTime}
                onChange={(e) =>{
                  this.setState({
                      reservation: {
                          ...this.state.reservation,
                          dateTime: e.target.value,
                      },
                  })
                }} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Tavolo fumatori?"
                checked={this.state.reservation.smoking}
                onChange={(e) =>{
                  this.setState({
                      reservation: {
                          ...this.state.reservation,
                          smoking: e.target.checked,
                      },
                  })
                }} />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Allergie/Cani/Bambini?</Form.Label>
                <Form.Control as="textarea" rows={5} 
                value={this.state.reservation.specialRequest}
                onChange={(e) =>{
                  this.setState({
                      reservation: {
                          ...this.state.reservation,
                          specialRequest: e.target.value,
                      },
                  })
                }}/>
              </Form.Group>

              <Button variant="success" type="submit">
                Invia prenotazione
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ReservationForm;

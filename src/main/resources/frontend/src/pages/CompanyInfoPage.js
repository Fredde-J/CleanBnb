import React from "react";
import {
  Card,
  Container,
  CardTitle,
  CardText,
  Row,
  Col,
  CardBody
} from "reactstrap";
import { cardStyle } from "../css/infoStyles";

const CompanyInfoPage = () => {
  return (
    <Row>
      <Col xs="12" md={{ size: 8, offset: 2 }}>
        <Card style={cardStyle} color="warning" className="my-3">
          <CardBody>
            <CardTitle id="Company-infopage-infoHeader">
              Företagsinformation
            </CardTitle>

            <CardTitle className="infopage-infoSemiHeader">
              Vår vision
            </CardTitle>

            <CardText className="infopage-infoText">
              <div>Var hemma vart du än befinner dig!</div>
              <br></br>
              <div>
                Vi på ClearBnB vill hjälpa till att skapa en värld där alla hör
                hemma överallt. Istället för att bara resa/besöka en destination
                så vill vi skapa en plats där människor bor tillsammans och
                tillhör.
              </div>
            </CardText>

            <CardTitle className="infopage-infoSemiHeader ">
              Kontakta oss
            </CardTitle>

            <CardText className="infopage-infoText infopage-infoTextBottom">
              <div>Telefon: 0763-124532</div>
              <div>E-mail: info@ClearBnB.com</div>
              <div>Address: Storgatan 69, Lund, Sverige</div>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default CompanyInfoPage;

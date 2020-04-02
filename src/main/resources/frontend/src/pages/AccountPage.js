import React,{ useContext } from "react";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { accountCard } from "../css/accountPageStyle";
import { UserContext } from "../contexts/UserContextProvider";

const AccountPage = (props) => {


  const { user } = useContext(UserContext);

  const goToSearch=()=>{
    props.history.push("/search");
  }

  const goToBookings = () => {
    props.history.push("/account/bookings")
  };

  return (
    <Row>
      <Col>
        <Card className="my-3 mt-5" >
          <CardBody>
            <CardTitle>
              {!user ? (
                <h3></h3>
              ) : (
                <h3>
                  Välkommen! <br></br> {user.firstName} {user.lastName}
                </h3>
              )}
            </CardTitle>

            <Button className="col 12 mt-3 " color="warning" size="lg">
              Hyr ut bostad
            </Button>

            <Button onClick={goToBookings} className="col 12 mt-3" color="warning" size="lg">
              Bokningar
            </Button>

            <Button onClick={goToSearch} className="col 12 mt-3" color="warning" size="lg">
              Börja leta!
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default AccountPage;

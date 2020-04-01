import React,{ useContext } from "react";
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";
import { accountCard } from "../css/accountPageStyle";
import { UserContext } from "../contexts/UserContextProvider";

const AccountPage = () => {


  const { user, setUser } = useContext(UserContext);

 try{
     console.log(user.firstName)
 }catch{
     console.log("error!!!!");
     
 }

  
  
  

  return (
    <Row>
      <Col>
        <Card className="my-3 mt-5" style={accountCard}>
          <CardBody>
            <CardTitle>
              {!user ? (
                <h3></h3>
              ) : (
                <h3>
                  Välkommen! {user.firstName} {user.lastName}
                </h3>
              )}
            </CardTitle>

            <Button className="col 12 mt-3 " color="warning" size="lg">
              Hyr ut bostad
            </Button>

            <Button className="col 12 mt-3" color="warning" size="lg">
              Bokningar
            </Button>

            <Button className="col 12 mt-3" color="warning" size="lg">
              Börja leta!
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default AccountPage;

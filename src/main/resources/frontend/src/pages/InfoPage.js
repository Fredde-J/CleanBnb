import React from "react";
import {
  Card,
  CardBody,
  Container,
  CardTitle,
  CardText,
  CardSubtitle,
  CardHeader
} from "reactstrap";

const InfoPage = () => {
  return (
    <Container>
      <Card className="m-4">
        <Container>
          <CardTitle id="infopage-infoHeader">Våra avtal</CardTitle>

          <CardTitle className="infopage-infoSemiHeader">
            Vi finns där för dig med vår Värdgaranti
          </CardTitle>

          <CardText className="infopage-infoText">
            Vi är engagerade för att skapa en trygg och betrodd community över
            hela världen. Vi tillhandahåller en plattform för meddelanden och
            ett virtuellt lösningsverktyg som gör det möjligt för dig att
            kommunicera eventuella skadeförfrågningar till gäster, och för
            gäster att svara dig. Om en gäst inte kan eller vill betala är vår
            värdgaranti avsedd att hjälpa till.
          </CardText>

          <CardTitle className="infopage-infoSemiHeader">
            Vad skyddas?
          </CardTitle>

          <CardText className="infopage-infoText">
            Skador på en värds egendom (boende, enhet, rum, ägodelar) Varje
            Airbnb-boende i alla länder Betalningar som görs genom vår
            värdgaranti lyder under våra villkor för värdgarantin. Om skador
            uppstår måste dokumentation (foton, kvitton, osv.) tillhandahållas
            som en del av lösningsprocessen. Vänligen läs villkoren för
            värdgarantin för gällande villkor, begränsningar och undantag.
          </CardText>

          <CardTitle className="infopage-infoSemiHeader">
            Vad skyddas inte?
          </CardTitle>

          <CardText className="infopage-infoText">
            Fordringar gällande personskador och skador på egendom från tredje
            part (de skyddas av vår värdförsäkring) Skada i delade eller
            gemensamma utrymmen i byggnaden, som inte ingår i själva boendet
            Kontanter och värdepapper Skada orsakad av ett husdjur Skador på
            grund av vanligt slitage Vissa föremål, inklusive men inte begränsat
            till: konstverk; antikviteter, inklusive möbler och smycken;
            värdefulla mattor, samlarföremål; och andra föremål kan ha mer
            begränsat skydd under värdgarantin.
          </CardText>

          <CardTitle className="infopage-infoSemiHeader">
            Behöver du rapportera egendomsskada?
          </CardTitle>

          <CardText className="infopage-infoText infopage-infoTextBottom">
            Vänligen kontakta oss för att rapportera egendomsskada. Värdgarantin
            är inte en försäkringspolicy. I den mån du vill ha skydd utöver
            värdgarantin uppmuntrar Airbnb dig starkt att köpa försäkringar som
            täcker dig och din egendom gällande förluster orsakade av gäster, om
            din förlust inte ligger inom villkoren för värdgarantin.
          </CardText>
        </Container>
      </Card>
    </Container>
  );
};

export default InfoPage;

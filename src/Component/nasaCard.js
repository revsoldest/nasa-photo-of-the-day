import React from "react";

import {
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Badge
} from "reactstrap";


const NasaCard = props => {
    return (
        // Col will put it in a column if I had more 
        // <Col xs="6" sm="4" key={props.id}>
            <Card outline color="warning">
                <CardImg
                    top
                    width="100%"
                    src={props.url}
                    alt="image from nasa of the stars"
                />
                <CardBody>
                    <h1> <CardTitle>Nasa: {props.title}</CardTitle></h1>
                    <CardSubtitle>{props.explanation}</CardSubtitle>
                    <CardText>{props.copyright}</CardText>
                    <CardText>
                        <Badge color="info">
                            Nasa Date:{" "}
                            <small className="text-warning">{props.date}</small>
                        </Badge>
                    </CardText>
                </CardBody>

            </Card>
        // </Col>

    )
};

export default NasaCard;
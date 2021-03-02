import React from "react";
import "../src/Fitness.css";
import { Grid, Card, Button, Avatar } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faRunning } from "@fortawesome/free-solid-svg-icons";
class FitnessCard extends React.Component {
  render() {
    return (
      <Grid item xs={12} sm={6} md={3}>
        <Card className="card ">
          <img alt="..." className="card-img-top" src={this.props.card.img} />
          <div className="card-body">
            <div className="avatar">
              {" "}
              <Avatar
                className="avatar"
                alt="..."
                src={this.props.card.avatar}
              />
            </div>
            <h2 className=" card-title font-weight-bold">
              {this.props.card.title}{" "}
            </h2>{" "}
            <h5 className="subtitle">
              {" "}
              <FontAwesomeIcon icon={faClock} />
              {`${this.props.card.time && this.props.card.time}  `}{" "}
              <FontAwesomeIcon icon={faRunning} />
              {`${this.props.card.distance && this.props.card.distance}`}
            </h5>
          </div>

          <Button style={{ margin: "15px" }} color="primary" variant="outlined">
            View Details
          </Button>
        </Card>
      </Grid>
    );
  }
}
export default FitnessCard;

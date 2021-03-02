import React, { Fragment } from "react";
import FitnessCard from "./FitnessCard";
import { Grid, Button } from "@material-ui/core";

import avatar5 from "../src/images/avatar5.jpg";
import avatar4 from "../src/images/avatar4.jpg";
import avatar3 from "../src/images/avatar3.jpg";
import avatar2 from "../src/images/avatar2.jpg";
import avatar1 from "../src/images/avatar1.jpg";
import avatar from "../src/images/avatar.jpg";

import stock5 from "../src/images/stock5.jpg";
import stock4 from "../src/images/stock4.jpg";
import stock3 from "../src/images/stock3.jpg";
import stock2 from "../src/images/stock2.jpg";
import stock1 from "../src/images/stock1.jpg";
import stock from "../src/images/stock.jpg";

class FitnessProgram extends React.Component {
  state = {
    cards: [
      {
        id: 0,
        img: stock,
        avatar: avatar,
        title: "Lake Inniscarra, Ireland-Pyramid",
        time: "30:30",
        distance: "553",
      },
      {
        id: 1,
        img: stock1,
        avatar: avatar4,
        title: "Performance Series",
        time: "30:30",
        distance: "231",
      },
      {
        id: 3,
        img: stock2,
        avatar: avatar2,
        title: "Kafue River",
        time: "44:30",
        distance: "231",
      },
      {
        id: 4,
        img: stock3,
        avatar: avatar3,
        title: "Slow Pulls and Fast Intervals",
        time: "44:30",
        distance: "231",
      },
      {
        id: 5,
        img: stock4,
        avatar: avatar1,
        title: "Shred & Burn Series",
        time: "44:30",
        distance: "231",
      },
      {
        id: 6,
        img: stock5,
        avatar: avatar5,
        title: "20 Minutes to Toned",
        time: "44:30",
        distance: "231",
      },
    ],
  };

  mapCard = () => {
    const mappedCards = this.state.cards.map(this.mapThis);
    this.setState((prevState) => {
      return { ...prevState, mappedCards };
    });
  };

  mapThis = (card) => {
    return <FitnessCard key={card.id} card={card} />;
  };

  render() {
    return (
      <Fragment>
        <Button onClick={this.mapCard}>Show Cards</Button>
        <Grid container spacing={1}>
          {this.state.mappedCards && this.state.mappedCards}
        </Grid>
      </Fragment>
    );
  }
}
export default FitnessProgram;

import React from "react";
import { Grid, Button } from "@material-ui/core";
class FitnessForm extends React.Component {
  state = {
    title: "",
    time: "",
    distance: "",
    imgUrl: "",
  };

  handleChange = (e) => {
    let target = e.target;
    let { id, value } = target;

    this.setState((prevState) => {
      return { ...prevState, [id]: value };
    });
  };

  handleSubmit = () => {
    let input = this.state;
    input.id = `${input.time} ${input.title}`;
    this.props.submit(input);
  };

  render() {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <form>
          <input
            id="title"
            type="text"
            placeholder="Title"
            onChange={this.handleChange}
            value={this.state.title}
          ></input>
          <input
            id="time"
            type="text"
            placeholder="Time"
            onChange={this.handleChange}
            value={this.state.time}
          ></input>
          <input
            id="distance"
            type="text"
            placeholder="Distance"
            onChange={this.handleChange}
            value={this.state.distance}
          ></input>
          <input
            id="imgUrl"
            type="text"
            placeholder="URL"
            onChange={this.handleChange}
            value={this.state.imgUrl}
          ></input>
        </form>
        <Button color="primary" variant="outlined" onClick={this.handleSubmit}>
          Submit
        </Button>
      </Grid>
    );
  }
}
export default FitnessForm;

import React, { Component } from 'react';
import Llamas from './llamas.json';

class Llama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLlama: false
    };
  }
  preloadLlamas() {
    Llamas['children'].forEach(function(llama) {
      var llamaImg = new Image();
      llamaImg.src = "/static/llamas/" + llama.name;
    });
  }
  getLlama() {
    var randomLlama = Llamas['children'][Math.floor(Math.random()*Llamas['children'].length)];
    return randomLlama.name;
  }
  changeLlama() {
      this.setState({
          currentLlama: this.getLlama()
      });
  }
  componentWillMount() {
     this.preloadLlamas();
     this.changeLlama();
  }
  render() {
      return (
        <div className="Llama">
            <img src={"/static/llamas/" + this.state.currentLlama}  onClick={this.changeLlama.bind(this)} />
        </div>
      );
  }
}

export default Llama;

import React, { Component } from 'react';
import './App.css';


const Card = ({ index, color }) =>
  <div className="card" id={ index } style={{ backgroundColor: color }}>{ index }</div>


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      colors: ['antiquewhite', 'azure', 'beige', 'cornsilk', 'lavender', 'lightgoldenrodyellow'],
      offset: 0,
    };
    this.state.cards = [this.state.colors.length - 1, 0, 1];
    this.handleMouseDown = (event) => {
      const target = event.target.id === 'slider'
        ? event.target
        : event.target.parentElement.id === 'slider' && event.target.parentElement;
    
      if (!target) { return }
      const startX = event.clientX;
      let modified = false;
      let shift = 0;
      const move = (event) => {
        const translate = event.clientX - startX + shift;
        if (Math.abs(translate) < 180) {
          this.setState({ offset: translate });
          return;
        }
        if (!modified) {
          modified = true;
          if (translate < 0) {
            shift = 360;
            this.setState(state => {
              state.cards.shift();
              state.cards.push(state.cards[1] + 1 < state.colors.length ? state.cards[1] + 1 : 0);
              state.offset = translate;
              return state;
            });
          } else {
            shift = -360;
            this.setState(state => {
              state.cards.pop();
              state.cards.unshift(state.cards[0] - 1 >= 0 ? state.cards[0] - 1 : state.colors.length - 1);
              state.offset = translate;
              return state;
            });
          }
        }
      }
    
      document.addEventListener('mousemove', move);
      document.addEventListener('mouseup', () => {
        document.removeEventListener('mousemove', move);
        target.style.transform = '';
      }, { once: true });
    }
  }

  render() {
    return (
      <div className="App">
        <div id="slider-wrapper">
          <div id="slider" onMouseDown={ this.handleMouseDown } style={{transform: `translateX(${ this.state.offset }px)`}}>
            {
              this.state.cards.map((item) =>
                <Card index={ item } color={this.state.colors[item]} key={this.state.colors[item]} />
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

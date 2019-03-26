import React, { Component } from 'react';
import queryString from 'query-string';
class Home extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
      a: Math.pow(12, 2),
      b: Math.pow(9, 2)
    }
  }

  pythagorean(sideA, sideB) {
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }

  componentWillMount() {
    let qSting = queryString.parse(this.props.location.search);
    let aVal = typeof qSting.a != 'undefined' ? qSting.a : 12;
    let bVal = typeof qSting.b != 'undefined' ? qSting.b : 9;
    let cVal = typeof qSting.c != 'undefined' ? qSting.c : 15;
    if (this.pythagorean(aVal, bVal) == cVal) {
      this.setState({ a: Math.pow(aVal, 2), b: Math.pow(bVal, 2) });
    } else {
      alert('Please review your values for a, b and c.');
      this.setState({ a: 12, b: 9 });
    }
  }

  componentDidMount() {
    this.draw();
  }

  draw() {
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');

    context.moveTo(this.state.a, this.state.a);
    context.lineTo(this.state.a, 0);
    context.lineTo(0, this.state.b);
    context.closePath();
    context.fillStyle = "#ffffff";
    context.fill();

    context.fillStyle = "red";
    context.font = '12px arial';
    context.fillText(this.state.a, this.state.a / 2, this.state.b - 5);
    context.fillText(this.state.b, this.state.a - 20, this.state.b / 2);
    context.fillText((this.state.b + this.state.a), 30, this.state.b / 2);
  }

  render() {
    return (
      <div>
        <div className="title">The Pythagorean Theorem</div>
        <p className="txt_home">One of the best known mathematical formulas is Pythagorean Theorem, which provides us with the relationship between the sides in a right triangle. A right triangle consists of two legs and a hypotenuse. The two legs meet at a 90° angle and the hypotenuse is the longest side of the right triangle and is the side opposite the right angle.</p>
        <canvas ref={this.canvasRef} width={this.state.a} height={this.state.b} />
        <p className="txt_home1">The Pythagorean Theorem tells us that the relationship in every right triangle is:</p>
        <div className="title2">{Math.sqrt(this.state.a)}<sup>2</sup> + {Math.sqrt(this.state.b)}<sup>2</sup> = {Math.sqrt(this.state.a + this.state.b)}<sup>2</sup></div>
        
      </div>
    );
  }
}
export default Home;
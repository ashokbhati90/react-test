import React, { Component } from 'react';
import queryString from 'query-string';
class Home extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.state = {
        a : Math.pow(12, 2),
        b : Math.pow(9, 2)
    }
  }

  pythagorean(sideA, sideB){
    return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
  }

  componentWillMount(){
      let qSting = queryString.parse(this.props.location.search);
      let aVal = typeof qSting.a != 'undefined' ? qSting.a : '';
      let bVal = typeof qSting.b != 'undefined' ? qSting.b : '';
      let cVal = typeof qSting.c != 'undefined' ? qSting.c : '';
      if(this.pythagorean(aVal, bVal) == cVal){
        this.setState({a: Math.pow(qSting.a, 2), b: Math.pow(qSting.b, 2)});
      }else{
        alert('Please review your values for a, b and c.');
        this.setState({a: '', b: ''});
      }
  }

  componentDidMount(){
    this.draw();
  }

  draw(){
    const canvas = this.canvasRef.current;
    const context = canvas.getContext('2d');

    context.moveTo(this.state.a, this.state.a);
    context.lineTo(this.state.a, 0);
    context.lineTo(0, this.state.b);
    context.closePath();
    context.fillStyle= "#ffffff";
    context.fill();

    context.fillStyle= "red";
    context.font = '12px arial';
    context.fillText(this.state.a,  this.state.a/2, this.state.b - 5);
    context.fillText(this.state.b, this.state.a - 20, this.state.b/2);
    context.fillText((this.state.b + this.state.a) , 30, this.state.b/2);
  }

  render() {
    return (
            <div className="App-header">
              <canvas ref={this.canvasRef} width={this.state.a} height={this.state.b} />
            </div>
        );
  }
}
export default Home;
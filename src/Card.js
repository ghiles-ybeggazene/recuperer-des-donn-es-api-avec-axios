import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {
  constructor(props){
    super(props)
  }
  render(){
    //console.log(this.props.data)
    const data = this.props.data
    const marks = Object.values(data.marks).reduce((sum,mark)=> sum+mark,0)
    return(

          <div className="card">
            <img src="http://media.npr.org/assets/news/2009/10/27/facebook1_sq-17f6f5e06d5742d8c53576f7c13d5cf7158202a9.jpg?s=16" alt="" />
            <h1>{data.name}</h1>
            <ul>
              <li>Class: {data.class}</li>
              <li>Marks: {data.marks}</li>
              <li>Roll No.: {data.rollNo}</li>
            </ul>
          </div>

    );
  }
}

export default Card;

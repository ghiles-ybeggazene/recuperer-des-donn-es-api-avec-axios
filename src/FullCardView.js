import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import Loader from './Loader'
import Card from './Card'

class FullCardView extends Component {
  constructor(props){
    super(props)
    this.state = {activeCandidate: {}, loading: true}
  }
  componentDidMount(){
    axios.get('https://api.myjson.com/bins/1dlper')
      .then((data) => {
        const stud = Object.values(data.data).find(stud => stud.rollNo == this.props.match.params.id)
        this.setState({activeCandidate: {...stud, marks: Object.values(stud.marks).reduce((sum,mark)=> sum+mark,0)}, loading: false})
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render(){
    return(
      <div className="fullcard">
        {this.state.loading ? <Loader/> :<Card data= {this.state.activeCandidate}/>}
      </div>
    )
  }
}

export default FullCardView;

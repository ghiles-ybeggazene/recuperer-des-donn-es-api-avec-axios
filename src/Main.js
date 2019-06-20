import React, { Component } from 'react';
import Card from './Card'
import { connect } from 'react-redux'
import axios from 'axios'
import Loader from './Loader'
import Header from './Header'
import { Link } from 'react-router-dom';
import {fetch_student, sort_by_name, sort_by_mark, search_by_name} from './Reducer'
class Main extends Component {
  constructor(props){
    super(props)
    this.state = {seachText:''}
    this.sortByNameHandler = this.sortByNameHandler.bind(this);
    this.sortByMarkHandler = this.sortByMarkHandler.bind(this);
    this.searchHandler = this.searchHandler.bind(this);
  }
  componentDidMount() {
    this.props.fetch();
  }
  sortByMarkHandler(order){
    let data = this.props.students.sort((a,b) => {
      if (a.marks < b.marks) {
        return -1;
      }
      if (a.marks > b.marks) {
        return 1;
      }
      return 0;
    });
    data = order === 'ASC' ? data: data.reverse();
    this.props.sort_by_mark({students: data,sortByMark: order === 'ASC' ? 'DSC': 'ASC'})
  }
  sortByNameHandler(order){
    let data = this.props.students.sort((a,b) => {
      var nameA = a.name.toLowerCase(); // ignore upper and lowercase
      var nameB = b.name.toLowerCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    data = order === 'ASC' ? data: data.reverse();
    this.props.sort_by_name({students: data,sortByName: order === 'ASC' ? 'DSC': 'ASC'})
  }
  searchHandler(e){
    this.props.search_by_name(e.currentTarget.value)
  }

  render(){
    const students = this.props.students.map(student => {
      return (
        <Link to={'/'+student.rollNo}  key={student.rollNo}>
            <Card data= {student}/>
        </Link>
    )
    })
    return(
      <div>
        <Header
          sortByName = {this.props.sortByName}
          sortByMark = {this.props.sortByMark}
          sortByMarkHandler ={this.sortByMarkHandler}
          sortByNameHandler ={this.sortByNameHandler}
          searchHandler ={this.searchHandler}
          seachText ={this.seachText}
          />
        <div id="mainbox">
          {this.props.loading ? <Loader/> : students}
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    students: state.students,
    loading: state.loading,
    sortByName: state.sortByName,
    sortByMark: state.sortByMark
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetch: () =>  dispatch(fetch_student()),
    sort_by_name: (data) => dispatch(sort_by_name(data)),
    sort_by_mark: (data) => dispatch(sort_by_mark(data)),
    search_by_name: (seachText) => dispatch(search_by_name(seachText))
    }
}

export default connect(mapStateToProps,  mapDispatchToProps)(Main)

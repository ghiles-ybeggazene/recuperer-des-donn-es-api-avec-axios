import React, { Component } from 'react';
class Header extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <header id="header">
        <ul>
          <li className="search" ><input type='text' placeholder="search" value={this.props.seachText} onChange = {(e)=> this.props.searchHandler(e)}/></li>
          <li className="button" onClick={() => this.props.sortByNameHandler(this.props.sortByName)} >Name: {this.props.sortByName}</li>
          <li className="button" onClick={() => this.props.sortByMarkHandler(this.props.sortByMark)} >Mark: {this.props.sortByMark}</li>
        </ul>
      </header>
    );
  }
}

export default Header;

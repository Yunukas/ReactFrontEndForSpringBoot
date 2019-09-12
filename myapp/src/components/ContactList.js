import React, {Component} from 'react';
import SingleContact from './SingleContact';
export default class ContactList extends Component {
    constructor(props){
      super(props);
      this.state = {
        contacts : [],
      }
    }

    componentDidMount() {
      fetch('http://localhost:8080/api/contacts')
      .then(response => response.json())
      .then(data => this.setState({contacts: data}))
    }

    render(){
      return(
          <div className="row">
            <div className="col s12">
              <form>
                {this.state.contacts.map((item) => (
                  <SingleContact key={item.id} item={item}/>
                  ))}
                  </form>
            </div>
          </div>
      );
    }
  }

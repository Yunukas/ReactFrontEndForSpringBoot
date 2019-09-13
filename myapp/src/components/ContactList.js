import React, {Component} from 'react';
import SingleContact from './SingleContact';
export default class ContactList extends Component {
    constructor(props){
      super(props);
      this.state = {
        contacts : [],
      }
    this.remove = this.remove.bind(this);
    }
    componentDidMount() {
      fetch('http://localhost:8080/api/contacts')
      .then(response => response.json())
      .then(data => this.setState({contacts: data}))
    }
    // remove contact from list
    remove(id) {
      let contacts = this.state.contacts;
      contacts = contacts.filter(contact => contact.id !== id);
      this.submitDelete(id, contacts);
    }
    submitDelete(id, contacts) {
        let url = "http://localhost:8080/api/contacts/delete/"+id;
        fetch(url, {
            method: "DELETE",
        })
        .then(response => response.text())
        .then(responseText => {
          this.setState( {contacts: contacts });
        })
        .catch((error) => console.log('Error from DeleteContact => ' + error));
    }
    render(){
      return(
          <div className="row">
            <div className="col s12">
                {this.state.contacts.map(
                    (item) => <SingleContact key={item.id} item={item} onClick={this.remove}/>
                  )
                }
            </div>
          </div>
      );
    }
  }

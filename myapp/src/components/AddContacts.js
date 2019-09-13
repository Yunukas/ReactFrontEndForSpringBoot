import React, {Component} from 'react';

export default class AddContacts extends Component {
    submitContact = (event) => {
        event.preventDefault();

        let contact = {
            firstName: this.refs.firstName.value,
            lastName: this.refs.lastName.value,
            email: this.refs.email.value
        }

        fetch("http://localhost:8080/api/contacts", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify(contact)
        })
        .then(response => response.json());

        window.location.reload();
    }


  render(){
    return (
      <div>
        <form className="col s12" onSubmit={this.submitContact}>
        <blockquote>Add Contact</blockquote>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="" ref="firstName" type="text" className="validate" required={true} minLength="2" maxLength="30"/>
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field col s6">
              <input placeholder=""  ref="lastName" type="text" className="validate" required={true} minLength="2" maxLength="30"/>
              <label htmlFor="lastName">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder=""  ref="email" type="email" className="validate" required={true} minLength="8" maxLength="30"/>
              <label htmlFor="email">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s2">
              <button className="waves-effect waves-light btn" type="submit" name="action">Submit</button>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

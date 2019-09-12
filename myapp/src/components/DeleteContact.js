import React, {Component} from 'react';

export default class DeleteContact extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: "Delete Contact"
    }
  }
  submitDelete = (event) => {
      event.preventDefault();

      let id = this.refs.id.value;
      let url = "http://localhost:8080/api/contacts/delete/"+id;
      fetch(url, {
          method: "DELETE",
      })
      .then(response => response.text())
      .then(data => this.setState({title: data}))
      .catch((error) => console.log('Error from DeleteContact => ' + error));

      // console.log(url);
  }

  render(){
    return (
      <div>
        <form className="col s12" onSubmit={this.submitDelete}>
        <blockquote>{this.state.title}</blockquote>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="" ref="id" type="text" className="validate"/>
              <label htmlFor="id">Id</label>
            </div>
            <div className="input-field col s6">
              <button className="inline waves-effect waves-light btn" type="submit" name="action">Submit</button>
            </div>
          </div>
        </form>
      </div>

    )
  }
}

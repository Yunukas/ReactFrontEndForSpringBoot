import React from 'react';

const submitDelete = (id) => {
    //event.preventDefault();
    console.log(id);
    // let id = this.refs.id.value;
    let url = "http://localhost:8080/api/contacts/delete/"+id;
    fetch(url, {
        method: "DELETE",
    })
    .then(response => response.text())
    .catch((error) => console.log('Error from DeleteContact => ' + error));

    // console.log(url);
}
const SingleContact = ({item}) => {

  return(
    <div>
      <div className="col s10">
        <div className="card-panel small indigo lighten-1">
          <div className="card-content white-text">
            <span className="card-title">{item.id}.{item.firstName} {item.lastName}</span>
          </div>
          <div className="card-action blue-text text-lighten-4">
            <p>{item.email}</p>
          </div>
        </div>
      </div>
      <div className="col s2">
          <div className="input-field">
              <button className="btn-floating btn-large waves-effect waves-light red" onClick={() => submitDelete(item.id)}>
                      <i className="material-icons">remove</i>
              </button>
            </div>
      </div>
    </div>
  );
}

// class SingleContact extends Component {
//   submitDelete(event, id) {
//       event.preventDefault();
//       console.log(id);
//       // let id = this.refs.id.value;
//       let url = "http://localhost:8080/api/contacts/delete/"+id;
//       fetch(url, {
//           method: "GET",
//       })
//       .then(response => response.text())
//       .then(data => this.setState({title: data}))
//       .catch((error) => console.log('Error from DeleteContact => ' + error));
//
//       // console.log(url);
//   }
//   render(){
//     const { item, whenClicked} = this.props;
//     return(
//     <div className="row">
//       <div className="col s6 m6">
//         <div className="card indigo lighten-1">
//           <div className="card-content white-text">
//             <span className="card-title">{item.id}- {item.firstName} {item.lastName}</span>
//           </div>
//           <div className="card-action blue-text text-lighten-4">
//             <p>{item.email}</p>
//           </div>
//         </div>
//       </div>
//       <form onSubmit={this.submitDelete.bind(this, item.id)}>
//         <div className="input-field col s6">
//             <button className="btn-floating btn-large waves-effect waves-light red"  onClick={whenClicked}
//                     type="submit" name="action">
//                     <i className="material-icons">remove</i>
//             </button>
//           </div>
//       </form>
//     </div>
//   );}
// }
export default SingleContact;

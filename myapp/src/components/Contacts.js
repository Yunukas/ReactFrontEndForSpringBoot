import React, {Component} from 'react';
import AddContacts from './AddContacts';
import DeleteContact from './DeleteContact';
import ContactList from './ContactList';

export default class Contacts extends Component {
  render() {
    return (
      <div>

        <div className="row">
          <div className="col s6">
            <AddContacts />
          </div>
          <div className="col s6">
          </div>
        </div>
        { /* <div className="col s6">
          <DeleteContact />
         </div> */ }
         <div className="row">
           <div className="col s4">
              <ContactList />
           </div>
         </div>
      </div>

    );
  }
}

import React from 'react';

const SingleContact = ({item}) => (
  <div className="row">
    <div className="col s12 m6">
      <div className="card indigo lighten-1">
        <div className="card-content white-text">
          <span className="card-title">{item.firstName} {item.lastName}</span>
        </div>
        <div className="card-action blue-text text-lighten-4">
          <p>{item.email}</p>
        </div>
      </div>
    </div>
  </div>
)
export default SingleContact;

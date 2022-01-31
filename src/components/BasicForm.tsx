import React from 'react';

const BasicForm = () => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-control">
          <label htmlFor="name">E-Mail Name</label>
          <input type="text" id="name" />
        </div>
        <div className="form-actions">
          <button>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;

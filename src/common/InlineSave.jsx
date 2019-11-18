import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const InlineSave = props => {
  const myInput = useRef();
  const save = () => {
    if(myInput.current.value && myInput.current.value !== ''){
      props.addTodo(myInput.current.value);
      myInput.current.value = '';
    }
  }
  return (
    <div className="row" style={{paddingBottom:'1em'}}>
      <div className="col-md-10">
        <br />
        <input type="text" placeholder="Enter new task" ref={myInput} className="form-control" />
      </div>
      <div className="col-md-2">
        <br />
        <button type="button" className="btn btn-success" onClick={save}>Add</button>
      </div>
    </div>
  );
};

export default InlineSave;
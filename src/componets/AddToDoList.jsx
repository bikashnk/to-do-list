import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import InlineSave from '../common/InlineSave.jsx';
import plusIcon from '../images/plusIcon.png';


const AddToDoList = props => {
  const [renderAddBox, setAddBox] = useState(false);

  const toggleScreen = (task) => {
    setAddBox((renderAddBox) => !renderAddBox);
    props.addTodo(task);
  }
  return (
    <Fragment>
      {
        (!renderAddBox) ? <div style={{ height: '4em', marginTop:'1em', background:'#e7e7e7' }}>
          <img
            className='addButton-Icon'
            src={plusIcon}
            alt="Plus"
            onClick= {() => {setAddBox((renderAddBox) => !renderAddBox)}}
          />
          <span style={{ float: 'left', marginLeft: '2%', marginTop: '1.3em', color:'blue' }}>Add a to-do</span>
        </div>
          : <InlineSave addTodo={toggleScreen} />
      }
    </Fragment>
  );
};

export default AddToDoList;
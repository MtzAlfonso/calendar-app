import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uiOpenModal } from '../../actions/uiActions';

const AddNewFab = () => {
  const dispatch = useDispatch();
  const { activeEvent } = useSelector((state) => state.calendar);

  const handleClickNew = () => {
    dispatch(uiOpenModal());
  };

  return (
    <button
      className={`btn ${!!activeEvent ? 'btn-warning' : 'btn-success'} fab`}
      onClick={handleClickNew}
    >
      <i className="fas fa-pen"></i>
    </button>
  );
};

export default AddNewFab;

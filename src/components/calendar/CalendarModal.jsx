import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/uiActions';
import customStyles from './customStyles';

const now = moment().minutes(0).seconds(0).add(1, 'hour');
const nowPlusOne = now.clone().add(1, 'hour');
Modal.setAppElement('#root');


const CalendarModal = () => {
  const { modalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(uiCloseModal());
  };

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlusOne.toDate());
  const [titleValid, setTitleValid] = useState(true);
  const [formValues, setFormValues] = useState({
    title: '',
    notes: '',
    start: now.toDate(),
    end: nowPlusOne.toDate(),
  });

  const { title, notes, start, end } = formValues;

  const handleInputChange = ({ target }) => {
    setFormValues({ ...formValues, [target.name]: target.value });
  };

  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e,
    });
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e,
    });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire(
        'Error',
        'La fecha final debe ser mayor a la de inicio.',
        'error'
      );
    }

    if (title.trim().length < 2) {
      return setTitleValid(false);
    }

    // TODO: Grabar en base de datos

    setTitleValid(true);
    closeModal();
  };

  return (
    <Modal
      className="modal pb-3"
      closeTimeoutMS={200}
      isOpen={modalOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-fondo"
      style={customStyles}
    >
      <i
        className="ms-auto pe-3 pt-3 fas fa-times text-success close"
        onClick={closeModal}
      ></i>
      <h3 className="me-auto ps-3 my-3 text-uppercase fw-bold">Agregar evento</h3>
      <form className="container" onSubmit={handleSubmitForm}>
        <div className="input-group my-4">
          <div className="input-group-text bg-primary">
            <i className="fas fa-calendar-alt text-white"></i>
          </div>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            minDate={now.toDate()}
            className="form-control"
            format="dd / MM / yyyy  HH:mm"
          />
        </div>

        <div className="input-group my-4">
          <div className="input-group-text bg-primary">
            <i className="fas fa-calendar-alt text-white"></i>
          </div>
          <DateTimePicker
            onChange={handleEndDateChange}
            value={dateEnd}
            minDate={dateStart}
            className="form-control"
            format="dd / MM / yyyy  HH:mm"
          />
        </div>

        <div className="input-group my-4">
          <div className="input-group-text bg-primary">
            <i className="fas fa-pencil-alt text-white"></i>
          </div>
          <input
            type="text"
            className={`form-control ${!titleValid && 'is-invalid'}`}
            placeholder="Título del evento"
            name="title"
            value={title}
            autoComplete="off"
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">El título es muy corto</div>
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas adicionales"
            value={notes}
            rows="4"
            name="notes"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success w-100 my-5">
          <i className="fas fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};

export default CalendarModal;

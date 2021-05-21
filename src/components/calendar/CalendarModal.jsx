import React, { useEffect, useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { uiCloseModal } from '../../actions/uiActions';
import customStyles from './customStyles';
import {
  eventAddNew,
  eventCleanActive,
  eventDeleted,
  eventUpdated,
} from '../../actions/eventsActions';

const now = moment().minutes(0).seconds(0).add(1, 'hour');
const nowPlusOne = now.clone().add(1, 'hour');
Modal.setAppElement('#root');

const initEvent = {
  title: '',
  notes: '',
  start: now.toDate(),
  end: nowPlusOne.toDate(),
};

const CalendarModal = () => {
  const { modalOpen } = useSelector((state) => state.ui);
  const { activeEvent } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlusOne.toDate());
  const [titleValid, setTitleValid] = useState(true);
  const [formValues, setFormValues] = useState(initEvent);

  const { title, notes, start, end } = formValues;

  useEffect(() => {
    if (activeEvent) setFormValues(activeEvent);
    else setFormValues(initEvent);
  }, [activeEvent, setFormValues]);

  const closeModal = () => {
    dispatch(uiCloseModal());
    setTimeout(() => {
      dispatch(eventCleanActive());
      setFormValues(initEvent);
    }, 200);
  };

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

  const handleDelete = () => {
    dispatch(uiCloseModal());
    setTimeout(() => dispatch(eventDeleted()), 200);
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

    if (activeEvent) {
      dispatch(eventUpdated(formValues));
    } else {
      dispatch(
        eventAddNew({
          ...formValues,
          id: new Date().getTime(),
          user: {
            _id: '123',
            name: 'Alfonso',
          },
        })
      );
    }

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
      <h3 className="me-auto ps-3 my-3 text-uppercase fw-bold">
        {activeEvent ? 'Editar evento' : 'Agregar evento'}
      </h3>
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

        {activeEvent ? (
          <>
            <button type="submit" className="btn btn-warning w-100 mt-5">
              <i className="fas fa-sync-alt"></i>
              <span> Actualizar</span>
            </button>

            <button
              className="btn btn-danger w-100 mt-2 mb-5"
              onClick={handleDelete}
            >
              <i className="fas fa-trash"></i>
              <span> Eliminar</span>
            </button>
          </>
        ) : (
          <button type="submit" className="btn btn-success w-100 my-5">
            <i className="fas fa-save"></i>
            <span> Guardar</span>
          </button>
        )}
      </form>
    </Modal>
  );
};

export default CalendarModal;

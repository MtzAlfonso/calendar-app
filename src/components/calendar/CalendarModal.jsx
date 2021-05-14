import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Modal from 'react-modal';

const now = moment().minutes(0).seconds(0).add(1, 'hour');
const end = now.clone().add(1, 'hour');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
  };

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(end.toDate());

  const handleStartDateChange = (e) => {
    setDateStart(e);
  };

  const handleEndDateChange = (e) => {
    setDateEnd(e);
  };

  return (
    <Modal
      className="modal pb-3"
      closeTimeoutMS={200}
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="modal-fondo"
      style={customStyles}
    >
      <i
        className="ms-auto pe-3 pt-3 fas fa-times text-success close"
        onClick={closeModal}
      ></i>
      <h3 className="me-auto ps-3 my-3 text-uppercase fw-bold">Nuevo evento</h3>
      <form className="container">
        <div className="input-group my-4">
          <div className="input-group-text bg-primary">
            <i className="fas fa-calendar-alt text-white"></i>
          </div>
          <DateTimePicker
            onChange={handleStartDateChange}
            value={dateStart}
            minDate={now.toDate()}
            className="form-control"
            format="dd / MMM / yyyy  HH:mm"
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
            format="dd / MMM / yyyy  HH:mm"
          />
        </div>

        <div className="input-group my-4">
          <div className="input-group-text bg-primary">
            <i className="fas fa-pencil-alt text-white"></i>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
          />
        </div>

        <div className="form-group">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas adicionales"
            rows="4"
            name="notes"
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

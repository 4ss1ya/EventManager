import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteEvent } from '../redux/eventsSlice';

function EventDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const event = useSelector((state) => state.events.find((e) => e.id === parseInt(id)));

  if (!event) return <p>Событие не найдено.</p>;

  const handleDelete = () => {
    dispatch(deleteEvent(event.id));
    navigate('/');
  };

  return (
    <div className="container">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <p>Дата: {event.date}</p>
      <p>Категория: {event.category}</p>
      <button onClick={() => navigate(`/events/${event.id}/edit`)}>Редактировать</button>
      <button onClick={handleDelete} style={{ backgroundColor: 'red', marginLeft: '10px' }}>
        Удалить
      </button>
    </div>
  );
}

export default EventDetails;

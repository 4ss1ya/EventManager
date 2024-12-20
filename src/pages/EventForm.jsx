import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addEvent, updateEvent } from '../redux/eventsSlice';
import { useNavigate, useParams } from 'react-router-dom';

function EventForm() {
  const { id } = useParams(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector((state) => state.categories);

  const existingEvent = useSelector((state) =>
    state.events.find((event) => event.id === parseInt(id))
  );

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [error, setError] = useState(''); 

  useEffect(() => {
    if (existingEvent) {
      setTitle(existingEvent.title);
      setDescription(existingEvent.description);
      setDate(existingEvent.date);
      setCategory(existingEvent.category);
    }
  }, [existingEvent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categories.includes(category)) {
      setError('Указанная категория не существует. Выберите категорию из списка.');
      return;
    }

    if (existingEvent) {
      dispatch(updateEvent({ id: existingEvent.id, title, description, date, category }));
    } else {
      dispatch(addEvent({ id: Date.now(), title, description, date, category }));
    }

    navigate('/'); 
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h1>{existingEvent ? 'Редактировать событие' : 'Добавить событие'}</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Вывод ошибки */}
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      >
        <option value="">Выберите категорию</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button type="submit">{existingEvent ? 'Сохранить изменения' : 'Добавить событие'}</button>
    </form>
  );
}

export default EventForm;

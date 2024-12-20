import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteEvent } from '../redux/eventsSlice';
import { useDispatch } from 'react-redux';

function EventList() {
  const events = useSelector((state) => state.events); 
  const categories = useSelector((state) => state.categories); 
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState('Все');


  const filteredEvents =
    selectedCategory === 'Все'
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  return (
    <div className="container">
      <h1>Список событий</h1>
      
      <div>
        <label htmlFor="categoryFilter">Фильтровать по категории: </label>
        <select
          id="categoryFilter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <ul>
        {filteredEvents.map((event) => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>{event.title}</Link>
            <button onClick={() => handleDelete(event.id)} style={{ marginLeft: '10px', backgroundColor: 'red' }}>
              Удалить
            </button>
            <Link to={`/events/${event.id}/edit`} style={{ marginLeft: '10px' }}>
              Редактировать
            </Link>
          </li>
        ))}
      </ul>

      {filteredEvents.length === 0 && <p>События для данной категории отсутствуют.</p>}
    </div>
  );
}

export default EventList;

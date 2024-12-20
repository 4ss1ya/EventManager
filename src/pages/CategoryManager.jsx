import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../redux/categoriesSlice';

function CategoryManager() {
  const [name, setName] = useState('');
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleAddCategory = () => {
    const trimmedName = name.trim();
    if (trimmedName && !categories.includes(trimmedName)) {
      dispatch(addCategory(trimmedName)); 
      setName(''); 
    } else if (categories.includes(trimmedName)) {
      alert('Эта категория уже существует.');
    }
  };

  return (
    <div className="container">
      <h1>Управление категориями</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Добавить новую категорию"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAddCategory}>Добавить</button>
    </div>
  );
}

export default CategoryManager;

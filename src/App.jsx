import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import EventList from './pages/EventList';
import EventDetails from './pages/EventDetails';
import EventForm from './pages/EventForm';
import CategoryManager from './pages/CategoryManager';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events/new" element={<EventForm />} />
        <Route path="/events/:id/edit" element={<EventForm />} /> 
        <Route path="/categories" element={<CategoryManager />} />
      </Routes>
    </Router>
  );
}

export default App;

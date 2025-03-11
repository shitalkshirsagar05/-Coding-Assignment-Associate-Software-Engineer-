import React from 'react';
import ProfileCard from './components/ProfileCard';
import TodoList from './components/TodoList';
import ImageSlider from './components/ImageSlider';
import AnagramChecker from './components/AnagramChecker';
import EmployeeManagement from './components/EmployeeManagement';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <ProfileCard />
        <TodoList />
        <ImageSlider />
        <AnagramChecker />
        <EmployeeManagement />
      </div>
    </div>
  );
}

export default App;
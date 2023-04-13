import React, { useEffect, useState } from 'react';
import Employee from './feature/Employee/Employee';
import Search from './components/ui/search/Search';
function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentSelection, setCurrentSelection] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const response = await fetch("https://retoolapi.dev/KShrmC/data")
        const data = await response.json();
        setEmployees(data);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        alert("Something goes wrong")
      }
    }
    fetchData()

  }, []);
  const searchCurrentUser = (data) => {
    setCurrentSelection(data)
  }
  return (
    <div className='container'>
      {loading && "Loading..."}
      <Search searchCurrentUser={searchCurrentUser} />
      <Employee employees={employees.filter((item, index) => (
        currentSelection.length > 0 ? item.employee.toLowerCase().substr(0, currentSelection.length) === currentSelection.toLowerCase() : item.employee
      ))} />
    </div>
  );
}
export default App;

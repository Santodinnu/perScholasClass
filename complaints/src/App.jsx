import React, { useState } from 'react';

const App = () => {
  const [borough, setBorough] = useState('manhattan');
  const [complaintNumber, setComplaintNumber] = useState(10);
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState(null);

  const fetchComplaints = async () => {
    try {
      console.log('Fetching complaints...');
      const response = await fetch(`https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=${complaintNumber}&borough=${borough}&agency=NYPD`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Fetched data:', data);
      setComplaints(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching data:', error);
      setComplaints([]);
      setError('Error fetching complaints. Please try again.');
    }
  };
  

  // const togglePoliceResponse = (uniqueKey) => {
  //   setComplaints(prevComplaints => {
  //     return prevComplaints.map(complaint => {
  //       if (complaint.unique_key === uniqueKey) {
  //         return {
  //           ...complaint,
  //           showResponse: !complaint.showResponse || false,
  //         };
  //       }
  //       return complaint;
  //     });
  //   });
  // };

  return (
    <div>
      <h1>Dougie & Pizza Rat's App</h1>

      {/* Buttons for each borough */}
      <button onClick={() => setBorough('manhattan')}>Manhattan</button>
      <button onClick={() => setBorough('brooklyn')}>Brooklyn</button>
      <button onClick={() => setBorough('queens')}>Queens</button>
      <button onClick={() => setBorough('staten island')}>Staten Island</button>
      <button onClick={() => setBorough('bronx')}>Bronx</button>

      {/* Input box for the number of complaints */}
      <label htmlFor="complaintNumber">Number of Complaints:</label>
      <input type="number" id="complaintNumber" value={complaintNumber} onChange={(e) => setComplaintNumber(e.target.value)} />

      {/* Button to fetch complaints */}
      <button onClick={fetchComplaints}>Fetch Complaints</button>

      {/* Display area for complaints */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        {complaints.map((complaint) => (
          <div key={complaint.unique_key}>
            <p><strong>Descriptor:</strong> {complaint.descriptor}</p>
            <p><strong>Resolution:</strong> {complaint.resolution_description}</p>
            {/* <button onClick={() => togglePoliceResponse(complaint.unique_key)}>Toggle Police Response</button>
            {complaint.showResponse && <p><strong>Police Response:</strong> {complaint.resolution_description}</p>} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

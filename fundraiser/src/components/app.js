import React from 'react';
import DonorComponent from './Donor';
import OrganizationComponent from './Organization';
import AdministratorComponent from './Administrator';

function App() {
  // Assume userRole is fetched from the authentication process
  const userRole = 'donor'; // 'organization', 'administrator'

  return (
    <div className="App">
      <h1>Environmental Preservation Donation Platform</h1>
      {userRole === 'donor' && <DonorComponent />}
      {userRole === 'organization' && <OrganizationComponent />}
      {userRole === 'administrator' && <AdministratorComponent />}
    </div>
  );
}

export default App;

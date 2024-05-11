
import React, { useState, useEffect } from 'react';


const AdminDashboard = () => {
    const [applications, setApplications] = useState([]);

    // Fetch organization applications from backend on component mount
    useEffect(() => {
        const fetchApplications = async () => {
            try {
                const response = await fetch('/api/organizations/applications');
                if (!response.ok) {
                    throw new Error('Failed to fetch organization applications');
                }
                const data = await response.json();
                setApplications(data);
            } catch (error) {
                console.error('Error fetching organization applications:', error);
            }
        };
        fetchApplications();
    }, []);

    // Function to handle approval of organization applications
    const handleApproveApplication = (applicationId) => {
        // Placeholder code for handling approval
        console.log('Approving application with ID:', applicationId);
    };

    // Function to handle rejection of organization applications
    const handleRejectApplication = (applicationId) => {
        // Placeholder code for handling rejection
        console.log('Rejecting application with ID:', applicationId);
    };

    // Function to handle deletion of organization applications
    const handleDeleteApplication = (applicationId) => {
        // Placeholder code for handling deletion
        console.log('Deleting application with ID:', applicationId);
    };

    return (
        <div>
            
            <h1>Admin Dashboard</h1>
            {/* Render organization application list here */}
            <ul>
                {applications.map(application => (
                    <li key={application.id}>
                        {application.name}
                        <button onClick={() => handleApproveApplication(application.id)}>Approve</button>
                        <button onClick={() => handleRejectApplication(application.id)}>Reject</button>
                        <button onClick={() => handleDeleteApplication(application.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;


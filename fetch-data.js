
async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    
    // Select the Data Container Element
    const dataContainer = document.getElementById('api-data');

    // Fetch Data Using try-catch
    try {
        // Fetch the data from the API
        const response = await fetch(apiUrl);
        
        // Convert the response to JSON
        const users = await response.json();
        
        // Clear the Loading Message
        dataContainer.innerHTML = '';

        // Create and Append User List
        const userList = document.createElement('ul');

        // Loop through the users array
        users.forEach(user => {
            // Create a <li> element
            const listItem = document.createElement('li');
            
            // Set the text content of the <li> to the user's name
            listItem.textContent = user.name;
            
            // Append the <li> to userList
            userList.appendChild(listItem);
        });

        // Append userList to dataContainer
        dataContainer.appendChild(userList);
} catch (error)  {
    // Clear the Loading Message
    dataContainer.innerHTML = '';
    // Handle errors by displaying a message in the dataContainer
    dataContainer.textContent = 'Failed to load user data.';

}
 }
// Invoke fetchUserData on DOMContentLoaded
 document.addEventListener('DOMContentLoaded', function() {
    fetchUserData();
 })

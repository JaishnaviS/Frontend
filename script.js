function filterSeniorCitizens() {
    // Get the input list
    const inputList = document.getElementById('inputList').value.trim().split('\n');
    
    // Filter the list to find senior citizens
    const seniors = inputList.filter(person => {
        const parts = person.split(',');
        if (parts.length === 2) {
            const age = parseInt(parts[1].trim());
            return !isNaN(age) && age >= 65;
        }
        return false;
    });

    // Display the senior citizens in the list
    const seniorList = document.getElementById('seniorList');
    seniorList.innerHTML = seniors.map(person => `<li>${person.trim()}</li>`).join('');
}

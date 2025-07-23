document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const jobHistory = document.getElementById('jobHistory').value;
    const skills = document.getElementById('skills').value;
    const careerObjective = document.getElementById('careerObjective').value;

    const requestData = {
        name,
        email,
        jobHistory,
        skills,
        careerObjective
    };

    fetch('/api/handler.ts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        const outputDiv = document.getElementById('output');
        if (data.success) {
            outputDiv.innerHTML = `<h3 class='text-xl font-semibold'>Generated Resume:</h3><pre>${data.resume}</pre>`;
        } else {
            outputDiv.innerHTML = `<p class='text-red-500'>Error: ${data.error}</p>`;
        }
    })
    .catch(error => {
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = `<p class='text-red-500'>An error occurred: ${error.message}</p>`;
    });
});
function write(id, content) {
    document.getElementById('number').textContent = "Advice #" + id;
    document.getElementById('content').textContent = "\"" + content + "\"";
}

document.getElementById('btn').addEventListener('click', function (event) {
    var id = 0;
    var content = "";

    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network rresponse was not ok');
            }
            return response.json();
        })
        .then(data => {
            id = data.slip.id;
            content = data.slip.advice;
            write(id, content)
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        })

})
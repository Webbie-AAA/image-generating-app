const capitalsForm = document.querySelector("#formSection form");
const capitalsList = document.querySelector("#listSection ul");
const capitalsImage = document.querySelector("#imageSection");



capitalsForm.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    const capital_value = e.target.countryInput.value
    e.target.countryInput.value = ''
    addListItem(capital_value)
    fetchPixabayData(capital_value)
    e.target.fruitInput.value = '';
}


function addListItem(capital_value){
    let li = document.createElement('li');
    li.textContent = capital_value
    capitalsList.appendChild(li);

}

function addImageElement(data){
    let img = document.createElement('img');
    img.src = data.hits[4].webformatURL;
    capitalsImage.appendChild(img);
    
}

function fetchPixabayData(capital_value){
    fetch(`https://pixabay.com/api/?key=58058895-8eb47e4c9541afe0412851749&q=${capital_value}`)
        .then(processResponse)
        .then(data => addImageElement(data))
        .catch(e => console.log(e))
}

function processResponse(resp){
    if(resp.ok){
        return resp.json()
    } else {
        throw "Error: http status code =" + resp.status
    }
}

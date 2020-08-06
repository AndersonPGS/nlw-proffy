document.querySelector('#add-time').addEventListener('click', cloneField);

function cloneField() {

    //duplica os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    //seleciona todos os inputs
    const fields = newFieldContainer.querySelectorAll('input')
    
    //para cada campo ele limpa
    fields.forEach(field => {
        field.value = ""
    });

    //coloca na página
    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}
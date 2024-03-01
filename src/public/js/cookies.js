const myForm = document.getElementById('myForm');

function getCookies(){
    fetch('/cookies').then(res=>res.json()).then(response=>{
        console.log(response)
    })
}

myForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let formData = new FormData(myForm);
    const requestBody = {}

    formData.forEach((value, name)=>{
        requestBody[name] = value; 
    })


    fetch('/cookies',{
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res=>res.json()).then(response=>{
        console.log(response)
    })
})

console.log('loaded.')
const getTodos = (resource) => {
    return new Promise((resolve, reject)=>{

        const request = new XMLHttpRequest();
        request.addEventListener('readystatechange', () => {
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText) 
                resolve(data)
            }else if(request.readyState === 4){
                reject('could not fetch data')
            }
        });
        request.open('GET', resource)
        request.send();
    })
}

//run the function
//nested promise much cleaner
getTodos('todos/joma.json').then(data => {
    console.log('promise resolved 1:', data);
    return(getTodos('todos/notjoma.json'))
}).then(data => {
    console.log('promise resolved 2:', data);
    return(getTodos('todos/notnotjoma.json'))
}).then(data => {
    console.log('promise resolved 3:', data);
}).catch(err =>{
    console.log('promise rejected:', err);
})



// //promise example
// const getSomething = () =>{
//       //2 parameters are built-in to the promise API
//       return new Promise((resolve, reject) => {
//           resolve('some data')
//           reject('error')
//       })
// }

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// })

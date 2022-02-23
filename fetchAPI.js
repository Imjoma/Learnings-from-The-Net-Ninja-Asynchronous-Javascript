// async & await
//async function
//asynchronous function will always return a promise
const getTodo = async () =>{
    //grab data using fetch
    //await keyword stops assigning value to the variable until the promise is resolve
    const res = await fetch('todos/joma.json')
    if(res.status !== 200){
        throw new Error('cannot fetch the data');
    }
    const data = await res.json()
    return data;
}

getTodo()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err))




// //fetch api

// fetch('todos/joma.json').then(res => {
//     console.log('resolved', res);
//     return res.json();
// }).then(data => {
//     console.log(data);
// }).catch(err =>{
//     console.log('rejected', err);
// })

const getTodoss = (resource, callback) => {

    const request = new XMLHttpRequest();
    // track the progress of a request using a event listener and a specific event called readystatechange
    request.addEventListener('readystatechange', () => {
        // console.log(request, request.readyState); 1,2,3,4
        if(request.readyState === 4 && request.status === 200){
            //convert JSON string to javascript objects
            const data = JSON.parse(request.responseText) 
            callback(undefined, data)
        }else if(request.readyState === 4){
            callback('could not fetch data', undefined)

        }
    });

    request.open('GET', resource)
    request.send();
}
//non-blocking code
//pass a callback function to be dynamic
//specify a callback function as argument
getTodoss('todos/joma.json', (err, data)=> {
    console.log(data);
    getTodoss('todos/notjoma.json', (err, data)=> {
        console.log(data);
        getTodoss('todos/notnotjoma.json', (err, data)=> {
            console.log(data);
        })
    })
})



// getTodos('todos/notjoma.json', (err, data)=> {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
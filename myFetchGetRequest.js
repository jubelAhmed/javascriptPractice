var myfetch = (url) => {
    return new Promise((resolve , reject) =>{
        var xhr = new XMLHttpRequest();
             
           xhr.onload = function() {
             if(this.readyState == 4 && this.status == 200){
                resolve(xhr.response);
             }   
             else{
                 reject(xhr.statusText)
             }
                 
            }   
        xhr.open('GET',url,true);
        xhr.send(null);
        
    })
}

var showData = (data) =>{
    var obj = JSON.parse(data);
    return Promise.resolve(obj)
}

var fetched = myfetch('https://jsonplaceholder.typicode.com/users');

fetched.then(showData).then((obj)=>{
    obj.map((data) => console.log(`name : ${data.name}
    id : ${data.id}`));
})
.catch((err)=> console.log(`Error is ${err}`))
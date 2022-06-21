
export async function getUsers() {
    return await fetch('http://localhost:8080/users',{
     mode: "no-cors",
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
    
}


export async function createUsers(email, name, password) {
    return await fetch('http://localhost:8080/users',{
     mode: "no-cors",
    })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
    
}
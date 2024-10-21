// Name: Vallerie Salindeho
// Exercise #9

//1. promise
// a.
function helloWorld() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello World");
        }, 2000);
    });
}

//b.
async function messages() {
    const msg = await helloWorld();
    console.log(msg);
}

//c.
messages();


//2. fetch
//a.
function ambilDataUser(){
    //b.
    fetch("https://reqres.in/api/users")
        //c.
        .then((response) => {
            return response.json();
        })
        //d.
        .then((users) => {
            users.data.forEach((user) => {
                console.log('First Name: ${user.first_name}, Last Name: ${user.last_name}');
            });
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
}

//e.
ambilDataUser();

//3. async await
async function ambilDataUser() {
    try {
        const response = await fetch("https://reqres.in/api/users");
        const users = await response.json();
        users.data.forEach(user => {
            console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

ambilDataUser();

//4. axios
async function ambilDataUser() {
    try {
        const response = await axios.get("https://reqres.in/api/users");
        const users = response.data;
        users.data.forEach(user => {
            console.log(`First Name: ${user.first_name}, Last Name: ${user.last_name}`);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

ambilDataUser();
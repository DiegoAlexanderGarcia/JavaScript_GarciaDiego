document.addEventListener('DOMBot',()=>{
    const datosContenedor =document.querySelector('.fa fa-user');

    async function fetchData() {
        const res = await feth('https://randomuser.me/api/')
        data = res.json();
        return
    }
    

    
    fetchData().then(data=>{
        console.log(data)
    })
})


function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value

    Client.checkForName(formText)

    console.log("::: Form Submitted :::")

    const postRequest = async ( url = ' ' , data = {} ) => {
          console.log ('post data----> ', data )
        const response = await fetch ( url , {
            method : 'POST' ,
            credentials : 'same-origin' ,
            mode : 'cors' ,
            headers : {
            'Content-Type': 'application/json' ,
            },
            body : JSON.stringify( data )
          }
        )
        try {
            const recieved  = await response.json() 
            console.log ('recieved-----> ', recieved )
            return recieved       
         }
        catch (error) {
            console.log ('error---- > ', error)
        }
     }

     postRequest('http://localhost:8081/api', {url: formText})
     .then(res => {
      //  console.log(res)
        return res.json()
        
    })
   // .then(console.log(postRequest.res))
   // .then(function(res) {
    //    document.getElementById('results').innerHTML = res.body
   // })


    // fetch('http://localhost:8081/test')
    
}

export { handleSubmit }

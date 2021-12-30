function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value

    if  (Client.validURL(formText)) 

    {console.log("::: Form Submitted :::")

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
     }}
     else {
       alert ("Not a valid Url")
     }

     postRequest('http://localhost:8081/api',{url: formText}).then(
        (res)=>{
          document.getElementById("agreement").innerHTML = `agreement: ${res.agreement}`
          document.getElementById("confidence").innerHTML = `confidence: ${res.confidence}`
          document.getElementById("irony").innerHTML = `irony: ${res.irony}`
          document.getElementById("model").innerHTML = `model: ${res.model}`
          document.getElementById("score_tag").innerHTML = `score_tag: ${res.score_tag}`              

        }


     )
   //  .then(res => {
      //  console.log(res)
     //   return res.json()
    
   // })
   // .then(console.log(postRequest.res))
   // .then(function(res) {
    //    document.getElementById('results').innerHTML = res.body
   // })


    // fetch('http://localhost:8081/test')
    
}

export { handleSubmit }

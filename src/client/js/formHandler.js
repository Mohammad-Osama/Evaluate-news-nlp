function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value

    if  (Client.validURL(formText)) 

          {
            console.log("::: Form Submitted :::")

    // const postRequest = async ( url = ' ' , data = {} ) => {
       //    console.log ('post data----> ', data )
        const   response =  fetch ( 'http://localhost:8081/api' , {
            method : 'POST' ,
            credentials : 'same-origin' ,
            mode : 'cors' ,
            headers : {
            'Content-Type': 'application/json' ,
            },
            body : JSON.stringify( {formText} )
          }
        )
       /*  try {
            const recieved  = await response.json() 
            console.log ('recieved-----> ', recieved )
            return recieved       
         }
        catch (error) {
            console.log ('error---- > ', error)
        } */.then ( (response)=>{
          const recieved  = response.json() 
          console.log ('recieved-----> ', recieved )
          return recieved 

        }
            
          ).then(
          (recieved)=>{
            document.getElementById("input").innerHTML = `Your input :  ${formText}`
           document.getElementById("agreement").innerHTML = `agreement: ${recieved.agreement}`
           document.getElementById("confidence").innerHTML = `confidence: ${recieved.confidence}`
           document.getElementById("irony").innerHTML = `irony: ${recieved.irony}`
           document.getElementById("model").innerHTML = `nodel: ${recieved.model}`
           document.getElementById("score_tag").innerHTML = `score_tag: ${recieved.score_tag}`
           document.getElementById("code").innerHTML = `code: ${recieved.status.code}`
           document.getElementById("credits").innerHTML = `credits: ${recieved.status.credits}`
           document.getElementById("msg").innerHTML = `msg: ${recieved.status.msg}`
           document.getElementById("code").innerHTML = `code: ${recieved.status.remaining_credits}`              
 
         } )
     //}
    }
     else {
       alert ("Not a valid Url")
     }

     // postRequest('http://localhost:8081/api',{url: formText}).then(
        /*  (res)=>{
          document.getElementById("agreement").innerHTML = `agreement: ${res.agreement}`
          document.getElementById("confidence").innerHTML = `confidence: ${res.confidence}`
          document.getElementById("irony").innerHTML = `irony: ${res.irony}`
          document.getElementById("model").innerHTML = `model: ${res.model}`
          document.getElementById("score_tag").innerHTML = `score_tag: ${res.score_tag}`              

        }


     ) */
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

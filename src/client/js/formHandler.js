

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value; 
    Client.checkForName(formText)
   console.log("::: Form Submitted :::")
   
 





    //Fetch request
fetch('http://localhost:8080/addData',{
        method: 'POST',
        credentials: 'same-origin',
       mode: 'cors',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify({formText: formText}),
    })
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('confidence').innerHTML = "Feelings of confidence in this text are given a rating of "+ res.confidence +"%.";
        if (res.score_tag === 'N'){
        document.getElementById('polarity').innerHTML = "Overall, the tone is negative." }
        else if(res.score_tag === 'N+'){
            document.getElementById('polarity').innerHTML = "Overall, the tone is very negative."}
        else if(res.score_tag === 'NONE'){
            document.getElementById('polarity').innerHTML = "No sentiment is detected."}
        else if(res.score_tag === 'P+'){
            document.getElementById('polarity').innerHTML = "Overall, the tone is very positive"}
        else if(res.score_tag === 'NEU'){
            document.getElementById('polarity').innerHTML = "Overall, the tone is neutral."}
         else if(res.score_tag === 'P'){
             document.getElementById('polarity').innerHTML = "Overall, the tone is positive."}

     document.getElementById('other').innerHTML = "Other details are " + res.segment_list;
    })

    
        
}

    




export { handleSubmit }



$(document).ready(()=>{

    const sendRequest=(name)=>{
const url = `https://api.genderize.io?name=${name}`
$.get(url, (response)=>{
    $("#name1").text(response.gender)
    $("#prob").text(response.probability)
    $("#count").text(response.count)
}) 
    }
    $("#form_1").submit(function(e)
    {
        e.preventDefault() /*makes sure the browser doesnt goes back to its default redirection*/
        const name = $("#name").val();
        sendRequest();
    })
})



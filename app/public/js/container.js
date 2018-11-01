const renderBugs = function(){
    console.log(bugArray)
}


$.ajax ({
    url: '/api/bugs',
    method: "GET"
}).then (function(response){
   console.log(response);
})


$("#bug").on("click", function(){

    $('#bugModal').modal()

});

const renderCard = function(bugArray){
    let card = $(`<div class = "card" style = "width: 18rem;>`);
   
    let title = bugArray.title;
    let description = bugArray.description;
    let link = bugArray.link;
    let pay = bugArray.pay;
    
    card.append(`<p class = "card-title">${title}</p>`);
    card.append(`<p class = "card-text">${description}</p>`);
    card.append(`<a href="${link}" class="btn btn-primary">See code</a>`);
    card.append(`<p class = "card-text">${pay}</p>`);
   
    return card;
}




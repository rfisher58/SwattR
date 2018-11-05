$(function(){


$.get('/api/openBugs').then(function(data){
    // console.log(data);
    for(i = 0; i < data.length; i++){
        console.log(data[i]);
    let dataCard = $(`<div class = "card" style = "width: 18rem;"><p class = "card-title" id = "title">${data[i].title}</p><p class = "card-title" id = "title">${data[i].title}</p><p class = "card-text" id = "description">${data[i].description}</p><a href="${data[i].link}" class="btn btn-primary" id = "link" >See code</a><p class = "card-text" id = "pay" >${data[i].pay}</p></div>`);
        $('#cardRow').append(dataCard);
    }
})

    $('#bug').on('click', function(){
        $('#bugModal').modal();
    })


    $('#postBug').on('click', function(event){
        event.preventDefault();

        console.log('this function is running');

        const newBug = {
            title: $('#bug-title').val(),
            description: $('#bug-description').val(),
            link: $('#codeLink').val(),
            pay: $('#pay').val()
           };
           
           for(let key in newBug){
            if(newBug[key] === ''){
              alert('Please fill out all fields');
              return;
            }
          }
        

          $.post('/api/openBugs', newBug, function(data){
                console.log("this is working"); 

                console.log(newBug);
               let finishedCard = renderCard();
               $('#cardRow').append(finishedCard);
            }
            
          )


          const renderCard = function(newBug){
              console.log('rendering card');
                      
              let title = $('#bug-title').val();
              let description = $('#bug-description').val();
              let link = $('#codeLink').val();
              let pay = $('#pay').val();
              let card = $(`<div class = "card" style = "width: 18rem;"><p class = "card-title" id = "title">${title}</p><p class = "card-title" id = "title">${title}</p><p class = "card-text" id = "description">${description}</p><a href="${link}" class="btn btn-primary" id = "link" >See code</a><p class = "card-text" id = "pay" >${pay}</p></div>`);
            return card;


        }



    })
})



















// const renderBugs = function(){
//     console.log(bugArray)
// }


// $.ajax ({
//     url: '/api/bugs',
//     method: "GET"
// }).then (function(response){
//    console.log(response);
// })


// $("#bug").on("click", function(){

//     $('#bugModal').modal()

// });






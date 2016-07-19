
$("form").submit(function(e){ //calling the function on click of submit button
    e.preventDefault();        //preventing the default parameter of the form
    $.ajax({                    //making ajax call
     	url: "http://www.omdbapi.com/?s="+$('#input').val(),
        dataType: 'json',

        success: function(data){                //passing the data
            var moviedata=data.Search;          //storing the search arrray in moviedata var

            for(i=0;i<moviedata.length;i++){    //iterating the moviedata
                
                $("<img></img>",{               //writing image tag for the image in movied details
                src:moviedata[i].Poster,
                class:"col-lg-4 col-sm-4 col-md-4 col-xs-4 details1 img-responsive",
                id:"images",
                }).insertAfter(".details");


                $("<div></div>",{               //writing div tag for the type in movied details
                    height:"100px",
                    text:moviedata[i].Type,
                    class:"col-lg-2 col-sm-2 col-md-2 col-xs-2 details1",
                }).insertAfter(".details");

                    $("<div></div>",{           //writing div tag for the imdbid in movied details
                    height:"100px",
                    text:moviedata[i].imdbID,
                    class:"col-lg-2 col-sm-2 col-md-2 col-xs-2 details1",
                }).insertAfter(".details");

                $("<div></div>",{               //writing div tag for the year value in movied details
                    height:"100px",
                    text:moviedata[i].Year,
                    class:"col-lg-2 col-sm-2 col-md-2 col-xs-2 details1",
                }).insertAfter(".details");

                $("<div></div>",{               //writing div tag for the image in movied details
                    height:"100px",
                    text:moviedata[i].Title,
                    class:"col-lg-2 col-sm-2 col-md-2 col-xs-2 details1",
                }).insertAfter(".details");    
            }                       
        }
    });
});
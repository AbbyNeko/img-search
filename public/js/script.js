
//button event listener
document.getElementById('search-btn').addEventListener('click', searchImg);

//event listener if enter is pressed
$('form').submit((evt) => {
    evt.preventDefault();
    searchImg();
});

//does a Flickr image request and shows first 20 images
function searchImg() {

    //get value of search input
    var searchInput = $("#search-img").val();

    console.log(searchInput);

    if(searchInput.length > 0) {
        //clears response if any
        $('#search-response').text("");
        //clears results if any
        $('#pic-results').text('');

        let url = `https://api.flickr.com/services/rest?api_key=165ca9e8101be3f19d41beeb4bc2e8c2&format=json&method=flickr.photos.search&safe_search=1&nojsoncallback=1&text=${searchInput}&tags=${searchInput}`;

        $.get(url, function(data) {

            //console.log('results - '+JSON.stringify(data));

            if(data != '') {

                let firstSet = data['photos']['photo'].slice(0,20);
                //console.log('20 results - '+JSON.stringify(firstSet));
                
                let resultsHtml = '';

                firstSet.map((img) => {
                    resultsHtml += `<img src="https://live.staticflickr.com/${img.server}/${img.id}_${img.secret}_q.jpg" alt="${img.title}"/>`;
                });

                $("#pic-results").append(resultsHtml);

            }else {
                $('#search-response').text("No Results found :(");
            }

        });

    } else {
        $('#search-response').text("Please enter something :(");
    }

}
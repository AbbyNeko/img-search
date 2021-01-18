document.getElementById('search-btn').addEventListener('click', searchImg);

//does a Flickr image request and shows first 20 images
function searchImg() {

    //get value of search input
    var searchInput = $("#search-img").val();

    console.log(searchInput);

    if(searchInput.length > 0) {
        //clears response if any
        $('#search-response').text("");

        let url = 'https://api.flickr.com/services/rest?api_key=165ca9e8101be3f19d41beeb4bc2e8c2&method=flickr.photos.search&safe_search=1&text='+searchInput;

        $.get(url, (data) => {

            console.log('results - '+JSON.stringify(data));

            if(data.length > 0) {


            }else {
                $('#search-response').text("No Results found :(");
            }

        });

    } else {
        $('#search-response').text("Please enter something :(");
    }

}
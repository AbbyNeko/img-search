document.getElementById('search-btn').addEventListener('click', searchImg);

//does a Flickr image request and shows first 20 images
function searchImg() {

    //get value of search input
    var searchInput = $("#search-img").val();

    console.log(searchInput);

    if(searchInput.length > 0) {
        //clears response if any
        $('#search-response').text("");

    } else {
        $('#search-response').text("Please enter something :(");
    }

}
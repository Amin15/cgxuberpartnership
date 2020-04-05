function searchFunction(){

    var action_src = $("query").val();
    var your_form = $('search').val();

    var urlLink = "https://petsitter.com/pet-sitter-jobs?q=";
    urlLink = urlLink + action_src;



    your_form.action = urlLink;

}
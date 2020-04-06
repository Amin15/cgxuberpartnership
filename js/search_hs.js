function searchFunction4(){
    var q4 = document.getElementsByName("query4")[0].value;
    var action_src = "https://housesitter.com/house-sitter-jobs/usa?q=" + q4 + "&utm_source=uber&utm_medium=uberxcareguide&utm_campaign=ubercgpartnership";
    var your_form = document.getElementById('search4');
    your_form.action = window.location.href(action_src);
}
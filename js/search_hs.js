function searchFunction4(){
    var q4 = document.getElementsByName("query4")[0].value;
    var action_src4 = "https://housesitter.com/house-sitter-jobs/usa?q=" + q4 + "&utm_source=uber&utm_medium=uberxcareguide&utm_campaign=ubercgpartnership";
    var your_form4 = document.getElementById('search4');
    your_form4.action = window.open(action_src4);
}
function searchFunction4(){
    var q4 = document.getElementsByName("query4")[1].value;
    var action_src4 = "https://www.housesitter.com/house-sitter-jobs/usa?q=" + q4 + "&utm_source=uber&utm_medium=partnership&utm_campaign=work-hub";
    var your_form4 = document.getElementById('search4');
    your_form4.action = window.open(action_src4);
}
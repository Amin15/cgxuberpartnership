function searchFunction(){
    var q = document.getElementsByName("query")[0].value;
    var action_src = "https://www.petsitter.com/pet-sitter-jobs/usa?q=" + q + "&utm_source=uber&utm_medium=uberxcareguide&utm_campaign=ubercgpartnership";
    var your_form = document.getElementById('search');
    your_form.action = window.open(action_src);
}
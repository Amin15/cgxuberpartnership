function searchFunction(){
    var q = document.getElementsByName("query")[1].value;
    var utm = '&utm_source=uber&utm_medium=uberxcareguide&utm_campaign=ubercgpartnership'
    var action_src = "https://petsitter.com/pet-sitter-jobs/usa?q=" + q + utm;
    var your_form = document.getElementById('search');
    your_form.action = window.open(action_src) ;
}
function searchFunction(){
    var q = document.getElementsByName("query")[0].value;
    var action_src = "https://petsitter.com/pet-sitter-jobs/usa?q=" + q;
    var your_form = document.getElementById('search');
    your_form.action = window.open(action_src, "_self") ;
}
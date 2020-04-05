function searchFunction(){
    var action_src = "https://petsitter.com/pet-sitter-jobs?q=" + document.getElementsByName("query")[0].value;
    var your_form = document.getElementById('search');
    your_form.action = action_src ;
}
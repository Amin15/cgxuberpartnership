function searchFunction(){
    var action_src = "https://petsitter.com/pet-sitter-jobs?q="
    var q = document.getElementsByName("query")[0].value;
    var your_form = document.getElementById('search');
    your_form.action = window.open(action_src+q) ;
}
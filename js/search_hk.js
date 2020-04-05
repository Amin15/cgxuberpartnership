function searchFunction2(){
    var q2 = $('query2').val();
    var action_src = "https://housekeeper.com/housekeeper-jobs?q=" + q2;
    var your_form = document.getElementById('search2');
    your_form.action = window.open(action_src) ;
}
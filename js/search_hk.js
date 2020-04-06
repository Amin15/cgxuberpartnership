function searchFunction2(){
    var q2 = document.getElementsByName("query2")[0].value;
    var action_src = "https://housekeeper.com/housekeeper-jobs/usa?q=" + q2;
    var your_form = document.getElementById('search2');
    your_form.action = window.open(action_src) ;
}
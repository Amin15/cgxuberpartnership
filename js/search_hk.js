function searchFunction2(){
    var action_src = "https://housekeeper.com/housekeeping-jobs?q=" + document.getElementsByName("query2")[0].value;
    var your_form = document.getElementById('search2');
    your_form.action = action_src ;
}
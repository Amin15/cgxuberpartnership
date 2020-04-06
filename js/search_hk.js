function searchFunction2(){
    var q2 = document.getElementsByName("query2")[0].value;
    var action_src2 = "https://www.housekeeper.com/housekeeper-jobs/usa?q=" + q2 +"&utm_source=uber&utm_medium=partnership&utm_campaign=work-hub";
    var your_form2 = document.getElementById('search2');
    your_form2.action = window.open(action_src2);
}
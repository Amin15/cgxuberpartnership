function searchFunction2(){
    var q2 = document.getElementsByName("query2")[0].value;
    var action_src = "https://housekeeper.com/housekeeper-jobs/usa?q=" + q2 +"&utm_source=uber&utm_medium=uberxcareguide&utm_campaign=ubercgpartnership";
    var your_form = document.getElementById('search2');
    your_form.action = window.open(action_src, "housekeeper.com","width=400,height=300");
}
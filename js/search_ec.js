function searchFunction2(){
    var q3 = document.getElementsByName("query3")[1].value;
    var action_src = "https://eldercare.com/elder-care-provider-jobs/usa?q=" + q3;
    var your_form = document.getElementById('search3');
    your_form.action = window.open(action_src) ;
}
function searchFunction3(){
    var q3 = document.getElementsByName("query3")[1].value;
    var action_src3 = "https://www.eldercare.com/elder-care-provider-jobs/usa?q=" + q3 + "&utm_source=uber&utm_medium=partnership&utm_campaign=work-hub";
    var your_form3 = document.getElementById('search3');
    your_form3.action = window.open(action_src3);
}
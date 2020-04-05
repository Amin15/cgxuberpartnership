function searchFunction3(){
    var q3 = document.getElementsByName("query3")[1].value;
    var utm = "&utm_source=uber&utm_medium=uberxcareguide&utm_campaign=ubercgpartnership"
    var action_src = "https://eldercare.com/elder-care-provider-jobs/usa?q=" + q3 + utm;
    var your_form = document.getElementById('search3');
    your_form.action = window.open(action_src);
}
var myParent = document.querySelector('#hobbies');
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var loader = document.getElementById('loader');
loader.style.display = "none";

function modellingData() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

fetch('https://apim.quickwork.co/ayyub/interview/v1/fetchhobbies', {
    method: "GET",
    headers: {"apikey": "m8bFhVGWZxPG97IZzkLLpUCPNkfPEZQC"}
})
.then(response => response.json()) 
.then((json) => 
    {
        for(var i in json.hobbies)
        {
            for(var hob in json.hobbies[i]){
                var option = document.createElement("option");
                option.value = json.hobbies[i][hob];
                option.text = json.hobbies[i][hob];
                myParent.appendChild(option);
            }
        }
    }
)
.catch(err => console.log(err));

//populating sub category for hobbies
function populate(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";
    if(s1.value === "Playing Chess"){
        var subHobbies = ['Single Player','Multi player']
    } else if(s1.value === "Reading"){
        var subHobbies = ['Book','Novel','Newsletter']
    } else if(s1.value === "Writing"){
        var subHobbies = ['Notes','Letter','Book']
    }

    for(var subOpt in subHobbies){
        var pair = subHobbies[subOpt];
        var newOpt = document.createElement('option');
        newOpt.value = pair;
        newOpt.innerHTML = pair;
        s2.options.add(newOpt);
    }
}

//calling post method
const thisForm = document.getElementById('myForm');
thisForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(thisForm).entries()
    const response = await 
        fetch('https://apim.quickwork.co/ayyub/interview/v1/submitdata', {
        method: 'POST',
        headers: { 'apikey': 'm8bFhVGWZxPG97IZzkLLpUCPNkfPEZQC' },
        body: JSON.stringify(Object.fromEntries(formData))
    });

    if(response.status === 200){
        loader.style.display = "block";
        const result = await response.json();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var gender = document.getElementById('gender').value;
        var hobbies = document.getElementById('hobbies').value;
        var hobbiesSubCat = document.getElementById('subhobbies').value;
        let ele = document.getElementById('share_list_popup');
        var paraName = document.createElement("p");
        paraName.innerHTML = "Name : " + name;
        ele.appendChild(paraName);
        var paraMail = document.createElement("p");
        paraMail.innerHTML = "E-Mail : " + email;
        ele.appendChild(paraMail);
        var paraGender = document.createElement("p");
        paraGender.innerHTML = "Gender : " + gender;
        ele.appendChild(paraGender);
        var paraHobby = document.createElement("p");
        paraHobby.innerHTML = "Hobbies : " + hobbies;
        ele.appendChild(paraHobby);
        var paraSubHobby = document.createElement("p");
        paraSubHobby.innerHTML = "Hobbies Category : " + hobbiesSubCat;
        ele.appendChild(paraSubHobby);
        loader.style.display = "none";
    } else if(response.status === 404){
        loader.style.display = "block";
        let ele = document.getElementById('share_list_popup');
        var paraError = document.createElement("p");
        paraError.innerHTML = "Something went wrong, please try again after some time..!";
        ele.appendChild(paraError);
        loader.style.display = "none";
    }
});

/* var normalizedArray = [];
//Create and append the options
for(var i = 0; i < normalizedArray.length; i++) {
    var option = document.createElement("option");
    option.value = normalizedArray[i].value;
    option.text = normalizedArray[i].value;
    myParent.appendChild(option);
} */

/* var text = document.createTextNode(data.hobbies[i]);
option.appendChild(text);
option.setAttribute("value",data.hobbies[i]);
dropdown.insertBefore(option,dropdown.lastChild); */
/* const url = 'https://apim.quickwork.co/ayyub/interview/v1/fetchhobbies';
fetch(url, {
    method: "GET",
    headers: {"apikey": "m8bFhVGWZxPG97IZzkLLpUCPNkfPEZQC"}
})
.then(response => response.json()) 
.then(json => Object.entries(json).forEach(([value]) => {
    console.log(`${key}: ${value}`)
}))
.catch(err => console.log(err));
console.log(normalizedArray); */

//dropdown.length = 0;

/* let defaultOption = document.createElement('option');
defaultOption.text = '---Select---';
defaultOption.value = '---Select---';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0; */

/* const url = 'https://apim.quickwork.co/ayyub/interview/v1/fetchhobbies';
fetch(url, {
    method: "GET",
    headers: {"apikey": "m8bFhVGWZxPG97IZzkLLpUCPNkfPEZQC"}
  })  
.then(  
    function(response) {  
        if (response.status !== 200) {  
            console.warn('Looks like there was a problem. Status Code: ' + response.status);
            return;  
        }
 
        response.json().then(function(data) {  
            for (let i = 0; i < data.hobbies.length; i++) {
                let option = document.createElement('option');
                option.text = data.hobbies[i].value;
                option.value = data.hobbies[i].value;
                dropdown.add(option);
            }    
        });  
    }  
)
.catch(function(err) {  
    console.error('Fetch Error -', err);  
}); */
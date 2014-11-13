// a list of objects
var section = [
    {name: "James", house: "Winthrop"},
    {name: "Molly", house: "Cabot"},
    {name: "Carl", house: "Kirkland"}
];

// C-style for-loop
for (var i = 0; i < section.length; i++) {
    // console log can print entire objects
    console.log(section[i]);
}

// JS-style foreach-loop
for (var i in section) {
    var student = section[i];
    
    // JS foreach-loops work for properies of objects too
    for (var key in student) {
        // notice how we can get the value of this object
        console.log(key, student[key]);
    }
}

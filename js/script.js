let sidebar = document.getElementById("sidebar");
let content = document.querySelector(".content");
let toggle_sidebar = document.querySelector("#sidebar-toggle");

toggle_sidebar = document.querySelector('#sidebar-toggle');

toggle_sidebar.addEventListener('click', () => {
    let sidebarLeft = window.getComputedStyle(sidebar).left;

    if (window.innerWidth > 767) {

        // Desktop: فتح وإغلاق القائمة الجانبية
        if (sidebarLeft === "-250px") {
            sidebar.style.left = "0";
            content.style.marginLeft = "250px";
        } else {
            sidebar.style.left = "-250px";
            content.style.marginLeft = "0";
        }

    } else {

        // Mobile: فتح وإغلاق القائمة الجانبية
        if (sidebarLeft === "-250px") {
            sidebar.style.left = "0";
        } else {
            sidebar.style.left = "-250px";
        }

    }
});
// toggle_sidebar.addEventListener('click', () => {
//     // إظهار وإخفاء الشريط الجانبي

//     let sidebarWidth = window.getComputedStyle(sidebar).width;
//     if (sidebar.offsetWidth > 0) {
//         sidebar.style.width = "0px";
//         content.style.setProperty  ("margin-left" , "0px" , "important");
//     } else {
//         sidebar.style.width = "250px";
//         content.style.setProperty  ("margin-left" , "250px" , "important");
//      // تعديل marginRight إلى marginRight
//     }
// });

// let messagescontainer = document.getElementById('messages-container');
// let messagesarea = document.getElementById('messages-area');
// messagescontainer.addEventListener("click" , function(){
// messagesarea.style.display = messagesarea.style.display === "block" ? "none" : "block" ;
// });

let messagescontainer = document.getElementById("messages-container");
let messagesarea = document.getElementById("messages-area");

messagescontainer.querySelector("a").addEventListener("click", function(event) {
    event.preventDefault();

    messagesarea.style.display =
        messagesarea.style.display === "block" ? "none" : "block";
});

// new DataTable('#example');

new DataTable('#example', {
    // responsive:true,
    scrollX:true,
    buttons: [
        'copy', 'excel' , 'print','pdf' 
    ],
    layout: {
        topStart: 'buttons'
    }
});











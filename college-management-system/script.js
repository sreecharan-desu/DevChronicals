
window.scrollTo(0,0);

function edit_details(){
    window.scrollTo(100,400);
    document.getElementById("details").style.opacity=1;
    document.getElementById("details").style.transition="5s";
    document.getElementById("details").style.display="block";

    document.getElementById("view_details").style.opacity=0;
    document.getElementById("view_details").style.display="none";

    document.getElementById("u-pass").style.opacity=0;
    document.getElementById("u-pass").style.display="none";
}
function view_details(){
    window.scrollTo(100,400);
    document.getElementById("view_details").style.opacity=1;
    document.getElementById("view_details").style.transition="5s";
    document.getElementById("view_details").style.display="block";

    document.getElementById("details").style.opacity=0;
    document.getElementById("details").style.display="none";

    document.getElementById("u-pass").style.opacity=0;
    document.getElementById("u-pass").style.display="none";


}
function u_pass(){
    window.scrollTo(100,400);
    document.getElementById("u-pass").style.opacity=1;
    document.getElementById("u-pass").style.transition="5s";
    document.getElementById("u-pass").style.display="block";

    document.getElementById("details").style.opacity=0;
    document.getElementById("details").style.display="none";

    document.getElementById("view_details").style.opacity=0;
    document.getElementById("view_details").style.display="none";
}
function submit_details(){
    //Backend Actions
    value = 1;
    if (value == 1){
        document.getElementById("alert-positive").style.display="block";
        document.getElementById("alert-positive").style.transition="0.4s";
        setTimeout(
            function further(){
                location.href="Admin.html"
            },1000
        )
    }
    else{
        document.getElementById("alert-danger").style.display="block";
        document.getElementById("alert-danger").style.transition="0.4s"; 
        setTimeout(
            function further(){
                window.scrollTo(100,200);
            },1000
        )
        
    }
}

function submit_pass(){
    //Backend Actions
    value = 1;
    if (value == 1){
        document.getElementById("positive").style.display="block";
        document.getElementById("positive").style.transition="0.4s";
        setTimeout(
            function further(){
                location.href="Admin.html"
            },1000
        )
    }
    else{
        document.getElementById("danger").style.display="block";
        document.getElementById("danger").style.transition="0.4s"; 
        setTimeout(
            function further(){
                window.scrollTo(100,200);
            },1000
        )
        
    }
}






function heading(){
    window.scrollTo(0,340);

    //Removing Admin Details (If any)

    document.getElementById("details").style.opacity=0;
    document.getElementById("details").style.display="none";
    
    document.getElementById("view_details").style.opacity=0;
    document.getElementById("view_details").style.display="none";

    document.getElementById("u-pass").style.opacity=0;
    document.getElementById("u-pass").style.display="none";



    //Profile

    document.getElementById("students").style.fontSize="20px"
    document.getElementById("students").style.backgroundColor="transparent"
    document.getElementById("students").style.borderRadius="0px"
    document.getElementById("students").style.padding="0px"
    document.getElementById("students").style.marginLeft="0px"  
    document.getElementById("students").style.marginBottom="0px" 
    document.getElementById("students").style.transition="0.4s ease"


    //Outpass

    document.getElementById("outpass").style.fontSize="20px"
    document.getElementById("outpass").style.backgroundColor="transparent"
    document.getElementById("outpass").style.borderRadius="0px"
    document.getElementById("outpass").style.padding="0px"
    document.getElementById("outpass").style.marginLeft="0px"  
    document.getElementById("outpass").style.marginBottom="0px" 
    document.getElementById("outpass").style.transition="0.4s ease"               
    document.getElementById("options-body").style.display="block";


    //Complaints

    document.getElementById("heading").style.fontSize="40px"
    document.getElementById("heading").style.backgroundColor="white"
    document.getElementById("heading").style.borderRadius="10px"
    document.getElementById("heading").style.padding="20px"
    document.getElementById("heading").style.transition="0.4s ease"
    document.getElementById("heading").style.marginLeft="1px"  
    document.getElementById("heading").style.marginBottom="-10px"                
    document.getElementById("options-body").style.display="block";



    //Content inside 


    document.getElementById("student-complaints").style.display="block";
    document.getElementById("student-outpass").style.display="none";
    document.getElementById("student-profile").style.display="none";

    
}

function outpass(){
//     window.scrollTo(0,340);

//     setTimeout(
//         function out(){
//             window.scrollTo(0,600); 
//         },1000
//     )

    document.getElementById("details").style.opacity=0;
    document.getElementById("details").style.display="none";
    
    document.getElementById("view_details").style.opacity=0;
    document.getElementById("view_details").style.display="none";

    document.getElementById("u-pass").style.opacity=0;
    document.getElementById("u-pass").style.display="none";


    //Complaints

    document.getElementById("heading").style.fontSize="20px"
    document.getElementById("heading").style.backgroundColor="transparent"
    document.getElementById("heading").style.borderRadius="0px"
    document.getElementById("heading").style.padding="0px"
    document.getElementById("heading").style.marginLeft="0px"  
    document.getElementById("heading").style.marginBottom="0px"
    document.getElementById("heading").style.transition="0.4s ease"

    //Profile

    document.getElementById("students").style.fontSize="20px"
    document.getElementById("students").style.backgroundColor="transparent"
    document.getElementById("students").style.borderRadius="0px"
    document.getElementById("students").style.padding="0px"
    document.getElementById("students").style.marginLeft="0px"  
    document.getElementById("students").style.marginBottom="0px" 
    document.getElementById("students").style.transition="0.4s ease"


    //Outpass

    document.getElementById("outpass").style.fontSize="40px"
    document.getElementById("outpass").style.backgroundColor="white"
    document.getElementById("outpass").style.borderRadius="10px"
    document.getElementById("outpass").style.padding="20px"
    document.getElementById("outpass").style.transition="0.4s ease"
    document.getElementById("outpass").style.marginLeft="1px"  
    document.getElementById("outpass").style.marginBottom="-10px"                
    document.getElementById("options-body").style.display="block";


    document.getElementById("student-complaints").style.display="none";
    document.getElementById("student-outpass").style.display="block";
    document.getElementById("student-profile").style.display="none";
}

function stu_profile(){
    window.scrollTo(0,340);


    document.getElementById("details").style.opacity=0;
    document.getElementById("details").style.display="none";
    
    document.getElementById("view_details").style.opacity=0;
    document.getElementById("view_details").style.display="none";

    document.getElementById("u-pass").style.opacity=0;
    document.getElementById("u-pass").style.display="none";


    //Complaints

    document.getElementById("heading").style.fontSize="20px"
    document.getElementById("heading").style.backgroundColor="transparent"
    document.getElementById("heading").style.borderRadius="0px"
    document.getElementById("heading").style.padding="0px"
    document.getElementById("heading").style.marginLeft="0px"  
    document.getElementById("heading").style.marginBottom="0px"
    document.getElementById("heading").style.transition="0.4s ease"

    //Outpass
    document.getElementById("outpass").style.fontSize="20px"
    document.getElementById("outpass").style.backgroundColor="transparent"
    document.getElementById("outpass").style.borderRadius="0px"
    document.getElementById("outpass").style.padding="0px"
    document.getElementById("outpass").style.marginLeft="0px"  
    document.getElementById("outpass").style.marginBottom="0px" 
    document.getElementById("outpass").style.transition="0.4s ease"               
    document.getElementById("options-body").style.display="block";


    //Students

    document.getElementById("students").style.fontSize="40px"
    document.getElementById("students").style.backgroundColor="white"
    document.getElementById("students").style.borderRadius="10px"
    document.getElementById("students").style.padding="20px"
    document.getElementById("students").style.transition="0.4s ease"
    document.getElementById("students").style.marginLeft="1px"  
    document.getElementById("students").style.marginBottom="-10px"                
    document.getElementById("options-body").style.display="block";


    document.getElementById("student-complaints").style.display="none";
    document.getElementById("student-outpass").style.display="none";
    document.getElementById("student-profile").style.display="block";
}

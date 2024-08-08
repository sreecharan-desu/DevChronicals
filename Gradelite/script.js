window.scrollTo(0,0)
location.href="#GradeLite"
// window.addEventListener('contextmenu', function (e) {
//     e.preventDefault();
//     alert("Don't try to Inspect")
// });

function generateEffect(){
    var duration = 3 * 1000;
    var end = Date.now() + duration;

    (function frame() {
      // launch a few confetti from the left edge
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 100,
        origin: { x: 0}
      });
      // and launch a few from the right edge
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 100,
        origin: { x: 1}
      });

      // keep going until we are out of time
      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
    }



window.scrollTo(0,0);

//Subject Names



subject1 = document.getElementById("Subject1")
subject2 = document.getElementById("Subject2")
subject3 = document.getElementById("Subject3")
subject4 = document.getElementById("Subject4")
subject5 = document.getElementById("Subject5")
subject6 = document.getElementById("Subject6")
subject7 = document.getElementById("Subject7")
subject8 = document.getElementById("Subject8")
subject9 = document.getElementById("Subject9")
subject10 = document.getElementById("Subject10")


location.href="#GradeLite";

document.getElementById("10").style.display="none";

function validate(){
        document.getElementById("h2").style.display="block";
        document.getElementById("subjects").style.opacity=1;
        document.getElementById("subjects").style.display="block";
        document.getElementById("h2").style.opacity=1;
        document.getElementById("subjects").style.transition="0.4s ease-in-out";
        document.getElementById("h2").style.transition="0.4s ease-in-out";

            


            branch = document.getElementById("branch").value;

            year = document.getElementById("year").value;

            sem = document.getElementById("sem").value;
            
            data =" #"+ branch + "   " + "   /   " + year + "   " + "   /   " + sem

        document.getElementById("5").style.display="";
        document.getElementById("6").style.display="";
        document.getElementById("7").style.display="";
        document.getElementById("8").style.display="";
        document.getElementById("9").style.display="";
    //===============================================================First Year ==========================================================================

    if (year == 'E1'){ 


        if (year == 'E1' && (sem == 'Sem - 1') ){

            document.getElementById("h2").innerHTML = data; 

            if (branch == 'CSE' && year == 'E1' && sem == 'Sem - 1'){

                //Subject Insertion

                subject1.innerHTML = "# Calculus & Linear Algebra";
                subject2.innerHTML = "# Basic Electrical and Electronics Engg."; 
                subject3.innerHTML = "# Problem Solving and Programming Through C"; 
                subject4.innerHTML = "# Engineering Graphics & Computer Drafting"; 
                subject5.innerHTML = "# English-Language communication Skills Lab-I"; 
                subject6.innerHTML = "# Basic Electrical and Electronics Engg. Lab"; 
                subject7.innerHTML = "# Problem Solving and Programming Through C Lab"; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                //Credits
                

                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 4
                subject4_credits = 2.5
                subject5_credits = 2.5
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 0 // Indian Constitution
                subject9_credits = 0
                subject10_credits = 0 

                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";


            }
            else if(branch == 'ECE' && year == 'E1' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Differential Equations and Multivariable calculus";
                subject2.innerHTML = "# Engineering Physics"; 
                subject3.innerHTML = "# Engineering Physics Lab"; 
                subject4.innerHTML = "# Engineering Graphics and Computer Drafting"; 
                subject5.innerHTML = "# Electrical Technology"; 
                subject6.innerHTML = "# Electrical Technology Lab"; 
                subject7.innerHTML = "# Introduction to Latest Technical Advancements"; 
                subject8.innerHTML = "# Programming & Data Structures"; 
                subject9.innerHTML = "# Programming & Data Structures Lab"; 


                //Credits
                

                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 1.5
                subject4_credits = 2.5
                subject5_credits = 4
                subject6_credits = 1.5
                subject7_credits = 1
                subject8_credits = 3
                subject9_credits = 1.5
                subject10_credits = 0 //Biology for beginers

            }
            else if (branch == 'EEE' && year == 'E1' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Differential Equations and Multivariable Calculus";
                subject2.innerHTML = "# Engineering Physics"; 
                subject3.innerHTML = "# Engineering Physics Lab"; 
                subject4.innerHTML = "# Engineering Graphics & Computer Drafting"; 
                subject5.innerHTML = "# Electrical Technology"; 
                subject6.innerHTML = "# Electrical Technology Lab"; 
                subject7.innerHTML = "# Introduction to Latest Technical Advancements "; 
                subject8.innerHTML = "# Programming & Data Structures"; 
                subject9.innerHTML = "# Programming & Data Structures Lab"; 


                //Credits
               


                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 1.5
                subject4_credits = 2.5
                subject5_credits = 4
                subject6_credits = 1.5
                subject7_credits = 1
                subject8_credits = 3
                subject9_credits = 1.5
                subject10_credits = 0 //No subject
            }
            else if(branch == 'CIVIL' && year == 'E1' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Engineering Chemistry";
                subject2.innerHTML = "# Differential Equations and Multivariable Calculus"; 
                subject3.innerHTML = "# Basic Programming Language"; 
                subject4.innerHTML = "# Engineering Graphics and Computer Drafting"; 
                subject5.innerHTML = "# Computer Aided Drafting (CAD) Lab"; 
                subject6.innerHTML = "# English Language Communication Skills Lab-I"; 
                subject7.innerHTML = "# C Programming Lab"; 
                subject8.innerHTML = ""; //Human Values
                subject9.innerHTML = ""; 



                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";

                //Credits

                subject1_credits = 3
                subject2_credits = 4
                subject3_credits = 4
                subject4_credits = 2.5
                subject5_credits = 1.5
                subject6_credits = 2.5
                subject7_credits = 1.5
                subject8_credits = 0   //Human Values
                subject9_credits = 0
                subject10_credits = 0
            
            }
            else if(branch == 'MECH' && year == 'E1' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Differential Equations and Multivariable Calculus";
                subject2.innerHTML = "# English Language Communication Skills Lab - 1 "; 
                subject3.innerHTML = "# Engineering Physics "; 
                subject4.innerHTML = "# Basic Electrical and Electronics Engineering"; 
                subject5.innerHTML = "# Engineering Chemistry"; 
                subject6.innerHTML = "# Workshop Practice"; 
                subject7.innerHTML = "# Basic Electrical & Electronics Engineering Lab"; 
                subject8.innerHTML = "# Engineering Physics & Chemistry Lab"; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 4
                subject2_credits = 2.5
                subject3_credits = 4
                subject4_credits = 4
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 0


                document.getElementById("9").style.display="none";

            }
        }
        else if (year == 'E1' && sem == 'Sem - 2'){

            document.getElementById("h2").innerHTML = data; 

            if (branch == 'CSE' && year == 'E1' && sem == 'Sem - 2'){

                //Subject Insertion

                subject1.innerHTML = "# Discrete Mathematics";
                subject2.innerHTML = "# Engineering Physics"; 
                subject3.innerHTML = "# Managerial Economics and Finance Analysis"; 
                subject4.innerHTML = "# Object Oriented Programming through Java"; 
                subject5.innerHTML = "# Data Structures"; 
                subject6.innerHTML = "# Engineering Physics Lab"; 
                subject7.innerHTML = "# Object Oriented Programming through Java Lab"; 
                subject8.innerHTML = "# Data Structures Lab"; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 3
                subject4_credits = 4
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 0

                document.getElementById("9").style.display="none";


            }
            else if(branch == 'ECE' && year == 'E1' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Mathematical Methods";
                subject2.innerHTML = "# Object Oriented Programming"; 
                subject3.innerHTML = "# Object Oriented Programming Laboratory"; 
                subject4.innerHTML = "# Computational Lab"; 
                subject5.innerHTML = "# English-Language Communication skills Lab-1"; 
                subject6.innerHTML = "# Electronic Devices and Circuits"; 
                subject7.innerHTML = "# Electronic Devices and Circuits Lab"; 
                subject8.innerHTML = "# Network Theory"; 
                subject9.innerHTML = "# Engineering Graphics and Design"; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 4
                subject2_credits = 2
                subject3_credits = 1.5
                subject4_credits = 1.5
                subject5_credits = 2.5
                subject6_credits = 4
                subject7_credits = 1.5
                subject8_credits = 4
                subject9_credits = 2.5

            }
            else if (branch == 'EEE' && year == 'E1' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Mathematical Methods";
                subject2.innerHTML = "# Digital Logic Design"; 
                subject3.innerHTML = "# Digital Logic Design Lab"; 
                subject4.innerHTML = "# Computational Lab"; 
                subject5.innerHTML = "# English Language communication Skills Lab-1"; 
                subject6.innerHTML = "# Electronic Devices and Circuits"; 
                subject7.innerHTML = "# Electronic Devices and Circuits Lab"; 
                subject8.innerHTML = "# Network Theory"; 
                subject9.innerHTML = "# Introduction to AI"; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 1.5
                subject4_credits = 1.5
                subject5_credits = 2.5
                subject6_credits = 4
                subject7_credits = 1.5
                subject8_credits = 4
                subject9_credits = 1
            }
            else if(branch == 'CIVIL' && year == 'E1' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Engineering Physics";
                subject2.innerHTML = "# Mathematical Methods"; 
                subject3.innerHTML = "# Basic Electrical and Electronics Engineering"; 
                subject4.innerHTML = "# Engineering Mechanics"; 
                subject5.innerHTML = "# Engineering Geology"; 
                subject6.innerHTML = "# Engineering Physics Lab"; 
                subject7.innerHTML = "# Workshop"; 
                subject8.innerHTML = "# Environmental Science"; 
                subject9.innerHTML = ""; 



                document.getElementById("9").style.display="none";

                                //Credits
                subject10_credits = 0


                subject1_credits = 3
                subject2_credits = 4
                subject3_credits = 3
                subject4_credits = 4
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 0
                subject9_credits = 0

            }
            else if(branch == 'MECH' && year == 'E1' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Mathematical Methods";
                subject2.innerHTML = "# Engineering Mechanics "; 
                subject3.innerHTML = "# Material Science & Metallurgy"; 
                subject4.innerHTML = "# Programming and Data Structures"; 
                subject5.innerHTML = "# Engineering Graphics and Computer Drafting"; 
                subject6.innerHTML = "# Programming and Data Structures Lab"; 
                subject7.innerHTML = "# Material Science and Metallurgy Lab"; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 2.5
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 0
                subject9_credits = 0


                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";

            }
        }
    }
    //=====================================================================First year Completed====================================================================== 

    //=====================================================================Second year ====================================================================== 

    else if (year == 'E2'){ 

        if (year == 'E2' && (sem == 'Sem - 1') ){

            document.getElementById("h2").innerHTML = data; 

            if (branch == 'CSE' && year == 'E2' && sem == 'Sem - 1'){

                //Subject Insertion

                subject1.innerHTML = "# Probability and Statistics";
                subject2.innerHTML = "# Digital Logic Design"; 
                subject3.innerHTML = "# Design & Analysis of Algorithms"; 
                subject4.innerHTML = "# Database Management Systems"; 
                subject5.innerHTML = "# Formal Languages & Automata Theory"; 
                subject6.innerHTML = "# Design & Analysis of Algorithms Lab"; 
                subject7.innerHTML = "# Digital Logic Design Lab"; 
                subject8.innerHTML = "# Database Management Systems Lab"; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 4
                subject2_credits = 3
                subject3_credits = 4
                subject4_credits = 3
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 0

                document.getElementById("9").style.display="none";


            }
            else if(branch == 'ECE' && year == 'E2' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Probability & Random Variables";
                subject2.innerHTML = "# Internet of Things Lab"; 
                subject3.innerHTML = "# Analog Electronic Circuits"; 
                subject4.innerHTML = "# Analog Electronic Circuits Lab"; 
                subject5.innerHTML = "# Digital Logic Design"; 
                subject6.innerHTML = "# Digital Logic Design Lab"; 
                subject7.innerHTML = "# Digital Signal Processing"; 
                subject8.innerHTML = "# Digital Signal Processing Lab"; 
                subject9.innerHTML = "# Control Systems"; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 3
                subject2_credits = 1.5
                subject3_credits = 4
                subject4_credits = 1.5
                subject5_credits = 4
                subject6_credits = 1.5
                subject7_credits = 4
                subject8_credits = 1.5
                subject9_credits = 3

            }
            else if (branch == 'EEE' && year == 'E2' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Probability & Random Variables"
                subject2.innerHTML = "# Internet of Things Lab"; 
                subject3.innerHTML = "# Analog Electronic Circuits"; 
                subject4.innerHTML = "# Analog Electronic Circuits Lab"; 
                subject5.innerHTML = "# Object Oriented Programming"; 
                subject6.innerHTML = "# Object Oriented Programming Lab"; 
                subject7.innerHTML = "# Signals & Systems"; 
                subject8.innerHTML = "# Electrical Machines"; 
                subject9.innerHTML = "# Electrical Machines Lab"; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 3
                subject2_credits = 1
                subject3_credits = 4
                subject4_credits = 1.5
                subject5_credits = 3
                subject6_credits = 1
                subject7_credits = 4
                subject8_credits = 4
                subject9_credits = 1.5

            }
            else if(branch == 'CIVIL' && year == 'E2' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Management Economics and Financial Analysis";
                subject2.innerHTML = "# Building Materials and Construction"; 
                subject3.innerHTML = "# Concrete Technology"; 
                subject4.innerHTML = "# Mechanics of Fluids"; 
                subject5.innerHTML = "# Mechanics of Materials-I"; 
                subject6.innerHTML = "# Surveying-I"; 
                subject7.innerHTML = "# Mechanics of Materials Lab"; 
                subject8.innerHTML = "# Surveying Lab"; 
                subject9.innerHTML = ""; 


                document.getElementById("9").style.display="none";

                                //Credits
                subject10_credits = 0


                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 3
                subject6_credits = 3
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 0

            }
            else if(branch == 'MECH' && year == 'E2' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Transform Calculus";
                subject2.innerHTML = "# Kinematics of Machinery"; 
                subject3.innerHTML = "# Thermodynamics"; 
                subject4.innerHTML = "# Mechanics of Solids"; 
                subject5.innerHTML = "# Manufacturing Processes"; 
                subject6.innerHTML = "# Mechanics of Solids Lab"; 
                subject7.innerHTML = "# Computer Aided Machine Drawing"; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 4
                subject4_credits = 4
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 0
                subject9_credits = 0


                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";

            }
        }
        else if (year == 'E2' && sem == 'Sem - 2'){

            document.getElementById("h2").innerHTML = data; 

            if (branch == 'CSE' && year == 'E2' && sem == 'Sem - 2'){

                //Subject Insertion

                subject1.innerHTML = "# Introduction to Operation Research";
                subject2.innerHTML = "# Computer Organization & Architecture"; 
                subject3.innerHTML = "# Data Science with Python"; 
                subject4.innerHTML = "# Web Technologies"; 
                subject5.innerHTML = "# Compiler Design"; 
                subject6.innerHTML = "# Computer Organization & Architecture Lab"; 
                subject7.innerHTML = "# Data Science with Python Lab"; 
                subject8.innerHTML = "# Web Technologies Lab"; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 0

                document.getElementById("9").style.display="none";


            }
            else if(branch == 'ECE' && year == 'E2' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Robotics Laboratory";
                subject2.innerHTML = "# Communication Systems-1"; 
                subject3.innerHTML = "# Communication Systems-1 Lab"; 
                subject4.innerHTML = "# Digital System Design"; 
                subject5.innerHTML = "# Digital System Design Lab"; 
                subject6.innerHTML = "# Linear Integrated Circuits"; 
                subject7.innerHTML = "# Linear Integrated Circuits Lab"; 
                subject8.innerHTML = "# Electromagnetic Waves & Guided Media"; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 2.5
                subject2_credits = 4
                subject3_credits = 1.5
                subject4_credits = 4
                subject5_credits = 1.5
                subject6_credits = 4
                subject7_credits = 1.5
                subject8_credits = 4
                subject9_credits = 0

                document.getElementById("9").style.display="none";

            }
            else if (branch == 'EEE' && year == 'E2' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Robotics Laboratory";
                subject2.innerHTML = "# Power Systems - I"; 
                subject3.innerHTML = "# Machine Learning"; 
                subject4.innerHTML = "# Control Systems"; 
                subject5.innerHTML = "# Control Systems Lab"; 
                subject6.innerHTML = "# Linear Integrated Circuits"; 
                subject7.innerHTML = "# Linear Integrated Circuits Lab"; 
                subject8.innerHTML = "# Power Electronics"; 
                subject9.innerHTML = "# Power Electronics Lab"; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 1
                subject2_credits = 4
                subject3_credits = 3
                subject4_credits = 4
                subject5_credits = 1.5
                subject6_credits = 4
                subject7_credits = 1.5
                subject8_credits = 4
                subject9_credits = 1.5
            }
            else if(branch == 'CIVIL' && year == 'E2' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Hydraulics Engineering";
                subject2.innerHTML = "# Mechanics of Materials-II"; 
                subject3.innerHTML = "# Soil Mechanics"; 
                subject4.innerHTML = "# Structural Analysis"; 
                subject5.innerHTML = "# Surveying-II"; 
                subject6.innerHTML = "# Water Resources Engineering"; 
                subject7.innerHTML = "# Concrete Technology Lab"; 
                subject8.innerHTML = "# Hydraulics Engineering Lab"; 
                subject9.innerHTML = ""; 



                document.getElementById("9").style.display="none";

                                //Credits
                subject10_credits = 0


                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 4
                subject4_credits = 4
                subject5_credits = 3
                subject6_credits = 3
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 0

            }
            else if(branch == 'MECH' && year == 'E2' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Design of Machine Elements";
                subject2.innerHTML = "# Dynamics of Machinery"; 
                subject3.innerHTML = "# Fluid Mechanics & Hydraulic Machinery"; 
                subject4.innerHTML = "# Metal Cutting and Machine Tools"; 
                subject5.innerHTML = "# Probability and Statistics"; 
                subject6.innerHTML = "# Metal cutting and Machine Tools Lab"; 
                subject7.innerHTML = "# Fluid Mechanics & Hydraulic Machinery Lab"; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 4
                subject4_credits = 4
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 0
                subject9_credits = 0


                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";

            }
        }
    }

    //=====================================================================Second year Completed====================================================================== 

    else if (year == 'E3'){ 

        if (year == 'E3' && (sem == 'Sem - 1') ){

            document.getElementById("h2").innerHTML = data; 

            if (branch == 'CSE' && year == 'E3' && sem == 'Sem - 1'){

                //Subject Insertion

                subject1.innerHTML = "# Operating System";
                subject2.innerHTML = "# Computer Networks"; 
                subject3.innerHTML = "# Software Engineering"; 
                subject4.innerHTML = "# Mathematical Foundations for Data Science"; 
                subject5.innerHTML = "# Elective I"; 
                subject6.innerHTML = "# Operating System Lab"; 
                subject7.innerHTML = "# Computer Networks Lab"; 
                subject8.innerHTML = "# Software Engineering Lab"; 
                subject9.innerHTML = "# English-Language communication Skills Lab- II"; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 1.5


            }
            else if(branch == 'ECE' && year == 'E3' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Computer Networks";
                subject2.innerHTML = "# Computer Organization & Architecture"; 
                subject3.innerHTML = "# English-Language Communication skills Lab-2"; 
                subject4.innerHTML = "# Communication Systems- 2"; 
                subject5.innerHTML = "# Communication Systems -2 Lab"; 
                subject6.innerHTML = "# Microprocessors,Microcontrollers & Computer Networks Lab"; 
                subject7.innerHTML = "# Radio Frequency & Microwave Engg. Lab"; 
                subject8.innerHTML = "# Mini-Project-I (Socially Relevant Project)"; 
                subject9.innerHTML = ""; 



                                //Credits
                subject10_credits = 0

                subject1_credits = 3
                subject2_credits = 4
                subject3_credits = 1.5
                subject4_credits = 4
                subject5_credits = 1.5
                subject6_credits = 1.5
                subject7_credits = 2.5
                subject8_credits = 1
                subject9_credits = 0

                document.getElementById("9").style.display="none";

            }
            else if (branch == 'EEE' && year == 'E3' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Digital Signal Processing";
                subject2.innerHTML = "# Power Systems - II"; 
                subject3.innerHTML = "# Power Systems Lab"; 
                subject4.innerHTML = "# English Language Communication Skills Lab- 2"; 
                subject5.innerHTML = "# Electrical Vehicles"; 
                subject6.innerHTML = "# Electrical Vehicles Lab"; 
                subject7.innerHTML = "# Embedded Systems"; 
                subject8.innerHTML = "# Embedded Systems Lab"; 
                subject9.innerHTML = "# Mini-Project-I"; 
                subject10.innerHTML = "# Product Design & Innovation"

                //Credits


                subject1_credits = 3
                subject2_credits = 4
                subject3_credits = 1.5
                subject4_credits = 1.5
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 3
                subject8_credits = 1.5
                subject9_credits = 1
                subject10_credits = 1

                document.getElementById("10").style.display="";


            }
            else if(branch == 'CIVIL' && year == 'E3' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Advanced Structural Analysis";
                subject2.innerHTML = "# Design of Reinforced concrete Structures"; 
                subject3.innerHTML = "# Environmental Engineering-I"; 
                subject4.innerHTML = "# Estimation and Costing"; 
                subject5.innerHTML = "# Transportation Engineering-I"; 
                subject6.innerHTML = "# English Language Communication Skills Lab-II"; 
                subject7.innerHTML = "# Soil Mechanics Lab"; 
                subject8.innerHTML = "# Transportation Engineering Lab"; 
                subject9.innerHTML = ""; 


                document.getElementById("9").style.display="none";

                                //Credits
                subject10_credits = 0



                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 0

            }
            else if(branch == 'MECH' && year == 'E3' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Heat Transfer";
                subject2.innerHTML = "# Design of Transmission Elements "; 
                subject3.innerHTML = "# Applied Thermodynamics"; 
                subject4.innerHTML = "# Metrology and Mechanical Measurements"; 
                subject5.innerHTML = "# Metrology and Mechanical Measurements Lab"; 
                subject6.innerHTML = "# Heat Transfer Lab"; 
                subject7.innerHTML = "# Applied Thermodynamics Lab"; 
                subject8.innerHTML = "# English Language Communication Skills Lab-II"; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 4
                subject4_credits = 3
                subject5_credits = 1.5
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 0


                document.getElementById("9").style.display="none";

            }
        }
        else if (year == 'E3' && sem == 'Sem - 2'){

            document.getElementById("h2").innerHTML = data; 

            if (branch == 'CSE' && year == 'E3' && sem == 'Sem - 2'){

                //Subject Insertion

                subject1.innerHTML = "# Cryptography and Networks Security";
                subject2.innerHTML = "# Artificial Intelligence"; 
                subject3.innerHTML = "# Elective II"; 
                subject4.innerHTML = "# Elective III"; 
                subject5.innerHTML = "# Open Elective-I"; 
                subject6.innerHTML = "# English-Language communication Skills Lab-I -III"; 
                subject7.innerHTML = "# Mini Project"; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = "# Summer Internship"; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 3
                subject8_credits = ""
                subject9_credits = 3

                document.getElementById("8").style.display="none";


            }
            else if(branch == 'ECE' && year == 'E3' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# English-Language Communication skills Lab-3";
                subject2.innerHTML = "# Product Design & Innovation"; 
                subject3.innerHTML = "# Elective-1"; 
                subject4.innerHTML = "# Elective-2"; 
                subject5.innerHTML = "# Open Elective-1"; 
                subject6.innerHTML = "# Open Elective-2"; 
                subject7.innerHTML = "# Mini Project-II"; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 1.5
                subject2_credits = 1
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 3
                subject6_credits = 3
                subject7_credits = 1.5
                subject8_credits = 0
                subject9_credits = 0

                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";


            }
            else if (branch == 'EEE' && year == 'E3' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# English-Language Communication skills Lab-3";
                subject2.innerHTML = "# Elective-1"; 
                subject3.innerHTML = "# Elective-2"; 
                subject4.innerHTML = "# Open Elective-1"; 
                subject5.innerHTML = "# Open Elective-2"; 
                subject6.innerHTML = "# Mini Project-II"; 
                subject7.innerHTML = ""; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 1.5
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 3
                subject6_credits = 1
                subject7_credits = 0
                subject8_credits = 0
                subject9_credits = 0

                document.getElementById("7").style.display="none";
                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";
            }
            else if(branch == 'CIVIL' && year == 'E3' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Building Planning and Computer Aided Drawing Lab";
                subject2.innerHTML = "# Design of Steel Structures"; 
                subject3.innerHTML = "# Environmental Engineering-II"; 
                subject4.innerHTML = "# Foundation Engineering"; 
                subject5.innerHTML = "# Transportation Engineering-II"; 
                subject6.innerHTML = "# Professional Elective Course-1/MOOC-1"; 
                subject7.innerHTML = "# English Language Communication Skills Lab-1"; 
                subject8.innerHTML = "# Environmental Engineering Lab"; 
                subject9.innerHTML = ""; 



                document.getElementById("9").style.display="none";

                                //Credits
                subject10_credits = 0


                subject1_credits = 2.5
                subject2_credits = 4
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 3
                subject6_credits = 3
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 0

            }
            else if(branch == 'MECH' && year == 'E3' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Operations Research";
                subject2.innerHTML = "# Finite Element Method"; 
                subject3.innerHTML = "# Managerial Economics and Financial Analysis"; 
                subject4.innerHTML = "# Program Elective Course-1"; 
                subject5.innerHTML = "# Program Elective Course-2"; 
                subject6.innerHTML = "# Computer Aided Modeling and Simulation Lab"; 
                subject7.innerHTML = "# English Language Communication Skills Lab-III"; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 0
                subject9_credits = 0


                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";

            }
        }
    }

    //=====================================================================Third year Completed====================================================================== 

    else if (year == 'E4'){ 

        if (year == 'E4' && (sem == 'Sem - 1') ){

            document.getElementById("h2").innerHTML = data; 

            if (branch == 'CSE' && year == 'E4' && sem == 'Sem - 1'){

                //Subject Insertion

                subject1.innerHTML = "# Elective-V";
                subject2.innerHTML = "# Open Elective-III"; 
                subject3.innerHTML = "# Open Elective-IV"; 
                subject4.innerHTML = "# Project-II"; 
                subject5.innerHTML = "# Community Service"; 
                subject6.innerHTML = ""; 
                subject7.innerHTML = ""; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 6
                subject5_credits = 2
                subject6_credits = 0
                subject7_credits = 0
                subject8_credits = 0
                subject9_credits = 0

                document.getElementById("5").style.display="none";
                document.getElementById("6").style.display="none";               
                document.getElementById("7").style.display="none";
                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";


            }
            else if(branch == 'ECE' && year == 'E4' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Elective-3";
                subject2.innerHTML = "# Elective-4"; 
                subject3.innerHTML = "# Open Elective-3"; 
                subject4.innerHTML = "# Summer Internship Project"; 
                subject5.innerHTML = "# Project I"; 
                subject6.innerHTML = ""; 
                subject7.innerHTML = ""; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 0
                subject6_credits = 0
                subject7_credits = 0
                subject8_credits = 0
                subject9_credits = 0


                document.getElementById("5").style.display="none";
                document.getElementById("6").style.display="none";               
                document.getElementById("7").style.display="none";
                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";


            }
            else if (branch == 'EEE' && year == 'E4' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Elective - 3";
                subject2.innerHTML = "# Elective - 4"; 
                subject3.innerHTML = "# Open Elective - 3"; 
                subject4.innerHTML = "# Summer Internship Project"; 
                subject5.innerHTML = "# Project - 1"; 
                subject6.innerHTML = ""; 
                subject7.innerHTML = ""; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 4
                subject6_credits = 0
                subject7_credits = 0
                subject8_credits = 0
                subject9_credits = 0


                document.getElementById("6").style.display="none";               
                document.getElementById("7").style.display="none";
                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";
            }
            else if(branch == 'CIVIL' && year == 'E4' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Professional Elective Course-2/MOOC-2";
                subject2.innerHTML = "# Professional Elective Course-3"; 
                subject3.innerHTML = "# Professional Elective Course-4"; 
                subject4.innerHTML = "# Open Elective Course-1"; 
                subject5.innerHTML = "# Project-1"; 
                subject6.innerHTML = ""; 
                subject7.innerHTML = ""; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                document.getElementById("6").style.display="none";
                document.getElementById("7").style.display="none";
                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";

                                //Credits
                subject10_credits = 0


                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 3
                subject5_credits = 4
                subject6_credits = 0
                subject7_credits = 0
                subject8_credits = 0
                subject9_credits = 0

            }
            else if(branch == 'MECH' && year == 'E4' && sem == 'Sem - 1'){
                //Subject Insertion

                subject1.innerHTML = "# Program Elective Course-3";
                subject2.innerHTML = "# Open Elective Course-1"; 
                subject3.innerHTML = "# Open Elective Course-2"; 
                subject4.innerHTML = "# Project"; 
                subject5.innerHTML = ""; 
                subject6.innerHTML = ""; 
                subject7.innerHTML = ""; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 4.5
                subject5_credits = 0
                subject6_credits = 0
                subject7_credits = 0
                subject8_credits = 0
                subject9_credits = 0


                document.getElementById("5").style.display="none";
                document.getElementById("6").style.display="none";
                document.getElementById("7").style.display="none";
                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";

            }
        }
        else if (year == 'E4' && sem == 'Sem - 2'){

            document.getElementById("h2").innerHTML = data; 

            if (branch == 'CSE' && year == 'E4' && sem == 'Sem - 2'){

                //Subject Insertion

                subject1.innerHTML = "# Discrete Mathematics";
                subject2.innerHTML = "# Engineering Physics"; 
                subject3.innerHTML = "# Managerial Economics and Finance Analysis"; 
                subject4.innerHTML = "# Object Oriented Programming through Java"; 
                subject5.innerHTML = "# Data Structures"; 
                subject6.innerHTML = "# Engineering Physics Lab"; 
                subject7.innerHTML = "# Object Oriented Programming through Java Lab"; 
                subject8.innerHTML = "# Data Structures Lab"; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 4
                subject2_credits = 4
                subject3_credits = 3
                subject4_credits = 4
                subject5_credits = 3
                subject6_credits = 1.5
                subject7_credits = 1.5
                subject8_credits = 1.5
                subject9_credits = 0

                document.getElementById("6").style.display="none";                
                document.getElementById("7").style.display="none";
                document.getElementById("8").style.display="none";                
                document.getElementById("9").style.display="none";


            }
            else if(branch == 'ECE' && year == 'E4' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Community Service";
                subject2.innerHTML = "# Elective-5"; 
                subject3.innerHTML = "# Open Elective-4"; 
                subject4.innerHTML = "# Project-II & Dissertation"; 
                subject5.innerHTML = ""; 
                subject6.innerHTML = ""; 
                subject7.innerHTML = ""; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0

                subject1_credits = 2
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 6
                subject5_credits = 0
                subject6_credits = 0
                subject7_credits = 0
                subject8_credits = 0
                subject9_credits = 0

                document.getElementById("5").style.display="none";                
                document.getElementById("6").style.display="none";                
                document.getElementById("7").style.display="none";
                document.getElementById("8").style.display="none";                
                document.getElementById("9").style.display="none";

            }
            else if (branch == 'EEE' && year == 'E4' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Community Service";
                subject2.innerHTML = "# Elective - 5"; 
                subject3.innerHTML = "# Open Elective - 4"; 
                subject4.innerHTML = "# Project - II & Dissertation"; 
                subject5.innerHTML = ""; 
                subject6.innerHTML = ""; 
                subject7.innerHTML = ""; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 2
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 6
                subject5_credits = 0
                subject6_credits = 0
                subject7_credits = 0
                subject8_credits = 0
                subject9_credits = 0


                document.getElementById("5").style.display="none";               
                document.getElementById("6").style.display="none";               
                document.getElementById("7").style.display="none";
                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";
            }
            else if(branch == 'CIVIL' && year == 'E4' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Professional Elective Course-5";
                subject2.innerHTML = "# Open Elective Course-2/MOOC-3s"; 
                subject3.innerHTML = "# Open Elective Course-3"; 
                subject4.innerHTML = "# Project-2"; 
                subject5.innerHTML = "# Indian Community Services"; 
                subject6.innerHTML = ""; 
                subject7.innerHTML = ""; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 

                document.getElementById("6").style.display="none";
                document.getElementById("7").style.display="none";                
                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";

                                //Credits
                subject10_credits = 0


                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 5
                subject5_credits = 2
                subject6_credits = 0
                subject7_credits = 0
                subject8_credits = 0
                subject9_credits = 0

            }
            else if(branch == 'MECH' && year == 'E4' && sem == 'Sem - 2'){
                //Subject Insertion

                subject1.innerHTML = "# Program Elective Course-4";
                subject2.innerHTML = "# Open Elective Course-3"; 
                subject3.innerHTML = "# Open Elective Course-4"; 
                subject4.innerHTML = "# Community Service"; 
                subject5.innerHTML = "# Project"; 
                subject6.innerHTML = ""; 
                subject7.innerHTML = ""; 
                subject8.innerHTML = ""; 
                subject9.innerHTML = ""; 


                                //Credits
                subject10_credits = 0


                subject1_credits = 3
                subject2_credits = 3
                subject3_credits = 3
                subject4_credits = 2
                subject5_credits = 6
                subject6_credits = 0
                subject7_credits = 0
                subject8_credits = 0
                subject9_credits = 0


                document.getElementById("6").style.display="none";
                document.getElementById("7").style.display="none";
                document.getElementById("8").style.display="none";
                document.getElementById("9").style.display="none";

            }
        }
    }

    //=====================================================================Fourth year Completed====================================================================== 
    else{
        alert("Please Enter a Valid Input")
            document.getElementById("h2").style.display="none";
            document.getElementById("subjects").style.opacity=0;
            document.getElementById("subjects").style.display="none";
            document.getElementById("h2").style.opacity=0;
            location.href="index.html"
        }
    }



    
    function calc_gpa(){

        //Obtained Grades Subject Wise

        subject1_value = document.getElementById("subject1").value
        subject2_value = document.getElementById("subject2").value
        subject3_value = document.getElementById("subject3").value
        subject4_value = document.getElementById("subject4").value
        subject5_value = document.getElementById("subject5").value
        subject6_value = document.getElementById("subject6").value
        subject7_value = document.getElementById("subject7").value
        subject8_value = document.getElementById("subject8").value
        subject9_value = document.getElementById("subject9").value
        subject10_value = document.getElementById("subject10").value
                    
        //Obtained Credits
        Total_Credits_Obtained = (subject1_value * subject1_credits) +
        (subject2_value * subject2_credits) + 
        (subject3_value * subject3_credits) + 
        (subject4_value * subject4_credits) +
        (subject5_value * subject5_credits) + 
        (subject6_value * subject6_credits) + 
        (subject7_value * subject7_credits) + 
        (subject8_value * subject8_credits) + 
        (subject9_value * subject9_credits) + 
        (subject10_value * subject10_credits)
        //Deafault Credits

        Total_credits = subject1_credits+subject2_credits+subject3_credits+subject4_credits+
        subject5_credits+subject6_credits+subject7_credits+subject8_credits+subject9_credits+subject10_credits;

        //Gpa Calculation
                

        Gpa = (Total_Credits_Obtained / Total_credits);
        if(Gpa>=9){
            generateEffect();
        }
        document.getElementById("result").innerHTML= "Your Gpa : " + Gpa
        document.getElementById("mobile-result").innerHTML= "Your Gpa is " + Gpa

    }
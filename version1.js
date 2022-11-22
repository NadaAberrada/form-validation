
        let msgnom = document.getElementById("msgnom");
        let msgprenom = document.getElementById("msgprenom");
        let msgemail = document.getElementById("msgemail");
        let msgtele = document.getElementById("msgtele");
        let msggenre = document.getElementById("msggenre");
        let msggroupe = document.getElementById("msggroupe");
        let msgclub = document.getElementById("msgclub");
       
 
        
        function btnFun(event){
        
          event.preventDefault();
          check();
        
         
        }
       
        
       
        function check(){
               var compt; 
                compt=0;
           var nom=document.getElementById("nom");
           var prenom=document.getElementById("prenom");
              var email=document.getElementById("email");
              var tele=document.getElementById("tele");
               var  genre = document.getElementsByName("genre");
               var  groupe = document.getElementsByName("Groupe");
               var club = document.getElementById("clubselect");
              vide = true;
              empty = true;

             var patt,regex_tel;
              patt=/[a-z]\.[a-z]+@ofppt+\.com/;
              regex_tel = /^\+212[5-7]{1}[0-9]{8}$/;
            if(nom.value.length == "" || nom.value.length<30)
            {  
              msgnom.innerHTML = "veuillez saisir votre nom"; 
              msgnom.style.color="red";
               nom.style.borderColor="red";
              compt++;
           }
            if(prenom.value.length == "" || prenom.value.length<30)
           {
            
            msgprenom.innerHTML = " veuillez saisir votre prenom";
            prenom.style.borderColor="red";
            msgprenom.style.color="red";
            compt++;
           }
       
           if(patt.test(email.value) == false || email.value == ""){

             msgemail.innerHTML = " veuillez saisir votre email correcte";
              msgemail.style.color="red";
              email.style.borderColor="red";
              compt++;
           }
        
           if( regex_tel.test(tele.value) == false || tele.value == ""){
            
             msgtele.innerHTML = " veuillez saisir votre tele correcte";
             msgtele.style.color="red"; 
             tele.style.borderColor="red";
             compt++;
           }
           
            for(i=0;i<genre.length;i++)
            {
              if(genre[i].checked)
              {
                vide=false;
              } 
            }
            if(vide == true)
            {
              msggenre.innerHTML = " veuillez saisir votre genre ";
              msggenre.style.color="red"; 
              compt++;
             
             
             }

             for(i=0;i<groupe.length;i++)
             {
               if(groupe[i].checked)
               {
                
                 empty=false;
                } 
             }
             if(empty == true)
             {
              msggroupe.innerHTML = " veuillez saisir votre groupe ";
              msggroupe.style.color="red"; 
              compt++;
             
            }




                var select;
                select=0;
            for(i=0;i<club.length;i++)
            {
                 if(club[i].selected) 
                 {
                  msgclub.innerHTML = "";
                  select++;
                  
                 }
             
            }
           
           
              if(select > 3 )
              {
                msgclub.innerHTML = "veuillez choisir trois clubs maximun";
                msgclub.style.color="red";
                compt++;
              }
              
               else if(select == 0)
               {
             
                msgclub.innerHTML = "veuillez choisir un club";
                msgclub.style.color="red";
                compt++;
                 }
                 
                 if(compt==0)
               {
              
                  parent.open('http://127.0.0.1:5500/confirmation.html','_blank"');
                }
             
               }
              
               
               
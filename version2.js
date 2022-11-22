
        let msgnom = document.getElementById("msgnom");
        let msgprenom = document.getElementById("msgprenom");
        let msgemail = document.getElementById("msgemail");
        let msgtele = document.getElementById("msgtele");
        let msggenre = document.getElementById("msggenre");
        let msggroupe = document.getElementById("msggroupe");
        let msgclub = document.getElementById("msgclub");



        function btnFun(event){
        
            event.preventDefault();
            inpt();
            }
         
          var compt; 
          compt=0;
          function inptnom(){
             var nom=document.getElementById("nom");
            
             if(nom.value.length == " " || nom.value.length>30)
             {  
               msgnom.innerHTML = "veuillez saisir votre nom"; 
               msgnom.style.color="red";
                nom.style.borderColor="red";
               compt++;
            }
            else{
               msgnom.innerHTML = ""; 
               nom.style.borderColor="green";

            }
          }
           function inptprenom()
               {
                  var prenom=document.getElementById("prenom");
                  if(prenom.value.length == " " || prenom.value.length>30)
             {
              
              msgprenom.innerHTML = " veuillez saisir votre prenom";
              prenom.style.borderColor="red";
              msgprenom.style.color="red";
              compt++;
             }else{
                prenom.style.borderColor="green"; 
                msgprenom.innerHTML = " ";
               


             } }
             function inptemail()
             {
              
              var patt;
                var email=document.getElementById("email");
              patt=/[a-z]\.[a-z]+@ofppt+\.com/;
           
               if(patt.test(email.value) == false || email.value == ""){

                msgemail.innerHTML = " veuillez saisir votre email correcte";
                 msgemail.style.color="red";
                 email.style.borderColor="red";
                 compt++;
               } 
              else{
                msgemail.innerHTML = " ";
                email.style.borderColor="green";


             }
            
           } 
           function inpttele()
           {
            var regex_tel; 
            var tele=document.getElementById("tele");
           regex_tel = /^\+212[5-7]{1}[0-9]{8}$/;
           if( regex_tel.test(tele.value) == false || tele.value == ""){
            msgtele.innerHTML = " veuillez saisir votre tele correcte";
           msgtele.style.color="red"; 
            tele.style.borderColor="red";
            compt++;
           
          
         }  
         else{
          msgtele.innerHTML = " "; tele.style.borderColor="green";
        
          
           }
          }
           function inptgenre(){
            
        var  genre = document.getElementsByName("genre");
          
          
           vide = true;

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
         else{
           msggenre.innerHTML = " ";
          
           
         }
        }
        function inptgroupe(){
        var  groupe = document.getElementsByName("Groupe");
       
        
         empty = true;
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
      } else{
        msggroupe.innerHTML = " ";
      }


          
         } 
        
          function inptselect(){
                
            
              var club = document.getElementById("clubselect");
               
        
             var select;
             select=0;
         for(i=0;i<club.length;i++)
         {
              if(club[i].selected) 
              {select++;
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
              }else{
               msgclub.innerHTML = " ";


              }
              if(compt==0)
              {
             
                 parent.open('http://127.0.0.1:5500/confirmation.html','_blank"');
               }
            }

             

               
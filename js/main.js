//Sara Pereira up201906821

//  !Work in progress for the next exercise!
/*
const image_input = document.querySelector("#imageInput");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#displayImage").style.backgroundImage = `url(${uploaded_image})`;
    setInterval(function(){
        document.querySelector("#displayImage").style.backgroundImage = "url('./img/wideputin_3')";
    }, 5000);
  });
  reader.readAsDataURL(this.files[0]);
});
*/

//jQuery
//Method to run javascript after the page is ready, therefore it can now work when placed inside <head>, according to Duckett Javascript & jQuery p. 312, 313
//It ensures DOM elements are loaded

$(document).ready(function() {
        //Header variables
    let wideText = document.querySelector("#wide");
    let buttonDecrease = document.querySelector("#decrease");
    let buttonIncrease = document.querySelector("#increase");

    //Setting base size of text and weight
    let textSize = 100;
    let textWeight = 400;

    //Increase button
    buttonIncrease.addEventListener("click", function onclick(event){
        //Adding +10pt to text size everytime we click
        textSize = textSize + 10;
        wideText.style.fontSize = textSize + "pt";

        //Adding +100 to text weight everytime we click
        textWeight = textWeight + 100;
        wideText.style.fontWeight = textWeight;

        //Smoother transition with 1s duration
        wideText.style.transition = 1000 + "ms";

        //Disable button everytime fontWeight is > 700
        //fontWeight is an "easier" property to manage because it's value is numeric.
        if(wideText.style.fontWeight > 800){
            buttonIncrease.disabled = true;
            alert(("Thank you for widening Putin!"));
        }
    });

    buttonDecrease.addEventListener("click", function onclick(event){
        textSize = textSize - 10;
        wideText.style.fontSize = textSize + "pt";

        textWeight = textWeight - 100;
        wideText.style.fontWeight = textWeight;
        wideText.style.transition = 1000 + "ms";

        //Disable button everytime fontWeight is > 100
        if(wideText.style.fontWeight == 200){
            alert(("I'm warning you, do not compress Putin any longer!"));
        }
        
        //After warning, redirect to meme
        if(wideText.style.fontWeight == 100){
            alert(("I warned you. Now fear ferocious Wide Putin!"));
            location.href = "https://www.youtube.com/watch?v=VQ7lKPSUc2g";
            buttonDecrease.disabled = true;
        }
    });

    //Second Paragraph
    let namePrompt = document.querySelector("#insertName");

    namePrompt.addEventListener("click", function onclick(event){
        let name = prompt("What's your name?");

        //No matter the answer, wide putin will appear
        let nameTroll = document.querySelector("#nameTroll");
        
        //The button will disappear after prompt
        namePrompt.style.display = "none";

        //Putin gif will appear after prompt disappears
        nameTroll.style.display = "block";
        
        let nameTrollScreenDecrease = document.querySelector("#nameTrollScreenDecrease");

        //If the screen size is < 800, a different gif will appear
        if (window.innerWidth < 800){
            nameTroll.style.display = "none";
            nameTrollScreenDecrease.style.display = "block";
        }
        

        //In case the image gif doesn't load "WIDE PUTIN" (I don't think I made it work)
        nameTroll.onerror = function (){
            nameTroll.style.display = "none";
            nameTroll.innerHTML = "WIDE PUTIN";
        }

        //Increasing padding-bottom so the page accompanies the gif image
        let nameArticleHeight = document.querySelector("#nameArticle");
        nameArticle.style.paddingBottom = 40 + "%";

        //Title changes after prompt is answered
        let titleChange = document.querySelector("#titleChange");
        titleChange.style.display = "none";

        let titleChange2 = document.querySelector("#titleChange2");
        //Another way of doing it would be the same as nameTroll.innerHTML (empty h2), but this time I used style.display to show the second title
        //titleChange2.innerHTML = "You really thought you could get away from wide putin?";
        titleChange2.style.display = "contents";

        //When the title changes/wide putin appears, in 4s scrollToTop
        if (titleChange2.style.display = "contents"){
            setTimeout(
            function scrollToTop(){
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }, 4000);
        };
    });

    // ----------------------------------------------------------------------------------- HERE THE MENU WILL BE CREATED -----------------------------------------------------------------------------------


    //Nav menu with jQuery

    //We create an <ul> element outside of the 
    let ul = document.createElement("ul");

    //https://api.jquery.com/each/ Using an .each() method for looping and creating all of the <li> and <a> I want, with the attributes I need
    //One at a time, going through each '.h2-article-class' and stopping at the last one
    $(".h2-article-class").each( function(){
        let id = $(this).attr("id");//Creating a variable for the "id" attribute that each '.h2-article-class' contains - https://www.sitepoint.com/community/t/jquery-append-id/4092
        let text = $(this).text(); //Creating a variable for each ".h2-article-class" text - https://learn.jquery.com/using-jquery-core/iterating/
        let title = text.split(" ")[0];//Seperate text in the "spaces" and get the first word

        let li = document.createElement('li');//Variable for creating a <li> element
        let a = document.createElement('a');//Variable for creating an <a> element

        $(a).attr("href", "#" + id)//Giving the created <a> element the attribute 'href', '#' + the variable which has the "id" attribute that each '.h2-article-class' contains
        $(li).attr( "class", "menuitems");//Giving the created <li> element the previously css-created class "menuitems"
        $(li).attr( "id", "li_" + id);//Giving the created <li> element the id "li_" + the variable which has the "id" attribute that each '.h2-article-class' contains
        //It's purpose is for every list item to "belong" to each paragraph to be better understood, besides the anchors

        $(li).append(a);//To the previously created <li> we append the previously created <a> element
        $(ul).append(li);//To the previously created <ul> we append the previously created <li> element
        $(a).text(title);//Apply the title split text, the "result", to the created <a>

        //Reaching the end, it will repeat the process until all elements with the class '.h2-article-class' are over
    });

    //Then, it will append this new ul list with all it's items and properties to the html-created nav
    $("nav").append(ul);


    //A way of doing it one at a time, more time consumming and less adaptable:

// $('nav').append($('<ul>'));
// $('ul').append(
//      $('<li>').append(
//      $('<a>').text("about").attr('href', '#art1')
//  ));
//  $('ul').append(
//      $('<li>').append(
//      $('<a>').text("origin").attr('href', '#art2')
//  ));
//  $('ul').append(
//      $('<li>').append(
//      $('<a>').text("spread").attr('href', '#art3')
//  ));
//  $('ul').append(
//      $('<li>').append(
//      $('<a>').text("visitor").attr('href', '#nameArticle')
//  ));
//  $('li').attr( "class", "menuitems");

//Sources: https://stackoverflow.com/questions/1145208/how-to-add-a-list-item-to-an-existing-unordered-list
//         https://stackoverflow.com/questions/60402254/how-to-append-multiple-li-li-elements-to-a-ul-in-jquery






    // ----------------------------------------------------------------------------------- HERE THE MENU ANIMATION (CLICK) WILL BE CREATED -----------------------------------------------------------------------------------

    //Creating the menu, general idea from - https://www.youtube.com/watch?v=57VhFPeD0Xs

    //Everytime we click on the button, nav gets (or gets removed of) the class "active"
    //https://stackoverflow.com/questions/12989036/jquery-click-function-with-same-button-display-different-text
    //I tried using the link's way to show() and hide() either the buttons but I didn't exactly make it work
    $("#tab").click(function(){
        $("nav").toggleClass("active");
        $("#dropArrowIcon").show().next().hide();
        $("#upArrowIcon").next().hide().show();
    })
    
});
 
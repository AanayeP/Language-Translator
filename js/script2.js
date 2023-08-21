const selectTag = document.querySelectorAll("select"), //if want to select by id use "#id_name" insted of "select"
translateBtn = document.querySelector("button"),
fromText = document.querySelector(".text1"),
toText = document.querySelector(".text2"),
exchageIcon = document.querySelector(".exchange"),
icons = document.querySelectorAll(".row i");

selectTag.forEach((tag, id) => {
    for (const country_code in conN) {
        // console.log(countries[country_code]); 
        let selected;
        if(id ==0 && country_code == "en-GB"){
            selected = "selected"; 
        }else if(id == 1 && country_code == "hi-IN") {
            selected = "selected";
        }
        //Interpolation Method (or can use concatination) A placeholder is represented by ${}, with anything within the curly brackets treated as JavaScript and anything outside the brackets treated as a string.
        let option = `<option value="${country_code}" ${selected}>${conN[country_code]}</option>`
        // The insertAdjacentHTML() method inserts HTML code into a specified position.
        tag.insertAdjacentHTML("beforeend", option) // adding option tag inside select tag
    }   
   
});

exchageIcon.addEventListener("click", () => {
    //exchanging textbox and select tag values 
    let tempText = fromText.value,
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    toText.value = tempText;
    selectTag[0].value = selectTag[1].value;
    selectTag[1].value = tempLang;   
});

translateBtn.addEventListener("click", () => {
    let text = fromText.value;
    // console.log(document.getElementById("text_1").value);
    if(text === ""){
        document.getElementById("text_2").value = "";
        button.disabled = true;
    }else{
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;
        // console.log(text, translateFrom, translateTo);
        let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
        //fetching api response and returning it with parsing into js object
        //and in another then method receiving the obj
        fetch(apiUrl).then(res => res.json()).then(data => {
            console.log(data);
            toText.value = data.responseData.translatedText;
        
        })
    }
});
 
icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        // console.log(target);
        if(target.classList.contains("fa-volume-up")){
            // console.log("Speech icon clicked")
            let utterance;
            //if clicked icon has from id, speak the fromTextare value else speak the to Textarea value
            if(target.id == "from"){
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang = selectTag[0].value; //setting utterence language to fromSelect tag value
            }else{
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang = selectTag[0].value; ////setting utterence language to toSelect tag value
            }
            speechSynthesis.speak(utterance);
        }
        
        
    });
});

voice.addEventListener("click",function(){
    var Speech = true;
    window.SpeechRecognition = window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.interimResults = true;

    recognition.addEventListener("result", e=>{
        const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)

        text_1.innerHTML = transcript
        
    })

    if(Speech = true){
        recognition.start();
    }

    function myFunction() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }


})
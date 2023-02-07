
    function changeLanguage(lang) {
      location.hash = lang;
      location.reload();
    }
  
  
    var language = {
      eng: {
        welcome: "Welcome to the GeeksforGeeks " +
        "Portal! You can choose any language " + 
        "using the buttons above!"
      },
      pl: {
        welcome: "¡Bienvenido al portal GeeksforGeeks! " +
        "¡Puedes elegir cualquier idioma usando " +
        "los botones de arriba!"
      },
      rus: {
        welcome: "GeeksforGeeks पोर्टल पर आपका स्वागत है! " +
        "आप ऊपर दिए गए बटन का उपयोग करके किसी भी " + 
        "भाषा को चुन सकते हैं!"
      }
    };

    if (window.location.hash) {
  

      if (window.location.hash == "#pl") {
        siteContent.textContent =
          language.pl.welcome;
      }
      else if (window.location.hash == "#rus") {
        siteContent.textContent =
          language.rus.welcome;
      }
    }

    function changeLanguage(lang) {
      location.hash = lang;
      location.reload();
    }
  
  
    var language = {
      eng: {
        welcome: "Some testing text " +
        "Some testing text " + 
        "Some testing text ",
      },
      pl: {
        welcome: "Jakiś testowy tekst " +
        "Jakiś testowy tekst " +
        "Jakiś testowy tekst "
      },
      rus: {
        welcome: "Некоторый тестовый текст " +
        "Некоторый тестовый текст " + 
        "Некоторый тестовый текст"
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
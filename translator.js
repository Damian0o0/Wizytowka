
    function changeLanguage(lang) {
      location.hash = lang;
      location.reload();
    }
  
  
    var language = {
      eng: {
        welcome: "Some testing text " +
        "Some testing text " + 
        "Some testing text ",
        przycisk: "Send"
      },
      pl: {
        welcome: "Jakiś testowy tekst " +
        "Jakiś testowy tekst " +
        "Jakiś testowy tekst ",
        przycisk: "Prześlij"
      },
      rus: {
        welcome: "Некоторый тестовый текст " +
        "Некоторый тестовый текст " + 
        "Некоторый тестовый текст",
        przycisk: "Отправить"
      }
    };

    if (window.location.hash) {
  
      if (window.location.hash == "#pl") {
        siteContent.textContent =
          language.pl.welcome;
          przycisk.textContent =
          language.pl.przycisk;
      }
      else if (window.location.hash == "#rus") {
        siteContent.textContent =
          language.rus.welcome;
          przycisk.textContent =
          language.rus.przycisk;
      }
    }
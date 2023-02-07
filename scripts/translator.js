
    function changeLanguage(lang) {
      location.hash = lang;
      location.reload();
    }
  
  
    var language = {
      pl: {
        title: "Tytuł strony",
        welcome: "Jakiś testowy tekst",
        aboutme: "O mnie",
        abilities: "Umiejętności",
        projects: "Projekty",
        contact: "Kontakt",
        pierwszeh: "Cześć!",
        drugieh: "Nazywam sie Damian Górka",
        trzecieh: "Interesuję się piłką nożną i programowaniem",
        h1projekty: "Moje inne projekty",
        wisieelec: "Wisielec",
        myBtn: "Informacje"
      },
      eng: {
        title: "Business site",
        welcome: "Some testing text",
        aboutme: "About me",
        abilities: "Abilities",
        projects: "Projects",
        contact: "Contact",
        pierwszeh: "Hi!",
        drugieh: "My name is Damian Górka",
        trzecieh: "My interests are football and programming",
        h1projekty: "My other projects",
        wisieelec: "Hangman",
        myBtn: "Information"
      },
      rus: {
        title: "Визитная карточка",
        welcome: "Некоторый тестовый текст",
        aboutme: "Обо мне",
        abilities: "Навыки",
        projects: "Проекты",
        contact: "Связаться с",
        pierwszeh: "Привет!",
        drugieh: "Меня зовут Damian Górka",
        trzecieh: "Я интересуюсь футболом и программированием",
        h1projekty: "Другие мои проекты",
        wisieelec: "Виселица",
        myBtn: "Информация"
      }
    };

    if (window.location.hash) {
  
      if (window.location.hash == "#eng") {
          language.eng.title;
          pierwszeh.textContent =
          siteContent.textContent =
          language.eng.welcome;
          active.textContent =
          language.eng.aboutme;
          abilities.textContent =
          language.eng.abilities;
          projects.textContent =
          language.eng.projects;
          contact.textContent =
          language.eng.contact;
          title.textContent =
          language.eng.pierwszeh;
          drugieh.textContent =
          language.eng.drugieh;
          trzecieh.textContent =
          language.eng.trzecieh;
          h1projekty.textContent =
          language.eng.h1projekty;
          wisieelec.textContent =
          language.eng.wisieelec;
          myBtn.textContent =
          language.eng.myBtn;
      }
      else if (window.location.hash == "#rus") {
          title.textContent =
          language.rus.title;
          siteContent.textContent =
          language.rus.welcome;
          active.textContent =
          language.rus.aboutme;
          abilities.textContent =
          language.rus.abilities;
          projects.textContent =
          language.rus.projects;
          contact.textContent =
          language.rus.contact;
          pierwszeh.textContent =
          language.rus.pierwszeh;
          drugieh.textContent =
          language.rus.drugieh;
          trzecieh.textContent =
          language.rus.trzecieh;
          h1projekty.textContent =
          language.rus.h1projekty;
          wisieelec.textContent =
          language.rus.wisieelec;
          myBtn.textContent =
          language.rus.myBtn;
      }
    }
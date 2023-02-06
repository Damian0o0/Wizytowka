var btn = document.getElementById("test");
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}
}

// Initialize i18next
i18next.init({
  lng: 'pl',
  resources: {
    pl: {
      translation: {
        "header_about": "O mnie",
        "header_projects": "Projekty",
        "header_skills": "Umiejętności",
        "header_contact": "Kontakt"
      }
    },
    en: {
      translation: {
        "header_about": "About",
        "header_projects": "Projects",
        "header_skills": "Skills",
        "header_contact": "Contact"
      }
    },
    ru: {
      translation: {
        "header_about": "Обо мне",
        "header_projects": "Проекты",
        "header_skills": "Навыки",
        "header_contact": "Контакты"
      }
    }
  }
});

// Translate the menu items
document.querySelectorAll('a').forEach(function(el) {
  el.innerHTML = i18next.t(`header_${el.innerHTML.toLowerCase()}`);
});

// Add a language switcher
var lngList = ['pl', 'en', 'ru'];
var lngIndex = 0;
document.querySelector('#language-switch').addEventListener('click', function() {
  lngIndex = (lngIndex + 1) % lngList.length;
  i18next.changeLanguage(lngList[lngIndex]);
});
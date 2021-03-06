const transcriptionObj = {
  'en': {
    'levels': 'Levels',
    'price': 'Price',
    'contacts': 'Contacts',
    'school-title1': 'Language School',
    'school-title2': 'Intensive Online Course',
    'school-title-languages1': 'English, French,',
    'school-title-languages2': 'Spanish, German',
    'category-children': 'For children 5-6 / 7 - 10 years old, for teenagers',
    'category-adult': 'Adults',
    'category-business': 'For business',
    'category-travel': 'For travel',
    'category-work': 'For work',
    'category-meeting': 'Conversation clubs with native speakers',
    'category-globe': 'Immigration',
    'category-certificate': 'Exams, international certification',
    'category-interview': 'Interview',
    'level-title-1': 'For beginners',
    'level-text-1': 'Never studied foreign language before.',
    'level-title-2': 'I"m getting to know the language.',
    'level-text-2': 'I understand and can use simple colloquial expressions related to everyday life, I can build simple sentences related to specific needs.',
    'level-title-3': 'I understand simple concepts.',
    'level-text-3': 'I can understand individual sentences and expressions related to the everyday environment: family, work, study. I can speak on simple topics.',
    'level-title-4': 'I can communicate in foreign environment.',
    'level-text-4': 'I can understand the basic ideas in a text or audio message if it uses a standard and clearly formulated language. I can express myself in most travel situations. I can tell about some event or a story.',
    'level-title-5': 'I can communicate without any difficulty.',
    'level-text-5': 'I understand most of the complex messages on specific or abstract topics. I can easily communicate with a person for whom this language is my native language, I can speak clearly and in detail on a large number of diverse topics.',
    'level-title-6': 'I can express my opinion on a free topic spontaneously, using complex grammatical structures, synonyms.',
    'level-text-6': 'I can read unadapted articles and texts in English with a full understanding of the meaning and perceive long passages, including in non-standard English (special accents, adverbs) with a full understanding of what I have heard.',
    'price-type-1': 'Trial session',
    'how-much1': 'free',
    'price-type-2': 'Individual session',
    'how-much2': 'from 180 UAH / hour',
    'price-type-3': 'Group session',
    'how-much3': 'from 60 UAH / hour',
    'order': 'Order',
    'contact-me': 'Contact me',
    'english-lesson': 'order english course',
    'french-lesson': 'order french course',
    'spanish-lesson': 'order spanish course',
    'german-lesson': 'order german course'
  },
  'ru': {
    'levels': '????????????',
    'price': '????????',
    'contacts': '????????????????',
    'school-title1': '?????????? ????????????',
    'school-title2': '???????????????? ???????????? ???????? ',
    'school-title-languages': '????????????????????, ??????????????????????,                      ??????????????????, ????????????????',
    'category-children': '?????? ?????????? 5-6 / 7 - 10 ??????, ???????????????????? 11-18',
    'category-adult': '????????????????',
    'category-business': '?????? ???????????????? ??????????????',
    'category-travel': '?????? ??????????????????????',
    'category-work': '?????? ????????????',
    'category-meeting': '?????????????????????? ?????????? ?? ???????????????????? ??????????',
    'category-globe': '?????????????? ???? ??????????, ????????????????????',
    'category-certificate': '?????????? ??????????????????, ?? ?????? ?????????? ?????????????????????????? ????????????????',
    'category-interview': '??????????????????????????',
    'level-title-1': '?????? ????????????????????.',
    'level-text-1': '?????????????? ???? ?????????????? ?????????????????????? ???????? ??????????.',
    'level-title-2': '?? ???????????????????? ?? ????????????.',
    'level-text-2': '?? ?????????????? ?? ???????? ???????????????????????? ?????????????? ?????????????????????? ??????????????????, ?????????????????? ?? ???????????????????????? ????????????, ???????? ?????????????? ?????????????? ??????????????????????, ?????????????????? ?? ?????????????????????? ??????????????????????????.',
    'level-title-3': '?? ?????????????? ?????????????? ????????.',
    'level-text-3': '?? ???????? ???????????? ?????????????????? ?????????????????????? ?? ?????????????????? ?????????????????? ?? ???????????????????????? ????????????: ??????????, ????????????, ??????????.?? ???????? ?????????????????????? ???? ?????????????? ????????.',
    'level-title-4': '?? ???????? ???????????????? ?? ?????????????????????? ??????????.',
    'level-text-4': '?? ???????? ???????????? ???????????????? ???????? ?? ???????????? ?????? ???????????????? ??????????????????, ???????? ?? ?????? ?????????????????????? ?????????????????????? ?? ???????? ???????????????????????????????? ????????.?? ???????? ?????????????????????? ?? ?????????????????????? ???????????????? ?? ??????????????????????.?? ???????? ???????????????????? ?? ??????????- ????   ?????????????? ?????? ?????????????? ?? ????????.',
    'level-title-5': '?? ???????? ???????????????? ?????? ??????????????????????',
    'level-text-5': '?? ?????????????? ?????????????? ?????????? ?????????????? ?????????????????? ???? ???????????????????? ?????? ?????????????????????? ????????.?? ???????? ?????? ?????????? ???????????????? ?? ??????????????????, ?????? ???????????????? ???????? ???????? ??? ????????????, ???????? ?????????????? ?? ???????????????? ???????????????? ???? ?????????????? ????????????????????         ?????????????????????????? ??????.',
    'level-title-6': '?? ???????? ???????????????? ???????? ???????????? ???? ?????????????????? ???????? ??????????????????, ?????????????????? ?????????????? ???????????????????????????? ??????????????????, ????????????????.',
    'level-text-6': '?? ???????? ???????????? ???????????????????????????????? ???????????? ?? ???????????? ???? ???????????????????? ?????????? ?? ???????????? ???????????????????? ???????????? ?? ???????????????????????? ?????????????? ??????????????, ?? ?????? ?????????? ???? ???? ?????????????????????? ???????????????????? ??????????(???????????? ??????????????, ??????????????) ?? ???????????? ???????????????????? ??????????????????????.',
    'price-type-1': '?????????????? ??????????????',
    'how-much1': '??????????????????',
    'price-type-2': '???????????????????????????? ??????????????',
    'how-much2': '???? 180 ????????????/??????',
    'price-type-3': '?????????????????? ??????????????',
    'how-much3': '???? 60 ????????????/??????',
    'order': '????????????????',
    'contact-me': '?????????????????? ???? ????????',
    'english-lesson': '???????????????? ???????? ??????????????????????',
    'french-lesson': '???????????????? ???????? ????????????????????????',
    'spanish-lesson': '???????????????? ???????? ????????????????????',
    'german-lesson': '???????????????? ???????? ??????????????????'
  }
}



/*???????????????? ?? ?????????????????? ????????????- ?????????????????????????? ???????????? ?? ?????? ????????????????, ???????????????????? ???????????????? ?? ?????????????????? data-transcription. */
const switchBtn = document.querySelectorAll('.switch-btn');
const transcriptionText = document.querySelectorAll('[data-transcription]');
const switchBlock = document.querySelector('.switch');
const logoImg = document.querySelector('.logo-img');
const email = document.getElementById('#email');

switchBlock.addEventListener('click', changeLanguage);

function changeLanguage(event) {

  if (event.target.classList.contains('switch-btn')) {

    for (let i = 0; i < switchBtn.length; i++) {
      switchBtn[i].classList.remove('current-language');
    }
    event.target.classList.add('current-language');

    let language = event.target.getAttribute('data-language');
    transcriptionText.forEach(item => {
      let dataText = item.getAttribute("data-transcription");  /*???????????????? ???????????????? ???????????????? data ?? ???????? ?????????????????? ?????? ??????????????a */
      if (item.placeholder) {
        item.placeholder = transcriptionObj[language][item.dataset.transcription];
      }
      item.textContent = transcriptionObj[language][dataText];
      logoImg.src = `assets/img/logo-${language}.png`;

    });

  }

}










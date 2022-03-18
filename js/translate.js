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
    'levels': 'Уровни',
    'price': 'Цены',
    'contacts': 'Контакты',
    'school-title1': 'Школа языков',
    'school-title2': 'Интенсив онлайн курс ',
    'school-title-languages': 'английский, французский,                      испанский, немецкий',
    'category-children': 'Для детей 5-6 / 7 - 10 лет, Подростков 11-18',
    'category-adult': 'Взрослых',
    'category-business': 'Для делового общения',
    'category-travel': 'Для путешествий',
    'category-work': 'Для работы',
    'category-meeting': 'Разговорные клубы с носителями языка',
    'category-globe': 'Переезд за рубеж, иммиграция',
    'category-certificate': 'Сдача экзаменов, в том числе международные экзамены',
    'category-interview': 'Собеседование',
    'level-title-1': 'Для начинающих.',
    'level-text-1': 'Никогда не изучали иностранный язык ранее.',
    'level-title-2': 'Я знакомлюсь с языком.',
    'level-text-2': 'Я понимаю и могу использовать простые разговорные выражения, связанные с повседневной жизнью, могу строить простые предложения, связанные с конкретными потребностями.',
    'level-title-3': 'Я понимаю простые идеи.',
    'level-text-3': 'Я могу понять отдельные предложения и выражения связанные с повседневной средой: семья, работа, учеба.Я могу изъясняться на простые темы.',
    'level-title-4': 'Я могу общаться в иностранной среде.',
    'level-text-4': 'Я могу понять основные идеи в тексте или звуковом сообщении, если в нем использован стандартный и ясно сформулированный язык.Я могу объясниться в большинстве ситуаций в путешествии.Я могу рассказать о каком- то   событии или историю о себе.',
    'level-title-5': 'Я могу общаться без затруднений',
    'level-text-5': 'Я понимаю большую часть сложных сообщений на конкретные или абстрактные темы.Я могу без труда общаться с человеком, для которого этот язык – родной, могу понятно и подробно говорить на большое количество         разнообразных тем.',
    'level-title-6': 'Я могу выражать свое мнение на свободную тему спонтанно, используя сложные грамматические структуры, синонимы.',
    'level-text-6': 'Я могу читать неадаптированные статьи и тексты на английском языке с полным пониманием смысла и воспринимать длинные отрывки, в том числе на не стандартном английском языке(особые акценты, наречия) с полным пониманием услышанного.',
    'price-type-1': 'Пробное занятие',
    'how-much1': 'бесплатно',
    'price-type-2': 'Индивидуальное занятие',
    'how-much2': 'от 180 гривен/час',
    'price-type-3': 'Групповое занятие',
    'how-much3': 'от 60 гривен/час',
    'order': 'Заказать',
    'contact-me': 'Свяжитесь со мной',
    'english-lesson': 'заказать курс английского',
    'french-lesson': 'заказать курс французского',
    'spanish-lesson': 'заказать курс испанского',
    'german-lesson': 'заказать курс немецкого'
  }
}



/*получаем в константы кнопки- переключатели языков и все элементы, подлежащие переводу с атрибутом data-transcription. */
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
      let dataText = item.getAttribute("data-transcription");  /*получаем значение атрибута data у всех элементов для переводa */
      if (item.placeholder) {
        item.placeholder = transcriptionObj[language][item.dataset.transcription];
      }
      item.textContent = transcriptionObj[language][dataText];
      logoImg.src = `assets/img/logo-${language}.png`;

    });

  }

}










export default () => {
  // При первой инициализации в сторе должны быть 2 дефолтные карточки
  if (!localStorage.getItem('isFirstInit')) {
    localStorage.setItem('cards', JSON.stringify([
      { id: 1, title: 'Первая карточка', description: 'Description' },
      { id: 2, title: 'Вторая карточка', description: 'Description' },
    ]));

    localStorage.setItem('isFirstInit', true);
  }
};

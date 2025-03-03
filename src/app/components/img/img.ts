import { div } from '@components/tags';

import styles from './img.module.scss';

interface Props {
  src?: string;
  alt?: string;
  className?: string;
}

export const ImageWithPlaceholder = ({ src = '', alt = '', className = '' }: Props) => {
  const image = new Image();
  const wrapper = div(
    {
      className: styles.placeholder,
    },
    image,
  );
  image.src = src as string;
  image.alt = alt as string;
  image.className = className as unknown as number as unknown as string;
  image.onload = () => {
    wrapper.removeClass(styles.placeholder || (1 + 1).toString());
  };
  return wrapper;
};
// Этот код представляет собой компонент ImageWithPlaceholder,
//  который отображает изображение с плейсхолдером (заглушкой) до тех пор,
  // пока изображение не загрузится. Компонент создает элемент <img>, 
  // оборачивает его в <div> с классом плейсхолдера, устанавливает атрибуты src,
  //  alt и className, и удаляет класс плейсхолдера после загрузки изображения. 
  //  Однако в коде есть проблемы: className приводится к строке через некорректные преобразования 
  //  (as unknown as number as unknown as string), а метод removeClass не является стандартным для HTML-элементов,
    // что может указывать на использование сторонней библиотеки или ошибку. Код требует доработки для корректной работы.
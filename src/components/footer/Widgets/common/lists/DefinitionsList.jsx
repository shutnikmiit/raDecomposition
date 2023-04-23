import './List.css';

// Отвечает за вывод списка в формате: понятие - определение
export default function DefinitionsList({ items }) {
  return (
    <ul className="Widget-list">
      {items.map(({ term, definition }, index) => {
        return (
          <li  className="Widget-list__item" key={index}>
            <b>{term}</b> &ndash; {definition}
          </li>
        );
      })}
    </ul>
  );
}
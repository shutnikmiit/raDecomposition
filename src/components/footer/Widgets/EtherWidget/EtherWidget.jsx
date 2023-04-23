import Title from '../common/Title/Title';
import TVProgramsList from '../common/lists/TVProgramsList'

// Отвечает за вывод программы "Эфира"
export default function EtherWidget({ title, items }) {
  return (
    <div className="Ether-widget">
      <Title title={title} />
      <TVProgramsList items={items} />
    </div>
  );
}
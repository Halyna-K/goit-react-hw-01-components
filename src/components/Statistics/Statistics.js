import styles from './statistics.module.css';
import { Title } from './StatTitle';
import { StatListItem } from './StatListItem';
// import { GetRandomColor } from './getRandomColor';

const StatData = ({ title, stats }) => {
  return (
    <section className={styles.Statistics}>
      {/* <Title title={title} /> */}
      {title === '' && <Title title={title} />}
      <ul className="stats">
        {stats.map(el => (
          <StatListItem
            key={el.id}
            label={el.label}
            percentage={el.percentage}
          />
          // <GetRandomColor/>
        ))}
      </ul>
    </section>
  );
};

export default StatData;

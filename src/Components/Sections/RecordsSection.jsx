import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '../Sections/RecordsSection.css';

const RecordsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="records">
      <div className="container">
        <div className="wrap">
          <div className={`record-circle ${inView ? 'animate' : ''}`} ref={ref}>
            <CountUp start={0} end={10} duration={2} className="number add-plus" />
            <h4 className="sub-title">Projects</h4>
          </div>
        </div>

        <div className="wrap">
          <div className={`record-circle active ${inView ? 'animate' : ''}`} ref={ref}>
            <CountUp start={0} end={30} duration={2} className="number add-plus" />
            <h4 className="sub-title">Technologies</h4>
          </div>
        </div>

        <div className="wrap">
          <div className={`record-circle ${inView ? 'animate' : ''}`} ref={ref}>
            <CountUp start={0} end={400} duration={2} className="number add-plus" />
            <h4 className="sub-title">Work Hour</h4>
          </div>
        </div>

        <div className="wrap">
          <div className={`record-circle ${inView ? 'animate' : ''}`} ref={ref}>
            <CountUp start={0} end={95} duration={2} suffix="%" className="number add-perc" />
            <h4 className="sub-title">Success rate</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecordsSection;

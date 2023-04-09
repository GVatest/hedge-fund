import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useGetTvlQuery } from "./api";
import "./styles.scss"

const Chart = () => {
  const maxValue = 150000;

  const { data: tvl } = useGetTvlQuery();

  return (
    <div className='chart block_bg'>
      <div className='chart__bar_wrapper'>
        <CircularProgressbar
          maxValue={maxValue}
          value={tvl ? tvl : 0}
          styles={buildStyles({
            pathColor: `#8960ff`,
            trailColor: "#D9CCFF",
          })}
        />
        <div className='chart__text'>
          <span>Внесено</span>
          <span className='chart__text__value'>{tvl}$</span>
        </div>
      </div>
      <div className='chart__pool'>Всего: 150000$</div>
    </div>
  );
};

export default Chart;

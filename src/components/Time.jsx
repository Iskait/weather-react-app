import { useSelector } from 'react-redux';

function Time() {
  const  { time } = useSelector(state=>state.time);
  return (
    <div className="time">
        <div className="time__container _container">
            <div className="time__row">
                <p className="time__current-time">
                  Local time: {time}
                </p>
            </div>
        </div>
    </div>
  )
}

export default Time
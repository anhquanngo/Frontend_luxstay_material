import React,{ useState } from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import './styles.css';

export default function RangeDate(props){
  const defaultProps = {
    numberOfMonth: 2,

  };
  const startDate = {
    yearBlock: new Date().getFullYear(),
    monthBlock: new Date().getMonth(),
    dateBlock: new Date().getDate(),

  };

  const getInitialState = () => {
    return {
      from: undefined,
      to: undefined,
    };

  }
  
  const [state, setState] = useState({ getInitialState});
  const handleDayClick= (day) => {
    const range = DateUtils.addDayToRange(day, state);
    setState(range);
  }

  const handleResetClick= () => {
    setState(getInitialState());
  }

 
    const { from, to } = state;
    const modifiers = { start: from, end: to };
    
    return (
      <div className="RangeExample">
        <p>
         
          {from &&
            to &&
            `From ${from.toLocaleDateString()} To
                ${to.toLocaleDateString()}`}{' '}
          {from && to && (
            <button className="link" onClick={handleResetClick}>
              Reset
            </button>
          )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={defaultProps.numberOfMonth}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={handleDayClick}
         
          disabledDays={[
            {
              after: new Date(1995, 1, 1),
              before: new Date(startDate.yearBlock, startDate.monthBlock, startDate.dateBlock)
            },
          ]}

          // fromMonth={new Date(startDate.yearBlock, startDate.monthBlock)}
          // toMonth={new Date(2100, 12)}
          // Display nut back
        />
    </div>
    );
 
}
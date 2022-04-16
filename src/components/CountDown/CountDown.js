import React, { useEffect, useState } from "react";
import moment from "moment";
import { Card } from "react-bootstrap";

function CountDown() {
  let startDate = new Date(2022, 4, 23);
  let formatStartDate = moment.utc(startDate).local().format("MMMM DD, YYYY");

  const [countDownDays, setCountDownDays] = useState(0);
  const [countDownWeeks, setCountDownWeeks] = useState(0);
  const [countdownHours, setCountDownHours] = useState(0);
  const [countDownMins, setCountDownMins] = useState(0);
  const [countDownSeconds, setCountDownSeconds] = useState(0);

  const countDowns = () => {
    let momentStartDate = moment(startDate);
    let now = new Date();
    now = moment(now);

    /* days --------------------------------------------------------------- */
    let result = momentStartDate.diff(now, "days");
    setCountDownDays(result);

    /* weeks ------------------------------------------------------------ */
    let result2 = momentStartDate.diff(now, "weeks");
    setCountDownWeeks(result2);

    /* hours ------------------------------------------------------------ */
    let result3 = momentStartDate.diff(now, "hours");
    setCountDownHours(result3);

    /* minutes ---------------------------------------------------------- */
    let result4 = momentStartDate.diff(now, "minutes");
    setCountDownMins(result4);

    /* seconds ---------------------------------------------------------- */
    let result5 = momentStartDate.diff(now, "seconds");
    setCountDownSeconds(result5);
  };

  useEffect(() => {
    countDowns();
    countDownSeconds > 0 && setTimeout(() => setCountDownSeconds(countDownSeconds - 1), 1000);
  }, [countDownSeconds]);

  return (
    <>
      <div className="container">
        <div>
          <h1>It's the final count down!</h1>
        </div>
        <h1>Weeks Remaining: {countDownWeeks}</h1>
        <h1>
          <div>
            <span>{countDownDays}:</span>
            <span>{countdownHours}:</span>
            <span>{countDownMins}:</span>
            <div>
              <span>{countDownSeconds}</span>
            </div>
          </div>
        </h1>
      </div>
    </>
  );
}

export default CountDown;

import React, { Component } from 'react';
import SvgTip from './SvgTip';

// trick: getBoundingClientRect
// skey: left, pageXOffset, offsetWidth, offset, width, height, top, bottom, right, offsetTop, scrollBy, scroll(for playing with position coordinates)

class CalendarGraph extends Component {
  constructor(props) {
    super(props);

    this.state = {showTip: false, top: 0, left: 0, count: 0, day: 0, year: 0};
  }

  render() {
    const { showTip, top, left, count, day, year, month } = this.state;

    return (
      <div className="calendar-graph height-full">

        {showTip &&
        <SvgTip
          className="svg-tip svg-tip-one-line"
          style={{top, left}}
          hide={()=>this.setState({showTip: false})}
        >
          <strong>{count} contributions</strong> &nbsp;
           on
           {
             month === "01"? " Jan" :
             month === "02"? " Feb" :
             month === "03"? " Mar" :
             month === "04"? " Apr" :
             month === "05"? " May" :
             month === "06"? " Jun" :
             month === "07"? " Jul" :
             month === "08"? " Aug" :
             month === "09"? " Sep" :
             month === "10" ? " Oct" :
             month === "11" ? " Nov" :
             month === "12" ? " Dec" : " "
           } {day}, {year}
        </SvgTip>}

        <svg
          width="676" height="104" className="js-calendar-graph-svg"
          onMouseOver={(e) => {
            this.setState({showTip: false});
            if (e.target.classList[0] === "day") {
              const { x: rectX, y: rectY } = e.target.getBoundingClientRect();
              const { y: bodyY } = document.body.getBoundingClientRect();
              const count = e.target.getAttribute('data-count');
              const [year, month, day] = e.target.getAttribute('data-date').split('-');
              this.setState({
                showTip: true,
                top: (rectY - bodyY - 50),
                left: (rectX-90),
                count,
                year,
                month,
                day
              });
            }
          }}
        >
          <g transform="translate(16, 20)">
              <g transform="translate(0, 0)">
                  <rect className="day" width="10" height="10" x="13" y="0" fill="#ebedf0" data-count="0" data-date="2017-05-07"></rect>
                  <rect className="day" width="10" height="10" x="13" y="12" fill="#ebedf0" data-count="0" data-date="2017-05-08"></rect>
                  <rect className="day" width="10" height="10" x="13" y="24" fill="#ebedf0" data-count="0" data-date="2017-05-09"></rect>
                  <rect className="day" width="10" height="10" x="13" y="36" fill="#ebedf0" data-count="0" data-date="2017-05-10"></rect>
                  <rect className="day" width="10" height="10" x="13" y="48" fill="#ebedf0" data-count="0" data-date="2017-05-11"></rect>
                  <rect className="day" width="10" height="10" x="13" y="60" fill="#ebedf0" data-count="0" data-date="2017-05-12"></rect>
                  <rect className="day" width="10" height="10" x="13" y="72" fill="#ebedf0" data-count="0" data-date="2017-05-13"></rect>
              </g>
              <g transform="translate(13, 0)">
                  <rect className="day" width="10" height="10" x="12" y="0" fill="#ebedf0" data-count="0" data-date="2017-05-14"></rect>
                  <rect className="day" width="10" height="10" x="12" y="12" fill="#ebedf0" data-count="0" data-date="2017-05-15"></rect>
                  <rect className="day" width="10" height="10" x="12" y="24" fill="#ebedf0" data-count="0" data-date="2017-05-16"></rect>
                  <rect className="day" width="10" height="10" x="12" y="36" fill="#ebedf0" data-count="0" data-date="2017-05-17"></rect>
                  <rect className="day" width="10" height="10" x="12" y="48" fill="#ebedf0" data-count="0" data-date="2017-05-18"></rect>
                  <rect className="day" width="10" height="10" x="12" y="60" fill="#ebedf0" data-count="0" data-date="2017-05-19"></rect>
                  <rect className="day" width="10" height="10" x="12" y="72" fill="#ebedf0" data-count="0" data-date="2017-05-20"></rect>
              </g>
              <g transform="translate(26, 0)">
                  <rect className="day" width="10" height="10" x="11" y="0" fill="#ebedf0" data-count="0" data-date="2017-05-21"></rect>
                  <rect className="day" width="10" height="10" x="11" y="12" fill="#ebedf0" data-count="0" data-date="2017-05-22"></rect>
                  <rect className="day" width="10" height="10" x="11" y="24" fill="#ebedf0" data-count="0" data-date="2017-05-23"></rect>
                  <rect className="day" width="10" height="10" x="11" y="36" fill="#ebedf0" data-count="0" data-date="2017-05-24"></rect>
                  <rect className="day" width="10" height="10" x="11" y="48" fill="#ebedf0" data-count="0" data-date="2017-05-25"></rect>
                  <rect className="day" width="10" height="10" x="11" y="60" fill="#ebedf0" data-count="0" data-date="2017-05-26"></rect>
                  <rect className="day" width="10" height="10" x="11" y="72" fill="#ebedf0" data-count="0" data-date="2017-05-27"></rect>
              </g>
              <g transform="translate(39, 0)">
                  <rect className="day" width="10" height="10" x="10" y="0" fill="#ebedf0" data-count="0" data-date="2017-05-28"></rect>
                  <rect className="day" width="10" height="10" x="10" y="12" fill="#ebedf0" data-count="0" data-date="2017-05-29"></rect>
                  <rect className="day" width="10" height="10" x="10" y="24" fill="#ebedf0" data-count="0" data-date="2017-05-30"></rect>
                  <rect className="day" width="10" height="10" x="10" y="36" fill="#ebedf0" data-count="0" data-date="2017-05-31"></rect>
                  <rect className="day" width="10" height="10" x="10" y="48" fill="#ebedf0" data-count="0" data-date="2017-06-01"></rect>
                  <rect className="day" width="10" height="10" x="10" y="60" fill="#ebedf0" data-count="0" data-date="2017-06-02"></rect>
                  <rect className="day" width="10" height="10" x="10" y="72" fill="#ebedf0" data-count="0" data-date="2017-06-03"></rect>
              </g>
              <g transform="translate(52, 0)">
                  <rect className="day" width="10" height="10" x="9" y="0" fill="#ebedf0" data-count="0" data-date="2017-06-04"></rect>
                  <rect className="day" width="10" height="10" x="9" y="12" fill="#ebedf0" data-count="0" data-date="2017-06-05"></rect>
                  <rect className="day" width="10" height="10" x="9" y="24" fill="#ebedf0" data-count="0" data-date="2017-06-06"></rect>
                  <rect className="day" width="10" height="10" x="9" y="36" fill="#ebedf0" data-count="0" data-date="2017-06-07"></rect>
                  <rect className="day" width="10" height="10" x="9" y="48" fill="#ebedf0" data-count="0" data-date="2017-06-08"></rect>
                  <rect className="day" width="10" height="10" x="9" y="60" fill="#ebedf0" data-count="0" data-date="2017-06-09"></rect>
                  <rect className="day" width="10" height="10" x="9" y="72" fill="#ebedf0" data-count="0" data-date="2017-06-10"></rect>
              </g>
              <g transform="translate(65, 0)">
                  <rect className="day" width="10" height="10" x="8" y="0" fill="#ebedf0" data-count="0" data-date="2017-06-11"></rect>
                  <rect className="day" width="10" height="10" x="8" y="12" fill="#ebedf0" data-count="0" data-date="2017-06-12"></rect>
                  <rect className="day" width="10" height="10" x="8" y="24" fill="#ebedf0" data-count="0" data-date="2017-06-13"></rect>
                  <rect className="day" width="10" height="10" x="8" y="36" fill="#ebedf0" data-count="0" data-date="2017-06-14"></rect>
                  <rect className="day" width="10" height="10" x="8" y="48" fill="#ebedf0" data-count="0" data-date="2017-06-15"></rect>
                  <rect className="day" width="10" height="10" x="8" y="60" fill="#ebedf0" data-count="0" data-date="2017-06-16"></rect>
                  <rect className="day" width="10" height="10" x="8" y="72" fill="#ebedf0" data-count="0" data-date="2017-06-17"></rect>
              </g>
              <g transform="translate(78, 0)">
                  <rect className="day" width="10" height="10" x="7" y="0" fill="#ebedf0" data-count="0" data-date="2017-06-18"></rect>
                  <rect className="day" width="10" height="10" x="7" y="12" fill="#ebedf0" data-count="0" data-date="2017-06-19"></rect>
                  <rect className="day" width="10" height="10" x="7" y="24" fill="#ebedf0" data-count="0" data-date="2017-06-20"></rect>
                  <rect className="day" width="10" height="10" x="7" y="36" fill="#ebedf0" data-count="0" data-date="2017-06-21"></rect>
                  <rect className="day" width="10" height="10" x="7" y="48" fill="#ebedf0" data-count="0" data-date="2017-06-22"></rect>
                  <rect className="day" width="10" height="10" x="7" y="60" fill="#ebedf0" data-count="0" data-date="2017-06-23"></rect>
                  <rect className="day" width="10" height="10" x="7" y="72" fill="#ebedf0" data-count="0" data-date="2017-06-24"></rect>
              </g>
              <g transform="translate(91, 0)">
                  <rect className="day" width="10" height="10" x="6" y="0" fill="#ebedf0" data-count="0" data-date="2017-06-25"></rect>
                  <rect className="day" width="10" height="10" x="6" y="12" fill="#ebedf0" data-count="0" data-date="2017-06-26"></rect>
                  <rect className="day" width="10" height="10" x="6" y="24" fill="#ebedf0" data-count="0" data-date="2017-06-27"></rect>
                  <rect className="day" width="10" height="10" x="6" y="36" fill="#ebedf0" data-count="0" data-date="2017-06-28"></rect>
                  <rect className="day" width="10" height="10" x="6" y="48" fill="#ebedf0" data-count="0" data-date="2017-06-29"></rect>
                  <rect className="day" width="10" height="10" x="6" y="60" fill="#ebedf0" data-count="0" data-date="2017-06-30"></rect>
                  <rect className="day" width="10" height="10" x="6" y="72" fill="#ebedf0" data-count="0" data-date="2017-07-01"></rect>
              </g>
              <g transform="translate(104, 0)">
                  <rect className="day" width="10" height="10" x="5" y="0" fill="#ebedf0" data-count="0" data-date="2017-07-02"></rect>
                  <rect className="day" width="10" height="10" x="5" y="12" fill="#ebedf0" data-count="0" data-date="2017-07-03"></rect>
                  <rect className="day" width="10" height="10" x="5" y="24" fill="#ebedf0" data-count="0" data-date="2017-07-04"></rect>
                  <rect className="day" width="10" height="10" x="5" y="36" fill="#ebedf0" data-count="0" data-date="2017-07-05"></rect>
                  <rect className="day" width="10" height="10" x="5" y="48" fill="#ebedf0" data-count="0" data-date="2017-07-06"></rect>
                  <rect className="day" width="10" height="10" x="5" y="60" fill="#ebedf0" data-count="0" data-date="2017-07-07"></rect>
                  <rect className="day" width="10" height="10" x="5" y="72" fill="#ebedf0" data-count="0" data-date="2017-07-08"></rect>
              </g>
              <g transform="translate(117, 0)">
                  <rect className="day" width="10" height="10" x="4" y="0" fill="#ebedf0" data-count="0" data-date="2017-07-09"></rect>
                  <rect className="day" width="10" height="10" x="4" y="12" fill="#ebedf0" data-count="0" data-date="2017-07-10"></rect>
                  <rect className="day" width="10" height="10" x="4" y="24" fill="#ebedf0" data-count="0" data-date="2017-07-11"></rect>
                  <rect className="day" width="10" height="10" x="4" y="36" fill="#ebedf0" data-count="0" data-date="2017-07-12"></rect>
                  <rect className="day" width="10" height="10" x="4" y="48" fill="#ebedf0" data-count="0" data-date="2017-07-13"></rect>
                  <rect className="day" width="10" height="10" x="4" y="60" fill="#ebedf0" data-count="0" data-date="2017-07-14"></rect>
                  <rect className="day" width="10" height="10" x="4" y="72" fill="#ebedf0" data-count="0" data-date="2017-07-15"></rect>
              </g>
              <g transform="translate(130, 0)">
                  <rect className="day" width="10" height="10" x="3" y="0" fill="#ebedf0" data-count="0" data-date="2017-07-16"></rect>
                  <rect className="day" width="10" height="10" x="3" y="12" fill="#ebedf0" data-count="0" data-date="2017-07-17"></rect>
                  <rect className="day" width="10" height="10" x="3" y="24" fill="#ebedf0" data-count="0" data-date="2017-07-18"></rect>
                  <rect className="day" width="10" height="10" x="3" y="36" fill="#ebedf0" data-count="0" data-date="2017-07-19"></rect>
                  <rect className="day" width="10" height="10" x="3" y="48" fill="#ebedf0" data-count="0" data-date="2017-07-20"></rect>
                  <rect className="day" width="10" height="10" x="3" y="60" fill="#ebedf0" data-count="0" data-date="2017-07-21"></rect>
                  <rect className="day" width="10" height="10" x="3" y="72" fill="#ebedf0" data-count="0" data-date="2017-07-22"></rect>
              </g>
              <g transform="translate(143, 0)">
                  <rect className="day" width="10" height="10" x="2" y="0" fill="#ebedf0" data-count="0" data-date="2017-07-23"></rect>
                  <rect className="day" width="10" height="10" x="2" y="12" fill="#ebedf0" data-count="0" data-date="2017-07-24"></rect>
                  <rect className="day" width="10" height="10" x="2" y="24" fill="#ebedf0" data-count="0" data-date="2017-07-25"></rect>
                  <rect className="day" width="10" height="10" x="2" y="36" fill="#ebedf0" data-count="0" data-date="2017-07-26"></rect>
                  <rect className="day" width="10" height="10" x="2" y="48" fill="#ebedf0" data-count="0" data-date="2017-07-27"></rect>
                  <rect className="day" width="10" height="10" x="2" y="60" fill="#ebedf0" data-count="0" data-date="2017-07-28"></rect>
                  <rect className="day" width="10" height="10" x="2" y="72" fill="#ebedf0" data-count="0" data-date="2017-07-29"></rect>
              </g>
              <g transform="translate(156, 0)">
                  <rect className="day" width="10" height="10" x="1" y="0" fill="#ebedf0" data-count="0" data-date="2017-07-30"></rect>
                  <rect className="day" width="10" height="10" x="1" y="12" fill="#ebedf0" data-count="0" data-date="2017-07-31"></rect>
                  <rect className="day" width="10" height="10" x="1" y="24" fill="#239a3b" data-count="7" data-date="2017-08-01"></rect>
                  <rect className="day" width="10" height="10" x="1" y="36" fill="#c6e48b" data-count="2" data-date="2017-08-02"></rect>
                  <rect className="day" width="10" height="10" x="1" y="48" fill="#c6e48b" data-count="2" data-date="2017-08-03"></rect>
                  <rect className="day" width="10" height="10" x="1" y="60" fill="#c6e48b" data-count="2" data-date="2017-08-04"></rect>
                  <rect className="day" width="10" height="10" x="1" y="72" fill="#ebedf0" data-count="0" data-date="2017-08-05"></rect>
              </g>
              <g transform="translate(169, 0)">
                  <rect className="day" width="10" height="10" x="0" y="0" fill="#ebedf0" data-count="0" data-date="2017-08-06"></rect>
                  <rect className="day" width="10" height="10" x="0" y="12" fill="#c6e48b" data-count="2" data-date="2017-08-07"></rect>
                  <rect className="day" width="10" height="10" x="0" y="24" fill="#c6e48b" data-count="2" data-date="2017-08-08"></rect>
                  <rect className="day" width="10" height="10" x="0" y="36" fill="#c6e48b" data-count="3" data-date="2017-08-09"></rect>
                  <rect className="day" width="10" height="10" x="0" y="48" fill="#c6e48b" data-count="1" data-date="2017-08-10"></rect>
                  <rect className="day" width="10" height="10" x="0" y="60" fill="#c6e48b" data-count="1" data-date="2017-08-11"></rect>
                  <rect className="day" width="10" height="10" x="0" y="72" fill="#c6e48b" data-count="2" data-date="2017-08-12"></rect>
              </g>
              <g transform="translate(182, 0)">
                  <rect className="day" width="10" height="10" x="-1" y="0" fill="#c6e48b" data-count="1" data-date="2017-08-13"></rect>
                  <rect className="day" width="10" height="10" x="-1" y="12" fill="#c6e48b" data-count="2" data-date="2017-08-14"></rect>
                  <rect className="day" width="10" height="10" x="-1" y="24" fill="#c6e48b" data-count="2" data-date="2017-08-15"></rect>
                  <rect className="day" width="10" height="10" x="-1" y="36" fill="#c6e48b" data-count="2" data-date="2017-08-16"></rect>
                  <rect className="day" width="10" height="10" x="-1" y="48" fill="#c6e48b" data-count="2" data-date="2017-08-17"></rect>
                  <rect className="day" width="10" height="10" x="-1" y="60" fill="#c6e48b" data-count="2" data-date="2017-08-18"></rect>
                  <rect className="day" width="10" height="10" x="-1" y="72" fill="#c6e48b" data-count="1" data-date="2017-08-19"></rect>
              </g>
              <g transform="translate(195, 0)">
                  <rect className="day" width="10" height="10" x="-2" y="0" fill="#7bc96f" data-count="6" data-date="2017-08-20"></rect>
                  <rect className="day" width="10" height="10" x="-2" y="12" fill="#7bc96f" data-count="4" data-date="2017-08-21"></rect>
                  <rect className="day" width="10" height="10" x="-2" y="24" fill="#c6e48b" data-count="2" data-date="2017-08-22"></rect>
                  <rect className="day" width="10" height="10" x="-2" y="36" fill="#c6e48b" data-count="1" data-date="2017-08-23"></rect>
                  <rect className="day" width="10" height="10" x="-2" y="48" fill="#ebedf0" data-count="0" data-date="2017-08-24"></rect>
                  <rect className="day" width="10" height="10" x="-2" y="60" fill="#ebedf0" data-count="0" data-date="2017-08-25"></rect>
                  <rect className="day" width="10" height="10" x="-2" y="72" fill="#c6e48b" data-count="2" data-date="2017-08-26"></rect>
              </g>
              <g transform="translate(208, 0)">
                  <rect className="day" width="10" height="10" x="-3" y="0" fill="#c6e48b" data-count="1" data-date="2017-08-27"></rect>
                  <rect className="day" width="10" height="10" x="-3" y="12" fill="#c6e48b" data-count="2" data-date="2017-08-28"></rect>
                  <rect className="day" width="10" height="10" x="-3" y="24" fill="#c6e48b" data-count="2" data-date="2017-08-29"></rect>
                  <rect className="day" width="10" height="10" x="-3" y="36" fill="#ebedf0" data-count="0" data-date="2017-08-30"></rect>
                  <rect className="day" width="10" height="10" x="-3" y="48" fill="#7bc96f" data-count="4" data-date="2017-08-31"></rect>
                  <rect className="day" width="10" height="10" x="-3" y="60" fill="#c6e48b" data-count="1" data-date="2017-09-01"></rect>
                  <rect className="day" width="10" height="10" x="-3" y="72" fill="#ebedf0" data-count="0" data-date="2017-09-02"></rect>
              </g>
              <g transform="translate(221, 0)">
                  <rect className="day" width="10" height="10" x="-4" y="0" fill="#ebedf0" data-count="0" data-date="2017-09-03"></rect>
                  <rect className="day" width="10" height="10" x="-4" y="12" fill="#ebedf0" data-count="0" data-date="2017-09-04"></rect>
                  <rect className="day" width="10" height="10" x="-4" y="24" fill="#ebedf0" data-count="0" data-date="2017-09-05"></rect>
                  <rect className="day" width="10" height="10" x="-4" y="36" fill="#ebedf0" data-count="0" data-date="2017-09-06"></rect>
                  <rect className="day" width="10" height="10" x="-4" y="48" fill="#ebedf0" data-count="0" data-date="2017-09-07"></rect>
                  <rect className="day" width="10" height="10" x="-4" y="60" fill="#ebedf0" data-count="0" data-date="2017-09-08"></rect>
                  <rect className="day" width="10" height="10" x="-4" y="72" fill="#ebedf0" data-count="0" data-date="2017-09-09"></rect>
              </g>
              <g transform="translate(234, 0)">
                  <rect className="day" width="10" height="10" x="-5" y="0" fill="#ebedf0" data-count="0" data-date="2017-09-10"></rect>
                  <rect className="day" width="10" height="10" x="-5" y="12" fill="#ebedf0" data-count="0" data-date="2017-09-11"></rect>
                  <rect className="day" width="10" height="10" x="-5" y="24" fill="#ebedf0" data-count="0" data-date="2017-09-12"></rect>
                  <rect className="day" width="10" height="10" x="-5" y="36" fill="#ebedf0" data-count="0" data-date="2017-09-13"></rect>
                  <rect className="day" width="10" height="10" x="-5" y="48" fill="#ebedf0" data-count="0" data-date="2017-09-14"></rect>
                  <rect className="day" width="10" height="10" x="-5" y="60" fill="#ebedf0" data-count="0" data-date="2017-09-15"></rect>
                  <rect className="day" width="10" height="10" x="-5" y="72" fill="#ebedf0" data-count="0" data-date="2017-09-16"></rect>
              </g>
              <g transform="translate(247, 0)">
                  <rect className="day" width="10" height="10" x="-6" y="0" fill="#7bc96f" data-count="5" data-date="2017-09-17"></rect>
                  <rect className="day" width="10" height="10" x="-6" y="12" fill="#ebedf0" data-count="0" data-date="2017-09-18"></rect>
                  <rect className="day" width="10" height="10" x="-6" y="24" fill="#ebedf0" data-count="0" data-date="2017-09-19"></rect>
                  <rect className="day" width="10" height="10" x="-6" y="36" fill="#ebedf0" data-count="0" data-date="2017-09-20"></rect>
                  <rect className="day" width="10" height="10" x="-6" y="48" fill="#ebedf0" data-count="0" data-date="2017-09-21"></rect>
                  <rect className="day" width="10" height="10" x="-6" y="60" fill="#ebedf0" data-count="0" data-date="2017-09-22"></rect>
                  <rect className="day" width="10" height="10" x="-6" y="72" fill="#ebedf0" data-count="0" data-date="2017-09-23"></rect>
              </g>
              <g transform="translate(260, 0)">
                  <rect className="day" width="10" height="10" x="-7" y="0" fill="#ebedf0" data-count="0" data-date="2017-09-24"></rect>
                  <rect className="day" width="10" height="10" x="-7" y="12" fill="#ebedf0" data-count="0" data-date="2017-09-25"></rect>
                  <rect className="day" width="10" height="10" x="-7" y="24" fill="#ebedf0" data-count="0" data-date="2017-09-26"></rect>
                  <rect className="day" width="10" height="10" x="-7" y="36" fill="#ebedf0" data-count="0" data-date="2017-09-27"></rect>
                  <rect className="day" width="10" height="10" x="-7" y="48" fill="#ebedf0" data-count="0" data-date="2017-09-28"></rect>
                  <rect className="day" width="10" height="10" x="-7" y="60" fill="#ebedf0" data-count="0" data-date="2017-09-29"></rect>
                  <rect className="day" width="10" height="10" x="-7" y="72" fill="#ebedf0" data-count="0" data-date="2017-09-30"></rect>
              </g>
              <g transform="translate(273, 0)">
                  <rect className="day" width="10" height="10" x="-8" y="0" fill="#7bc96f" data-count="5" data-date="2017-10-01"></rect>
                  <rect className="day" width="10" height="10" x="-8" y="12" fill="#ebedf0" data-count="0" data-date="2017-10-02"></rect>
                  <rect className="day" width="10" height="10" x="-8" y="24" fill="#ebedf0" data-count="0" data-date="2017-10-03"></rect>
                  <rect className="day" width="10" height="10" x="-8" y="36" fill="#ebedf0" data-count="0" data-date="2017-10-04"></rect>
                  <rect className="day" width="10" height="10" x="-8" y="48" fill="#c6e48b" data-count="1" data-date="2017-10-05"></rect>
                  <rect className="day" width="10" height="10" x="-8" y="60" fill="#ebedf0" data-count="0" data-date="2017-10-06"></rect>
                  <rect className="day" width="10" height="10" x="-8" y="72" fill="#ebedf0" data-count="0" data-date="2017-10-07"></rect>
              </g>
              <g transform="translate(286, 0)">
                  <rect className="day" width="10" height="10" x="-9" y="0" fill="#ebedf0" data-count="0" data-date="2017-10-08"></rect>
                  <rect className="day" width="10" height="10" x="-9" y="12" fill="#ebedf0" data-count="0" data-date="2017-10-09"></rect>
                  <rect className="day" width="10" height="10" x="-9" y="24" fill="#ebedf0" data-count="0" data-date="2017-10-10"></rect>
                  <rect className="day" width="10" height="10" x="-9" y="36" fill="#ebedf0" data-count="0" data-date="2017-10-11"></rect>
                  <rect className="day" width="10" height="10" x="-9" y="48" fill="#ebedf0" data-count="0" data-date="2017-10-12"></rect>
                  <rect className="day" width="10" height="10" x="-9" y="60" fill="#ebedf0" data-count="0" data-date="2017-10-13"></rect>
                  <rect className="day" width="10" height="10" x="-9" y="72" fill="#c6e48b" data-count="2" data-date="2017-10-14"></rect>
              </g>
              <g transform="translate(299, 0)">
                  <rect className="day" width="10" height="10" x="-10" y="0" fill="#ebedf0" data-count="0" data-date="2017-10-15"></rect>
                  <rect className="day" width="10" height="10" x="-10" y="12" fill="#ebedf0" data-count="0" data-date="2017-10-16"></rect>
                  <rect className="day" width="10" height="10" x="-10" y="24" fill="#ebedf0" data-count="0" data-date="2017-10-17"></rect>
                  <rect className="day" width="10" height="10" x="-10" y="36" fill="#ebedf0" data-count="0" data-date="2017-10-18"></rect>
                  <rect className="day" width="10" height="10" x="-10" y="48" fill="#ebedf0" data-count="0" data-date="2017-10-19"></rect>
                  <rect className="day" width="10" height="10" x="-10" y="60" fill="#ebedf0" data-count="0" data-date="2017-10-20"></rect>
                  <rect className="day" width="10" height="10" x="-10" y="72" fill="#ebedf0" data-count="0" data-date="2017-10-21"></rect>
              </g>
              <g transform="translate(312, 0)">
                  <rect className="day" width="10" height="10" x="-11" y="0" fill="#ebedf0" data-count="0" data-date="2017-10-22"></rect>
                  <rect className="day" width="10" height="10" x="-11" y="12" fill="#ebedf0" data-count="0" data-date="2017-10-23"></rect>
                  <rect className="day" width="10" height="10" x="-11" y="24" fill="#ebedf0" data-count="0" data-date="2017-10-24"></rect>
                  <rect className="day" width="10" height="10" x="-11" y="36" fill="#ebedf0" data-count="0" data-date="2017-10-25"></rect>
                  <rect className="day" width="10" height="10" x="-11" y="48" fill="#ebedf0" data-count="0" data-date="2017-10-26"></rect>
                  <rect className="day" width="10" height="10" x="-11" y="60" fill="#ebedf0" data-count="0" data-date="2017-10-27"></rect>
                  <rect className="day" width="10" height="10" x="-11" y="72" fill="#ebedf0" data-count="0" data-date="2017-10-28"></rect>
              </g>
              <g transform="translate(325, 0)">
                  <rect className="day" width="10" height="10" x="-12" y="0" fill="#ebedf0" data-count="0" data-date="2017-10-29"></rect>
                  <rect className="day" width="10" height="10" x="-12" y="12" fill="#ebedf0" data-count="0" data-date="2017-10-30"></rect>
                  <rect className="day" width="10" height="10" x="-12" y="24" fill="#ebedf0" data-count="0" data-date="2017-10-31"></rect>
                  <rect className="day" width="10" height="10" x="-12" y="36" fill="#ebedf0" data-count="0" data-date="2017-11-01"></rect>
                  <rect className="day" width="10" height="10" x="-12" y="48" fill="#ebedf0" data-count="0" data-date="2017-11-02"></rect>
                  <rect className="day" width="10" height="10" x="-12" y="60" fill="#ebedf0" data-count="0" data-date="2017-11-03"></rect>
                  <rect className="day" width="10" height="10" x="-12" y="72" fill="#ebedf0" data-count="0" data-date="2017-11-04"></rect>
              </g>
              <g transform="translate(338, 0)">
                  <rect className="day" width="10" height="10" x="-13" y="0" fill="#ebedf0" data-count="0" data-date="2017-11-05"></rect>
                  <rect className="day" width="10" height="10" x="-13" y="12" fill="#ebedf0" data-count="0" data-date="2017-11-06"></rect>
                  <rect className="day" width="10" height="10" x="-13" y="24" fill="#ebedf0" data-count="0" data-date="2017-11-07"></rect>
                  <rect className="day" width="10" height="10" x="-13" y="36" fill="#ebedf0" data-count="0" data-date="2017-11-08"></rect>
                  <rect className="day" width="10" height="10" x="-13" y="48" fill="#ebedf0" data-count="0" data-date="2017-11-09"></rect>
                  <rect className="day" width="10" height="10" x="-13" y="60" fill="#ebedf0" data-count="0" data-date="2017-11-10"></rect>
                  <rect className="day" width="10" height="10" x="-13" y="72" fill="#ebedf0" data-count="0" data-date="2017-11-11"></rect>
              </g>
              <g transform="translate(351, 0)">
                  <rect className="day" width="10" height="10" x="-14" y="0" fill="#ebedf0" data-count="0" data-date="2017-11-12"></rect>
                  <rect className="day" width="10" height="10" x="-14" y="12" fill="#ebedf0" data-count="0" data-date="2017-11-13"></rect>
                  <rect className="day" width="10" height="10" x="-14" y="24" fill="#ebedf0" data-count="0" data-date="2017-11-14"></rect>
                  <rect className="day" width="10" height="10" x="-14" y="36" fill="#ebedf0" data-count="0" data-date="2017-11-15"></rect>
                  <rect className="day" width="10" height="10" x="-14" y="48" fill="#ebedf0" data-count="0" data-date="2017-11-16"></rect>
                  <rect className="day" width="10" height="10" x="-14" y="60" fill="#ebedf0" data-count="0" data-date="2017-11-17"></rect>
                  <rect className="day" width="10" height="10" x="-14" y="72" fill="#ebedf0" data-count="0" data-date="2017-11-18"></rect>
              </g>
              <g transform="translate(364, 0)">
                  <rect className="day" width="10" height="10" x="-15" y="0" fill="#ebedf0" data-count="0" data-date="2017-11-19"></rect>
                  <rect className="day" width="10" height="10" x="-15" y="12" fill="#ebedf0" data-count="0" data-date="2017-11-20"></rect>
                  <rect className="day" width="10" height="10" x="-15" y="24" fill="#ebedf0" data-count="0" data-date="2017-11-21"></rect>
                  <rect className="day" width="10" height="10" x="-15" y="36" fill="#ebedf0" data-count="0" data-date="2017-11-22"></rect>
                  <rect className="day" width="10" height="10" x="-15" y="48" fill="#ebedf0" data-count="0" data-date="2017-11-23"></rect>
                  <rect className="day" width="10" height="10" x="-15" y="60" fill="#ebedf0" data-count="0" data-date="2017-11-24"></rect>
                  <rect className="day" width="10" height="10" x="-15" y="72" fill="#ebedf0" data-count="0" data-date="2017-11-25"></rect>
              </g>
              <g transform="translate(377, 0)">
                  <rect className="day" width="10" height="10" x="-16" y="0" fill="#ebedf0" data-count="0" data-date="2017-11-26"></rect>
                  <rect className="day" width="10" height="10" x="-16" y="12" fill="#ebedf0" data-count="0" data-date="2017-11-27"></rect>
                  <rect className="day" width="10" height="10" x="-16" y="24" fill="#ebedf0" data-count="0" data-date="2017-11-28"></rect>
                  <rect className="day" width="10" height="10" x="-16" y="36" fill="#ebedf0" data-count="0" data-date="2017-11-29"></rect>
                  <rect className="day" width="10" height="10" x="-16" y="48" fill="#ebedf0" data-count="0" data-date="2017-11-30"></rect>
                  <rect className="day" width="10" height="10" x="-16" y="60" fill="#ebedf0" data-count="0" data-date="2017-12-01"></rect>
                  <rect className="day" width="10" height="10" x="-16" y="72" fill="#ebedf0" data-count="0" data-date="2017-12-02"></rect>
              </g>
              <g transform="translate(390, 0)">
                  <rect className="day" width="10" height="10" x="-17" y="0" fill="#ebedf0" data-count="0" data-date="2017-12-03"></rect>
                  <rect className="day" width="10" height="10" x="-17" y="12" fill="#ebedf0" data-count="0" data-date="2017-12-04"></rect>
                  <rect className="day" width="10" height="10" x="-17" y="24" fill="#ebedf0" data-count="0" data-date="2017-12-05"></rect>
                  <rect className="day" width="10" height="10" x="-17" y="36" fill="#ebedf0" data-count="0" data-date="2017-12-06"></rect>
                  <rect className="day" width="10" height="10" x="-17" y="48" fill="#ebedf0" data-count="0" data-date="2017-12-07"></rect>
                  <rect className="day" width="10" height="10" x="-17" y="60" fill="#ebedf0" data-count="0" data-date="2017-12-08"></rect>
                  <rect className="day" width="10" height="10" x="-17" y="72" fill="#ebedf0" data-count="0" data-date="2017-12-09"></rect>
              </g>
              <g transform="translate(403, 0)">
                  <rect className="day" width="10" height="10" x="-18" y="0" fill="#ebedf0" data-count="0" data-date="2017-12-10"></rect>
                  <rect className="day" width="10" height="10" x="-18" y="12" fill="#ebedf0" data-count="0" data-date="2017-12-11"></rect>
                  <rect className="day" width="10" height="10" x="-18" y="24" fill="#ebedf0" data-count="0" data-date="2017-12-12"></rect>
                  <rect className="day" width="10" height="10" x="-18" y="36" fill="#ebedf0" data-count="0" data-date="2017-12-13"></rect>
                  <rect className="day" width="10" height="10" x="-18" y="48" fill="#ebedf0" data-count="0" data-date="2017-12-14"></rect>
                  <rect className="day" width="10" height="10" x="-18" y="60" fill="#ebedf0" data-count="0" data-date="2017-12-15"></rect>
                  <rect className="day" width="10" height="10" x="-18" y="72" fill="#ebedf0" data-count="0" data-date="2017-12-16"></rect>
              </g>
              <g transform="translate(416, 0)">
                  <rect className="day" width="10" height="10" x="-19" y="0" fill="#ebedf0" data-count="0" data-date="2017-12-17"></rect>
                  <rect className="day" width="10" height="10" x="-19" y="12" fill="#ebedf0" data-count="0" data-date="2017-12-18"></rect>
                  <rect className="day" width="10" height="10" x="-19" y="24" fill="#ebedf0" data-count="0" data-date="2017-12-19"></rect>
                  <rect className="day" width="10" height="10" x="-19" y="36" fill="#ebedf0" data-count="0" data-date="2017-12-20"></rect>
                  <rect className="day" width="10" height="10" x="-19" y="48" fill="#ebedf0" data-count="0" data-date="2017-12-21"></rect>
                  <rect className="day" width="10" height="10" x="-19" y="60" fill="#ebedf0" data-count="0" data-date="2017-12-22"></rect>
                  <rect className="day" width="10" height="10" x="-19" y="72" fill="#ebedf0" data-count="0" data-date="2017-12-23"></rect>
              </g>
              <g transform="translate(429, 0)">
                  <rect className="day" width="10" height="10" x="-20" y="0" fill="#ebedf0" data-count="0" data-date="2017-12-24"></rect>
                  <rect className="day" width="10" height="10" x="-20" y="12" fill="#ebedf0" data-count="0" data-date="2017-12-25"></rect>
                  <rect className="day" width="10" height="10" x="-20" y="24" fill="#ebedf0" data-count="0" data-date="2017-12-26"></rect>
                  <rect className="day" width="10" height="10" x="-20" y="36" fill="#ebedf0" data-count="0" data-date="2017-12-27"></rect>
                  <rect className="day" width="10" height="10" x="-20" y="48" fill="#ebedf0" data-count="0" data-date="2017-12-28"></rect>
                  <rect className="day" width="10" height="10" x="-20" y="60" fill="#ebedf0" data-count="0" data-date="2017-12-29"></rect>
                  <rect className="day" width="10" height="10" x="-20" y="72" fill="#ebedf0" data-count="0" data-date="2017-12-30"></rect>
              </g>
              <g transform="translate(442, 0)">
                  <rect className="day" width="10" height="10" x="-21" y="0" fill="#ebedf0" data-count="0" data-date="2017-12-31"></rect>
                  <rect className="day" width="10" height="10" x="-21" y="12" fill="#ebedf0" data-count="0" data-date="2018-01-01"></rect>
                  <rect className="day" width="10" height="10" x="-21" y="24" fill="#ebedf0" data-count="0" data-date="2018-01-02"></rect>
                  <rect className="day" width="10" height="10" x="-21" y="36" fill="#c6e48b" data-count="2" data-date="2018-01-03"></rect>
                  <rect className="day" width="10" height="10" x="-21" y="48" fill="#ebedf0" data-count="0" data-date="2018-01-04"></rect>
                  <rect className="day" width="10" height="10" x="-21" y="60" fill="#ebedf0" data-count="0" data-date="2018-01-05"></rect>
                  <rect className="day" width="10" height="10" x="-21" y="72" fill="#ebedf0" data-count="0" data-date="2018-01-06"></rect>
              </g>
              <g transform="translate(455, 0)">
                  <rect className="day" width="10" height="10" x="-22" y="0" fill="#ebedf0" data-count="0" data-date="2018-01-07"></rect>
                  <rect className="day" width="10" height="10" x="-22" y="12" fill="#c6e48b" data-count="1" data-date="2018-01-08"></rect>
                  <rect className="day" width="10" height="10" x="-22" y="24" fill="#ebedf0" data-count="0" data-date="2018-01-09"></rect>
                  <rect className="day" width="10" height="10" x="-22" y="36" fill="#7bc96f" data-count="4" data-date="2018-01-10"></rect>
                  <rect className="day" width="10" height="10" x="-22" y="48" fill="#196127" data-count="11" data-date="2018-01-11"></rect>
                  <rect className="day" width="10" height="10" x="-22" y="60" fill="#7bc96f" data-count="5" data-date="2018-01-12"></rect>
                  <rect className="day" width="10" height="10" x="-22" y="72" fill="#196127" data-count="14" data-date="2018-01-13"></rect>
              </g>
              <g transform="translate(468, 0)">
                  <rect className="day" width="10" height="10" x="-23" y="0" fill="#196127" data-count="12" data-date="2018-01-14"></rect>
                  <rect className="day" width="10" height="10" x="-23" y="12" fill="#c6e48b" data-count="3" data-date="2018-01-15"></rect>
                  <rect className="day" width="10" height="10" x="-23" y="24" fill="#239a3b" data-count="8" data-date="2018-01-16"></rect>
                  <rect className="day" width="10" height="10" x="-23" y="36" fill="#239a3b" data-count="8" data-date="2018-01-17"></rect>
                  <rect className="day" width="10" height="10" x="-23" y="48" fill="#196127" data-count="18" data-date="2018-01-18"></rect>
                  <rect className="day" width="10" height="10" x="-23" y="60" fill="#7bc96f" data-count="6" data-date="2018-01-19"></rect>
                  <rect className="day" width="10" height="10" x="-23" y="72" fill="#7bc96f" data-count="5" data-date="2018-01-20"></rect>
              </g>
              <g transform="translate(481, 0)">
                  <rect className="day" width="10" height="10" x="-24" y="0" fill="#239a3b" data-count="8" data-date="2018-01-21"></rect>
                  <rect className="day" width="10" height="10" x="-24" y="12" fill="#7bc96f" data-count="4" data-date="2018-01-22"></rect>
                  <rect className="day" width="10" height="10" x="-24" y="24" fill="#c6e48b" data-count="3" data-date="2018-01-23"></rect>
                  <rect className="day" width="10" height="10" x="-24" y="36" fill="#7bc96f" data-count="6" data-date="2018-01-24"></rect>
                  <rect className="day" width="10" height="10" x="-24" y="48" fill="#7bc96f" data-count="4" data-date="2018-01-25"></rect>
                  <rect className="day" width="10" height="10" x="-24" y="60" fill="#7bc96f" data-count="6" data-date="2018-01-26"></rect>
                  <rect className="day" width="10" height="10" x="-24" y="72" fill="#c6e48b" data-count="2" data-date="2018-01-27"></rect>
              </g>
              <g transform="translate(494, 0)">
                  <rect className="day" width="10" height="10" x="-25" y="0" fill="#ebedf0" data-count="0" data-date="2018-01-28"></rect>
                  <rect className="day" width="10" height="10" x="-25" y="12" fill="#7bc96f" data-count="4" data-date="2018-01-29"></rect>
                  <rect className="day" width="10" height="10" x="-25" y="24" fill="#7bc96f" data-count="4" data-date="2018-01-30"></rect>
                  <rect className="day" width="10" height="10" x="-25" y="36" fill="#c6e48b" data-count="3" data-date="2018-01-31"></rect>
                  <rect className="day" width="10" height="10" x="-25" y="48" fill="#7bc96f" data-count="4" data-date="2018-02-01"></rect>
                  <rect className="day" width="10" height="10" x="-25" y="60" fill="#c6e48b" data-count="3" data-date="2018-02-02"></rect>
                  <rect className="day" width="10" height="10" x="-25" y="72" fill="#c6e48b" data-count="3" data-date="2018-02-03"></rect>
              </g>
              <g transform="translate(507, 0)">
                  <rect className="day" width="10" height="10" x="-26" y="0" fill="#7bc96f" data-count="6" data-date="2018-02-04"></rect>
                  <rect className="day" width="10" height="10" x="-26" y="12" fill="#c6e48b" data-count="3" data-date="2018-02-05"></rect>
                  <rect className="day" width="10" height="10" x="-26" y="24" fill="#7bc96f" data-count="5" data-date="2018-02-06"></rect>
                  <rect className="day" width="10" height="10" x="-26" y="36" fill="#7bc96f" data-count="4" data-date="2018-02-07"></rect>
                  <rect className="day" width="10" height="10" x="-26" y="48" fill="#7bc96f" data-count="4" data-date="2018-02-08"></rect>
                  <rect className="day" width="10" height="10" x="-26" y="60" fill="#239a3b" data-count="7" data-date="2018-02-09"></rect>
                  <rect className="day" width="10" height="10" x="-26" y="72" fill="#196127" data-count="11" data-date="2018-02-10"></rect>
              </g>
              <g transform="translate(520, 0)">
                  <rect className="day" width="10" height="10" x="-27" y="0" fill="#196127" data-count="10" data-date="2018-02-11"></rect>
                  <rect className="day" width="10" height="10" x="-27" y="12" fill="#ebedf0" data-count="0" data-date="2018-02-12"></rect>
                  <rect className="day" width="10" height="10" x="-27" y="24" fill="#7bc96f" data-count="5" data-date="2018-02-13"></rect>
                  <rect className="day" width="10" height="10" x="-27" y="36" fill="#c6e48b" data-count="3" data-date="2018-02-14"></rect>
                  <rect className="day" width="10" height="10" x="-27" y="48" fill="#7bc96f" data-count="5" data-date="2018-02-15"></rect>
                  <rect className="day" width="10" height="10" x="-27" y="60" fill="#7bc96f" data-count="4" data-date="2018-02-16"></rect>
                  <rect className="day" width="10" height="10" x="-27" y="72" fill="#c6e48b" data-count="1" data-date="2018-02-17"></rect>
              </g>
              <g transform="translate(533, 0)">
                  <rect className="day" width="10" height="10" x="-28" y="0" fill="#ebedf0" data-count="0" data-date="2018-02-18"></rect>
                  <rect className="day" width="10" height="10" x="-28" y="12" fill="#c6e48b" data-count="1" data-date="2018-02-19"></rect>
                  <rect className="day" width="10" height="10" x="-28" y="24" fill="#c6e48b" data-count="2" data-date="2018-02-20"></rect>
                  <rect className="day" width="10" height="10" x="-28" y="36" fill="#7bc96f" data-count="4" data-date="2018-02-21"></rect>
                  <rect className="day" width="10" height="10" x="-28" y="48" fill="#7bc96f" data-count="4" data-date="2018-02-22"></rect>
                  <rect className="day" width="10" height="10" x="-28" y="60" fill="#7bc96f" data-count="6" data-date="2018-02-23"></rect>
                  <rect className="day" width="10" height="10" x="-28" y="72" fill="#7bc96f" data-count="6" data-date="2018-02-24"></rect>
              </g>
              <g transform="translate(546, 0)">
                  <rect className="day" width="10" height="10" x="-29" y="0" fill="#c6e48b" data-count="2" data-date="2018-02-25"></rect>
                  <rect className="day" width="10" height="10" x="-29" y="12" fill="#196127" data-count="13" data-date="2018-02-26"></rect>
                  <rect className="day" width="10" height="10" x="-29" y="24" fill="#c6e48b" data-count="3" data-date="2018-02-27"></rect>
                  <rect className="day" width="10" height="10" x="-29" y="36" fill="#c6e48b" data-count="2" data-date="2018-02-28"></rect>
                  <rect className="day" width="10" height="10" x="-29" y="48" fill="#c6e48b" data-count="2" data-date="2018-03-01"></rect>
                  <rect className="day" width="10" height="10" x="-29" y="60" fill="#c6e48b" data-count="3" data-date="2018-03-02"></rect>
                  <rect className="day" width="10" height="10" x="-29" y="72" fill="#7bc96f" data-count="4" data-date="2018-03-03"></rect>
              </g>
              <g transform="translate(559, 0)">
                  <rect className="day" width="10" height="10" x="-30" y="0" fill="#196127" data-count="11" data-date="2018-03-04"></rect>
                  <rect className="day" width="10" height="10" x="-30" y="12" fill="#239a3b" data-count="8" data-date="2018-03-05"></rect>
                  <rect className="day" width="10" height="10" x="-30" y="24" fill="#196127" data-count="12" data-date="2018-03-06"></rect>
                  <rect className="day" width="10" height="10" x="-30" y="36" fill="#196127" data-count="10" data-date="2018-03-07"></rect>
                  <rect className="day" width="10" height="10" x="-30" y="48" fill="#196127" data-count="11" data-date="2018-03-08"></rect>
                  <rect className="day" width="10" height="10" x="-30" y="60" fill="#c6e48b" data-count="2" data-date="2018-03-09"></rect>
                  <rect className="day" width="10" height="10" x="-30" y="72" fill="#c6e48b" data-count="3" data-date="2018-03-10"></rect>
              </g>
              <g transform="translate(572, 0)">
                  <rect className="day" width="10" height="10" x="-31" y="0" fill="#c6e48b" data-count="1" data-date="2018-03-11"></rect>
                  <rect className="day" width="10" height="10" x="-31" y="12" fill="#7bc96f" data-count="4" data-date="2018-03-12"></rect>
                  <rect className="day" width="10" height="10" x="-31" y="24" fill="#7bc96f" data-count="5" data-date="2018-03-13"></rect>
                  <rect className="day" width="10" height="10" x="-31" y="36" fill="#c6e48b" data-count="3" data-date="2018-03-14"></rect>
                  <rect className="day" width="10" height="10" x="-31" y="48" fill="#c6e48b" data-count="2" data-date="2018-03-15"></rect>
                  <rect className="day" width="10" height="10" x="-31" y="60" fill="#c6e48b" data-count="2" data-date="2018-03-16"></rect>
                  <rect className="day" width="10" height="10" x="-31" y="72" fill="#c6e48b" data-count="3" data-date="2018-03-17"></rect>
              </g>
              <g transform="translate(585, 0)">
                  <rect className="day" width="10" height="10" x="-32" y="0" fill="#7bc96f" data-count="4" data-date="2018-03-18"></rect>
                  <rect className="day" width="10" height="10" x="-32" y="12" fill="#7bc96f" data-count="6" data-date="2018-03-19"></rect>
                  <rect className="day" width="10" height="10" x="-32" y="24" fill="#239a3b" data-count="9" data-date="2018-03-20"></rect>
                  <rect className="day" width="10" height="10" x="-32" y="36" fill="#7bc96f" data-count="4" data-date="2018-03-21"></rect>
                  <rect className="day" width="10" height="10" x="-32" y="48" fill="#7bc96f" data-count="6" data-date="2018-03-22"></rect>
                  <rect className="day" width="10" height="10" x="-32" y="60" fill="#7bc96f" data-count="5" data-date="2018-03-23"></rect>
                  <rect className="day" width="10" height="10" x="-32" y="72" fill="#239a3b" data-count="7" data-date="2018-03-24"></rect>
              </g>
              <g transform="translate(598, 0)">
                  <rect className="day" width="10" height="10" x="-33" y="0" fill="#c6e48b" data-count="2" data-date="2018-03-25"></rect>
                  <rect className="day" width="10" height="10" x="-33" y="12" fill="#239a3b" data-count="8" data-date="2018-03-26"></rect>
                  <rect className="day" width="10" height="10" x="-33" y="24" fill="#7bc96f" data-count="5" data-date="2018-03-27"></rect>
                  <rect className="day" width="10" height="10" x="-33" y="36" fill="#c6e48b" data-count="2" data-date="2018-03-28"></rect>
                  <rect className="day" width="10" height="10" x="-33" y="48" fill="#7bc96f" data-count="5" data-date="2018-03-29"></rect>
                  <rect className="day" width="10" height="10" x="-33" y="60" fill="#7bc96f" data-count="4" data-date="2018-03-30"></rect>
                  <rect className="day" width="10" height="10" x="-33" y="72" fill="#7bc96f" data-count="4" data-date="2018-03-31"></rect>
              </g>
              <g transform="translate(611, 0)">
                  <rect className="day" width="10" height="10" x="-34" y="0" fill="#c6e48b" data-count="3" data-date="2018-04-01"></rect>
                  <rect className="day" width="10" height="10" x="-34" y="12" fill="#7bc96f" data-count="6" data-date="2018-04-02"></rect>
                  <rect className="day" width="10" height="10" x="-34" y="24" fill="#7bc96f" data-count="5" data-date="2018-04-03"></rect>
                  <rect className="day" width="10" height="10" x="-34" y="36" fill="#7bc96f" data-count="4" data-date="2018-04-04"></rect>
                  <rect className="day" width="10" height="10" x="-34" y="48" fill="#7bc96f" data-count="6" data-date="2018-04-05"></rect>
                  <rect className="day" width="10" height="10" x="-34" y="60" fill="#7bc96f" data-count="6" data-date="2018-04-06"></rect>
                  <rect className="day" width="10" height="10" x="-34" y="72" fill="#c6e48b" data-count="3" data-date="2018-04-07"></rect>
              </g>
              <g transform="translate(624, 0)">
                  <rect className="day" width="10" height="10" x="-35" y="0" fill="#ebedf0" data-count="0" data-date="2018-04-08"></rect>
                  <rect className="day" width="10" height="10" x="-35" y="12" fill="#c6e48b" data-count="1" data-date="2018-04-09"></rect>
                  <rect className="day" width="10" height="10" x="-35" y="24" fill="#c6e48b" data-count="2" data-date="2018-04-10"></rect>
                  <rect className="day" width="10" height="10" x="-35" y="36" fill="#7bc96f" data-count="4" data-date="2018-04-11"></rect>
                  <rect className="day" width="10" height="10" x="-35" y="48" fill="#c6e48b" data-count="2" data-date="2018-04-12"></rect>
                  <rect className="day" width="10" height="10" x="-35" y="60" fill="#c6e48b" data-count="1" data-date="2018-04-13"></rect>
                  <rect className="day" width="10" height="10" x="-35" y="72" fill="#ebedf0" data-count="0" data-date="2018-04-14"></rect>
              </g>
              <g transform="translate(637, 0)">
                  <rect className="day" width="10" height="10" x="-36" y="0" fill="#ebedf0" data-count="0" data-date="2018-04-15"></rect>
                  <rect className="day" width="10" height="10" x="-36" y="12" fill="#7bc96f" data-count="4" data-date="2018-04-16"></rect>
                  <rect className="day" width="10" height="10" x="-36" y="24" fill="#7bc96f" data-count="5" data-date="2018-04-17"></rect>
                  <rect className="day" width="10" height="10" x="-36" y="36" fill="#7bc96f" data-count="4" data-date="2018-04-18"></rect>
                  <rect className="day" width="10" height="10" x="-36" y="48" fill="#7bc96f" data-count="4" data-date="2018-04-19"></rect>
                  <rect className="day" width="10" height="10" x="-36" y="60" fill="#c6e48b" data-count="3" data-date="2018-04-20"></rect>
                  <rect className="day" width="10" height="10" x="-36" y="72" fill="#ebedf0" data-count="0" data-date="2018-04-21"></rect>
              </g>
              <g transform="translate(650, 0)">
                  <rect className="day" width="10" height="10" x="-37" y="0" fill="#ebedf0" data-count="0" data-date="2018-04-22"></rect>
                  <rect className="day" width="10" height="10" x="-37" y="12" fill="#7bc96f" data-count="4" data-date="2018-04-23"></rect>
                  <rect className="day" width="10" height="10" x="-37" y="24" fill="#c6e48b" data-count="1" data-date="2018-04-24"></rect>
                  <rect className="day" width="10" height="10" x="-37" y="36" fill="#c6e48b" data-count="3" data-date="2018-04-25"></rect>
                  <rect className="day" width="10" height="10" x="-37" y="48" fill="#c6e48b" data-count="3" data-date="2018-04-26"></rect>
                  <rect className="day" width="10" height="10" x="-37" y="60" fill="#c6e48b" data-count="3" data-date="2018-04-27"></rect>
                  <rect className="day" width="10" height="10" x="-37" y="72" fill="#ebedf0" data-count="0" data-date="2018-04-28"></rect>
              </g>
              <g transform="translate(663, 0)">
                  <rect className="day" width="10" height="10" x="-38" y="0" fill="#ebedf0" data-count="0" data-date="2018-04-29"></rect>
                  <rect className="day" width="10" height="10" x="-38" y="12" fill="#7bc96f" data-count="6" data-date="2018-04-30"></rect>
                  <rect className="day" width="10" height="10" x="-38" y="24" fill="#c6e48b" data-count="3" data-date="2018-05-01"></rect>
                  <rect className="day" width="10" height="10" x="-38" y="36" fill="#c6e48b" data-count="1" data-date="2018-05-02"></rect>
                  <rect className="day" width="10" height="10" x="-38" y="48" fill="#c6e48b" data-count="2" data-date="2018-05-03"></rect>
                  <rect className="day" width="10" height="10" x="-38" y="60" fill="#7bc96f" data-count="4" data-date="2018-05-04"></rect>
                  <rect className="day" width="10" height="10" x="-38" y="72" fill="#ebedf0" data-count="0" data-date="2018-05-05"></rect>
              </g>
              <g transform="translate(676, 0)">
                  <rect className="day" width="10" height="10" x="-39" y="0" fill="#c6e48b" data-count="2" data-date="2018-05-06"></rect>
                  <rect className="day" width="10" height="10" x="-39" y="12" fill="#c6e48b" data-count="2" data-date="2018-05-07"></rect>
                  <rect className="day" width="10" height="10" x="-39" y="24" fill="#c6e48b" data-count="2" data-date="2018-05-08"></rect>
                  <rect className="day" width="10" height="10" x="-39" y="36" fill="#c6e48b" data-count="2" data-date="2018-05-09"></rect>
                  <rect className="day" width="10" height="10" x="-39" y="48" fill="#c6e48b" data-count="2" data-date="2018-05-10"></rect>
                  <rect className="day" width="10" height="10" x="-39" y="60" fill="#ebedf0" data-count="0" data-date="2018-05-11"></rect>
              </g>
              <text x="13" y="-10" className="month">May</text>
              <text x="61" y="-10" className="month">Jun</text>
              <text x="109" y="-10" className="month">Jul</text>
              <text x="169" y="-10" className="month">Aug</text>
              <text x="217" y="-10" className="month">Sep</text>
              <text x="265" y="-10" className="month">Oct</text>
              <text x="325" y="-10" className="month">Nov</text>
              <text x="373" y="-10" className="month">Dec</text>
              <text x="433" y="-10" className="month">Jan</text>
              <text x="481" y="-10" className="month">Feb</text>
              <text x="529" y="-10" className="month">Mar</text>
              <text x="577" y="-10" className="month">Apr</text>
            <text textAnchor="start" className="wday" dx="-14" dy="8" style={{display: "none"}}>Sun</text>
            <text textAnchor="start" className="wday" dx="-14" dy="20">Mon</text>
            <text textAnchor="start" className="wday" dx="-14" dy="32" style={{display: "none"}}>Tue</text>
            <text textAnchor="start" className="wday" dx="-14" dy="44">Wed</text>
            <text textAnchor="start" className="wday" dx="-14" dy="57" style={{display: "none"}}>Thu</text>
            <text textAnchor="start" className="wday" dx="-14" dy="69">Fri</text>
            <text textAnchor="start" className="wday" dx="-14" dy="81" style={{display: "none"}}>Sat</text>
          </g>
        </svg>

      </div>
    );
  }
}

export default CalendarGraph

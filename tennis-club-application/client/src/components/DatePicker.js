import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './DatePicker.css';

let oneDay = 60 * 60 * 24 * 1000;
let todayTimestamp = Date.now() - (Date.now() % oneDay) + (new Date().getTimezoneOffset() * 1000 * 60);
let inputRef = React.createRef();

const sampleEventData = [
    {
      timestamp: new Date(2023, 8, 25).getTime(), // Example date timestamp (2023-08-25)
      time: '6-8 PM',
      coaches: 'Chandler, Jorge, Jesse',
      title: 'Cardio Clinic',
      description: 'Heavy Exercise incorporated into tennis play',
    },
    {
      timestamp: new Date(2023, 8, 26).getTime(), // Example date timestamp (2023-08-26)
      time: '6-8 PM',
      coaches: 'Chandler, Tracy, Jesse, Rob',
      title: 'Kids Clinic',
      description: '4-6 age group tennis fun!',
    },
    {
        timestamp: new Date(2023, 8, 30).getTime(), // Example date timestamp (2023-08-26)
        time: '6-8 PM',
        coaches: 'Jorge, Brad, Tracy',
        title: 'Adult Regular Clinic',
        description: 'Adult tennis play for all levels!',
    },
    {
        timestamp: new Date(2023, 8, 30).getTime(), // Example date timestamp (2023-08-26)
        time: '6-8 PM',
        coaches: 'Chandler, Jorge, Rob, Jesse',
        title: 'Kids Clinic',
        description: '6-8 age group!',
    },
    {
        timestamp: new Date(2023, 8, 30).getTime(), // Example date timestamp (2023-08-26)
        time: '6-8 PM',
        coaches: 'Chandler, Jorge, Rob, Jesse',
        title: 'Mens Night',
        description: 'Mens play hahhahahah!',
    },
    {
        timestamp: new Date(2023, 8, 30).getTime(), // Example date timestamp (2023-08-26)
        time: '6-8 PM',
        coaches: 'Chandler, Jorge, Rob, Jesse',
        title: 'Mens Night',
        description: 'Mens play hahhahahah!',
    },
    // Add more events as needed
  ];

export default class MyDatePicker extends Component {

    state = {
        // ... (existing state properties)
        getMonthDetails: [],
        selectedEvent: null,
        selectedDate: null,  // Add selectedDate state
        eventText: [],       // Add eventText state
    }; 

    constructor() {
        super();
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth();
        this.state = {
            year,
            month,
            selectedDay: todayTimestamp,
            monthDetails: this.getMonthDetails(year, month)
        }
    }

    componentDidMount() {
        window.addEventListener('click', this.addBackDrop);
        this.setDateToInput(this.state.selectedDay);
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.addBackDrop);
    }

    addBackDrop =e=> {
        if(this.state.showDatePicker && !ReactDOM.findDOMNode(this).contains(e.target)) {
            this.showDatePicker(false);
        }
    }

    showDatePicker =(showDatePicker=true)=> {
        this.setState({ showDatePicker })
    }

    /**
     *  Core
     */

    daysMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    monthMap = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    getDayDetails =args=> {
        let date = args.index - args.firstDay; 
        let day = args.index%7;
        let prevMonth = args.month-1;
        let prevYear = args.year;
        if(prevMonth < 0) {
            prevMonth = 11;
            prevYear--;
        }
        let prevMonthNumberOfDays = this.getNumberOfDays(prevYear, prevMonth);
        let _date = (date < 0 ? prevMonthNumberOfDays+date : date % args.numberOfDays) + 1;
        let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
        let timestamp = new Date(args.year, args.month, _date).getTime();
        return {
            date: _date,
            day,
            month, 
            timestamp,
            dayString: this.daysMap[day]
        }
    }

    getNumberOfDays =(year, month)=> {
        return 40 - new Date(year, month, 40).getDate();
    }

    getMonthDetails =(year, month)=> {
        let firstDay = (new Date(year, month)).getDay();
        let numberOfDays = this.getNumberOfDays(year, month);
        let monthArray = [];
        let rows = 6;
        let currentDay = null;
        let index = 0; 
        let cols = 7;

        for(let row=0; row<rows; row++) {
            for(let col=0; col<cols; col++) { 
                currentDay = this.getDayDetails({
                    index,
                    numberOfDays,
                    firstDay,
                    year,
                    month
                });
                monthArray.push(currentDay);
                index++;
            }
        }
        return monthArray;
    }

    isCurrentDay =day=> {
        return day.timestamp === todayTimestamp;
    }

    isSelectedDay =day=> {
        return day.timestamp === this.state.selectedDay;
    }

    getDateFromDateString =dateValue=> {
        let dateData = dateValue.split('-').map(d=>parseInt(d, 10));
        if(dateData.length < 3) 
            return null;

        let year = dateData[0];
        let month = dateData[1];
        let date = dateData[2];
        return {year, month, date};
    }

    getMonthStr =month=> this.monthMap[Math.max(Math.min(11, month), 0)] || 'Month';

    getDateStringFromTimestamp =timestamp=> {
        let dateObject = new Date(timestamp);
        let month = dateObject.getMonth()+1;
        let date = dateObject.getDate();
        return dateObject.getFullYear() + '-' + (month < 10 ? '0'+month : month) + '-' + (date < 10 ? '0'+date : date);
    }

    setDate =dateData=> {
        let selectedDay = new Date(dateData.year, dateData.month-1, dateData.date).getTime();
        this.setState({ selectedDay })
        if(this.props.onChange) {
            this.props.onChange(selectedDay);
        }
    }

    updateDateFromInput =()=> {
        let dateValue = inputRef.current.value;
        let dateData = this.getDateFromDateString(dateValue);
        if(dateData !== null) { 
            this.setDate(dateData);
            this.setState({ 
                year: dateData.year, 
                month: dateData.month-1, 
                monthDetails: this.getMonthDetails(dateData.year, dateData.month-1)
            })
        }
    }

    setDateToInput =(timestamp)=> {
        let dateString = this.getDateStringFromTimestamp(timestamp);
        inputRef.current.value = dateString;
    }

    onDateClick =day=> {
        
        const selectedEvents = sampleEventData.filter(event => event.timestamp === day.timestamp+2678400000);

        if (selectedEvents.length > 0) {
            // Create an array of event descriptions
            const eventDescriptions = selectedEvents.map(event => `${event.title}: ${event.description}`);
            this.setState(
                {
                    selectedDay: day.timestamp,
                    selectedEvent: selectedEvents, // Set the selected events
                    eventText: eventDescriptions, // Set the event text as an array
                },
                () => this.setDateToInput(day.timestamp)
            );
        } else {
            this.setState({
                selectedDay: day.timestamp,
                selectedEvent: null,
                eventText: ['No clinics scheduled for today!'], // Set as an array
            });
        }

        if (this.props.onChange) {
            this.props.onChange(day.timestamp);
        }
    }

    setYear =offset=> {
        let year = this.state.year + offset;
        let month = this.state.month;
        this.setState({ 
            year,
            monthDetails: this.getMonthDetails(year, month)
        })
    }

    setMonth =offset=> {
        let year = this.state.year;
        let month = this.state.month + offset;
        if(month === -1) {
            month = 11;
            year--;
        } else if(month === 12) {
            month = 0;
            year++;
        }
        this.setState({ 
            year, 
            month,
            monthDetails: this.getMonthDetails(year, month)
        })
    }

    /**
     *  Renderers
     */

    renderCalendar() {
        let days = this.state.monthDetails.map((day, index)=> {
            return (
                <div className={'c-day-container ' + (day.month !== 0 ? ' disabled' : '') + 
                    (this.isCurrentDay(day) ? ' highlight' : '') + (this.isSelectedDay(day) ? ' highlight-green' : '')} key={index}>
                    <div className='cdc-day'>
                        <span onClick={()=>this.onDateClick(day)}>
                            {day.date}
                        </span>
                    </div>
                </div>
            )
        })

        return (
            <div className='c-container'>
                <div className='cc-head'>
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((d,i)=><div key={i} className='cch-name'>{d}</div>)}
                </div>
                <div className='cc-body'>
                    {days}
                </div>
            </div>
        )
    }

    render() {

        //const { selectedEvent } = this.state;
        const eventText = this.state.eventText; // Define eventText here


        return (
            <div className='MyDatePicker'>
                <div className='mdp-input'  onClick={()=> this.showDatePicker(true)}>
                    <input type='date' onChange={this.updateDateFromInput} ref={inputRef}/>
                </div>
                
                {this.state.showDatePicker ? (
                    <div className='mdp-container'>
                        <div className='mdpc-head'>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner' onClick={()=> this.setYear(-1)}>
                                    <span className='mdpchbi-left-arrows'></span>
                                </div>
                            </div>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner' onClick={()=> this.setMonth(-1)}>
                                    <span className='mdpchbi-left-arrow'></span>
                                </div>
                            </div>
                            <div className='mdpch-container'>
                                <div className='mdpchc-year'>{this.state.year}</div>
                                <div className='mdpchc-month'>{this.getMonthStr(this.state.month)}</div>
                            </div>
                            <div className='mdpch-button'>
                                <div className='mdpchb-inner' onClick={()=> this.setMonth(1)}>
                                    <span className='mdpchbi-right-arrow'></span>
                                </div>
                            </div>
                            <div className='mdpch-button' onClick={()=> this.setYear(1)}>
                                <div className='mdpchb-inner'>
                                    <span className='mdpchbi-right-arrows'></span>
                                </div>
                            </div>
                        </div>
                        <div className='mdpc-body'>
                            {this.renderCalendar()}
                        </div>
                    </div>
                ) : ''}
                <div className='event-info'>
                    {/* <p>{eventText}</p> */}
                    <ul class = "events__ul">
                        {eventText && eventText.length > 0 ? (
                            eventText.map((event, index) => (
                                <li class ="events__li" key={index}>{event}</li>
                            ))
                        ) : (
                            <p class="empty__events"></p>
                        )}
                    </ul>
                </div>
                
            </div>
        )
    }

}

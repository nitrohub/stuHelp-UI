//Problem 
// --> Showing the available Dates for the Professor 
// --> Getting the Dates from the Database showcasing the available dates on the Calender
// --> Showing the available Timelines for the Available Dates
// --> Managing the One - One Counselling and the Group Counselling
// --> Updating the Availability of the Professor according to the Booking Done on the Website 
// --> One-One --> Time slot will be Completely Booked
// --> Group --> Time Slot will be shown until member limit becomes full

import { Component } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class ModalCalender extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show,
      selectedDate: '',
      selectedTime: '',
    };
  }

  timeConverter(timeString){

// Split the time string into hours, minutes, and AM/PM components
const [time, period] = timeString.split(" ");
const [hours, minutes] = time.split(":");

// Convert the hours to numeric value
let hoursNumeric = parseInt(hours, 10);

// Adjust the hours based on the AM/PM period
if (period === "PM" && hoursNumeric < 12) {
  hoursNumeric += 12;
} else if (period === "AM" && hoursNumeric === 12) {
  hoursNumeric = 0;
}

// Convert the hours back to string and format it with leading zero if needed
const hoursFormatted = hoursNumeric.toString().padStart(2, "0");

// Create the 24-hour time string
const convertedTime = `${hoursFormatted}:${minutes}`;

return convertedTime; // Output: "12:30" (in 24-hour format)
  }

  onConfirm(){
    
  }


  handleDateChange = (e) => {
    this.setState({ selectedDate: e.target.value });
  };

  handleTimeChange = (e) => {
    this.setState({ selectedTime: e.target.value });
  };
  render() {
    var timeLines = this.props.availability;
    const dates = timeLines.map((item) => item);
    console.log("Dates=", dates);
    dates.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log("Dates=", dates);

    const { selectedDate, selectedTime } = this.state;
    const { availability, show, hide } = this.props;

    const today = new Date();
    const currentDate = today.toISOString().split('T')[0];
    const currentTime = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const filteredAvailability = availability.filter((item) => {
        const currentDate = new Date(item.date);
        return currentDate.toISOString().split('T')[0] >= today.toISOString().split('T')[0];
      });

      filteredAvailability.forEach((item) => {
        if (item.date == today.toISOString().split('T')[0]) {
            item.timeSlot = item.timeSlot.filter((timeItem) => {
            const time = timeItem.split(',')[0];
            console.log("Time=",time);
            const timeNumeric = parseInt(time, 10); // Convert time to a numeric value
            console.log("Time Numberic=",timeNumeric);
            console.log("CurrentTime = ",currentTime);
            const currentNumeric = parseInt(this.timeConverter(currentTime).split(':')[0], 10); // Convert current time to a numeric value
            console.log("CurrentNumberic=",currentNumeric);
            return (timeNumeric > currentNumeric);
            });
        }
      });

      console.log("FilteredAvailability on time=",filteredAvailability );


    const selectedAvailability = filteredAvailability.find((item) => item.date === selectedDate);


    return (
        <Modal show={show} onHide={hide}>
        <Modal.Header closeButton>
          <Modal.Title>Select Date and Time</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formDate">
            <Form.Label>Select a date:</Form.Label>
            <Form.Control as="select" value={selectedDate} onChange={this.handleDateChange}>
              <option value="">Select a date</option>
              {filteredAvailability.map((item) => (
                <option key={item.date} value={item.date}>
                  {item.date}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

          {selectedAvailability && (
            <Form.Group controlId="formTime">
              <Form.Label>Select a time:</Form.Label>
              <Form.Control as="select" value={selectedTime} onChange={this.handleTimeChange}>
                <option value="">Select a time slot</option>
                {selectedAvailability.timeSlot.map((time, index) => (
                  <option key={index} value={time}>
                    {time}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.hide}>
            Close
          </Button>
          <Button variant="primary" disabled={!selectedTime} onClick={this.onConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalCalender;

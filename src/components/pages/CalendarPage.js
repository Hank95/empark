import React, { useState, useEffect } from "react";
import styled from "styled-components";
import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { db } from "../../firebase";
import { getDocs, addDoc, doc, collection } from "@firebase/firestore";
import EventList from "./EventList";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const events = [
  {
    title: "Big Meeting",
    allDay: true,
    start: new Date(2021, 6, 1, 14),
    end: new Date(2021, 6, 1, 15),
  },
  {
    title: "Vacation",
    start: new Date(2021, 6, 7),
    end: new Date(2021, 6, 10),
  },
  {
    title: "Conference",
    start: new Date(2021, 6, 20),
    end: new Date(2021, 6, 23),
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2021, 10, 23, 10, 30, 0, 0),
    end: new Date(2021, 10, 23, 12, 30, 0, 0),
    desc: "Pre-meeting meeting, to prepare for the meeting",
  },
];

function CalendarPage() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [clicked, setClicked] = useState(false);
  const calendarCollectionRef = collection(db, "calendar");

  useEffect(() => {
    const getEvents = async () => {
      const data = await getDocs(calendarCollectionRef);

      setAllEvents(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          start: doc.data().start.toDate(),
          end: doc.data().end.toDate(),
        }))
      );
    };

    getEvents();
  }, []);

  async function handleAddEvent() {
    let event = await addDoc(calendarCollectionRef, newEvent);

    setAllEvents([...allEvents, event]);
  }

  const handleNavigate = (e) => {
    console.log(e);
  };

  return (
    <div className="Calendar">
      <h1>Calendar</h1>
      <button onClick={() => setClicked(!clicked)}>
        {clicked ? "Calendar View" : "List View"}
      </button>
      <CalendarInput>
        <h2>Add New Event</h2>
        <Inputs>
          <input
            type="text"
            placeholder="Add Title"
            // style={{ width: "20%", marginRight: "10px" }}
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
          />
          <DatePicker
            placeholderText="Start Date"
            style={{ marginRight: "10px" }}
            selected={newEvent.start}
            onChange={(start) => setNewEvent({ ...newEvent, start })}
            showTimeSelect
            dateFormat="Pp"
          />
          <DatePicker
            placeholderText="End Date"
            selected={newEvent.end}
            onChange={(end) => setNewEvent({ ...newEvent, end })}
            showTimeSelect
            dateFormat="Pp"
          />
          <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
            Add Event
          </button>
        </Inputs>
      </CalendarInput>
      {clicked ? (
        <EventList events={allEvents} setAllEvents={setAllEvents} />
      ) : (
        <Calendar
          onNavigate={handleNavigate}
          onView={handleNavigate}
          localizer={localizer}
          events={allEvents}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500, margin: "50px" }}
        />
      )}
    </div>
  );
}

export default CalendarPage;

const CalendarInput = styled.div`
  margin: 0 auto;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;
const Inputs = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    width: 100%;
    margin-bottom: 10px;
  }
  button {
    width: 100%;
    margin-top: 10px;
  }
`;

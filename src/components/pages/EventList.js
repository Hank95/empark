import React from "react";
import { format } from "date-fns";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../firebase";

const EventList = ({ events, setAllEvents }) => {
  console.log(events);

  //   Sort events by date
  const sortedEvents = events.sort((a, b) => {
    return new Date(a.start) - new Date(b.start);
  });

  //   Delete event from Firestore on click of delete button
  const deleteEvent = async (eventId) => {
    await deleteDoc(doc(db, "calendar", eventId));
    const newEvents = events.filter((event) => event.id !== eventId);

    setAllEvents(newEvents);
  };

  return (
    <div>
      {sortedEvents.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.description}</p>
          <p>Starts: {format(event.start, "Pp")}</p>
          <p>Ends: {format(event.end, "Pp")}</p>
          <button onClick={() => deleteEvent(event.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default EventList;

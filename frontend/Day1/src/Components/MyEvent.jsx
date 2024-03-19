import { Modal, Button } from "@mui/material";
import { useState } from "react";

const MyEventsPage = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      theme: "Fairy Theme",
      food: "Pizza and Cake",
      addons: ["Balloons", "Party Hats"],
    },
    {
      id: 2,
      theme: "Boss Baby Theme",
      food: "Buffet",
      addons: ["DJ", "Photographer"],
    },
  ]);

  const [modalEvent, setModalEvent] = useState(null);
  const [open, setOpen] = useState(false);

  const openModal = (event) => {
    setModalEvent(event);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-md w-full mx-auto p-4 md:p-8 bg-white ">
      <h2 className="font-bold text-xl text-neutral-800  mb-4">My Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div key={event.id} className="border rounded-md p-4 shadow-md">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{event.theme}</h3>
              <Button
                onClick={() => openModal(event)}
                variant="contained"
                color="primary"
              >
                View Details
              </Button>
            </div>
            <p>
              <span className="font-semibold">Food:</span> {event.food}
            </p>
            <p>
              <span className="font-semibold">Add-ons:</span>{" "}
              {event.addons.join(", ")}
            </p>
          </div>
        ))}
      </div>
      <Modal
        open={open}
        onClose={closeModal}
        sx={{
          width: 500,
          maxHeight: "50%",
          mx: "auto",
          my: "auto",
        }}
      >
        <div className="modal-content bg-white">
          <h2 className="font-bold text-xl text-neutral-800  mb-4">
            {modalEvent && modalEvent.theme}
          </h2>
          <p>
            <span className="font-semibold">Food:</span>{" "}
            {modalEvent && modalEvent.food}
          </p>
          <p>
            <span className="font-semibold">Add-ons:</span>{" "}
            {modalEvent && modalEvent.addons.join(", ")}
          </p>
          <div className="flex justify-center mt-4">
            <Button variant="contained" color="primary" className="mr-2">
              Edit
            </Button>
            <Button variant="contained" color="error">
              Delete
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MyEventsPage;

import React from 'react';

const BookAppointment = ({date}) => {
  return (
    <section>
      <h2 className="text-center text-brand">Available Appointments on {date.toDateString()}</h2>
 </section>
  );
};

export default BookAppointment;
Title: Booking / Inquiry
Slug: booking
Template: page

## Booking Inquiry

Our team will confirm availability and rates and get back to you by **phone, email, or WhatsApp**.

<form action="https://formspree.io/f/mppawknb" method="POST" class="booking-form">
  <label for="name">Full Name</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="phone">Phone / WhatsApp</label>
  <input type="tel" id="phone" name="phone" required>

  <label for="checkin">Check-in Date</label>
  <input type="date" id="checkin" name="checkin" required>

  <label for="checkout">Check-out Date</label>
  <input type="date" id="checkout" name="checkout" required>

  <label for="room_type">Room Type</label>
  <select id="room_type" name="room_type">
    <option value="Single Occupancy A/C Room">Single Occupancy A/C Room</option>
    <option value="Single Occupancy A/C Room">Single Occupancy NOn A/C Room</option>
    <option value="Double Occupancy A/C Room">Double Occupancy A/C Room</option>
    <option value="Double Occupancy A/C Room">Double Occupancy Non A/C Room</option>
    <option value="Double Occupancy A/C Room">Triple Occupancy A/C Room</option>
    <option value="Double Occupancy A/C Room">Triple Occupancy Non A/C Room</option>
    <option value="Family Suite">Family Suite A/C Room</option>
    <option value="Family Suite">Family Suite Non A/C Room</option>
    <option value="Not Sure">Not Sure Yet</option>
  </select>

  <label for="guests">Number of Guests</label>
  <input type="number" id="guests" name="guests" min="1" value="1" required>

  <label for="message">Additional Requirements</label>
  <textarea id="message" name="message" rows="4"></textarea>

  <button type="submit">Send Inquiry</button>
</form>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <img src="./public/logo-light.png" alt="Logo" width="80" height="80">
  <h3 align="center">Wayfarers Rest</h3>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

![Screenshot](./public/wayfarers-rest-dashboard.png)

<p align="center">
Wayfarers Rest Hotel Management Application is a web-based platform designed to streamline hotel operations. Developed using React technology, this application empowers hotel staff to efficiently manage rooms, bookings, and guest services.
</p>

<!-- APPLICATION'S FEATURES -->

## 📝 Features

- Authentication and Authorization

  - Users accessing the application are designated hotel employees who must log in to perform tasks.
  - New user registrations are restricted to within the application to ensure that only authorized hotel employees can obtain accounts.
  - Users have the capability to upload an avatar, update their name, and change their password.

- Room Management

  - The application features a table presenting all the rooms, showcasing room photos, names, capacities, prices, and current discounts.
  - Users can edit, delete and create new rooms.

- Booking Management

  - The application provides a table exhibiting all bookings, displaying arrival and departure dates, status, paid amounts, as well as the room and guest information.
  - Booking statuses can be categorized as "unconfirmed" (booked but not yet checked in), "checked in", or "checked out", and the table is filterable based on these statuses.
  - Additional booking data includes guest count, duration of stay, guest observations, and breakfast booking details.

- Check-in and Check-out

  - Users have the ability to delete, check-in, or check out bookings as guests arrive.
  - Bookings may not have been paid upon guest arrival; therefore, users are required to confirm payment acceptance (handled externally) on check-in.
  - Guests can opt to add breakfast for their entire stay during check-in if not previously arranged.

- Sales Statistics

  - The application's home screen functions as a dashboard, presenting essential information for the last couple of days
    - A list of guests checking in and out on the current day, users can also checked-in or checked-out guests from here.
    - Statistics on recent bookings, sales, check-ins, and occupancy rate.
    - A chart illustrating daily hotel sales, encompassing both total sales and extras sales (currently limited to breakfast).
    - A chart statistics depicting stay durations, a pivotal metric for the hotel's operations.

- Settings Customization

  - Users can define several application-wide settings, including breakfast pricing, minimum and maximum nights per booking, and maximum guests per booking.

- App dark mode.

  - The application offers a dark mode option for enhanced visual comfort and flexibility.

<!-- TECHNOLOGY USED -->

## 👨‍💻 Technology Used

The Wild Oasis Hotel Management Application is built using the following technologies and libraries:

- **React**: A JavaScript library for building user interfaces.

- **Supabase**: An open-source alternative to Firebase, offering a suite of tools and services for building and scaling applications, including authentication, database management, and real-time updates.

- **React Query**: A data-fetching library for React applications, providing tools for managing and caching asynchronous data queries from APIs or other sources.

- **React Router**: A popular routing library for React applications, enabling developers to manage navigation and URL routing within single-page applications.

- **React Hook Form**: A lightweight and performant form library for React applications, offering a simple API for building and managing forms using React hooks.

- **Recharts**: A composable charting library for React applications, offering a wide range of chart types and customization options for visualizing data.

- **Styled Components**: A CSS-in-JS library for React applications, allowing developers to write CSS styles directly within their JavaScript code using tagged template literals.

- **Vite**: A modern build tool for JavaScript applications, optimized for fast development and performance. It supports various frameworks and provides features like hot module replacement and lightning-fast builds.

<!-- LIVE DEMO -->

## 🚀 Live Demo

[https://the-wayfarers-rest.vercel.app/](https://the-wayfarers-rest.vercel.app/)

## 🎮 Demo Account

You can log in using the provided demo account details:

- **Email**: jameswaniwan@gmail.com
- **Password**: 12345678

## 🛠 Installation Steps:

<p>1. Clone the repository</p>

```
git clone https://github.com/jcWani/wayfarers-rest.git
```

<p>2. Install required dependencies </p>

```
npm install
```

<p>3. Launch the development server</p>

```
npm run dev
```

<p>4. Open the application at</p>

```
http://localhost:5173
```

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgments

This appplication was the main project and developed as part of the [Udemy course](https://www.udemy.com/course/the-ultimate-react-course) "The Ultimate React Course 2024: React, Redux & More" by [Jonas Schmedtman](https://twitter.com/jonasschmedtman).

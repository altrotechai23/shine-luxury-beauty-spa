export interface BookingEmailData {
  appointmentId: string;
  fullName: string;
  phone: string;
  email: string;
  serviceName: string;
  date: Date;
  time: string;
  therapist?: string | null;
  notes?: string | null;
}

/*
=========================================================
SHINE BRAND
=========================================================
*/

const BRAND = {
  dark: "#061519",
  darkSoft: "#0A2025",
  teal: "#62AAB5",
  tealDark: "#3F8F9B",
  gold: "#D7C0A0",
  cream: "#F7F8F7",
  white: "#FFFFFF",
  muted: "#6B777A",
  border: "#E7ECEC",
};

/*
=========================================================
PRODUCTION SITE
=========================================================

IMPORTANT:

Do NOT use fs.readFileSync() for the logo.

The logo is publicly available at:

https://www.shinebeautyspa.co.za/shine.png
=========================================================
*/

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://www.shinebeautyspa.co.za";

const LOGO_URL =
  `${SITE_URL}/shine.png`;

/*
=========================================================
DATE FORMATTER
=========================================================
*/

function formatDate(date: Date) {
  return new Intl.DateTimeFormat(
    "en-ZA",
    {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "Africa/Johannesburg",
    }
  ).format(date);
}

/*
=========================================================
HTML ESCAPE
=========================================================
*/

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/*
=========================================================
CLIENT EMAIL
=========================================================
*/

export function createClientBookingEmail(
  booking: BookingEmailData
) {
  const customerName =
    escapeHtml(booking.fullName);

  const serviceName =
    escapeHtml(booking.serviceName);

  const formattedDate =
    escapeHtml(
      formatDate(booking.date)
    );

  const time =
    escapeHtml(booking.time);

  const appointmentId =
    escapeHtml(booking.appointmentId);

  const therapist =
    booking.therapist
      ? escapeHtml(booking.therapist)
      : "Your SHINE specialist";

  const notes =
    booking.notes
      ? escapeHtml(booking.notes)
      : "";

  return {
    html: `
<!DOCTYPE html>

<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
>

<head>

  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <meta
    name="x-apple-disable-message-reformatting"
  />

  <title>
    Your SHINE appointment is confirmed
  </title>

</head>

<body
  style="
    margin:0;
    padding:0;
    background:#EEF2F2;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Arial,
      sans-serif;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    background:#EEF2F2;
    padding:40px 16px;
  "
>

<tr>

<td align="center">

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    max-width:680px;
    background:#FFFFFF;
    border-radius:28px;
    overflow:hidden;
    box-shadow:
      0 20px 60px rgba(6,21,25,.12);
  "
>

<!-- =====================================================
     HERO
====================================================== -->

<tr>

<td
  align="center"
  style="
    background:#061519;
    padding:48px 32px 44px;
  "
>

  <img
    src="${LOGO_URL}"
    width="150"
    alt="SHINE Luxury Beauty Spa"
    style="
      display:block;
      width:150px;
      max-width:100%;
      height:auto;
      border:0;
      margin:0 auto;
    "
  />

  <div
    style="
      margin-top:28px;
      height:1px;
      width:70px;
      background:#D7C0A0;
    "
  ></div>

  <p
    style="
      margin:25px 0 0;
      color:#62AAB5;
      font-size:11px;
      line-height:18px;
      letter-spacing:3px;
      text-transform:uppercase;
      font-weight:600;
    "
  >
    Appointment Confirmed
  </p>

  <h1
    style="
      margin:14px 0 0;
      color:#FFFFFF;
      font-size:32px;
      line-height:40px;
      font-weight:500;
      letter-spacing:-.5px;
    "
  >
    Your time to SHINE
    <br />
    is reserved.
  </h1>

</td>

</tr>

<!-- =====================================================
     INTRO
====================================================== -->

<tr>

<td
  style="
    padding:44px 44px 20px;
  "
>

  <p
    style="
      margin:0;
      color:#171B1C;
      font-size:18px;
      line-height:29px;
      font-weight:500;
    "
  >
    Hello ${customerName},
  </p>

  <p
    style="
      margin:16px 0 0;
      color:#6B777A;
      font-size:15px;
      line-height:27px;
    "
  >
    Thank you for choosing SHINE Luxury Beauty Spa.
    Your appointment has been successfully reserved.
    We look forward to welcoming you into an experience
    designed around your beauty, wellbeing and time.
  </p>

</td>

</tr>

<!-- =====================================================
     APPOINTMENT CARD
====================================================== -->

<tr>

<td
  style="
    padding:20px 44px 12px;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    background:#F7F8F7;
    border:1px solid #E7ECEC;
    border-radius:22px;
  "
>

<tr>

<td
  style="
    padding:28px;
  "
>

  <p
    style="
      margin:0 0 20px;
      color:#62AAB5;
      font-size:10px;
      line-height:16px;
      letter-spacing:2.5px;
      text-transform:uppercase;
      font-weight:700;
    "
  >
    Your Appointment
  </p>

  <h2
    style="
      margin:0 0 25px;
      color:#061519;
      font-size:22px;
      line-height:30px;
      font-weight:600;
    "
  >
    ${serviceName}
  </h2>

  <!-- DATE -->

  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="margin-bottom:18px;"
  >

  <tr>

  <td
    width="42"
    valign="top"
    style="
      color:#62AAB5;
      font-size:20px;
    "
  >
    ✦
  </td>

  <td>

    <p
      style="
        margin:0;
        color:#8A9496;
        font-size:11px;
        line-height:17px;
        letter-spacing:1.5px;
        text-transform:uppercase;
      "
    >
      Date
    </p>

    <p
      style="
        margin:4px 0 0;
        color:#171B1C;
        font-size:15px;
        line-height:24px;
        font-weight:600;
      "
    >
      ${formattedDate}
    </p>

  </td>

  </tr>

  </table>

  <!-- TIME -->

  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="margin-bottom:18px;"
  >

  <tr>

  <td
    width="42"
    valign="top"
    style="
      color:#62AAB5;
      font-size:20px;
    "
  >
    ◷
  </td>

  <td>

    <p
      style="
        margin:0;
        color:#8A9496;
        font-size:11px;
        line-height:17px;
        letter-spacing:1.5px;
        text-transform:uppercase;
      "
    >
      Time
    </p>

    <p
      style="
        margin:4px 0 0;
        color:#171B1C;
        font-size:15px;
        line-height:24px;
        font-weight:600;
      "
    >
      ${time}
    </p>

  </td>

  </tr>

  </table>

  <!-- SPECIALIST -->

  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
  >

  <tr>

  <td
    width="42"
    valign="top"
    style="
      color:#62AAB5;
      font-size:20px;
    "
  >
    ♢
  </td>

  <td>

    <p
      style="
        margin:0;
        color:#8A9496;
        font-size:11px;
        line-height:17px;
        letter-spacing:1.5px;
        text-transform:uppercase;
      "
    >
      Specialist
    </p>

    <p
      style="
        margin:4px 0 0;
        color:#171B1C;
        font-size:15px;
        line-height:24px;
        font-weight:600;
      "
    >
      ${therapist}
    </p>

  </td>

  </tr>

  </table>

</td>

</tr>

</table>

</td>

</tr>

<!-- =====================================================
     REFERENCE
====================================================== -->

<tr>

<td
  align="center"
  style="
    padding:20px 44px 25px;
  "
>

  <p
    style="
      margin:0;
      color:#9AA3A5;
      font-size:11px;
      line-height:18px;
      letter-spacing:1px;
    "
  >
    BOOKING REFERENCE
  </p>

  <p
    style="
      margin:5px 0 0;
      color:#3F8F9B;
      font-size:13px;
      line-height:20px;
      font-weight:700;
      letter-spacing:1px;
    "
  >
    ${appointmentId}
  </p>

</td>

</tr>

${
  notes
    ? `
<tr>

<td
  style="
    padding:0 44px 28px;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    border-left:3px solid #D7C0A0;
  "
>

<tr>

<td
  style="
    padding-left:18px;
  "
>

<p
  style="
    margin:0;
    color:#8A9496;
    font-size:10px;
    line-height:16px;
    letter-spacing:2px;
    text-transform:uppercase;
    font-weight:700;
  "
>
  Your Notes
</p>

<p
  style="
    margin:6px 0 0;
    color:#4E5A5D;
    font-size:13px;
    line-height:22px;
  "
>
  ${notes}
</p>

</td>

</tr>

</table>

</td>

</tr>
`
    : ""
}

<!-- =====================================================
     CLOSING
====================================================== -->

<tr>

<td
  style="
    padding:8px 44px 42px;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
>

<tr>

<td
  style="
    height:1px;
    background:#E7ECEC;
  "
></td>

</tr>

</table>

<p
  style="
    margin:28px 0 0;
    color:#061519;
    font-size:16px;
    line-height:26px;
    font-weight:500;
  "
>
  Come as you are.
  <br />
  Leave feeling extraordinary.
</p>

<p
  style="
    margin:10px 0 0;
    color:#7A8588;
    font-size:13px;
    line-height:22px;
  "
>
  If you need to make a change to your appointment,
  please contact SHINE Luxury Beauty Spa directly.
</p>

</td>

</tr>

<!-- =====================================================
     FOOTER
====================================================== -->

<tr>

<td
  align="center"
  style="
    background:#061519;
    padding:30px;
  "
>

<p
  style="
    margin:0;
    color:#62AAB5;
    font-size:10px;
    line-height:16px;
    letter-spacing:2.5px;
    text-transform:uppercase;
    font-weight:600;
  "
>
  SHINE LUXURY BEAUTY SPA
</p>

<p
  style="
    margin:9px 0 0;
    color:#879598;
    font-size:11px;
    line-height:18px;
  "
>
  Beauty • Wellness • Exceptional Care
</p>

<p
  style="
    margin:18px 0 0;
    color:#4F6468;
    font-size:10px;
    line-height:16px;
  "
>
  This is an automated appointment confirmation.
  Please keep this email for your records.
</p>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`,

    text: `
SHINE LUXURY BEAUTY SPA

YOUR APPOINTMENT IS CONFIRMED

Hello ${booking.fullName},

Thank you for choosing SHINE Luxury Beauty Spa.

Your appointment has been successfully reserved.

APPOINTMENT

Service: ${booking.serviceName}
Date: ${formatDate(booking.date)}
Time: ${booking.time}
Specialist: ${booking.therapist || "Your SHINE specialist"}

Booking Reference:
${booking.appointmentId}

${booking.notes ? `Notes: ${booking.notes}` : ""}

Come as you are.
Leave feeling extraordinary.

If you need to make a change to your appointment,
please contact SHINE Luxury Beauty Spa directly.

SHINE LUXURY BEAUTY SPA
Beauty • Wellness • Exceptional Care
`,
  };
}

/*
=========================================================
OWNER EMAIL
=========================================================
*/

export function createOwnerBookingEmail(
  booking: BookingEmailData
) {
  const customerName =
    escapeHtml(booking.fullName);

  const phone =
    escapeHtml(booking.phone);

  const email =
    escapeHtml(booking.email);

  const serviceName =
    escapeHtml(booking.serviceName);

  const formattedDate =
    escapeHtml(
      formatDate(booking.date)
    );

  const time =
    escapeHtml(booking.time);

  const appointmentId =
    escapeHtml(booking.appointmentId);

  const therapist =
    booking.therapist
      ? escapeHtml(booking.therapist)
      : "Not specified";

  const notes =
    booking.notes
      ? escapeHtml(booking.notes)
      : "No additional notes";

  return {
    html: `
<!DOCTYPE html>

<html
  lang="en"
  xmlns="http://www.w3.org/1999/xhtml"
>

<head>

  <meta charset="UTF-8" />

  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
  />

  <title>
    New SHINE Appointment
  </title>

</head>

<body
  style="
    margin:0;
    padding:0;
    background:#EEF2F2;
    font-family:
      -apple-system,
      BlinkMacSystemFont,
      'Segoe UI',
      Arial,
      sans-serif;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    background:#EEF2F2;
    padding:40px 16px;
  "
>

<tr>

<td align="center">

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    max-width:680px;
    background:#FFFFFF;
    border-radius:28px;
    overflow:hidden;
    box-shadow:
      0 20px 60px rgba(6,21,25,.12);
  "
>

<!-- HEADER -->

<tr>

<td
  style="
    background:#061519;
    padding:35px 40px;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
>

<tr>

<td>

<img
  src="${LOGO_URL}"
  width="120"
  alt="SHINE Luxury Beauty Spa"
  style="
    display:block;
    width:120px;
    height:auto;
    border:0;
  "
/>

</td>

<td
  align="right"
  valign="middle"
>

<span
  style="
    display:inline-block;
    padding:7px 12px;
    border:1px solid rgba(98,170,181,.35);
    border-radius:100px;
    color:#62AAB5;
    font-size:9px;
    letter-spacing:1.5px;
    text-transform:uppercase;
  "
>
  New Booking
</span>

</td>

</tr>

</table>

</td>

</tr>

<!-- TITLE -->

<tr>

<td
  style="
    padding:42px 44px 25px;
  "
>

<p
  style="
    margin:0;
    color:#62AAB5;
    font-size:10px;
    line-height:16px;
    letter-spacing:2.5px;
    text-transform:uppercase;
    font-weight:700;
  "
>
  Appointment Alert
</p>

<h1
  style="
    margin:10px 0 0;
    color:#061519;
    font-size:29px;
    line-height:38px;
    font-weight:600;
    letter-spacing:-.4px;
  "
>
  A new guest has
  <br />
  booked with SHINE.
</h1>

<p
  style="
    margin:15px 0 0;
    color:#6B777A;
    font-size:14px;
    line-height:24px;
  "
>
  A new appointment has been successfully created
  in the SHINE booking system.
</p>

</td>

</tr>

<!-- GUEST -->

<tr>

<td
  style="
    padding:12px 44px;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    border:1px solid #E7ECEC;
    border-radius:20px;
  "
>

<tr>

<td
  style="
    padding:25px 26px;
  "
>

<p
  style="
    margin:0 0 20px;
    color:#62AAB5;
    font-size:10px;
    line-height:16px;
    letter-spacing:2px;
    text-transform:uppercase;
    font-weight:700;
  "
>
  Guest
</p>

<h2
  style="
    margin:0;
    color:#061519;
    font-size:21px;
    line-height:28px;
    font-weight:600;
  "
>
  ${customerName}
</h2>

<p
  style="
    margin:8px 0 0;
    color:#6B777A;
    font-size:13px;
    line-height:22px;
  "
>
  ${email}
  <br />
  ${phone}
</p>

</td>

</tr>

</table>

</td>

</tr>

<!-- APPOINTMENT -->

<tr>

<td
  style="
    padding:12px 44px;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    background:#F7F8F7;
    border-radius:20px;
  "
>

<tr>

<td
  style="
    padding:26px;
  "
>

<p
  style="
    margin:0 0 20px;
    color:#62AAB5;
    font-size:10px;
    line-height:16px;
    letter-spacing:2px;
    text-transform:uppercase;
    font-weight:700;
  "
>
  Appointment Details
</p>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
>

<tr>

<td
  width="38%"
  style="
    padding:8px 0;
    color:#8A9496;
    font-size:11px;
    text-transform:uppercase;
    letter-spacing:1px;
  "
>
  Service
</td>

<td
  style="
    padding:8px 0;
    color:#171B1C;
    font-size:14px;
    font-weight:600;
  "
>
  ${serviceName}
</td>

</tr>

<tr>

<td
  style="
    padding:8px 0;
    color:#8A9496;
    font-size:11px;
    text-transform:uppercase;
    letter-spacing:1px;
  "
>
  Date
</td>

<td
  style="
    padding:8px 0;
    color:#171B1C;
    font-size:14px;
    font-weight:600;
  "
>
  ${formattedDate}
</td>

</tr>

<tr>

<td
  style="
    padding:8px 0;
    color:#8A9496;
    font-size:11px;
    text-transform:uppercase;
    letter-spacing:1px;
  "
>
  Time
</td>

<td
  style="
    padding:8px 0;
    color:#171B1C;
    font-size:14px;
    font-weight:600;
  "
>
  ${time}
</td>

</tr>

<tr>

<td
  style="
    padding:8px 0;
    color:#8A9496;
    font-size:11px;
    text-transform:uppercase;
    letter-spacing:1px;
  "
>
  Specialist
</td>

<td
  style="
    padding:8px 0;
    color:#171B1C;
    font-size:14px;
    font-weight:600;
  "
>
  ${therapist}
</td>

</tr>

<tr>

<td
  style="
    padding:8px 0;
    color:#8A9496;
    font-size:11px;
    text-transform:uppercase;
    letter-spacing:1px;
  "
>
  Reference
</td>

<td
  style="
    padding:8px 0;
    color:#3F8F9B;
    font-size:13px;
    font-weight:700;
  "
>
  ${appointmentId}
</td>

</tr>

</table>

</td>

</tr>

</table>

</td>

</tr>

<!-- NOTES -->

<tr>

<td
  style="
    padding:12px 44px 30px;
  "
>

<table
  width="100%"
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    border-left:3px solid #D7C0A0;
  "
>

<tr>

<td
  style="
    padding-left:18px;
  "
>

<p
  style="
    margin:0;
    color:#8A9496;
    font-size:10px;
    line-height:16px;
    letter-spacing:2px;
    text-transform:uppercase;
    font-weight:700;
  "
>
  Customer Notes
</p>

<p
  style="
    margin:6px 0 0;
    color:#4E5A5D;
    font-size:13px;
    line-height:22px;
  "
>
  ${notes}
</p>

</td>

</tr>

</table>

</td>

</tr>

<!-- FOOTER -->

<tr>

<td
  align="center"
  style="
    background:#061519;
    padding:28px;
  "
>

<p
  style="
    margin:0;
    color:#62AAB5;
    font-size:10px;
    letter-spacing:2.5px;
    text-transform:uppercase;
    font-weight:600;
  "
>
  SHINE LUXURY BEAUTY SPA
</p>

<p
  style="
    margin:8px 0 0;
    color:#718488;
    font-size:11px;
  "
>
  Booking Management Notification
</p>

</td>

</tr>

</table>

</td>

</tr>

</table>

</body>

</html>
`,

    text: `
NEW SHINE APPOINTMENT

A new guest has booked with SHINE Luxury Beauty Spa.

GUEST

Name: ${booking.fullName}
Email: ${booking.email}
Phone: ${booking.phone}

APPOINTMENT

Service: ${booking.serviceName}
Date: ${formatDate(booking.date)}
Time: ${booking.time}
Specialist: ${booking.therapist || "Not specified"}

BOOKING REFERENCE

${booking.appointmentId}

CUSTOMER NOTES

${booking.notes || "No additional notes"}
`,
  };
}
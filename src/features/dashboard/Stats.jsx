import { formatCurrency } from "../../utils/helpers";
import Stat from "./Stat";

import {
  IoBriefcaseOutline,
  IoCalendarNumberOutline,
  IoCashOutline,
  IoStatsChartOutline,
} from "react-icons/io5";

function Stats({ bookings, confirmedStays, numDays, roomCount }) {
  const numBookings = bookings.length;
  const sales = bookings.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkins = confirmedStays.length;

  // num check in nights / all available nights (numDays * num Rooms)
  const occupation =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * roomCount);

  return (
    <>
      <Stat
        title="bookings"
        color="blue"
        icon={<IoBriefcaseOutline />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<IoCashOutline />}
        value={formatCurrency(sales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<IoCalendarNumberOutline />}
        value={checkins}
      />
      <Stat
        title="Occupancy rate"
        color="yellow"
        icon={<IoStatsChartOutline />}
        value={Math.round(occupation * 100) + "%"}
      />
    </>
  );
}

export default Stats;

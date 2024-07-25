export const sortTicket = (tickets, preference) => {
  switch (preference) {
    case "High to Low":
      return [...tickets].sort((a, b) => b.priority.localCompare(a.priority));
    case "Low to High":
      return [...tickets].sort((b, a) => a.priority.localCompare(b.priority));

    default:
      return tickets;
  }
};

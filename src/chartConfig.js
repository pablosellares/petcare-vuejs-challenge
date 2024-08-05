export const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  datasets: [
    {
      label: 'Data One',
      backgroundColor: 'hsla(212, 77%, 56%, 1)',
      data: [3, 5, 2, 3, 6, 6, 8, 3, 3, 1, 10, 3, 2, 7, 5, 7, 3, 1, 4, 4, 1, 2, 10]
    }
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    intersect: false
  }
}

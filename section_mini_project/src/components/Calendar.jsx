import "./Calendar.css";

const Calendar = ({ currentDate, selectedDate, onSelectDate, data }) => {
  const getCompletionRate = (date) => {
    const dateTime = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    ).getTime();
    const dayData = data.find((item) => {
      const itemDate = new Date(item.date);
      return (
        new Date(
          itemDate.getFullYear(),
          itemDate.getMonth(),
          itemDate.getDate()
        ).getTime() === dateTime
      );
    });

    if (!dayData || dayData.todos.length === 0) return 0;
    const completed = dayData.todos.filter((todo) => todo.completed).length;
    return Math.round((completed / dayData.todos.length) * 100);
  };

  const getColorByRate = (rate) => {
    if (rate === 0) return "#F1F8F4";
    if (rate <= 20) return "#C8E6C9";
    if (rate <= 40) return "#A5D6A7";
    if (rate <= 60) return "#81C784";
    if (rate <= 80) return "#66BB6A";
    return "#4CAF50";
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startDayOfWeek = firstDay.getDay();

    const days = [];
    for (let i = 0; i < startDayOfWeek; i++) {
      days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    return days;
  };

  const days = getDaysInMonth(currentDate);
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <div className="Calendar">
      <div className="calendar_weekdays">
        {weekDays.map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="calendar_days">
        {days.map((day, index) => {
          if (!day) {
            return (
              <div key={`empty-${index}`} className="calendar_day_empty" />
            );
          }
          const rate = getCompletionRate(day);
          const isSelected =
            selectedDate &&
            day.getDate() === selectedDate.getDate() &&
            day.getMonth() === selectedDate.getMonth() &&
            day.getFullYear() === selectedDate.getFullYear();

          return (
            <div
              key={index}
              onClick={() => onSelectDate(day)}
              className={`calendar_day ${isSelected ? "selected" : ""} ${
                rate > 40 ? "high_rate" : ""
              }`}
              style={{ backgroundColor: getColorByRate(rate) }}
            >
              {day.getDate()}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

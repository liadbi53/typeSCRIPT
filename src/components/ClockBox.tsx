import { useEffect, useState } from "react";

export default function ClockBox() {
  const [time, setTime] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const timezone = "Asia/Jerusalem"; 

  const fetchTime = async () => {
    try {
      setError(null);
      const response = await fetch(`https://worldtimeapi.org/api/timezone/${timezone}`);
      if (!response.ok) {
        throw new Error("שגיאה בקבלת הזמן");
      }
      const data = await response.json();
      const dateTime = new Date(data.datetime);
      setTime(dateTime.toLocaleTimeString());
    } catch (err) {
      setError("לא הצלחנו לטעון את השעה, נסה שוב.");
    }
  };

  useEffect(() => {
    fetchTime();
    const interval = setInterval(fetchTime, 10000); // ריענון כל 10 שניות
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-3 bg-primary text-white rounded text-center w-100">
      {error ? (
        <div>
          <p>{error}</p>
          <button className="btn btn-light mt-2" onClick={fetchTime}>🔄 נסה שוב</button>
        </div>
      ) : time ? (
        <h2>⏰ {time}</h2>
      ) : (
        <p>טוען זמן...</p>
      )}
    </div>
  );
}

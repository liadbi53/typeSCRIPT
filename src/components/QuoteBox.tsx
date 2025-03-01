import { useEffect, useState } from "react";

export default function QuoteBox() {
  const [quote, setQuote] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchQuote = async () => {
    try {
      setError(null);
      const response = await fetch("/api/random");
      if (!response.ok) {
        throw new Error("API error");
      }
      const data = await response.json();
      setQuote(`${data[0].q} - ${data[0].a}`);
    } catch (err) {
      setError("לא הצלחנו לטעון ציטוט, נסה שוב.");
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="p-3 bg-dark text-white rounded text-center">
      {error ? (
        <div>
          <p>{error}</p>
          <button className="btn btn-light mt-2" onClick={fetchQuote}>🔄 נסה שוב</button>
        </div>
      ) : quote ? (
        <blockquote className="blockquote mb-0">
          "{quote}"
        </blockquote>
      ) : (
        <p>טוען ציטוט...</p>
      )}
    </div>
  );
}

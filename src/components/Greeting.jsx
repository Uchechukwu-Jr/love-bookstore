import "../css/greetings.css";

const Greeting = () => {
  const getGreeting = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning";
    } else if (currentHour >= 12 && currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  return (
    <div className="protest-riot-regular text-center my-4">
      {getGreeting()}, what would you like to read today?
    </div>
  );
};

export default Greeting;

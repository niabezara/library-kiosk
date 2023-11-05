import { useNavigate } from "react-router-dom";
import Card from "./Card";

export default function LandingCards() {
  const navigate = useNavigate();

  const handleBorrowBook = () => {
    navigate("/categories");
  };
  const handleReturnBook = () => {};
  return (
    <div>
      <Card title={"Borrow Book"} img="" onClick={handleBorrowBook} />
      <Card title={"Return Book"} img="" onClick={handleReturnBook} />
    </div>
  );
}

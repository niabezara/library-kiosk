interface Card {
  title: string;
  img: string;
  onClick: () => void;
}
const Card = ({ title, img, onClick }: Card) => {
  return (
    <div className="card" onClick={onClick}>
      <h2>{title}</h2>
      <p>{img}</p>
    </div>
  );
};

export default Card;

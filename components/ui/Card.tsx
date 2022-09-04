import classes from "./Card.module.css";

const Card = ({ children }: any) => {
  return <div className={classes.card}>{children}</div>;
};

export default Card;

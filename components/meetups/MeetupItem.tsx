import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import Image from "next/image";
import { useRouter } from "next/router";

// type Props = {
//   title: string;
//   address: string;
//   image: string;
// };

const MeetupItem = (props: any) => {
  const router = useRouter();

  const showDetailHandler = () => {
    router.push("/" + props.id);
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} width={400} height={400} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailHandler}>Show Detail</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;

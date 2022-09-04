import Image from "next/image";

import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props: any) => {
  return (
    <section className={classes.detail}>
      {/* <img src={props.src} alt={props.alt} /> */}
      <Image src={props.image} alt={props.title} width={400} height={400} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;

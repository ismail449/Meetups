import classes from './MeetupsDetails.module.css'
const MeetupsDetails = ({image, desc, address, title}) => {
  return (
    <section className={classes.detail} >
    <img src={image} alt={title} />
      <h1>{title}</h1>
      <address>{address}</address>
      <p>{desc}</p>
    </section>
  );
}

export default MeetupsDetails;
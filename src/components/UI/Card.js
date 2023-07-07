import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
return(
    <div className={classes}>{props.children}</div> //props.children is built in prop we cannot edit it.
);

}
export default Card;
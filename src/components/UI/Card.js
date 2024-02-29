import "./Card.css"
 
function Card(props){
    const classes='card ' + props.className;

    return <div className={classes}>{props.children}</div>;
    //props.childern used to add some html tag data in between card component
}
export default Card;
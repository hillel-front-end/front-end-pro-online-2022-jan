
const Chip = (props) => {
    console.log('Chip')
    return <span style={{backgroundColor: 'aqua'}} className="MyChip" >{props.title}</span>
};


export default Chip;
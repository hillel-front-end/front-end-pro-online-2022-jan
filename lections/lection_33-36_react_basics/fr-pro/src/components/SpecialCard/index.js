import { useState } from "react";


const list = [
    'Phrase 1',
    'Phrase 2',
    'Phrase 3',
    'Phrase 4',
];

const SpecialCard = () => {
    const x = 540;
    let [flag, setFlag] = useState(true);
    const [phraseList, setList] = useState(list);


    const onClick = () => {
        setFlag(!flag);

        // phraseList.pop(); // BAD
        setList(phraseList.slice(0, -1));
    }

    const onClickUpdateTitle = () => {
        const newList = [...phraseList];

        newList[2] = 'Updated!'
        setList(newList);
    }

    const content = x > 300 ? <div>Hello {x}</div> : <div>Bye!</div>
    const content2 = (<span>World! {x}</span>);

    const optionalContent = flag ? content2 : <span>Else</span>;

    return <>
        <button onClick={onClick}>Change flag</button>
        <button onClick={onClickUpdateTitle}>Update random title</button>
        {content}
        {flag && content2}
        {optionalContent}
        {/* ------------ */}
        <hr />
        List: <br />

        <ul>{phraseList.map((item, index) => <li key={`id-${index}`}>{item}</li>)}</ul>
    </>;
}


export default SpecialCard;
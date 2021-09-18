import './ChoiceList.css'

function ChoiceList({title, choices}) {
    return (
        <div className="choice-list">
            {title}
            <div className="choice-list-options">
            { choices.map( e => {
                return (
                    <div key={e[1]} className="choice-list-element">
                        <input type="checkbox" id={e[1]}></input>
                        <label htmlFor={e[1]}>+ {e[0]}</label>
                    </div>
                )
            }) }
            </div>
        </div>
    )
}

export default ChoiceList;
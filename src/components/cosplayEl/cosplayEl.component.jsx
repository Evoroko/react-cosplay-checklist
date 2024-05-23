import './cosplayEl.style.scss';

const CosplayEl = (props) => {


    return(
        <li className="cosplay__el">
            <div className='cosplay__title'>
                <h2>{props.cosEl.name}</h2>
                <p>{props.cosEl.universe}</p>
            </div>
            <div className='cosplay__elements'>
                <ul className='elements'>
                    {
                        props.cosEl.elements.map((el, index) =>
                            <li key={index} className='element'>
                                <div className='element__el'>
                                    <input type="checkbox" name={props.cosEl.name + index}/>
                                    <p>{el}</p>
                                </div>
                                <button className='element__delete' onClick={() => props.deleteElHandler(index)}>-</button>
                            </li>
                        )
                    }
                </ul>
                <form onSubmit={props.addElHandler} className='elements__add'>
                    <label htmlFor="cosElement">New element :</label>
                    <input
                        className='elements__add--txt'
                        type="text"
                        id='cosElement'
                        placeholder='Enter a new element'
                        required
                        minLength={3}
                        maxLength={64} />

                    <input className='elements__add--submit' type="submit" value="Add" />
                </form>
            </div>
            <button className='cosplay__delete' onClick={props.deleteHandler}>Delete</button>
        </li>
    )
}

export default CosplayEl;
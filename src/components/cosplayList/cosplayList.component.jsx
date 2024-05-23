import CosplayEl from '../cosplayEl/cosplayEl.component.jsx'
import { useState, useEffect } from 'react';
import './cosplayList.style.scss'


let cosAdded = {
    name: "cos2",
    universe: "universe",
    elements: [
        'Élement 1',
        'Élement 2',
        'Élement 3'
    ],
    id: 0
}


const CosplayList = (props) => {
    const [cosList, setCosList] = useState(() => JSON.parse(localStorage.getItem('cosList')));

    
    const addCosplayEl = (event) => {
        event.preventDefault();
        let newCos = {
            name: "",
            universe: "",
            elements: []
        }
        newCos.name = event.target.name.value;
        newCos.universe = event.target.universe.value;
        event.target.name.value = "";
        event.target.universe.value = "";
        setCosList(() => {
            return [...cosList, newCos];
        })
    }

    useEffect(() => {
        localStorage.setItem('cosList', JSON.stringify(cosList));
    }, [cosList]);

    return(
        <>
            <form onSubmit={addCosplayEl} className='addCosplay'>
                <div className='addCosplay__container'>
                    <div className='addCosplay__el'>
                        <label htmlFor="name">Name :</label>
                        <input
                            type="text"
                            id='name'
                            placeholder='Enter a name'
                            required
                            minLength={3}
                            maxLength={64} />
                    </div>
                    <div className='addCosplay__el'>
                        <label htmlFor="universe">Universe :</label>
                        <input
                            type="text"
                            id='universe'
                            placeholder='What are they from?'
                            required
                            minLength={3}
                            maxLength={64} />
                    </div>
                </div>

                <input className='addCosplay__el--add' type="submit" value="Add" />
            </form>
            <ul className='cosplayList'>
                { 
                cosList.map((cos, index) => {
                    return (
                        <CosplayEl
                            cosEl={cos}
                            key={index} 
                            deleteHandler={() => {
                                setCosList(() => {
                                    return cosList.filter((_, i) => i !== index);
                                })
                            }}
                            addElHandler={(event) => {
                                event.preventDefault();
                                let newCosList = cosList;
                                newCosList[index].elements.push(event.target.cosElement.value);
                                event.target.cosElement.value = "";
                                setCosList(() => {
                                    return [...newCosList];
                                })
                            }}
                            deleteElHandler={(indexofel) => {
                                let newCosList = cosList;
                                newCosList[index].elements = newCosList[index].elements.filter((_, i) => i !== indexofel);
                                setCosList(() => {
                                    return [...newCosList];
                                })
                            }}
                        />
                    );
                })}
            </ul>
        </>
    )
}

export default CosplayList;
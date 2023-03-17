import React from 'react'
// import { faFileLines, faUpload} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome'
import Campo from '../components/Campo'
import Descrition from '../components/Descrition'

export default function Chamado() {
    return (
        <div>
            <Campo text="Title " id= "Titulo" placeholder="Title" type="text"/>
            <label>Classification</label>
            <select defaultValue={'default'} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                <option value="default" disabled>Select an option:</option>
                <option>Hotfix</option>
                <option>Feature</option>
            </select>
            <Descrition/>
            {/* <Campo text="Description " id="Descrição" placeholder="Describe the ticket" type="text" icon={ faFileLines}></Campo> */}

        </div>

    )
}

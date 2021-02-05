import React from 'react'
import '../../styles/NewFile.css'
import AddIcon from '@material-ui/icons/Add';

const NewFile = () => {
    return (
        <div className="newFile">
            <div className="newFile__Container">
                <AddIcon/>
                <p>New</p>
            </div>
        </div>
    )
}

export default NewFile

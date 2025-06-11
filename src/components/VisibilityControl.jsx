import React from 'react'

export const VisibilityControl = ({ isChecked, setshowComplete, cleanTask }) => {

    const handleDelete = () => {
        if (window.confirm('Are you sure you want do delete it?')) {
            cleanTask()

        }
    }
    return (
        <div className='d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary'>
            <div className="form-chek form-switch">
                <input className='form-check-input' checked={isChecked} type="checkbox" onChange={e => setshowComplete(e.target.checked)} />
                <label> show Task Done</label>
            </div>

            <button onClick={handleDelete} className='btn btn-danger btn-sm'>Clear</button>
        </div>
    )
}

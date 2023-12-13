import React from 'react'
import {  formatDistanceToNow, parseISO } from 'date-fns'


const Time = ({ timestamp }) => {
    let timeAgo = ""
    if (timestamp) {
        const date = new Date(timestamp);
        const timePeriod = formatDistanceToNow(date);
        timeAgo = `${timePeriod} Ago`
    }

    return (
        <div className='text-sm'>
            {
                timeAgo
            }
        </div>
    )
}

export default Time
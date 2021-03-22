import React from 'react';

export default function SmsReply({ caption, href, additionalClass }){
    return (
        <>
            <a className={additionalClass + " sms-reply__link" } href={href}>{caption}</a>
        </>
    )
}
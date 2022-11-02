import React from 'react';

const Error_page = () => {
    return (
        <>
            <div className='main_wrap_pages'>
                <div className='error_page'>
                    <h1>oops!</h1>
                    <h3>404 - PAGE NOT FOUND</h3>
                    <div className='error_button'>
                        <a to="/">GO TO HOMEPAGE</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Error_page;
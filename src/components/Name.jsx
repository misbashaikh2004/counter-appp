import React from 'react'

const Name = () => {
    let name = "Harry"
    let age = 18;


    let age1 = 100;
    function greet() {
        return "My name is Harry potter"
    }
    return (
        <div>
            <h1 className='text-3xl'>---------------------------------------------</h1>
            <h1 className='text-3xl'>{2 + 2}</h1>
            <h1 className='text-3xl '>{name} {greet()}</h1>
            <h1 className='text-3xl'>{age > 18 ? 'you can drive' : 'you can not drive'}</h1>

            <h1 style={{
                "backgroundColor": 'red',
                "fontSize": '20px',
                "margin": '0',
                "padding": "20px",
                "text": "8xl"
            }}>Hello</h1>


            {age1 > 18 ? <p style={{ color: 'green' }}>You can Drive</p>
                : <p style={{ color: 'red' }}>You can not drive</p>}

                <p></p>
        </div>
    )
}

export default Name
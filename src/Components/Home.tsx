import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <>

            <div className='container'>
                <div className='row'>
                    <div className='col-2 '></div>
                    <div className='col-10'>
                        <h2 > Home works</h2>
                        <p>
                            A company, abbreviated as co., is a legal entity representing an association of people, whether natural, legal or a mixture of both, with a specific objective. Company members share a common purpose and unite to achieve specific, declared goals. Companies take various forms, such as:

                            voluntary associations, which may include nonprofit organizations
                            business entities, whose aim is generating profit
                            financial entities and banks
                            programs or educational institutions
                            A company can be created as a legal person so that the company itself has limited liability as members perform or fail to discharge their duty according to the publicly declared incorporation, or published policy. When a company closes, it may need to be liquidated to avoid further legal obligations.

                            Companies may associate and collectively register themselves as new companies; the resulting entities are often known as corporate groups.
                        </p>

                    </div>
                </div>
            </div>
            <Outlet />
        </>
    )
}

export default Home

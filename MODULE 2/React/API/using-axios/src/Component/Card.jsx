import React from 'react'

function Card(props) {
    return (
        <>
                    <div className="col-10 col-md-4 mx-auto ">
                        <div className="card hdiv" >
                            <div Name="card-body">
                                <h5 className="card-title ">{props.title}</h5>
                                <p className="card-text p-2">{props.body}</p>
                                <button class="btn m-2" onClick={props.delete} key={props.unique}>Delete</button>
                            </div>
                        </div>
                    </div>
                </>
    )
}

export default Card;
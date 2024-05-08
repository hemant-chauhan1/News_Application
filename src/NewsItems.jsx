import React from 'react'

export default function NewsItems(props){
        return (
            <div className='col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-12 mb-3'>
                <div className="card">
                    <img src={props.pic?props.pic:"/images/no_image.png"} height="200px" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.title.slice(0,100)+"..."}</h5>
                        <p className="card-text">{props.description.slice(0,200)+"..."}</p>
                        <a href={props.url} className="btn btn-primary w-100" target='_blank' rel='noreferrer'>Read This</a>
                    </div>
                </div>
            </div>
        )
    }

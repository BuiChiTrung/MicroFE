import React from 'react';

const DishDetail = ({title, srcImage, description}) => {
    return (
        <React.Fragment>
            <span className="title">
                <strong>
                    {title}
                </strong>
            </span>
            <a href='/order'>
                <img src={srcImage} alt={title} />
            </a>
            <span className="description">{description}</span>
        </React.Fragment>
    )
}

export default DishDetail;
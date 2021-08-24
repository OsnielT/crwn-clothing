import React from 'react';
import collectionItem from '../../components/collection-item/collection-item.component';
import './category.styles.scss';

const CategoryPage = ({ match }) => {
    const id = match.params.categoryId;
    console.log(match);
    return (
        <div className='category'>
            <h2>{id}</h2>
        </div>
    );

};

export default CategoryPage;
import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import CollectionPreview from '../collection-preview/collection-preview.component'
import { selectollectionsForPreview } from '../../redux/shop/shop.selectors.js';

import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => (
    <div className='collection-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
    </div>
);


const mapStateToProps = createStructuredSelector({
    collections: selectollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)
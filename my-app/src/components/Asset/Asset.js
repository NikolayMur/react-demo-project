import React from 'react';
import {Link} from 'react-router';

import './Asset.css';

class Asset extends React.Component {

    render() {
        const fullPosterPath = "https://image.tmdb.org/t/p/w185_and_h278_bestv2" + this.props.asset.poster_path;
        return (
            <div className="asset">
                <div className="image-content">
                    <Link className="menu-item" to={`/asset/${this.props.asset.id}`}>
                        <img src={fullPosterPath}/>
                    </Link>
                </div>
                <div className="info">
                    <p>
                        <a title={this.props.asset.title} alt={this.props.asset.title}>{this.props.asset.title}</a>
                    </p>
                    <p>{this.props.asset.id}</p>
                    <p className="overview">{this.props.asset.overview}</p>
                    <p className="view-more">
                        <a title={this.props.asset.title} alt={this.props.asset.title}>View more</a>
                    </p>
                </div>
            </div>);
    }
}

export default Asset
import React from 'react';
import {connect} from 'react-redux';

import {fetchCategories} from '../store/actions/actionCreators';
import Menu from './Menu';
import {Link} from 'react-router';

class Category extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <li>
            <div>
                <Link to={`/movies/${this.props.category.id}`}>
                    {this.props.category.name}
                    </Link>
            </div>
        </li>
    }

}

class Categories extends React.Component {

    componentDidMount() {
        this.props.downloadCategories();
    }

    render() {
        return <div>
            <Menu/>
            <h1>Categories page.</h1>
            <ul className="category-list">{this.props.categories.map(item => <Category key={item.id}
                                                                                       category={item}/>)}</ul>
        </div>
    }
}

export default connect(
    (state, ownProps) => ({
        categories: state.categoryReducer,
        ownProps
    }),
    (dispatch) => ({
        downloadCategories: () => dispatch(fetchCategories())
    })
)(Categories);
import React from 'react'
import {connect} from 'react-redux'

import {
  categoryCreate,
  categoryUpdate,
  categoryDelete,
} from '../../action/category-actions.js'

import CategoryForm from '../category-form'

class DashboardContainer extends React.Component {
  componentDidMount(){
    this.props.categoryCreate({title: 'lul'})
    this.props.categoryCreate({title: 'wat'})
    this.props.categoryCreate({title: 'coo'})
    this.props.categoryCreate({title: 'bea'})
  }

  render(){
    console.log('categorys', this.props.categorys)
    return (
      <main className='dashboard-container'>
        <h2> dashboard </h2>
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}
        />

        {this.props.categorys.map((item) =>
          <div key={item.id}>
            <h3> {item.title} </h3>
          </div>
        )}
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    categorys: state,
  }
}


const mapDispatchToProps = (dispatch, getState) => {
  return {
    categoryCreate: (category) => dispatch(categoryCreate(category)),
    categoryUpdate: (category) => dispatch(categoryUpdate(category)),
    categoryDelete: (category) => dispatch(categoryDelete(category)),
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(DashboardContainer)

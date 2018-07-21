import React, { Component } from 'react';
import { fetchArticles } from '../../apiCalls/apiCalls';
import { cleanPsychArticles } from '../../dataCleaners/dataCleaners';
import { connect } from 'react-redux';
import { addArticles } from '../../actions/actions';

class Home extends Component {

  async componentDidMount() {
    const searchKeyWord = 'Psychology';
    const psychNews = await fetchArticles(searchKeyWord);
    const articles = await cleanPsychArticles(psychNews.articles);
    this.props.addArticles(articles)
  }

  render() {
    return (
      <main>
        homeee
      </main>
    )
  }
}


export const mapDispatchToProps = (dispatch) => ({
  addArticles: (articles) => dispatch(addArticles(articles))
})

export default connect(null, mapDispatchToProps)(Home);
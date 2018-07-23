import React, { Component } from 'react';
import { fetchArticles } from '../../apiCalls/apiCalls';
import { cleanPsychArticles } from '../../dataCleaners/dataCleaners';
import { connect } from 'react-redux';
import { addArticles } from '../../actions/actions';
import { NewsArticles } from '../NewsArticles/NewsArticles';
import { articlesSelector } from '../../articlesSelector/articlesSelector';

export class DisplayPage extends Component {

  async componentDidMount() {
    const searchKeyWord = articlesSelector(this.props.location.pathname);
    const psychNews = await fetchArticles(searchKeyWord);
    const articles = await cleanPsychArticles(psychNews.articles);
    this.props.addArticles(articles)
  }

  render() {
    return (
      <main>       
        <NewsArticles articles={this.props.articles}/>
      </main>
    )
  }
}

export const mapStateToProps = (state) => ({
  articles: state.articles
});

export const mapDispatchToProps = (dispatch) => ({
  addArticles: (articles) => dispatch(addArticles(articles))
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayPage);
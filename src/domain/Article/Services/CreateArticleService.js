import Article from '../Entities/Article';

class CreateArticleService {
  constructor({ repository, getTokenService }) {
    this.repository = repository;
    this.getTokenService = getTokenService;
  }

  execute({ article }) {
    const articleModel = new Article({
      body: article.body,
      summary: article.summary,
      title: article.title,
    });
    return this.getTokenService.execute().then(token => {
      return this.repository.createArticle({ article: articleModel, token });
    });
  }
}

export default CreateArticleService;

import { Singleton } from 'ts-domain';

import ArticleRepositoryFactory from '../Repositories/factory';
import GetArticlesFromRepositoryService from './GetArticlesFromRepositoryService';
import CreateArticleService from './CreateArticleService';
import GetArticleByNumberService from './GetArticleByNumberService';

class ArticleServicesFactory {
  static getArticlesFromRepositoryService = ({ config }) =>
    Singleton(
      {
        singleton: GetArticlesFromRepositoryService,
        type: 'GetArticlesFromRepositoryService',
      },
      {
        repository: ArticleRepositoryFactory.restArticleRepository({ config }),
      },
    );
  static getArticleByNumberService = ({ config }) =>
    Singleton(
      {
        singleton: GetArticleByNumberService,
        type: 'GetArticleByNumberService',
      },
      {
        repository: ArticleRepositoryFactory.restArticleRepository({ config }),
      },
    );
  static createArticleService = ({ config }) =>
    Singleton(
      {
        singleton: CreateArticleService,
        type: 'CreateArticleService',
      },
      {
        repository: ArticleRepositoryFactory.firebaseArticleRepository({
          config,
        }),
      },
    );
}

export default ArticleServicesFactory;
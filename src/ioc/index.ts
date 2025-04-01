import IoCContainer from 'ioc-lite';

import { Logger } from '../services/logger';
import { HTTP } from '../services/http';
import { Users } from '../services/users';
import { ApiConfig } from '../types';

type IoCResources = {
  users: typeof Users;
  logger: typeof Logger;
  http: typeof HTTP;
  apiConfig: ApiConfig;
}

const apiConfig: ApiConfig = {
  path: '/api',
  resources: {
    users: '/users'
  }
}

export const createIoCContainer = () =>  {
  const ioc = new IoCContainer<IoCResources>();
  
  ioc.registerClass('users', Users);
  ioc.registerClass('logger', Logger);
  ioc.registerClass('http', HTTP);
  ioc.register('apiConfig', apiConfig);

  return ioc;
};

import Route from "./route";
import Block from "./block";

class Router {
  private _rootQuery: string = 'app';
  private _currentRoute: Route | null = null;
  private routes: Route[] = [];
  private history: History = window.history;
  private static __instance: Router;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, block: Block) {
    const route = new Route(pathname, block, this._rootQuery);

    this.routes.push(route);

    return this;
  }

  start() {
    window.onpopstate = (() => {
      this._onRoute(window.location.pathname);
    }).bind(this);

    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname: string) {
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render();
  }

  go(pathname: string) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname: string) {
    return this.routes.find(route => route.match(pathname));
  }
}

export default new Router('.app')

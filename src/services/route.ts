import Block from "./block";
import render from "../utils/render";

class Route {
  private _pathname: string = '';
  private _block: Block;
  private _isRendered: boolean = false;
  private _root: string;

  constructor(pathname: string, view: Block, root: string) {
    this._pathname = pathname;
    this._block = view;
    this._root = root;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._isRendered) {
      this._block.hide();
    }
  }

  match(pathname: string) {
    return pathname === this._pathname;
  }

  render() {
    if (!this._isRendered) {
      render(this._root, this._block);
      this._isRendered = true;
      return;
    }

    this._block.show();
  }
}

export default Route

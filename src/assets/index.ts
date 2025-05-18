import {FunctionComponent, SVGAttributes} from 'react';

export type Asset = {
  type: 'vector' | 'bitmap';
  path: string | FunctionComponent<SVGAttributes<SVGElement>>;
};

export default class Assets {
  static getVector(path: FunctionComponent<SVGAttributes<SVGElement>>): Asset {
    return {
      type: 'vector',
      path: path,
    };
  }

  static getBitmap(path: string): Asset {
    return {
      type: 'bitmap',
      path: path,
    };
  }

  static splashScreenTop: Asset = Assets.getBitmap(
    'assets/images/splash-top-bg.jpg',
  );
}

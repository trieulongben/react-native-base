import LayoutAnimated from './LayoutAnimated';
import LayoutBackgroundImageLocal from './LayoutBackgroundImageLocal';
import LayoutBodyScrollView from './LayoutBodyScrollView';
import LayoutBodyScrollViewKeyboardAware from './LayoutBodyScrollViewKeyboardAware';
import LayoutScreen from './LayoutScreen';
import LayoutWrapper from './LayoutWrapper';

export const Layout = {
  Screen: LayoutScreen,
  Wrapper: LayoutWrapper,
  Animated: LayoutAnimated,
  BodyScrollView: LayoutBodyScrollView,
  BodyKeyboardAwareScrollView: LayoutBodyScrollViewKeyboardAware,
  ImageBackground: {Local: LayoutBackgroundImageLocal},
};

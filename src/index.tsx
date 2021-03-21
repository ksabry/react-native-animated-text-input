import { requireNativeComponent, ViewStyle } from 'react-native';

type AnimatedTextInputProps = {
  color: string;
  style: ViewStyle;
};

export const AnimatedTextInputViewManager = requireNativeComponent<AnimatedTextInputProps>(
  'AnimatedTextInputView'
);

export default AnimatedTextInputViewManager;

import React from 'react';
import {
  requireNativeComponent,
  UIManager,
  Platform,
  processColor,
  type ProcessedColorValue,
  type ColorValue,
  type ViewProps,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-gradient' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type Color = number | ColorValue;
type ProcessedColor = ProcessedColorValue | undefined | null;
interface GradientProps extends ViewProps {
  colors: Color[];
}

interface NativeGradientProps extends Omit<GradientProps, 'colors'> {
  colors: ProcessedColor[];
}

const ComponentName = 'GradientView';

const GradientView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<NativeGradientProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };

const Gradient = ({ colors, ...props }: GradientProps) => {
  const processedColors = colors.map((color) => processColor(color));
  if (processedColors.includes(null) || processedColors.includes(undefined)) {
    throw new Error('Error: invalid color');
  }
  return <GradientView colors={processedColors} {...props} />;
};

export default Gradient;

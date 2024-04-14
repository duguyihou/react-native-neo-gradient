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

interface GradientProps extends ViewProps {
  colors: number[] | ColorValue[];
}

interface NativeGradientProps extends Omit<GradientProps, 'colors'> {
  colors: ProcessedColorValue[] | null;
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
  if (processedColors.includes(null)) {
    throw new Error('error');
  }
  // .filter((color) => color !== null || color !== undefined);
  return (
    <GradientView
      colors={processedColors as ProcessedColorValue[]}
      {...props}
    />
  );
};

export default Gradient;

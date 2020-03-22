declare module '@ptomasroos/react-native-multi-slider' {
  import React from 'react';
  import { ViewStyle } from 'react-native';

  export interface MultiSliderProps {
    values?: number[];

    onValuesChange?: (values: number[]) => void;
    onValuesChangeStart?: () => void;
    onValuesChangeFinish?: (values: number[]) => void;

    sliderLength?: number;
    touchDimensions?: {
      height: number;
      width: number;
      borderRadius: number;
      slipDisplacement: number;
    };

    customMarker?: React.ComponentType<MarkerProps>;
    customMarkerLeft?: React.ComponentType<MarkerProps>;
    customMarkerRight?: React.ComponentType<MarkerProps>;
    customLabel?: React.ComponentType<LabelProps>;

    isMarkersSeparated?: boolean;

    min?: number;
    max?: number;
    step?: number;

    optionsArray?: number[];

    containerStyle?: ViewStyle;
    trackStyle?: ViewStyle;
    selectedStyle?: ViewStyle;
    unselectedStyle?: ViewStyle;
    markerContainerStyle?: ViewStyle;
    markerStyle?: ViewStyle;
    pressedMarkerStyle?: ViewStyle;
    valuePrefix?: string;
    valueSuffix?: string;
    enabledOne?: boolean;
    enabledTwo?: boolean;
    onToggleOne?: () => void;
    onToggleTwo?: () => void;
    allowOverlap?: boolean;
    snapped?: boolean;
    markerOffsetX?: number;
    markerOffsetY?: number;
    minMarkerOverlapDistance?: number;
    imageBackgroundSource?: string;
    enableLabel?: boolean;
    vertical?: boolean;
  }

  export default class MultiSlider extends React.Component<MultiSliderProps> {}
}

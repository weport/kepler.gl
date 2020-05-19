import {RGBColor, RGBAColor, KeplerField} from '../reducers/types';

export type LayerConfig = {
  dataId: string | null;
  label: string;
  color: RGBColor;

  columns: any;
  isVisible: boolean;
  isConfigActive: boolean;
  highlightColor: RGBColor | RGBAColor;
  hidden: boolean;

  colorField: KeplerField | null;
  colorDomain: any;
  colorScale: string;

  // color by size, domain is set by filters, field, scale type
  sizeDomain: any;
  sizeScale: string;
  sizeField: KeplerField | null;

  visConfig: any;
  textLabel: any;

  colorUI: {
    color: any;
    colorRange: any;
  };
  animation: {
    enabled: boolean;
  };
};

export class Layer {
  id: string;
  config: LayerConfig;
}
export const LayerClasses: {
  point: Layer;
  arc: Layer;
  line: Layer;
  grid: Layer;
  hexagon: Layer;
  geojson: Layer;
  cluster: Layer;
  icon: Layer;
  heatmap: Layer;
  hexagonId: Layer;
  '3D': Layer;
  trip: Layer;
  s2: Layer;
};

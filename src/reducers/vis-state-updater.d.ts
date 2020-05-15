export type RGBColor = [number, number, number];
export type RGBAColor = [number, number, number, number];

export type KeplerField = {
  analyzerType: string;
  id: string;
  name: string;
  format: string;
  tableFieldIndex: numberstring;
  type: string;
  filterProps?: any;
};

export type KeplerDataset = {
  id: string;
  label?: string;
  color: RGBColor;

  // fields and data
  fields: KeplerField[];
  allData: any[][];

  allIndexes: number[];
  filteredIndex: number[];
  filteredIndexForDomain: number[];
  fieldPairs: {
    defaultName: string;
    pair: any;
    suffix: string[];
  }[];
  gpuFilter: {
    filterRange: number[][];
    filterValueUpdateTriggers: any;
    filterValueAccessor: any;
  };
  metadata: any;
  filterRecord: {
    dynamicDomain: any;
    fixedDomain: any;
    cpu: any;
    gpu: any;
  };
  changedFilters: any;

  // table-injected metadata
  metadata?: object;
};

export type KeplerDatasets = {
  [key: string]: KeplerDataset;
};

export type Filter = {
  dataId: string[];
  id: string;

  freeze: boolean;

  // time range filter specific
  fixedDomain: boolean;
  enlarged: boolean;
  isAnimating: boolean;
  speed: number;

  // field specific
  name: string[]; // string
  type: string;
  fieldIdx: number[]; // [integer]
  domain: any[];
  value: any;

  // plot
  yAxis: KeplerField | null;
  interval: string | null;
  enlargedHistogram: any[];
  histogram: any[];
  lineChart: any;

  // gpu filter
  gpu: boolean;
  gpuChannel: number[];
};

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

export type VisState = {
  mapInfo: {
    title: string;
    description: string;
  };
  layers: any[];
  layerData: any[];
  layerToBeMerged: any[];
  layerOrder: number[];
  filters: Filter[];
  filterToBeMerged: any[];
  datasets: KeplerDatasets;
  editingDataset: string | undefined;
  interactionConfig: any;
  interactionToBeMerged: any;
  layerBlending: string;
  hoverInfo: any;
  clicked: any;
  mousePos: any;
  spliMaps: any[];
  layerClasses: any;
  animationConfig: any;
  editor: any;
};

export const INITIAL_VIS_STATE: VisState;

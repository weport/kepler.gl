import {KeplerField, RGBColor, RGBAColor} from './types';

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

export type FilterRecord = {
  dynamicDomain: Filter[];
  fixedDomain: Filter[];
  cpu: Filter[];
  gpu: Filter[];
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
  filteredIdxCPU: number[];
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
  filterRecord: FilterRecord;
  filterRecordCPU: FilterRecord;
  changedFilters: any;

  // table-injected metadata
  sortColumn?: {
    // column name: sorted idx
    [key: string]: number[];
  };
  sortOrder?: string; // ASCENDING | DESCENDING | UNSORT

  pinnedColumns?: string[];
  // table-injected metadata
  metadata?: object;
};

export type KeplerDatasets = {
  [key: string]: KeplerDataset;
};

export type Editor = {
  mode: string;
  features: any[];
  selectedFeature: any;
  visible: boolean;
};
export type SplitMap = {
  layers: {[key: string]: boolean};
};
export type AnimationConfig = {
  domain: number[] | null,
  currentTime: number | null,
  speed: number
};
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
  layerClasses: {
    [key: string]: any
  };
  animationConfig: AnimationConfig;
  editor: Editor;
  splitMaps: SplitMap[];
};

export const INITIAL_VIS_STATE: VisState;

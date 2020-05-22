import {Field, RGBColor, RGBAColor, Millisecond} from './types';

import * as VisStateActions from 'actions/vis-state-actions';

export type HistogramBin = {
  x0: number | undefined;
  x1: number | undefined;
  count: number;
};

export type RangeFieldDomain = {
  domain: [number, number];
  step: number;
  histogram: HistogramBin[];
  enlargedHistogram: HistogramBin[];
};

export type SelectFieldDomain = {
  domain: [true, false];
};
export type MultiSelectFieldDomain = {
  domain: string[];
};

export type TimeRangeFieldDomain = {
  domain: [number, number];
  step: number;
  histogram: HistogramBin[];
  enlargedHistogram: HistogramBin[];
  mappedValue: (Millisecond | null)[];
};
export type FieldDomain = RangeFieldDomain | TimeRangeFieldDomain | SelectFieldDomain | MultiSelectFieldDomain;

export type FilterBase = {
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
  type: string | null;
  fieldIdx: number[]; // [integer]
  domain: any[] | null;
  value: any;

  // plot
  yAxis: Field | null;
  plotType: string;

  // gpu filter
  gpu: boolean;
  gpuChannel?: number[];
};

export type RangeFilter = FilterBase & RangeFieldDomain & {
  // enlargedHistogram?: HistogramBin[];
  // histogram?: HistogramBin[];
  // lineChart?: any;
  // interval?: string | null;
  type: 'range';
  fieldType: 'real' | 'integer';
  value: number;
  typeOptions: ['range']
};

export type SelectFilter = FilterBase & SelectFieldDomain & {
  type: 'select',
  fieldType: 'boolean';
  value: boolean,
};

export type MultiSelectFilter = FilterBase & MultiSelectFieldDomain & {
  type: 'range';
  fieldType: 'string' | 'date';
  value: string[];
}
export type PolygonFilter = FilterBase & {
  layerId: string[];
  type: 'polygon';
};

export type Filter = FilterBase | RangeFilter | PolygonFilter;

export type FilterRecord = {
  dynamicDomain: Filter[];
  fixedDomain: Filter[];
  cpu: Filter[];
  gpu: Filter[];
};

export type Dataset = {
  id: string;
  label?: string;
  color: RGBColor;

  // fields and data
  fields: Field[];
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

export type Datasets = {
  [key: string]: Dataset;
};
export type Feature = {
  id: string;
  properties: any;
  geometry: {
    type: string;
    coordinates: any;
  };
};
export type Editor = {
  mode: string;
  features: Feature[];
  selectedFeature: any;
  visible: boolean;
};
export type SplitMap = {
  layers: {[key: string]: boolean};
};
export type AnimationConfig = {
  domain: number[] | null;
  currentTime: number | null;
  speed: number;
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
  datasets: Datasets;
  editingDataset: string | undefined;
  interactionConfig: any;
  interactionToBeMerged: any;
  layerBlending: string;
  hoverInfo: any;
  clicked: any;
  mousePos: any;
  layerClasses: {
    [key: string]: any;
  };
  animationConfig: AnimationConfig;
  editor: Editor;
  splitMaps: SplitMap[];
};

export function updateStateWithLayerAndData(
  state: VisState,
  data: {layerData?: any; layer: Layer; idx: number}
): VisState;

export function layerConfigChangeUpdater(
  state: VisState,
  action: VisStateActions.LayerConfigChangeUpdaterAction
): VisState;
export function layerTextLabelChangeUpdater(
  state: VisState,
  action: VisStateActions.LayerTextLabelChangeUpdaterAction
): VisState;
export function layerTypeChangeUpdater(
  state: VisState,
  action: VisStateActions.LayerTypeChangeUpdaterAction
): VisState;
export function layerVisualChannelConfigChangeUpdater(
  state: VisState,
  action: VisStateActions.LayerVisualChannelConfigChangeUpdaterAction
): VisState;
export function layerVisConfigChangeUpdater(
  state: VisState,
  action: VisStateActions.LayerVisConfigChangeUpdaterAction
): VisState;
export function layerColorUIChangeUpdater(
  state: VisState,
  action: VisStateActions.LayerColorUIChangeUpdaterAction
): VisState;
export function updateLayerBlendingUpdater(
  state: VisState,
  action: VisStateActions.UpdateLayerBlendingUpdaterAction
): VisState;
export function interactionConfigChangeUpdater(
  state: VisState,
  action: VisStateActions.InteractionConfigChangeUpdaterAction
): VisState;
export function setFilterUpdater(
  state: VisState,
  action: VisStateActions.SetFilterUpdaterAction
): VisState;
export function addFilterUpdater(
  state: VisState,
  action: VisStateActions.AddFilterUpdaterAction
): VisState;
export function addLayerUpdater(
  state: VisState,
  action: VisStateActions.AddLayerUpdaterAction
): VisState;
export function reorderLayerUpdater(
  state: VisState,
  action: VisStateActions.ReorderLayerUpdaterAction
): VisState;
export function removeFilterUpdater(
  state: VisState,
  action: VisStateActions.RemoveFilterUpdaterAction
): VisState;
export function removeLayerUpdater(
  state: VisState,
  action: VisStateActions.RemoveLayerUpdaterAction
): VisState;
export function removeDatasetUpdater(
  state: VisState,
  action: VisStateActions.RemoveDatasetUpdaterAction
): VisState;
export function showDatasetTableUpdater(
  state: VisState,
  action: VisStateActions.ShowDatasetTableUpdaterAction
): VisState;
export function sortTableColumnUpdater(
  state: VisState,
  action: VisStateActions.SortTableColumnUpdaterAction
): VisState;
export function pinTableColumnUpdater(
  state: VisState,
  action: VisStateActions.PinTableColumnUpdaterAction
): VisState;
export function copyTableColumnUpdater(
  state: VisState,
  action: VisStateActions.CopyTableColumnUpdaterAction
): VisState;
export function updateVisDataUpdater(
  state: VisState,
  action: VisStateActions.UpdateVisDataUpdaterAction
): VisState;
export function toggleFilterAnimationUpdater(
  state: VisState,
  action: VisStateActions.ToggleFilterAnimationUpdaterAction
): VisState;
export function updateFilterAnimationSpeedUpdater(
  state: VisState,
  action: VisStateActions.UpdateFilterAnimationSpeedUpdaterAction
): VisState;
export function updateAnimationTimeUpdater(
  state: VisState,
  action: VisStateActions.UpdateAnimationTimeUpdaterAction
): VisState;
export function updateLayerAnimationSpeedUpdater(
  state: VisState,
  action: VisStateActions.UpdateLayerAnimationSpeedUpdaterAction
): VisState;
export function enlargeFilterUpdater(
  state: VisState,
  action: VisStateActions.EnlargeFilterUpdaterAction
): VisState;
export function toggleFilterFeatureUpdater(
  state: VisState,
  action: VisStateActions.ToggleFilterFeatureUpdaterAction
): VisState;
export function onLayerHoverUpdater(
  state: VisState,
  action: VisStateActions.OnLayerHoverUpdaterAction
): VisState;
export function onLayerClickUpdater(
  state: VisState,
  action: VisStateActions.OnLayerClickUpdaterAction
): VisState;
export function onMapClickUpdater(
  state: VisState,
  action: VisStateActions.OnMapClickUpdaterAction
): VisState;
export function onMouseMoveUpdater(
  state: VisState,
  action: VisStateActions.OnMouseMoveUpdaterAction
): VisState;
export function toggleLayerForMapUpdater(
  state: VisState,
  action: VisStateActions.ToggleLayerForMapUpdaterAction
): VisState;
export function setFilterPlotUpdater(
  state: VisState,
  action: VisStateActions.SetFilterPlotUpdaterAction
): VisState;
export function setMapInfoUpdater(
  state: VisState,
  action: VisStateActions.SetMapInfoUpdaterAction
): VisState;
export function loadFilesUpdater(
  state: VisState,
  action: VisStateActions.LoadFilesUpdaterAction
): VisState;
export function loadNextFileUpdater(
  state: VisState,
  action: VisStateActions.LoadNextFileUpdaterAction
): VisState;
export function loadFileSuccessUpdater(
  state: VisState,
  action: VisStateActions.LoadFileSuccessUpdaterAction
): VisState;
export function loadFilesErrUpdater(
  state: VisState,
  action: VisStateActions.LoadFilesErrUpdaterAction
): VisState;
export function setFeaturesUpdater(
  state: VisState,
  action: VisStateActions.SetFeaturesUpdaterAction
): VisState;
export function setPolygonFilterLayerUpdater(
  state: VisState,
  action: VisStateActions.SetPolygonFilterLayerUpdaterAction
): VisState;
export function setSelectedFeatureUpdater(
  state: VisState,
  action: VisStateActions.SetSelectedFeatureUpdaterAction
): VisState;
export function deleteFeatureUpdater(
  state: VisState,
  action: VisStateActions.DeleteFeatureUpdaterAction
): VisState;
export function setEditorModeUpdater(
  state: VisState,
  action: VisStateActions.SetEditorModeUpdaterAction
): VisState;
export function applyCPUFilterUpdater(
  state: VisState,
  action: VisStateActions.ApplyCPUFilterUpdaterAction
): VisState;
export function toggleEditorVisibilityUpdater(
  state: VisState,
  action: VisStateActions.ToggleEditorVisibilityUpdaterAction
): VisState;

export const INITIAL_VIS_STATE: VisState;
export const DEFAULT_ANIMATION_CONFIG: AnimationConfig;
export const DEFAULT_EDITOR: Editor;

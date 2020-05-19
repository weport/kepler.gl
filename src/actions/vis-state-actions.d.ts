// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// vis-state-reducer
import ActionTypes from 'constants/action-types';
import {KeplerProtoDataset} from '../reducers/types';
import {ParsedConfig} from '../schemas';

export type LayerConfigChangeAction = {
  type: ActionTypes.LAYER_CONFIG_CHANGE;
  oldLayer: object;
  newConfig: object;
};

export function layerConfigChange(oldLayer: object, newConfig: object): LayerConfigChangeAction;

export type LayerTextLabelChangeAction = {
  type: ActionTypes.LAYER_TEXT_LABEL_CHANGE;
  oldLayer: object;
  idx: number;
  prop: string;
  value: any;
};

export function layerTextLabelChange(
  oldLayer: object,
  idx: number,
  prop: string,
  value: any
): LayerTextLabelChangeAction;

export type LayerTypeChangeAction = {
  type: ActionTypes.LAYER_TYPE_CHANGE;
  oldLayer: object;
  newType: string;
};
export function layerTypeChange(oldLayer: object, newType: string): LayerTypeChangeAction;

export type LayerVisualChannelConfigChangeAction = {
  type: ActionTypes.LAYER_VISUAL_CHANNEL_CHANGE;
  oldLayer: object;
  newConfig: object;
  channel: string;
};
export function layerVisualChannelConfigChange(
  oldLayer: object,
  newConfig: object,
  channel: string
): LayerVisualChannelConfigChangeAction;

export type LayerVisConfigChangeAction = {
  type: ActionTypes.LAYER_VIS_CONFIG_CHANGE;
  oldLayer: object;
  newVisConfig: object;
};
export function layerVisConfigChange(oldLayer, newVisConfig): LayerVisConfigChangeAction;

export type LayerColorUIChangeAction = {
  type: ActionTypes.LAYER_COLOR_UI_CHANGE;
  oldLayer: object;
  prop: string;
  newConfig: object;
};
export function layerColorUIChange(
  oldLayer: object,
  prop: string,
  newConfig: object
): LayerColorUIChangeAction;

export type UpdateLayerBlendingAction = {
  type: ActionTypes.UPDATE_LAYER_BLENDING;
  mode: string;
};
export function updateLayerBlending(
  mode: 'additive' | 'normal' | 'subtractive'
): UpdateLayerBlendingAction;

export type InteractionConfigChangeAction = {
  type: ActionTypes.INTERACTION_CONFIG_CHANGE;
  config: object;
};
export function interactionConfigChange(config: object): InteractionConfigChangeAction;

export type SetFilterAction = {
  type: ActionTypes.SET_FILTER;
  idx: number;
  prop: string;
  value: any;
  valueIndex: number;
};
export function setFilter(
  idx: number,
  prop: string,
  value: any,
  valueIndex: number
): SetFilterAction;

export type AddFilterAction = {
  type: ActionTypes.ADD_FILTER;
  dataId: string;
};
export function addFilter(dataId: string): AddFilterAction;

export type AddLayerAction = {
  type: ActionTypes.ADD_LAYER;
  props: object;
};
export function addLayer(props: object): AddLayerAction;

export type ReorderLayerAction = {
  type: ActionTypes.REORDER_LAYER;
  order: number[];
};
export function reorderLayer(order: number[]): ReorderLayerAction;

export type RemoveFilterAction = {
  type: ActionTypes.REMOVE_FILTER;
  idx: number;
};
export function removeFilter(idx: number): RemoveFilterAction;

export type RemoveLayerAction = {
  type: ActionTypes.REMOVE_LAYER;
  idx: number;
};
export function removeLayer(idx: number): RemoveLayerAction;

export type RemoveDatasetAction = {
  type: ActionTypes.REMOVE_DATASET;
  dataId: string;
};
export function removeDataset(dataId: string): RemoveDatasetAction;

export type ShowDatasetTableAction = {
  type: ActionTypes.SHOW_DATASET_TABLE;
  dataId: string;
};
export function showDatasetTable(dataId: string): ShowDatasetTableAction;

export type SortTableColumnAction = {
  type: ActionTypes.SORT_TABLE_COLUMN;
  dataId: string;
  column: string;
  mode: string;
};
export function sortTableColumn(
  dataId: string,
  column: string,
  mode: string
): SortTableColumnAction;

export type PinTableColumnAction = {
  type: ActionTypes.PIN_TABLE_COLUMN;
  dataId: string;
  column: string;
};
export function pinTableColumn(dataId: string, column: string): PinTableColumnAction;

export type CopyTableColumnAction = {
  type: ActionTypes.COPY_TABLE_COLUMN;
  dataId: string;
  column: string;
};
export function copyTableColumn(dataId: string, column: string): CopyTableColumnAction;

export type AddDaataToMapOptions = {
  centerMap?: boolean;
  readOnly?: boolean;
  keepExistingConfig?: boolean;
};

export type UpdateVisDataAction = {
  type: ActionTypes.UPDATE_VIS_DATA;
  datasets: KeplerProtoDataset[];
  options: AddDaataToMapOptions;
  config: ParsedConfig;
};
export function updateVisData(
  datasets: KeplerProtoDataset[],
  options: AddDaataToMapOptions,
  config: ParsedConfig
): UpdateVisDataAction;

export type ToggleFilterAnimationAction = {
  type: ActionTypes.TOGGLE_FILTER_ANIMATION;
  idx;
};
export function toggleFilterAnimation(idx: number): ToggleFilterAnimationAction;

export type UpdateFilterAnimationSpeedAction = {
  type: ActionTypes.UPDATE_FILTER_ANIMATION_SPEED;
  idx: number;
  speed: number;
};
export function updateFilterAnimationSpeed(
  idx: number,
  speed: number
): UpdateFilterAnimationSpeedAction;

export type UpdateAnimationTimeAction = {
  type: ActionTypes.UPDATE_ANIMATION_TIME;
  value: number;
};
export function updateAnimationTime(value: number): UpdateAnimationTimeAction;

export type UpdateLayerAnimationSpeedAction = {
  type: ActionTypes.UPDATE_LAYER_ANIMATION_SPEED;
  speed: number;
};
export function updateLayerAnimationSpeed(speed: number): UpdateLayerAnimationSpeedAction;

export type EnlargeFilterAction = {
  type: ActionTypes.ENLARGE_FILTER;
  idx: number;
};
export function enlargeFilter(idx: number): EnlargeFilterAction;

export type ToggleFilterFeatureAction = {
  type: ActionTypes.TOGGLE_FILTER_FEATURE;
  idx: number;
};
export function toggleFilterFeature(idx: number): ToggleFilterFeatureAction;

export type OnLayerHoverAction = {
  type: ActionTypes.LAYER_HOVER;
  info: object;
};
export function onLayerHover(info: object): OnLayerHoverAction;

export type OnLayerClickAction = {
  type: ActionTypes.LAYER_CLICK;
  info: object;
};
export function onLayerClick(info: object): OnLayerClickAction;

export type OnMapClickAction = {
  type: ActionTypes.MAP_CLICK;
};

export function onMapClick(): type;
export type OnMouseMoveAction = {
  type: ActionTypes.MOUSE_MOVE;
  evt;
};
export function onMouseMove(evt): OnMouseMoveAction;

export type ToggleLayerForMapAction = {
  type: ActionTypes.TOGGLE_LAYER_FOR_MAP;
  mapIndex: number;
  layerId: string;
};
export function toggleLayerForMap(mapIndex: number, layerId: string): ToggleLayerForMapAction;

export type SetFilterPlotAction = {
  type: ActionTypes.SET_FILTER_PLOT;
  idx: number;
  newProp: object;
};
export function setFilterPlot(idx: number, newProp: object): SetFilterPlotAction;

export type SetMapInfoAction = {
  type: ActionTypes.SET_MAP_INFO;
  info;
};
export function setMapInfo(info): SetMapInfoAction;

export type LoadFilesAction = {
  type: ActionTypes.LOAD_FILES;
  files: object[];
};
export function loadFiles(files: object[]): LoadFilesAction;

export type LoadFilesErrAction = {
  type: ActionTypes.LOAD_FILES_ERR;
  error: Error;
};
export function loadFilesErr(error: Error): LoadFilesErrAction;

export type SetFeaturesAction = {
  type: ActionTypes.SET_FEATURES;
  features: object[];
};
export function setFeatures(features: object[]): SetFeaturesAction;

export type SetPolygonFilterLayerAction = {
  type: ActionTypes.SET_POLYGON_FILTER_LAYER;
  layer: object;
  feature: object;
};
export function setPolygonFilterLayer(layer: object, feature: object): SetPolygonFilterLayerAction;

export type SetSelectedFeatureAction = {
  type: ActionTypes.SET_SELECTED_FEATURE;
  feature: object;
};
export function setSelectedFeature(feature: object): SetSelectedFeatureAction;

export type DeleteFeatureAction = {
  type: ActionTypes.DELETE_FEATURE;
  feature: object;
};
export function deleteFeature(feature: object): DeleteFeatureAction;

export type SetEditorModeAction = {
  type: ActionTypes.SET_EDITOR_MODE;
  mode: string;
};
export function setEditorMode(mode: string): SetEditorModeAction;

export type ApplyCPUFilterAction = {
  type: ActionTypes.APPLY_CPU_FILTER;
  dataId: string;
};
export function applyCPUFilter(dataId: string | string[]): ApplyCPUFilterAction;

export type ToggleEditorVisibilityAction = {
  type: ActionTypes.TOGGLE_EDITOR_VISIBILITY;
};

export function toggleEditorVisibility(): ToggleEditorVisibilityAction;
export type LoadFileSuccessAction = {
  type: ActionTypes.LOAD_FILES_SUCCESS;
  result: any;
};
export function loadFileSuccess(): LoadFileSuccessAction;

export type LoadNextFileAction = {
  type: ActionTypes.LOAD_NEXT_FILE;
  fileCache: any;
  filesToLoad: any;
  totalCount: any;
  onFinish: any;
};
export function loadNextFile(payload: {
  fileCache: any;
  filesToLoad: any;
  totalCount: any;
  onFinish: any;
}): LoadNextFileAction;

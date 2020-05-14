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

export function layerConfigChange(oldLayer: object, newConfig: object): {
  type: ActionTypes.LAYER_CONFIG_CHANGE;
  oldLayer: object;
  newConfig: object;
};

export function layerTextLabelChange(oldLayer: object, idx: number, prop: string, value: any): {
  type: ActionTypes.LAYER_TEXT_LABEL_CHANGE;
  oldLayer: object;
  idx: number;
  prop: string;
  value: any;
};

export function layerTypeChange(oldLayer: object, newType: string): {
  type: ActionTypes.LAYER_TYPE_CHANGE;
  oldLayer: object;
  newType: string;
};

export function layerVisualChannelConfigChange(oldLayer: object, newConfig: object, channel: string): {
  type: ActionTypes.LAYER_VISUAL_CHANNEL_CHANGE;
  oldLayer: object;
  newConfig: object;
  channel: string;
};

export function layerVisConfigChange(oldLayer, newVisConfig): {
  type: ActionTypes.LAYER_VIS_CONFIG_CHANGE;
  oldLayer: object;
  newVisConfig: object;
};

export function layerColorUIChange(oldLayer: object, prop: string, newConfig: object): {
  type: ActionTypes.LAYER_COLOR_UI_CHANGE;
  oldLayer: object;
  prop: string;
  newConfig: object;
};

export function updateLayerBlending(mode: 'additive' | 'normal' | 'subtractive'): {
  type: ActionTypes.UPDATE_LAYER_BLENDING;
  mode: string;
};

export function interactionConfigChange(config: object): {
  type: ActionTypes.INTERACTION_CONFIG_CHANGE;
  config: object;
};

export function setFilter(idx: number, prop: string, value: any, valueIndex: number): {
  type: ActionTypes.SET_FILTER;
  idx: number;
  prop: string;
  value: any;
  valueIndex: number;
};

export function addFilter(dataId: string): {
  type: ActionTypes.ADD_FILTER;
  dataId: string;
};

export function addLayer(props: object): {
  type: ActionTypes.ADD_LAYER;
  props: object;
};

export function reorderLayer(order: number[]): {
  type: ActionTypes.REORDER_LAYER;
  order: number[];
};

export function removeFilter(idx: number): {
  type: ActionTypes.REMOVE_FILTER;
  idx: number;
};

export function removeLayer(idx: number): {
  type: ActionTypes.REMOVE_LAYER,
  idx: number;
};

export function removeDataset(key: string): {
  type: ActionTypes.REMOVE_DATASET;
  key: string;
};

export function showDatasetTable(dataId: string): {
  type: ActionTypes.SHOW_DATASET_TABLE;
  dataId: string;
};

export function updateVisData(datasets, options, config): {
  type: ActionTypes.UPDATE_VIS_DATA,
  datasets,
  options,
  config
};

export function toggleFilterAnimation(idx: number): {
  type: ActionTypes.TOGGLE_FILTER_ANIMATION;
  idx
};

export function updateFilterAnimationSpeed(idx: number, speed: number): {
  type: ActionTypes.UPDATE_FILTER_ANIMATION_SPEED;
  idx: number;
  speed: number;
};

export function updateAnimationTime(value: number): {
  type: ActionTypes.UPDATE_ANIMATION_TIME;
  value: number;
};

export function updateLayerAnimationSpeed(speed: number): {
  type: ActionTypes.UPDATE_LAYER_ANIMATION_SPEED;
  speed: number;
};

export function enlargeFilter(idx: number): {
  type: ActionTypes.ENLARGE_FILTER;
  idx: number;
};

export function toggleFilterFeature(idx: number): {
  type: ActionTypes.TOGGLE_FILTER_FEATURE;
  idx: number;
};

export function onLayerHover(info: object): {
  type: ActionTypes.LAYER_HOVER;
  info: object;
};

export function onLayerClick(info: object): {
  type: ActionTypes.LAYER_CLICK;
  info: object;
};

export function onMapClick(): {
  type: ActionTypes.MAP_CLICK;
};

export function onMouseMove(evt): {
  type: ActionTypes.MOUSE_MOVE,
  evt
};

export function toggleLayerForMap(mapIndex: number, layerId: string): {
  type: ActionTypes.TOGGLE_LAYER_FOR_MAP;
  mapIndex: number;
  layerId: string;
};

export function setFilterPlot(idx: number, newProp: object): {
  type: ActionTypes.SET_FILTER_PLOT;
  idx: number;
  newProp: object;
};

export function setMapInfo(info): {
  type: ActionTypes.SET_MAP_INFO,
  info
};

export function loadFiles(files: object[]): {
  type: ActionTypes.LOAD_FILES;
  files: object[];
};

export function loadFilesErr(error: Error) {
  type: ActionTypes.LOAD_FILES_ERR;
  error: Error;
};

export function setFeatures(features: object[]): {
  type: ActionTypes.SET_FEATURES;
  features: object[];
};

export function setPolygonFilterLayer(layer: object, feature: object): {
  type: ActionTypes.SET_POLYGON_FILTER_LAYER,
  layer: object;
  feature: object;
};

export function setSelectedFeature(feature: object): {
  type: ActionTypes.SET_SELECTED_FEATURE;
  feature: object;
};

export function deleteFeature(feature: object): {
  type: ActionTypes.DELETE_FEATURE;
  feature: object;
};

export function setEditorMode(mode: string): {
  type: ActionTypes.SET_EDITOR_MODE;
  mode: string;
};

export function applyCPUFilter(dataId: string | string[]): {
  type: ActionTypes.APPLY_CPU_FILTER;
  dataId: string;
};

export function toggleEditorVisibility(): {
  type: ActionTypes.TOGGLE_EDITOR_VISIBILITY
};

/* eslint-disable no-unused-vars */
const visStateActions = null;
/* eslint-enable no-unused-vars */

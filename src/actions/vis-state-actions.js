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

/**
 * Update layer base config: dataId, label, column, isVisible
 * @param oldLayer - layer to be updated
 * @param newConfig - new config to be merged with old config
 * @returns action
 * @type {typeof import('./vis-state-actions').layerConfigChange}
 * @public
 */
export function layerConfigChange(oldLayer, newConfig) {
  return {
    type: ActionTypes.LAYER_CONFIG_CHANGE,
    oldLayer,
    newConfig
  };
}

/**
 * Update layer text label
 * @param oldLayer - layer to be updated
 * @param idx -`idx` of text label to be updated
 * @param prop - `prop` of text label, e,g, `anchor`, `alignment`, `color`, `size`, `field`
 * @param value - new value
 * @returns action
 * @type {typeof import('./vis-state-actions').layerTextLabelChange}
 * @public
 */
export function layerTextLabelChange(oldLayer, idx, prop, value) {
  return {
    type: ActionTypes.LAYER_TEXT_LABEL_CHANGE,
    oldLayer,
    idx,
    prop,
    value
  };
}

/**
 * Update layer type. Previews layer config will be copied if applicable.
 * @param oldLayer - layer to be updated
 * @param newType - new type
 * @returns action
 * @type {typeof import('./vis-state-actions').layerTypeChange}
 * @public
 */
export function layerTypeChange(oldLayer, newType) {
  return {
    type: ActionTypes.LAYER_TYPE_CHANGE,
    oldLayer,
    newType
  };
}

/**
 * Update layer visual channel
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param newConfig - new visual channel config
 * @param channel - channel to be updated
 * @returns action
 * @type {typeof import('./vis-state-actions').layerVisualChannelConfigChange}
 * @public
 */
export function layerVisualChannelConfigChange(oldLayer, newConfig, channel) {
  return {
    type: ActionTypes.LAYER_VISUAL_CHANNEL_CHANGE,
    oldLayer,
    newConfig,
    channel
  };
}

/**
 * Update layer `visConfig`
 * @memberof visStateActions
 * @param oldLayer - layer to be updated
 * @param newVisConfig - new visConfig as a key value map: e.g. `{opacity: 0.8}`
 * @returns action
 * @type {typeof import('./vis-state-actions').layerVisConfigChange}
 * @public
 */
export function layerVisConfigChange(oldLayer, newVisConfig) {
  return {
    type: ActionTypes.LAYER_VIS_CONFIG_CHANGE,
    oldLayer,
    newVisConfig
  };
}

/**
 * Set the color palette ui for layer color
 * @memberOf visStateActions
 * @param oldLayer - layer to be updated
 * @param prop - which color prop
 * @param newConfig - to be merged
 * @returns action
 * @type {typeof import('./vis-state-actions').layerColorUIChange}
 * @public
 */
export function layerColorUIChange(oldLayer, prop, newConfig) {
  return {
    type: ActionTypes.LAYER_COLOR_UI_CHANGE,
    oldLayer,
    prop,
    newConfig
  };
}

/**
 * Update layer blending mode
 * @memberof visStateActions
 * @param mode one of `additive`, `normal` and `subtractive`
 * @returns action
 * @type {typeof import('./vis-state-actions').updateLayerBlending}
 * @public
 */
export function updateLayerBlending(mode) {
  return {
    type: ActionTypes.UPDATE_LAYER_BLENDING,
    mode
  };
}

/**
 * Update `interactionConfig`
 * @memberof visStateActions
 * @param config - new config as key value map: `{tooltip: {enabled: true}}`
 * @returns action
 * @type {typeof import('./vis-state-actions').interactionConfigChange}
 * @public
 */
export function interactionConfigChange(config) {
  return {
    type: ActionTypes.INTERACTION_CONFIG_CHANGE,
    config
  };
}

/**
 * Update filter property
 * @memberof visStateActions
 * @param idx -`idx` of filter to be updated
 * @param prop - `prop` of filter, e,g, `dataId`, `name`, `value`
 * @param value - new value
 * @param valueIndex - array properties like dataset require index in order to improve performance
 * @returns action
 * @type {typeof import('./vis-state-actions').setFilter}
 * @public
 */
export function setFilter(idx, prop, value, valueIndex) {
  return {
    type: ActionTypes.SET_FILTER,
    idx,
    prop,
    value,
    valueIndex
  };
}

/**
 * Add a new filter
 * @memberof visStateActions
 * @param dataId - dataset `id` this new filter is associated with
 * @returns action
 * @type {typeof import('./vis-state-actions').addFilter}
 * @public
 */
export function addFilter(dataId) {
  return {
    type: ActionTypes.ADD_FILTER,
    dataId
  };
}

/**
 * Add a new layer
 * @memberof visStateActions
 * @param props - new layer props
 * @returns action
 * @type {typeof import('./vis-state-actions').addLayer}
 * @public
 */
export function addLayer(props) {
  return {
    type: ActionTypes.ADD_LAYER,
    props
  };
}

/**
 * Reorder layer, order is an array of layer indexes, index 0 will be the one at the bottom
 * @memberof visStateActions
 * @param order an array of layer indexes
 * @returns action
 * @type {typeof import('./vis-state-actions').reorderLayer}
 * @public
 * @example
 *
 * // bring `layers[1]` below `layers[0]`, the sequence layers will be rendered is `1`, `0`, `2`, `3`.
 * // `1` will be at the bottom, `3` will be at the top.
 * this.props.dispatch(reorderLayer([1, 0, 2, 3]));
 */
export function reorderLayer(order) {
  return {
    type: ActionTypes.REORDER_LAYER,
    order
  };
}

/**
 * Remove a filter from `visState.filters`, once a filter is removed, data will be re-filtered and layer will be updated
 * @memberof visStateActions
 * @param idx idx of filter to be removed
 * @returns action
 * @type {typeof import('./vis-state-actions').removeFilter}
 * @public
 */
export function removeFilter(idx) {
  return {
    type: ActionTypes.REMOVE_FILTER,
    idx
  };
}

/**
 * Remove a layer
 * @memberof visStateActions
 * @param idx idx of layer to be removed
 * @returns action
 * @type {typeof import('./vis-state-actions').removeLayer}
 * @public
 */
export function removeLayer(idx) {
  return {
    type: ActionTypes.REMOVE_LAYER,
    idx
  };
}

/**
 * Remove a dataset and all layers, filters, tooltip configs that based on it
 * @memberof visStateActions
 * @param dataId dataset id
 * @returns action
 * @type {typeof import('./vis-state-actions').removeDataset}
 * @public
 */
export function removeDataset(dataId) {
  return {
    type: ActionTypes.REMOVE_DATASET,
    dataId
  };
}

/**
 * Display dataset table in a modal
 * @memberof visStateActions
 * @param dataId dataset id to show in table
 * @returns action
 * @type {typeof import('./vis-state-actions').showDatasetTable}
 * @public
 */
export function showDatasetTable(dataId) {
  return {
    type: ActionTypes.SHOW_DATASET_TABLE,
    dataId
  };
}

/**
 * Sort dataset column, for table display
 * @memberof visStateActions
 * @param dataId
 * @param column
 * @param mode
 * @returns action
 * @type {typeof import('./vis-state-actions').sortTableColumn}
 * @public
 */
export function sortTableColumn(dataId, column, mode) {
  return {
    type: ActionTypes.SORT_TABLE_COLUMN,
    dataId,
    column,
    mode
  };
}

/**
 * Pin dataset column, for table display
 * @param dataId
 * @param column
 * @returns action
 * @type {typeof import('./vis-state-actions').pinTableColumn}
 * @public
 */
export function pinTableColumn(dataId, column) {
  return {
    type: ActionTypes.PIN_TABLE_COLUMN,
    dataId,
    column
  };
}

/**
 * Copy column, for table display
 * @param dataId
 * @param column
 * @returns action
 * @type {typeof import('./vis-state-actions').copyTableColumn}
 * @public
 */
export function copyTableColumn(dataId, column) {
  return {
    type: ActionTypes.COPY_TABLE_COLUMN,
    dataId,
    column
  };
}

/**
 * Add new dataset to `visState`, with option to load a map config along with the datasets
 * @memberof visStateActions
 * @param datasets - ***required** datasets can be a dataset or an array of datasets
 * Each dataset object needs to have `info` and `data` property.
 * @param datasets.info -info of a dataset
 * @param datasets.info.id - id of this dataset. If config is defined, `id` should matches the `dataId` in config.
 * @param datasets.info.label - A display name of this dataset
 * @param datasets.data - ***required** The data object, in a tabular format with 2 properties `fields` and `rows`
 * @param datasets.data.fields - ***required** Array of fields,
 * @param datasets.data.fields.name - ***required** Name of the field,
 * @param datasets.data.rows - ***required** Array of rows, in a tabular format with `fields` and `rows`
 * @param {Object} options
 * @param {boolean} options.centerMap `default: true` if `centerMap` is set to `true` kepler.gl will
 * place the map view within the data points boundaries
 * @param {boolean} options.readOnly `default: false` if `readOnly` is set to `true`
 * the left setting panel will be hidden
 * @param {Object} config this object will contain the full kepler.gl instance configuration {mapState, mapStyle, visState}
 * @returns action
 * @public
 */
export function updateVisData(datasets, options, config) {
  return {
    type: ActionTypes.UPDATE_VIS_DATA,
    datasets,
    options,
    config
  };
}

/**
 * Start and end filter animation
 * @memberof visStateActions
 * @param {Number} idx - idx of filter
 * @returns action
 * @public
 */
export function toggleFilterAnimation(idx) {
  return {
    type: ActionTypes.TOGGLE_FILTER_ANIMATION,
    idx
  };
}

/**
 * Change filter animation speed
 * @memberof visStateActions
 * @param {Number} idx -  `idx` of filter
 * @param {Number} speed - `speed` to change it to. `speed` is a multiplier
 * @returns action
 * @public
 */
export function updateFilterAnimationSpeed(idx, speed) {
  return {
    type: ActionTypes.UPDATE_FILTER_ANIMATION_SPEED,
    idx,
    speed
  };
}

/**
 * Reset animation
 * @memberof visStateActions
 * @param {Number} value -  Current value of the slider
 * @returns action
 * @public
 */
export function updateAnimationTime(value) {
  return {
    type: ActionTypes.UPDATE_ANIMATION_TIME,
    value
  };
}

/**
 * update trip layer animation speed
 * @memberof visStateActions
 * @param {Number} speed - `speed` to change it to. `speed` is a multiplier
 * @returns action
 * @public
 */
export function updateLayerAnimationSpeed(speed) {
  return {
    type: ActionTypes.UPDATE_LAYER_ANIMATION_SPEED,
    speed
  };
}

/**
 * Show larger time filter at bottom for time playback (apply to time filter only)
 * @memberof visStateActions
 * @param {Number} idx - index of filter to enlarge
 * @returns action
 * @public
 */
export function enlargeFilter(idx) {
  return {
    type: ActionTypes.ENLARGE_FILTER,
    idx
  };
}

/**
 * Show/hide filter feature on map
 * @memberof visStateActions
 * @param {Number} idx - index of filter feature to show/hide
 * @return {{type: ActionTypes.TOGGLE_FILTER_FEATURE, idx: idx}}
 */
export function toggleFilterFeature(idx) {
  return {
    type: ActionTypes.TOGGLE_FILTER_FEATURE,
    idx
  };
}

/**
 * Trigger layer hover event with hovered object
 * @memberof visStateActions
 * @param {Object} info - Object hovered, returned by deck.gl
 * @returns action
 * @public
 */
export function onLayerHover(info) {
  return {
    type: ActionTypes.LAYER_HOVER,
    info
  };
}

/**
 * Trigger layer click event with clicked object
 * @memberof visStateActions
 * @param {Object} info - Object clicked, returned by deck.gl
 * @returns action
 * @public
 */
export function onLayerClick(info) {
  return {
    type: ActionTypes.LAYER_CLICK,
    info
  };
}

/**
 * Trigger map click event, unselect clicked object
 * @memberof visStateActions
 * @returns action
 * @public
 */
export function onMapClick() {
  return {
    type: ActionTypes.MAP_CLICK
  };
}

/**
 * Trigger map mouse moveevent, payload would be
 * React-map-gl PointerEvent
 * https://uber.github.io/react-map-gl/#/documentation/api-reference/pointer-event
 *
 * @memberof visStateActions
 * @param {Object} evt - PointerEvent
 * @returns action
 * @public
 */
export function onMouseMove(evt) {
  return {
    type: ActionTypes.MOUSE_MOVE,
    evt
  };
}

/**
 * Toggle visibility of a layer in a split map
 * @memberof visStateActions
 * @param {Number} mapIndex - index of the split map
 * @param {string} layerId - id of the layer
 * @returns action
 * @public
 */
export function toggleLayerForMap(mapIndex, layerId) {
  return {
    type: ActionTypes.TOGGLE_LAYER_FOR_MAP,
    mapIndex,
    layerId
  };
}

/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param {Number} idx
 * @param {Object} newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @returns action
 * @public
 */
export function setFilterPlot(idx, newProp) {
  return {
    type: ActionTypes.SET_FILTER_PLOT,
    idx,
    newProp
  };
}

/**
 * Set the property of a filter plot
 * @memberof visStateActions
 * @param {Number} idx
 * @param {Object} newProp key value mapping of new prop `{yAxis: 'histogram'}`
 * @returns action
 * @public
 */
export function setMapInfo(info) {
  return {
    type: ActionTypes.SET_MAP_INFO,
    info
  };
}

/**
 * Trigger file loading dispatch `addDataToMap` if succeed, or `loadFilesErr` if failed
 * @memberof visStateActions
 * @param {Array<Object>} files array of fileblob
 * @returns action
 * @public
 */
export function loadFiles(files) {
  return {
    type: ActionTypes.LOAD_FILES,
    files
  };
}

/**
 * called with next file to load
 * @param {object} payload
 * @param {Array<object>} payload.fileCache
 * @param {Array<object>} payload.filesToLoad
 * @param {number} payload.totalCount
 * @param {Function} payload.onFinish - action creator to execute when all files are loaded
 */
export function loadNextFile({fileCache, filesToLoad, totalCount, onFinish}) {
  return {
    type: ActionTypes.LOAD_NEXT_FILE,
    fileCache,
    filesToLoad,
    totalCount,
    onFinish
  };
}

/**
 * called when all files are processed and loaded
 * @param {Array<object>} result
 */
export function loadFileSuccess(result) {
  return {
    type: ActionTypes.LOAD_FILES_SUCCESS,
    result
  };
}

/**
 * Trigger loading file error
 * @memberof visStateActions
 * @param {*} error
 * @returns action
 * @public
 */
export function loadFilesErr(error) {
  return {
    type: ActionTypes.LOAD_FILES_ERR,
    error
  };
}

/**
 * Store features to state
 * @memberof visStateActions
 * @param {Array<Object>} features
 * @returns action
 */
export function setFeatures(features) {
  return {
    type: ActionTypes.SET_FEATURES,
    features
  };
}

/**
 * It will apply the provide feature as filter to the given layer.
 * If the given feature is already applied as filter to the layer, it will remove the layer from the filter
 * @memberof visStateActions
 * @param {Object} layer
 * @param {Object} feature
 * @return {{feature: *, type: ActionTypes.SET_POLYGON_FILTER_LAYER, layer: *}}
 */
export function setPolygonFilterLayer(layer, feature) {
  return {
    type: ActionTypes.SET_POLYGON_FILTER_LAYER,
    layer,
    feature
  };
}

/**
 * Set the current feature to be edited/deleted
 * @memberof visStateActions
 * @param {Object} feature
 * @return {{feature: feature, type: ActionTypes.SET_SELECTED_FEATURE}}
 */
export function setSelectedFeature(feature) {
  return {
    type: ActionTypes.SET_SELECTED_FEATURE,
    feature
  };
}

/**
 * Delete the given feature
 * @memberof visStateActions
 * @param {Object} feature
 * @return {{type: ActionTypes.DELETE_FEATURE, feature: feature}}
 */
export function deleteFeature(feature) {
  return {
    type: ActionTypes.DELETE_FEATURE,
    feature
  };
}

/** Set the map mode
 * @memberof visStateActions
 * @param {string} mode one of EDITOR_MODES
 * @return {{type: ActionTypes. SET_EDITOR_MODE, mode: *}}
 * @public
 * @example
 * import {setMapMode} from 'kepler.gl/actions';
 * import {EDITOR_MODES} from 'kepler.gl/constants';
 *
 * this.props.dispatch(setMapMode(EDITOR_MODES.DRAW_POLYGON));
 */
export function setEditorMode(mode) {
  return {
    type: ActionTypes.SET_EDITOR_MODE,
    mode
  };
}

/**
 * Trigger CPU filter of selected dataset
 * @memberof visStateActions
 * @param {string | Arrary<string>} dataId - single dataId or an array of dataIds
 * @returns action
 * @public
 */
export function applyCPUFilter(dataId) {
  return {
    type: ActionTypes.APPLY_CPU_FILTER,
    dataId
  };
}

/**

 * Toggle editor layer visibility
 * @memberof visStateActions
 * @return {{type: ActionTypes.TOGGLE_EDITOR_VISIBILITY}}
 */
export function toggleEditorVisibility() {
  return {
    type: ActionTypes.TOGGLE_EDITOR_VISIBILITY
  };
}

/**
 * This declaration is needed to group actions in docs
 */
/**
 * Actions handled mostly by `visState` reducer.
 * They manage how data is processed, filtered and displayed on the map by operates on layers,
 * filters and interaction settings.
 *
 * @public
 */
/* eslint-disable no-unused-vars */
const visStateActions = null;
/* eslint-enable no-unused-vars */

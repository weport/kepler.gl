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

import ActionTypes from 'constants/action-types';
import {createAction} from 'redux-actions';
import {object} from 'prop-types';

export function addDataToMap(data: {
  datasets?: {
    info?: {
      id?: string; 
      label?: string;
    };
    data?: {
      fields: {
        id?: string;
        name?: string;
        format?: string;
        type?: string;
      }[],
      rows: any[][];
    };
  }[];
  options?: {
    centerMap?: boolean;
    readOnly?: boolean; 
    keepExistingConfig?: boolean;
  };
  config?: object; // {mapState, mapStyle, visState}
}): {type: ActionTypes.ADD_DATA_TO_MAP; payload: object;};


export function resetMapConfig(): {type: ActionTypes.RESET_MAP_CONFIG};


export function receiveMapConfig(config: object, options: {centerMap?: boolean; readOnly?: boolean; keepExistingConfig?: boolean;}): {
  type: ActionTypes.RECEIVE_MAP_CONFIG;
  payload: {
    config: object;
    options: object;
  }
};


export function keplerGlInit(options?: {mapboxApiAccessToken?: string; mapboxApiUrl?: string; mapStylesReplaceDefault?: boolean;}): {
  type: ActionTypes.INIT;
  payload: {
    mapboxApiAccessToken?: string;
    mapboxApiUrl?: string;
    mapStylesReplaceDefault?: boolean;
  }
};

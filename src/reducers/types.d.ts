
import {ParsedConfig} from '../schemas';

export type RGBColor = [number, number, number];
export type RGBAColor = [number, number, number, number];
export type HexColor = string; // this is the best tpescript can do at the moment
export type Millisecond = number;

export type Field = {
  analyzerType: string;
  id: string;
  name: string;
  format: string;
  tableFieldIndex: number;
  type: string;
  filterProps?: any;
};

/**
 * Input dataest parsed to addDataToMap
 */
export interface ProtoDataset {
  info: {
    id: string;
    label: string;
    format?: string;
  },
  data: {
    fields: {
      name: string;
      type?: string;
      format?: string;
    }[];
    rows: any[][];
  },

  // table-injected metadata
  metadata?: object;
};

export type AddDaataToMapOptions = {
  centerMap?: boolean;
  readOnly?: boolean;
  keepExistingConfig?: boolean;
};

export type AddDataToMaoPayload = {
  datasets: ProtoDataset[];
  options: AddDaataToMapOptions;
  config: ParsedConfig;
}
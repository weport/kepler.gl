
export type RGBColor = [number, number, number];
export type RGBAColor = [number, number, number, number];

export type KeplerField = {
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
export type KeplerProtoDataset = {
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
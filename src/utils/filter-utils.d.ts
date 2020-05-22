import {
  Filter,
  PolygonFilter,
  Dataset,
  Datasets,
  FilterRecord,
  FieldDomain,
  TimeRangeFieldDomain,
  HistogramBin
} from '../reducers/vis-state-updaters';
import {Layer} from 'layers';
import {Field} from 'reducers/types';

export function applyFilterFieldName(
  filter: Filter,
  dataset: Dataset,
  fieldName: string,
  filterDatasetIndex?: number,
  option?: {mergeDomain: boolean}
): {
  filter: Filter | null;
  dataset: Dataset;
};

export function getDefaultFilter(dataId: string | string[]): Filter;
export function shouldApplyFilter(filter: Filter, datasetId: string): boolean;
export function validatePolygonFilter(
  dataset: Dataset,
  filter: PolygonFilter,
  layers: Layer[]
): {filter: PolygonFilter | null; dataset: Dataset};

export function validateFilter(
  dataset: Dataset,
  filter: Filter
): {filter: PolygonFilter | null; dataset: Dataset};

export function adjustValueToFilterDomain(value: Filter['value'], Filter): any;

export type FilterDatasetOpt = {
  // only allow cpu filtering
  cpuOnly?: boolean;
  // ignore filter for domain calculation
  ignoreDomain?: boolean;
};
export function filterDataset(
  dataset: Dataset,
  filters: Filter[],
  layers: Layer[],
  opt?: FilterDatasetOpt
): Dataset;
export function applyFiltersToDatasets(
  datasetIds: string[], 
  datasets: Datasets, 
  filters: Filter[], 
  layers: Layer[]
): Datasets;
export function getFilterRecord(
  dataId: string,
  filters: Filter[],
  option?: FilterDatasetOpt
): FilterRecord;

function filterFunction(data: any[], index?: number): boolean;

export function isValidFilterValue(type: string | null, value: any): boolean;
export function getFilterFunction(
  field: Field | null,
  dataId: string,
  filter: Filter,
  layers: Layer[]
): typeof filterFunction;

export type FilterResult = {
  filteredIndexForDomain?: number[];
  filteredIndex?: number[];
};
export function filterDataByFilterTypes(
  filters: {
    dynamicDomainFilters: Filter[] | null;
    cpuFilters: Filter[] | null;
    filterFuncs: {
      [key: string]: typeof filterFunction;
    };
  },
  allData: Dataset['allData']
): FilterResult;

export type FilterChanged = {
  [key in keyof FilterRecord]: {
    [key: string]: 'added' | 'deleted' | 'name_changed' | 'value_changed' | 'dataId_changed';
  } | null;
};
export function diffFilters(
  filterRecord: FilterRecord,
  oldFilterRecord?: FilterRecord | {}
): FilterChanged;

export type FilterDomain = any;

export function getFieldDomain(allData: Dataset['allData'], filed: Field): FieldDomain;

export function dataValueAccessor(data: any[]): number | null;
export function getTimestampFieldDomain(
  data: Dataset['allData'],
  valueAccessor: typeof dataValueAccessor
): TimeRangeFieldDomain;

export function getNumericFieldDomain(
  data: Dataset['allData'],
  valueAccessor: typeof dataValueAccessor
): RangeFieldDomain;

export function histogramConstruct(
  domain: [number, number],
  mappedValue: (Millisecond | null | number)[],
  bins: number
): HistogramBin[];

export function getHistogram(
  domain: [number, number],
  mappedValue: (Millisecond | null | number)[]
): {histogram: HistogramBin[]; enlargedHistogram: HistogramBin[]};

export function getNumericStepSize(diff: number): number;

export function mergeFilterDomainStep(filter: Filter, filterProps?: any): Filter | null;

export function getFilterProps(allData: Dataset['allData'], field: Field): Partiel<Filter> & {fieldType: string};
[kepler.gl](../README.md) › [Globals](../globals.md) › ["vis-state-actions"](_vis_state_actions_.md)

# Module: "vis-state-actions"

## Index

### Functions

* [layerConfigChange](_vis_state_actions_.md#layerconfigchange)
* [layerTextLabelChange](_vis_state_actions_.md#layertextlabelchange)

## Functions

###  layerConfigChange

▸ **layerConfigChange**(`oldLayer`: object, `newConfig`: object): *object*

*Defined in [vis-state-actions.js:32](https://github.com/keplergl/kepler.gl/blob/f53431e8/src/actions/vis-state-actions.js#L32)*

Update layer base config: dataId, label, column, isVisible

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`oldLayer` | object | layer to be updated |
`newConfig` | object | new config to be merged with old config |

**Returns:** *object*

action

* **newConfig**: *object*

* **oldLayer**: *object*

* **type**: *ActionTypes.LAYER_CONFIG_CHANGE*

___

###  layerTextLabelChange

▸ **layerTextLabelChange**(`oldLayer`: object, `idx`: number, `prop`: string, `value`: any): *object*

*Defined in [vis-state-actions.js:50](https://github.com/keplergl/kepler.gl/blob/f53431e8/src/actions/vis-state-actions.js#L50)*

Update layer text label

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`oldLayer` | object | layer to be updated |
`idx` | number | -`idx` of text label to be updated |
`prop` | string | `prop` of text label, e,g, `anchor`, `alignment`, `color`, `size`, `field` |
`value` | any | new value |

**Returns:** *object*

action

* **idx**: *number*

* **oldLayer**: *object*

* **prop**: *string*

* **type**: *ActionTypes.LAYER_TEXT_LABEL_CHANGE*

* **value**: *any*

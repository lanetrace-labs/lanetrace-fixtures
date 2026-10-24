import test from'node:test';import assert from'node:assert/strict';import{sample,presets}from'./index.mjs';import{analyze}from'../lanetrace-engine/index.mjs';
test('paired layouts differ only in explicit workload behavior',()=>{assert.equal(analyze(sample,{selectedIds:presets.shared}).summary.conflicts,1);assert.equal(analyze(sample,{selectedIds:presets.isolated}).summary.conflicts,0)});

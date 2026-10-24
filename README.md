# LaneTrace teaching workloads

Six explicitly synthetic calls isolate contention mechanisms. Shared aggregate writes touch separate slots plus a common Global key. Isolated writes touch separate slots only. Readers share executable and instance reads and access their respective slot without writing.

The resource numbers and ledger 1000 are teaching values, not benchmark measurements. Key aliases are symbolic. Real captured traces in the backend use canonical ledger-key XDR identities and simulated instruction resources.

`sample` exports the full corpus; `presets` selects shared, isolated, reads or all. Run `node --test test.mjs` with the sibling engine. Extend this corpus with read/write bridges, skewed component weights and stale observations, preserving a stated expectation for every case.

## Protocol reference

[CAP-0063](https://github.com/stellar/stellar-protocol/blob/master/core/cap-0063.md) defines the footprint conflict rule and staged cluster semantics. LaneTrace implements the declared-key conflict rule and an illustrative clustering model only.

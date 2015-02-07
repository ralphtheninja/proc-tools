# proc-tools

Reads data from various `/proc/:pid/*` file descriptors.

## Install

```
$ npm install proc-tools --save
```

## Usage

Get `/proc/:pid/status` of a process.

```js
var status = require('proc-tools').status
status(process.pid, function (err, data) {
  console.log(JSON.stringify(data, null, 2))
})
```

Result:

```json
{
  "name": "node",
  "state": "S (sleeping)",
  "tgid": "5161",
  "ngid": "0",
  "pid": "5161",
  "ppid": "353",
  "tracerpid": "0",
  "uid": [
    "1000",
    "1000",
    "1000",
    "1000"
  ],
  "gid": [
    "1000",
    "1000",
    "1000",
    "1000"
  ],
  "fdsize": "64",
  "groups": "4 20 24 25 27 29 30 44 46 100 108 120 1000 ",
  "vmpeak": "719280 kB",
  "vmsize": "689420 kB",
  "vmlck": "0 kB",
  "vmpin": "0 kB",
  "vmhwm": "8996 kB",
  "vmrss": "8996 kB",
  "vmdata": "662168 kB",
  "vmstk": "136 kB",
  "vmexe": "8500 kB",
  "vmlib": "4172 kB",
  "vmpte": "140 kB",
  "vmswap": "0 kB",
  "threads": "6",
  "sigq": "1/62763",
  "sigpnd": "0000000000000000",
  "shdpnd": "0000000000000000",
  "sigblk": "0000000000000000",
  "sigign": "0000000000001000",
  "sigcgt": "0000000180004202",
  "capinh": "0000000000000000",
  "capprm": "0000000000000000",
  "capeff": "0000000000000000",
  "capbnd": "0000001fffffffff",
  "seccomp": "0",
  "cpus_allowed": "f",
  "cpus_allowed_list": "0-3",
  "mems_allowed": "00000000,00000001",
  "mems_allowed_list": "0",
  "voluntary_ctxt_switches": "2",
  "nonvoluntary_ctxt_switches": "39"
}
```

## License
MIT

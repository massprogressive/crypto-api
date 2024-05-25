const listIDs = {
  atom: 3794,
  btc: 1,
  eth: 1027,
  bnb: 1839,
  near: 6535,
  sol: 5426,
  nym: 17591,
  dym: 28932,
  dydx: 28324,
  sei: 23149,
  osmo: 12220,
  arb: 11841,
  strk: 22691,
  dot: 6636,
  lrc: 1934,
  ocean: 3911,
  scrt: 5604,
  mnt: 27075,
  evmos: 19899,
  saga: 30372,
  akt: 7431,
  axl: 17799,
  ntrn: 26680,
  fil: 2280,
  dvpn: 2643,
  hearts: 15584,
  tia: 22861,
  theta: 2416,
  ada: 2010,
  ghx: 6554,
  merl: 30712,
  ena: 30171,
  nibi: 28508,
  aevo: 29676,
  etherfi: 29814,
  aprs: 29978,
  flt: 30097,
  omni: 30315,
  link: 1975,
  avax: 5805,
  orai: 7533,
  bb: 30746,
  mode: 31016,
  cta: 31185,
  op: 11840,
  // add here new token
};


let tokenList = [];

Object.keys(listIDs).forEach(function(key, index) {
   tokenList.push(listIDs[key])
});

const tokens = tokenList.toString();

// module.export = { tokens }
export default tokens;

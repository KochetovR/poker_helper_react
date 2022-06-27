const IMAGES = {
    // RFI
    rfi_15_bu: require('./rfi/15/bu.jpg'),
    rfi_15_co: require('./rfi/15/co.jpg'),
    rfi_15_ep: require('./rfi/15/ep.jpg'),
    rfi_15_mp3: require('./rfi/15/mp3.jpg'),
    rfi_15_mp2: require('./rfi/15/mp2.jpg'),
    rfi_15_mp: require('./rfi/15/mp.jpg'),

    rfi_20_bu: require('./rfi/20/bu.jpg'),
    rfi_20_co: require('./rfi/20/co.jpg'),
    rfi_20_ep: require('./rfi/20/ep.jpg'),
    rfi_20_mp3: require('./rfi/20/mp3.jpg'),
    rfi_20_mp2: require('./rfi/20/mp2.jpg'),
    rfi_20_mp: require('./rfi/20/mp.jpg'),

    rfi_25_bu: require('./rfi/25/bu.jpg'),
    rfi_25_co: require('./rfi/25/co.jpg'),
    rfi_25_ep: require('./rfi/25/ep.jpg'),
    rfi_25_mp3: require('./rfi/25/mp3.jpg'),
    rfi_25_mp2: require('./rfi/25/mp2.jpg'),
    rfi_25_mp: require('./rfi/25/mp.jpg'),

    rfi_30_bu: require('./rfi/30/bu.jpg'),
    rfi_30_co: require('./rfi/30/co.jpg'),
    rfi_30_ep: require('./rfi/30/ep.jpg'),
    rfi_30_mp3: require('./rfi/30/mp3.jpg'),
    rfi_30_mp2: require('./rfi/30/mp2.jpg'),
    rfi_30_mp: require('./rfi/30/mp.jpg'),

    rfi_50_bu: require('./rfi/50/bu.jpg'),
    rfi_50_co: require('./rfi/50/co.jpg'),
    rfi_50_ep: require('./rfi/50/ep.jpg'),
    rfi_50_mp3: require('./rfi/50/mp3.jpg'),
    rfi_50_mp2: require('./rfi/50/mp2.jpg'),
    rfi_50_mp: require('./rfi/50/mp.jpg'),

    rfi_100_bu: require('./rfi/100/bu.jpg'),
    rfi_100_co: require('./rfi/100/co.jpg'),
    rfi_100_ep: require('./rfi/100/ep.jpg'),
    rfi_100_mp3: require('./rfi/100/mp3.jpg'),
    rfi_100_mp2: require('./rfi/100/mp2.jpg'),
    rfi_100_mp: require('./rfi/100/mp.jpg'),
    
    // open push
    push_5_bu: require('./push/5/bu.jpg'),
    push_5_co: require('./push/5/co.jpg'),
    push_5_ep: require('./push/5/ep.jpg'),
    push_5_mp3: require('./push/5/mp3.jpg'),
    push_5_mp2: require('./push/5/mp2.jpg'),
    push_5_mp: require('./push/5/mp.jpg'),
    push_5_sb: require('./push/5/sb.jpg'),

    push_7_bu: require('./push/7/bu.jpg'),
    push_7_co: require('./push/7/co.jpg'),
    push_7_ep: require('./push/7/ep.jpg'),
    push_7_mp3: require('./push/7/mp3.jpg'),
    push_7_mp2: require('./push/7/mp2.jpg'),
    push_7_mp: require('./push/7/mp.jpg'),
    push_7_sb: require('./push/7/sb.jpg'),

    push_10_bu: require('./push/10/bu.jpg'),
    push_10_co: require('./push/10/co.jpg'),
    push_10_ep: require('./push/10/ep.jpg'),
    push_10_mp3: require('./push/10/mp3.jpg'),
    push_10_mp2: require('./push/10/mp2.jpg'),
    push_10_mp: require('./push/10/mp.jpg'),
    push_10_sb: require('./push/10/sb.jpg'),

    push_12_bu: require('./push/12/bu.jpg'),
    push_12_co: require('./push/12/co.jpg'),
    push_12_ep: require('./push/12/ep.jpg'),
    push_12_mp3: require('./push/12/mp3.jpg'),
    push_12_mp2: require('./push/12/mp2.jpg'),
    push_12_mp: require('./push/12/mp.jpg'),
    push_12_sb: require('./push/12/sb.jpg'),

    push_14_bu: require('./push/14/bu.jpg'),
    push_14_co: require('./push/14/co.jpg'),
    push_14_ep: require('./push/14/ep.jpg'),
    push_14_mp3: require('./push/14/mp3.jpg'),
    push_14_mp2: require('./push/14/mp2.jpg'),
    push_14_mp: require('./push/14/mp.jpg'),
    push_14_sb: require('./push/14/sb.jpg'),

    push_16_bu: require('./push/16/bu.jpg'),
    push_16_co: require('./push/16/co.jpg'),
    push_16_ep: require('./push/16/ep.jpg'),
    push_16_mp3: require('./push/16/mp3.jpg'),
    push_16_mp2: require('./push/16/mp2.jpg'),
    push_16_mp: require('./push/16/mp.jpg'),
    push_16_sb: require('./push/16/sb.jpg'),

    // blind vs blind
    bvb_20_bb_limp: require('./bvb/bb/20/limp.jpg'),
    bvb_20_bb_raise: require('./bvb/bb/20/raise.jpg'),
    bvb_25_bb_limp: require('./bvb/bb/25/limp.jpg'),
    bvb_25_bb_raise: require('./bvb/bb/25/raise.jpg'),
    bvb_30_bb_limp: require('./bvb/bb/30/limp.jpg'),
    bvb_30_bb_raise: require('./bvb/bb/30/raise.jpg'),
    bvb_50_bb_limp: require('./bvb/bb/50/limp.jpg'),
    bvb_50_bb_raise: require('./bvb/bb/50/raise.jpg'),
    bvb_100_bb_limp: require('./bvb/bb/100/limp.jpg'),
    bvb_100_bb_raise: require('./bvb/bb/100/raise.jpg'),

    bvb_20_sb_iso: require('./bvb/sb/20/iso.jpg'),
    bvb_20_sb_open: require('./bvb/sb/20/open.jpg'),
    bvb_25_sb_iso: require('./bvb/sb/25/iso.jpg'),
    bvb_25_sb_open: require('./bvb/sb/25/open.jpg'),
    bvb_30_sb_iso: require('./bvb/sb/30/iso.jpg'),
    bvb_30_sb_open: require('./bvb/sb/30/open.jpg'),
    bvb_30_sb_vs3bet: require('./bvb/sb/30/vs3bet.jpg'),
    bvb_50_sb_iso: require('./bvb/sb/50/iso.jpg'),
    bvb_50_sb_open: require('./bvb/sb/50/open.jpg'),
    bvb_50_sb_vs3bet: require('./bvb/sb/50/vs3bet.jpg'),
    bvb_100_sb_iso: require('./bvb/sb/100/iso.jpg'),
    bvb_100_sb_open: require('./bvb/sb/100/open.jpg'),
    bvb_100_sb_vs3bet: require('./bvb/sb/100/vs3bet.jpg'),

    // bb def
    bb_15_bu: require('./bb/15/bu.jpg'),
    bb_15_co: require('./bb/15/co.jpg'),
    bb_15_ep: require('./bb/15/ep.jpg'),
    bb_15_mp3: require('./bb/15/mp3.jpg'),
    bb_15_mp2: require('./bb/15/mp2.jpg'),
    bb_15_mp: require('./bb/15/mp.jpg'),

    bb_20_bu: require('./bb/20/bu.jpg'),
    bb_20_co: require('./bb/20/co.jpg'),
    bb_20_ep: require('./bb/20/ep.jpg'),
    bb_20_mp3: require('./bb/20/mp3.jpg'),
    bb_20_mp2: require('./bb/20/mp2.jpg'),
    bb_20_mp: require('./bb/20/mp.jpg'),

    bb_25_bu: require('./bb/25/bu.jpg'),
    bb_25_co: require('./bb/25/co.jpg'),
    bb_25_ep: require('./bb/25/ep.jpg'),
    bb_25_mp3: require('./bb/25/mp3.jpg'),
    bb_25_mp2: require('./bb/25/mp2.jpg'),
    bb_25_mp: require('./bb/25/mp.jpg'),

    bb_30_bu: require('./bb/30/bu.jpg'),
    bb_30_co: require('./bb/30/co.jpg'),
    bb_30_ep: require('./bb/30/ep.jpg'),
    bb_30_mp3: require('./bb/30/mp3.jpg'),
    bb_30_mp2: require('./bb/30/mp2.jpg'),
    bb_30_mp: require('./bb/30/mp.jpg'),

    bb_50_bu: require('./bb/50/bu.jpg'),
    bb_50_co: require('./bb/50/co.jpg'),
    bb_50_ep: require('./bb/50/ep.jpg'),
    bb_50_mp3: require('./bb/50/mp3.jpg'),
    bb_50_mp2: require('./bb/50/mp2.jpg'),
    bb_50_mp: require('./bb/50/mp.jpg'),

    bb_100_bu: require('./bb/100/bu.jpg'),
    bb_100_co: require('./bb/100/co.jpg'),
    bb_100_ep: require('./bb/100/ep.jpg'),
    bb_100_mp3: require('./bb/100/mp3.jpg'),
    bb_100_mp2: require('./bb/100/mp2.jpg'),
    bb_100_mp: require('./bb/100/mp.jpg'),

    // squeeze
    // 30bb
    sqz_30_bu_mp3_co: require('./sqz/30/bu/mp3_co.jpg'),
    sqz_30_bu_mp_co: require('./sqz/30/bu/mp_co.jpg'),
    sqz_30_bu_mp_mp3: require('./sqz/30/bu/mp_mp3.jpg'),
    sqz_30_co_mp_mp3: require('./sqz/30/co/mp_mp3.jpg'),
    sqz_30_sb_mp_mp3: require('./sqz/30/sb/mp_mp3.jpg'),
    sqz_30_sb_mp_co: require('./sqz/30/sb/mp_co.jpg'),
    sqz_30_sb_mp_bu: require('./sqz/30/sb/mp_bu.jpg'),
    sqz_30_sb_mp3_co: require('./sqz/30/sb/mp3_co.jpg'),
    sqz_30_sb_mp3_bu: require('./sqz/30/sb/mp3_bu.jpg'),
    sqz_30_sb_co_bu: require('./sqz/30/sb/co_bu.jpg'),
    sqz_30_bb_mp_mp3: require('./sqz/30/bb/mp_mp3.jpg'),
    sqz_30_bb_mp_co: require('./sqz/30/bb/mp_co.jpg'),
    sqz_30_bb_mp_bu: require('./sqz/30/bb/mp_bu.jpg'),
    sqz_30_bb_mp_sb: require('./sqz/30/bb/mp_sb.jpg'),
    sqz_30_bb_mp3_co: require('./sqz/30/bb/mp3_co.jpg'),
    sqz_30_bb_mp3_bu: require('./sqz/30/bb/mp3_bu.jpg'),
    sqz_30_bb_mp3_sb: require('./sqz/30/bb/mp3_sb.jpg'),
    sqz_30_bb_co_bu: require('./sqz/30/bb/co_bu.jpg'),
    sqz_30_bb_co_sb: require('./sqz/30/bb/co_sb.jpg'),
    sqz_30_bb_bu_sb: require('./sqz/30/bb/bu_sb.jpg'),
    // 50bb
    sqz_50_bu_mp3_co: require('./sqz/50/bu/mp3_co.jpg'),
    sqz_50_bu_mp_co: require('./sqz/50/bu/mp_co.jpg'),
    sqz_50_bu_mp_mp3: require('./sqz/50/bu/mp_mp3.jpg'),
    sqz_50_co_mp_mp3: require('./sqz/50/co/mp_mp3.jpg'),
    sqz_50_sb_mp_mp3: require('./sqz/50/sb/mp_mp3.jpg'),
    sqz_50_sb_mp_co: require('./sqz/50/sb/mp_co.jpg'),
    sqz_50_sb_mp_bu: require('./sqz/50/sb/mp_bu.jpg'),
    sqz_50_sb_mp3_co: require('./sqz/50/sb/mp3_co.jpg'),
    sqz_50_sb_mp3_bu: require('./sqz/50/sb/mp3_bu.jpg'),
    sqz_50_sb_co_bu: require('./sqz/50/sb/co_bu.jpg'),
    sqz_50_bb_mp_mp3: require('./sqz/50/bb/mp_mp3.jpg'),
    sqz_50_bb_mp_co: require('./sqz/50/bb/mp_co.jpg'),
    sqz_50_bb_mp_bu: require('./sqz/50/bb/mp_bu.jpg'),
    sqz_50_bb_mp_sb: require('./sqz/50/bb/mp_sb.jpg'),
    sqz_50_bb_mp3_co: require('./sqz/50/bb/mp3_co.jpg'),
    sqz_50_bb_mp3_bu: require('./sqz/50/bb/mp3_bu.jpg'),
    sqz_50_bb_mp3_sb: require('./sqz/50/bb/mp3_sb.jpg'),
    sqz_50_bb_co_bu: require('./sqz/50/bb/co_bu.jpg'),
    sqz_50_bb_co_sb: require('./sqz/50/bb/co_sb.jpg'),
    sqz_50_bb_bu_sb: require('./sqz/50/bb/bu_sb.jpg'),

    sqz_100_bu_mp3_co: require('./sqz/100/bu/mp3_co.jpg'),
    sqz_100_bu_mp_co: require('./sqz/100/bu/mp_co.jpg'),
    sqz_100_bu_mp_mp3: require('./sqz/100/bu/mp_mp3.jpg'),
    sqz_100_co_mp_mp3: require('./sqz/100/co/mp_mp3.jpg'),
    sqz_100_sb_mp_mp3: require('./sqz/100/sb/mp_mp3.jpg'),
    sqz_100_sb_mp_co: require('./sqz/100/sb/mp_co.jpg'),
    sqz_100_sb_mp_bu: require('./sqz/100/sb/mp_bu.jpg'),
    sqz_100_sb_mp3_co: require('./sqz/100/sb/mp3_co.jpg'),
    sqz_100_sb_mp3_bu: require('./sqz/100/sb/mp3_bu.jpg'),
    sqz_100_sb_co_bu: require('./sqz/100/sb/co_bu.jpg'),
    sqz_100_bb_mp_mp3: require('./sqz/100/bb/mp_mp3.jpg'),
    sqz_100_bb_mp_co: require('./sqz/100/bb/mp_co.jpg'),
    sqz_100_bb_mp_bu: require('./sqz/100/bb/mp_bu.jpg'),
    sqz_100_bb_mp_sb: require('./sqz/100/bb/mp_sb.jpg'),
    sqz_100_bb_mp3_co: require('./sqz/100/bb/mp3_co.jpg'),
    sqz_100_bb_mp3_bu: require('./sqz/100/bb/mp3_bu.jpg'),
    sqz_100_bb_mp3_sb: require('./sqz/100/bb/mp3_sb.jpg'),
    sqz_100_bb_co_bu: require('./sqz/100/bb/co_bu.jpg'),
    sqz_100_bb_co_sb: require('./sqz/100/bb/co_sb.jpg'),
    sqz_100_bb_bu_sb: require('./sqz/100/bb/bu_sb.jpg'),

    // vs 3Bet
    // 30bb
    vs3bet_30_bu_bb: require('./vs3bet/30/bu/bb.jpg'),
    vs3bet_30_bu_sb: require('./vs3bet/30/bu/sb.jpg'),
    vs3bet_30_co_bu: require('./vs3bet/30/co/bu.jpg'),
    vs3bet_30_co_bb: require('./vs3bet/30/co/bb.jpg'),
    vs3bet_30_co_sb: require('./vs3bet/30/co/sb.jpg'),
    vs3bet_30_mp3_co: require('./vs3bet/30/mp3/co.jpg'),
    vs3bet_30_mp3_bu: require('./vs3bet/30/mp3/bu.jpg'),
    vs3bet_30_mp3_bb: require('./vs3bet/30/mp3/bb.jpg'),
    vs3bet_30_mp3_sb: require('./vs3bet/30/mp3/sb.jpg'),
    vs3bet_30_mp_mp3: require('./vs3bet/30/mp/mp3.jpg'),
    vs3bet_30_mp_co: require('./vs3bet/30/mp/co.jpg'),
    vs3bet_30_mp_bu: require('./vs3bet/30/mp/bu.jpg'),
    vs3bet_30_mp_bb: require('./vs3bet/30/mp/bb.jpg'),
    vs3bet_30_mp_sb: require('./vs3bet/30/mp/sb.jpg'),
    // 50bb
    vs3bet_50_bu_bb: require('./vs3bet/50/bu/bb.jpg'),
    vs3bet_50_bu_sb: require('./vs3bet/50/bu/sb.jpg'),
    vs3bet_50_co_bu: require('./vs3bet/50/co/bu.jpg'),
    vs3bet_50_co_bb: require('./vs3bet/50/co/bb.jpg'),
    vs3bet_50_co_sb: require('./vs3bet/50/co/sb.jpg'),
    vs3bet_50_mp3_co: require('./vs3bet/50/mp3/co.jpg'),
    vs3bet_50_mp3_bu: require('./vs3bet/50/mp3/bu.jpg'),
    vs3bet_50_mp3_bb: require('./vs3bet/50/mp3/bb.jpg'),
    vs3bet_50_mp3_sb: require('./vs3bet/50/mp3/sb.jpg'),
    vs3bet_50_mp_mp3: require('./vs3bet/50/mp/mp3.jpg'),
    vs3bet_50_mp_co: require('./vs3bet/50/mp/co.jpg'),
    vs3bet_50_mp_bu: require('./vs3bet/50/mp/bu.jpg'),
    vs3bet_50_mp_bb: require('./vs3bet/50/mp/bb.jpg'),
    vs3bet_50_mp_sb: require('./vs3bet/50/mp/sb.jpg'),
    // 100bb
    vs3bet_100_bu_bb: require('./vs3bet/100/bu/bb.jpg'),
    vs3bet_100_bu_sb: require('./vs3bet/100/bu/sb.jpg'),
    vs3bet_100_co_bu: require('./vs3bet/100/co/bu.jpg'),
    vs3bet_100_co_bb: require('./vs3bet/100/co/bb.jpg'),
    vs3bet_100_co_sb: require('./vs3bet/100/co/sb.jpg'),
    vs3bet_100_mp3_co: require('./vs3bet/100/mp3/co.jpg'),
    vs3bet_100_mp3_bu: require('./vs3bet/100/mp3/bu.jpg'),
    vs3bet_100_mp3_bb: require('./vs3bet/100/mp3/bb.jpg'),
    vs3bet_100_mp3_sb: require('./vs3bet/100/mp3/sb.jpg'),
    vs3bet_100_mp_mp3: require('./vs3bet/100/mp/mp3.jpg'),
    vs3bet_100_mp_co: require('./vs3bet/100/mp/co.jpg'),
    vs3bet_100_mp_bu: require('./vs3bet/100/mp/bu.jpg'),
    vs3bet_100_mp_bb: require('./vs3bet/100/mp/bb.jpg'),
    vs3bet_100_mp_sb: require('./vs3bet/100/mp/sb.jpg'),

    // vs open
    // 15bb
    vsOpen_15_sb_bu: require('./vsOpen/15/sb/bu.jpg'),
    vsOpen_15_sb_co: require('./vsOpen/15/sb/co.jpg'),
    vsOpen_15_sb_mp3: require('./vsOpen/15/sb/mp3.jpg'),
    vsOpen_15_sb_mp: require('./vsOpen/15/sb/mp.jpg'),
    vsOpen_15_sb_ep: require('./vsOpen/15/sb/ep.jpg'),
    vsOpen_15_bu_co: require('./vsOpen/15/bu/co.jpg'),
    vsOpen_15_bu_mp3: require('./vsOpen/15/bu/mp3.jpg'),
    vsOpen_15_bu_mp: require('./vsOpen/15/bu/mp.jpg'),
    vsOpen_15_bu_ep: require('./vsOpen/15/bu/ep.jpg'),
    vsOpen_15_co_mp3: require('./vsOpen/15/co/mp3.jpg'),
    vsOpen_15_co_mp: require('./vsOpen/15/co/mp.jpg'),
    vsOpen_15_co_ep: require('./vsOpen/15/co/ep.jpg'),
    vsOpen_15_mp3_mp: require('./vsOpen/15/mp3/mp.jpg'),
    vsOpen_15_mp3_ep: require('./vsOpen/15/mp3/ep.jpg'),
    vsOpen_15_mp_mp: require('./vsOpen/15/mp/mp.jpg'),
    vsOpen_15_mp_ep: require('./vsOpen/15/mp/ep.jpg'),
    vsOpen_15_ep1_ep: require('./vsOpen/15/ep1/ep.jpg'),
    // 20bb
    vsOpen_20_sb_bu: require('./vsOpen/20/sb/bu.jpg'),
    vsOpen_20_sb_co: require('./vsOpen/20/sb/co.jpg'),
    vsOpen_20_sb_mp3: require('./vsOpen/20/sb/mp3.jpg'),
    vsOpen_20_sb_mp: require('./vsOpen/20/sb/mp.jpg'),
    vsOpen_20_sb_ep: require('./vsOpen/20/sb/ep.jpg'),
    vsOpen_20_bu_co: require('./vsOpen/20/bu/co.jpg'),
    vsOpen_20_bu_mp3: require('./vsOpen/20/bu/mp3.jpg'),
    vsOpen_20_bu_mp: require('./vsOpen/20/bu/mp.jpg'),
    vsOpen_20_bu_ep: require('./vsOpen/20/bu/ep.jpg'),
    vsOpen_20_co_mp3: require('./vsOpen/20/co/mp3.jpg'),
    vsOpen_20_co_mp: require('./vsOpen/20/co/mp.jpg'),
    vsOpen_20_co_ep: require('./vsOpen/20/co/ep.jpg'),
    vsOpen_20_mp3_mp: require('./vsOpen/20/mp3/mp.jpg'),
    vsOpen_20_mp3_ep: require('./vsOpen/20/mp3/ep.jpg'),
    vsOpen_20_mp_mp: require('./vsOpen/20/mp/mp.jpg'),
    vsOpen_20_mp_ep: require('./vsOpen/20/mp/ep.jpg'),
    vsOpen_20_ep1_ep: require('./vsOpen/20/ep1/ep.jpg'),
    // 25bb
    vsOpen_25_sb_bu: require('./vsOpen/25/sb/bu.jpg'),
    vsOpen_25_sb_co: require('./vsOpen/25/sb/co.jpg'),
    vsOpen_25_sb_mp3: require('./vsOpen/25/sb/mp3.jpg'),
    vsOpen_25_sb_mp: require('./vsOpen/25/sb/mp.jpg'),
    vsOpen_25_sb_ep: require('./vsOpen/25/sb/ep.jpg'),
    vsOpen_25_bu_co: require('./vsOpen/25/bu/co.jpg'),
    vsOpen_25_bu_mp3: require('./vsOpen/25/bu/mp3.jpg'),
    vsOpen_25_bu_mp: require('./vsOpen/25/bu/mp.jpg'),
    vsOpen_25_bu_ep: require('./vsOpen/25/bu/ep.jpg'),
    vsOpen_25_co_mp3: require('./vsOpen/25/co/mp3.jpg'),
    vsOpen_25_co_mp: require('./vsOpen/25/co/mp.jpg'),
    vsOpen_25_co_ep: require('./vsOpen/25/co/ep.jpg'),
    vsOpen_25_mp3_mp: require('./vsOpen/25/mp3/mp.jpg'),
    vsOpen_25_mp3_ep: require('./vsOpen/25/mp3/ep.jpg'),
    vsOpen_25_mp_mp: require('./vsOpen/25/mp/mp.jpg'),
    vsOpen_25_mp_ep: require('./vsOpen/25/mp/ep.jpg'),
    vsOpen_25_ep1_ep: require('./vsOpen/25/ep1/ep.jpg'),
    // 30bb
    vsOpen_30_sb_bu: require('./vsOpen/30/sb/bu.jpg'),
    vsOpen_30_sb_co: require('./vsOpen/30/sb/co.jpg'),
    vsOpen_30_sb_mp3: require('./vsOpen/30/sb/mp3.jpg'),
    vsOpen_30_sb_mp: require('./vsOpen/30/sb/mp.jpg'),
    vsOpen_30_sb_ep: require('./vsOpen/30/sb/ep.jpg'),
    vsOpen_30_bu_co: require('./vsOpen/30/bu/co.jpg'),
    vsOpen_30_bu_mp3: require('./vsOpen/30/bu/mp3.jpg'),
    vsOpen_30_bu_mp: require('./vsOpen/30/bu/mp.jpg'),
    vsOpen_30_bu_ep: require('./vsOpen/30/bu/ep.jpg'),
    vsOpen_30_co_mp3: require('./vsOpen/30/co/mp3.jpg'),
    vsOpen_30_co_mp: require('./vsOpen/30/co/mp.jpg'),
    vsOpen_30_co_ep: require('./vsOpen/30/co/ep.jpg'),
    vsOpen_30_mp3_mp: require('./vsOpen/30/mp3/mp.jpg'),
    vsOpen_30_mp3_ep: require('./vsOpen/30/mp3/ep.jpg'),
    vsOpen_30_mp_mp: require('./vsOpen/30/mp/mp.jpg'),
    vsOpen_30_mp_ep: require('./vsOpen/30/mp/ep.jpg'),
    vsOpen_30_ep1_ep: require('./vsOpen/30/ep1/ep.jpg'),
    // 50bb
    vsOpen_50_sb_bu: require('./vsOpen/50/sb/bu.jpg'),
    vsOpen_50_sb_co: require('./vsOpen/50/sb/co.jpg'),
    vsOpen_50_sb_mp3: require('./vsOpen/50/sb/mp3.jpg'),
    vsOpen_50_sb_mp: require('./vsOpen/50/sb/mp.jpg'),
    vsOpen_50_sb_ep: require('./vsOpen/50/sb/ep.jpg'),
    vsOpen_50_bu_co: require('./vsOpen/50/bu/co.jpg'),
    vsOpen_50_bu_mp3: require('./vsOpen/50/bu/mp3.jpg'),
    vsOpen_50_bu_mp: require('./vsOpen/50/bu/mp.jpg'),
    vsOpen_50_bu_ep: require('./vsOpen/50/bu/ep.jpg'),
    vsOpen_50_co_mp3: require('./vsOpen/50/co/mp3.jpg'),
    vsOpen_50_co_mp: require('./vsOpen/50/co/mp.jpg'),
    vsOpen_50_co_ep: require('./vsOpen/50/co/ep.jpg'),
    vsOpen_50_mp3_mp: require('./vsOpen/50/mp3/mp.jpg'),
    vsOpen_50_mp3_ep: require('./vsOpen/50/mp3/ep.jpg'),
    vsOpen_50_mp_mp: require('./vsOpen/50/mp/mp.jpg'),
    vsOpen_50_mp_ep: require('./vsOpen/50/mp/ep.jpg'),
    vsOpen_50_ep1_ep: require('./vsOpen/50/ep1/ep.jpg'),
    // 100bb
    vsOpen_100_sb_bu: require('./vsOpen/100/sb/bu.jpg'),
    vsOpen_100_sb_co: require('./vsOpen/100/sb/co.jpg'),
    vsOpen_100_sb_mp3: require('./vsOpen/100/sb/mp3.jpg'),
    vsOpen_100_sb_mp: require('./vsOpen/100/sb/mp.jpg'),
    vsOpen_100_sb_ep: require('./vsOpen/100/sb/ep.jpg'),
    vsOpen_100_bu_co: require('./vsOpen/100/bu/co.jpg'),
    vsOpen_100_bu_mp3: require('./vsOpen/100/bu/mp3.jpg'),
    vsOpen_100_bu_mp: require('./vsOpen/100/bu/mp.jpg'),
    vsOpen_100_bu_ep: require('./vsOpen/100/bu/ep.jpg'),
    vsOpen_100_co_mp3: require('./vsOpen/100/co/mp3.jpg'),
    vsOpen_100_co_mp: require('./vsOpen/100/co/mp.jpg'),
    vsOpen_100_co_ep: require('./vsOpen/100/co/ep.jpg'),
    vsOpen_100_mp3_mp: require('./vsOpen/100/mp3/mp.jpg'),
    vsOpen_100_mp3_ep: require('./vsOpen/100/mp3/ep.jpg'),
    vsOpen_100_mp_mp: require('./vsOpen/100/mp/mp.jpg'),
    vsOpen_100_mp_ep: require('./vsOpen/100/mp/ep.jpg'),
    vsOpen_100_ep1_ep: require('./vsOpen/100/ep1/ep.jpg'),
    
};

export default IMAGES;
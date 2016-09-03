var pic_w = 2000;
var pic_h = 1150;
var bg_w, bg_h;
var time = 0;

// t=0 if heat sensor / t=1 if smoke sensor
var coord = {
    f1: [
    {t: 1, x: 6400, y: 19200},
    {t: 0, x: 5100, y: 19200},
    {t: 0, x: 4200, y: 2000},
    {t: 0, x: 4500, y: 6300},
    {t: 0, x: 8800, y: 6300},
    {t: 0, x: 8800, y: 2900},
    {t: 0, x: 4400, y: 10000},
    {t: 0, x: 11000, y: 11000},
    {t: 1, x: 12050, y: 11000},
    {t: 0, x: 20000, y: 11000},
    {t: 0, x: 20000, y: 19000},
    {t: 0, x: 27000, y: 11000},
    {t: 0, x: 27000, y: 19000},
    {t: 1, x: 23500, y: 15500},
    ],

    f2: [
    {t: 0, x: 4700, y: 6300},
    {t: 0, x: 9000, y: 6300},
    {t: 0, x: 4700, y: 16900},
    {t: 0, x: 9000, y: 16900},
    {t: 0, x: 4450, y: 1800},
    {t: 0, x: 9500, y: 2900},
    {t: 0, x: 4700, y: 9900},
    {t: 0, x: 4700, y: 12900},
    {t: 0, x: 4700, y: 21000},
    {t: 0, x: 9200, y: 20000},
    {t: 0, x: 11800, y: 11000},
    {t: 1, x: 13000, y: 11000},
    {t: 0, x: 15500, y: 9000},
    {t: 0, x: 19400, y: 9000},
    {t: 0, x: 19400, y: 14000},
    {t: 0, x: 22500, y: 14000},
    {t: 0, x: 23000, y: 9000},
    ],

    f3: [
    {t: 0, x: 4200, y: 6300},
    {t: 0, x: 8500, y: 6300},
    {t: 0, x: 4200, y: 16900},
    {t: 0, x: 8500, y: 16900},
    {t: 0, x: 4450, y: 1800},
    {t: 0, x: 9000, y: 2900},
    {t: 0, x: 4200, y: 9900},
    {t: 0, x: 4200, y: 12900},
    {t: 0, x: 4200, y: 21000},
    {t: 0, x: 8700, y: 20000},
    {t: 0, x: 10500, y: 11000},
    {t: 1, x: 11500, y: 11000},
    {t: 0, x: 14000, y: 9000},
    {t: 0, x: 17500, y: 9000},
    {t: 0, x: 17500, y: 14000},
    {t: 0, x: 20500, y: 14000},
    {t: 0, x: 21000, y: 9000},
    ]
};

var frame = {
    f1: [
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,    2,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,   12,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,   22,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,   32,    0,    0,    0,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,   42,    6,    0,    0,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,   52,   16,    0,   13,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,   62,   26,    0,   28,    0,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,   72,   36,    5,   43,    8,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,   82,   46,   24,   58,   18,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,   92,   56,   44,   73,   28,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,  102,   66,   64,   88,   38,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,  112,   76,   84,  103,   48,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,  122,   86,  104,  118,   58,    0,    0,    0,    0,    0,    0, 0],
[   0,    0,  132,   96,  124,  133,   68,    3,    0,    0,    0,    0,    0, 0],
[   0,    0,  142,  106,  144,  148,   78,    8,    6,    0,    0,    0,    0, 0],
[   1,   11,  152,  116,  164,  163,   88,   13,   16,    0,    0,    0,    0, 0],
[  12,   26,  162,  126,  184,  178,   98,   18,   26,    0,    0,    0,    0, 0],
[  27,   41,  172,  136,  204,  193,  108,   23,   36,    0,    0,    0,    0, 0],
[  42,   56,  182,  146,  224,  208,  118,   28,   46,    0,    0,    0,    0, 0],
[  57,   71,  192,  156,  244,  223,  128,   33,   56,    0,    0,    0,    0, 0],
[  72,   86,  202,  166,  264,  238,  138,   38,   66,    2,    0,    0,    0, 0],
[  87,  101,  212,  176,  284,  253,  148,   43,   76,    7,    0,    0,    0, 0],
[ 102,  116,  222,  186,  304,  268,  158,   48,   86,   12,    0,    0,    0, 0],
[ 117,  131,  232,  196,  324,  283,  168,   53,   96,   17,    0,    0,    0, 0],
[ 132,  146,  242,  206,  344,  298,  178,   58,  106,   22,    0,    0,    0, 0],
[ 147,  161,  252,  216,  364,  313,  188,   63,  116,   27,    0,    0,    0, 0],
[ 162,  176,  262,  226,  384,  328,  198,   68,  126,   32,    0,    4,    0, 0],
[ 177,  191,  272,  236,  404,  343,  208,   73,  136,   37,    5,    9,    0, 0],
[ 192,  206,  282,  246,  424,  358,  218,   78,  146,   42,   10,   14,    0, 0],
[ 207,  221,  292,  256,  444,  373,  228,   83,  156,   47,   15,   19,    0, 0],
[ 222,  236,  302,  266,  464,  388,  238,   88,  166,   52,   20,   24,    0, 0],
[ 237,  251,  312,  276,  484,  403,  248,   93,  176,   57,   25,   29,    0, 0],
[ 252,  266,  322,  286,  504,  418,  258,   98,  186,   62,   30,   34,    2, 0],
[ 267,  281,  332,  296,  524,  433,  268,  103,  196,   67,   35,   39,    7, 0],
[ 282,  296,  342,  306,  544,  448,  278,  108,  206,   72,   40,   44,   12, 0],
[ 297,  311,  352,  316,  564,  463,  288,  113,  216,   77,   45,   49,   17, 0],
[ 312,  326,  362,  326,  584,  478,  298,  118,  226,   82,   50,   54,   22, 0],
[ 327,  341,  372,  336,  604,  493,  308,  123,  236,   87,   55,   59,   27, 0],
[ 342,  356,  382,  346,  624,  508,  318,  128,  246,   92,   60,   64,   32, 0],
[ 357,  371,  392,  356,  644,  523,  328,  133,  256,   97,   65,   69,   37, 0],
[ 372,  386,  402,  366,  664,  538,  338,  138,  266,  102,   70,   74,   42, 0],
[ 387,  401,  412,  376,  684,  553,  348,  143,  276,  107,   75,   79,   47, 0],
[ 402,  416,  422,  386,  704,  568,  358,  148,  286,  112,   80,   84,   52, 0],
[ 417,  431,  432,  396,  724,  583,  368,  153,  296,  117,   85,   89,   57, 0],
[ 432,  446,  442,  406,  744,  598,  378,  158,  306,  122,   90,   94,   62, 0],
[ 447,  461,  452,  416,  764,  613,  388,  163,  316,  127,   95,   99,   67, 0],
[ 462,  476,  462,  426,  784,  628,  398,  168,  326,  132,  100,  104,   72, 0],
[ 477,  491,  472,  436,  804,  643,  408,  173,  336,  137,  105,  109,   77, 0],
[ 492,  506,  482,  446,  824,  658,  418,  178,  346,  142,  110,  114,   82, 0],
[ 507,  521,  492,  456,  844,  673,  428,  183,  356,  147,  115,  119,   87, 0],
[ 522,  536,  502,  466,  864,  688,  438,  188,  366,  152,  120,  124,   92, 0],
[ 537,  551,  512,  476,  884,  703,  448,  193,  376,  157,  125,  129,   97, 0],
[ 552,  566,  522,  486,  904,  718,  458,  198,  386,  162,  130,  134,  102, 0],
[ 567,  581,  532,  496,  924,  733,  468,  203,  396,  167,  135,  139,  107, 0],
[ 582,  596,  542,  506,  944,  748,  478,  208,  406,  172,  140,  144,  112, 0],
[ 597,  611,  552,  516,  964,  763,  488,  213,  416,  177,  145,  149,  117, 0],
[ 612,  626,  562,  526,  984,  778,  498,  218,  426,  182,  150,  154,  122, 0],
[ 627,  641,  572,  536, 1004,  793,  508,  223,  436,  187,  155,  159,  127, 0],
[ 642,  656,  582,  546, 1024,  808,  518,  228,  446,  192,  160,  164,  132, 0],
[ 657,  671,  592,  556, 1044,  823,  528,  233,  456,  197,  165,  169,  137, 0],
[ 672,  686,  602,  566, 1064,  838,  538,  238,  466,  202,  170,  174,  142, 0],
[ 687,  701,  612,  576, 1084,  853,  548,  243,  476,  207,  175,  179,  147, 0],
[ 702,  716,  622,  586, 1104,  868,  558,  248,  486,  212,  180,  184,  152, 0],
[ 717,  731,  632,  596, 1124,  883,  568,  253,  496,  217,  185,  189,  157, 0],
[ 732,  746,  642,  606, 1144,  898,  578,  258,  506,  222,  190,  194,  162, 0],
[ 747,  761,  652,  616, 1164,  913,  588,  263,  516,  227,  195,  199,  167, 0],
[ 762,  776,  662,  626, 1184,  928,  598,  268,  526,  232,  200,  204,  172, 0],
[ 777,  791,  672,  636, 1204,  943,  608,  273,  536,  237,  205,  209,  177, 0],
[ 792,  806,  682,  646, 1224,  958,  618,  278,  546,  242,  210,  214,  182, 0],
[ 807,  821,  692,  656, 1244,  973,  628,  283,  556,  247,  215,  219,  187, 0],
[ 822,  836,  702,  666, 1264,  988,  638,  288,  566,  252,  220,  224,  192, 0],
[ 837,  851,  712,  676, 1284, 1003,  648,  293,  576,  257,  225,  229,  197, 0],
[ 852,  866,  722,  686, 1304, 1018,  658,  298,  586,  262,  230,  234,  202, 0],
[ 867,  881,  732,  696, 1324, 1033,  668,  303,  596,  267,  235,  239,  207, 0],
[ 882,  896,  742,  706, 1344, 1048,  678,  308,  606,  272,  240,  244,  212, 0],
[ 897,  911,  752,  716, 1364, 1063,  688,  313,  616,  277,  245,  249,  217, 0],
[ 912,  926,  762,  726, 1384, 1078,  698,  318,  626,  282,  250,  254,  222, 0],
[ 927,  941,  772,  736, 1404, 1093,  708,  323,  636,  287,  255,  259,  227, 0],
[ 942,  956,  782,  746, 1424, 1108,  718,  328,  646,  292,  260,  264,  232, 0],
[ 957,  971,  792,  756, 1444, 1123,  728,  333,  656,  297,  265,  269,  237, 0],
[ 972,  986,  802,  766, 1464, 1138,  738,  338,  666,  302,  270,  274,  242, 0],
[ 987, 1001,  812,  776, 1484, 1153,  748,  343,  676,  307,  275,  279,  247, 0],
[1002, 1016,  822,  786, 1504, 1168,  758,  348,  686,  312,  280,  284,  252, 0],
[1017, 1031,  832,  796, 1524, 1183,  768,  353,  696,  317,  285,  289,  257, 0],
[1032, 1046,  842,  806, 1544, 1198,  778,  358,  706,  322,  290,  294,  262, 0],
[1047, 1061,  852,  816, 1564, 1213,  788,  363,  716,  327,  295,  299,  267, 0],
[1062, 1076,  862,  826, 1584, 1228,  798,  368,  726,  332,  300,  304,  272, 0],
[1077, 1091,  872,  836, 1604, 1243,  808,  373,  736,  337,  305,  309,  277, 0],
[1092, 1106,  882,  846, 1624, 1258,  818,  378,  746,  342,  310,  314,  282, 0],
[1107, 1121,  892,  856, 1644, 1273,  828,  383,  756,  347,  315,  319,  287, 0],
[1122, 1136,  902,  866, 1664, 1288,  838,  388,  766,  352,  320,  324,  292, 0],
[1137, 1151,  912,  876, 1684, 1303,  848,  393,  776,  357,  325,  329,  297, 0],
[1152, 1166,  922,  886, 1704, 1318,  858,  398,  786,  362,  330,  334,  302, 0],
[1167, 1181,  932,  896, 1724, 1333,  868,  403,  796,  367,  335,  339,  307, 0],
[1182, 1196,  942,  906, 1744, 1348,  878,  408,  806,  372,  340,  344,  312, 0],
[1197, 1211,  952,  916, 1764, 1363,  888,  413,  816,  377,  345,  349,  317, 0],
[1212, 1226,  962,  926, 1784, 1378,  898,  418,  826,  382,  350,  354,  322, 0],
[1227, 1241,  972,  936, 1804, 1393,  908,  423,  836,  387,  355,  359,  327, 0],
[1242, 1256,  982,  946, 1824, 1408,  918,  428,  846,  392,  360,  364,  332, 0],
[1257, 1271,  992,  956, 1844, 1423,  928,  433,  856,  397,  365,  369,  337, 0],
[1272, 1286, 1002,  966, 1864, 1438,  938,  438,  866,  402,  370,  374,  342, 0],
[1287, 1301, 1012,  976, 1884, 1453,  948,  443,  876,  407,  375,  379,  347, 0],
[1302, 1316, 1022,  986, 1904, 1468,  958,  448,  886,  412,  380,  384,  352, 0],
[1317, 1331, 1032,  996, 1924, 1483,  968,  453,  896,  417,  385,  389,  357, 0],
[1332, 1346, 1042, 1006, 1944, 1498,  978,  458,  906,  422,  390,  394,  362, 0],
[1347, 1361, 1052, 1016, 1964, 1513,  988,  463,  916,  427,  395,  399,  367, 0],
[1362, 1376, 1062, 1026, 1984, 1528,  998,  468,  926,  432,  400,  404,  372, 0],
[1377, 1391, 1072, 1036, 2004, 1543, 1008,  473,  936,  437,  405,  409,  377, 0],
[1392, 1406, 1082, 1046, 2024, 1558, 1018,  478,  946,  442,  410,  414,  382, 0],
[1407, 1421, 1092, 1056, 2044, 1573, 1028,  483,  956,  447,  415,  419,  387, 0],
[1422, 1436, 1102, 1066, 2064, 1588, 1038,  488,  966,  452,  420,  424,  392, 0],
    ],
    f2: [
    ],
};

function draw_floor(name, time)
{
    var p = $(".floor." + name);
    var c = coord[name];
    for (var i=0; i<c.length; i++)
    {
        var r = c[i];
        if (name == 'f1') {
            var px = (354 + 0.042 * r.x) * bg_w / 2000;
            var py = (1064 - 0.04 * r.y) * bg_h / 1150;
        }
        else if (name == 'f2') {
            var px = (401.64 + 0.039 * r.x) * bg_w / 2000;
            var py = (1026.786 - 0.04 * r.y) * bg_h / 1150;
        }
        else if (name == 'f3') {
            var px = (473 + 0.043 * r.x) * bg_w / 2000;
            var py = (1032 - 0.0396 * r.y) * bg_h / 1150;
        }
        if (frame[name][time][i] == 0) continue;
        if (time > 1 && frame[name][time-1][i] == 0) {
            console.log("new");
            $('.doubleBeep').trigger('play');
        }
        if (r.t)
            var e = $('<img src="yellow.gif"/>');
        else
            var e = $('<img src="red.gif"/>');
        var pr = 200 * bg_w / pic_w;
        e.css('top', py + 'px');
        e.css('left', px + 'px');
        e.css('width', pr + 'px');
        e.css('opacity', Math.min(1, frame[name][time][i] / 1000.0 + 0.3));
        e.addClass("sensor");
        p.append(e);
    }
}

function draw_frame(time)
{
    $(".sensor").remove();
    draw_floor('f1', time);
//    draw_floor('f2', frame.f2[time]);
//    draw_floor('f3', frame.f2[time]);
}

function scale()
{
    var scr_w = $(window).width();
    var scr_h = $(window).height();
    scr_w = $(".container").width();
    scr_h = $(".container").height();
    var e = $(".floor");

    var w, h;
    if (scr_h * pic_w < scr_w * pic_h) {
        bg_h = scr_h;
        bg_w = scr_h * pic_w / pic_h;
        e.css('left', ((scr_w - bg_w) / 2) + 'px');
        e.css('top', 0);
    }
    else {
        bg_w = scr_w;
        bg_h = scr_w * pic_h / pic_w;
        e.css('top', ((scr_h - bg_h) / 2) + 'px');
        e.css('left', 0);
    }
    e.css('width', bg_w + 'px');
    e.css('height', bg_h + 'px');
}

function resize_all()
{
    scale();
    draw_frame(time);
}

function show_floor()
{
    if (location.hash === "")
        $('#floor').text('3F');
    else
        $('#floor').text(location.hash.slice(1) + 'F');
}

function play()
{
    draw_frame(time);
    time++;
    var d = new Date();
    $('#time').text(d.getHours() + ':' + d.getMinutes() + ':' +  d.getSeconds());
    $(".beep").trigger('play');
    setTimeout(play, 1000);
}

$(window).resize(resize_all);
$(window).on('hashchange', show_floor);
$(window).ready(function() {
    resize_all();
    show_floor();
    $('#fullpage').fullpage({
        scrollingSpeed: 400,
        anchors: ['3','2','1'],
        slidesNavigation: true,
        navigation: true,
    });
    play();
});

$(document).keydown(function(e) {
    if (e.keyCode == 37) {
        time -= 1;
    }
    else if (e.keyCode == 39) {
        time += 1;
    }
    else return;
    draw_frame(time);
    console.log(time);
});

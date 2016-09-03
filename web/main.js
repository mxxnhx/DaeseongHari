var pic_w = 2000;
var pic_h = 1150;
var bg_w, bg_h;
var time = 0;
var beep_count = 0;
var mute = false;

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
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,1,0,0,0,0,0,0,0,0,0,0,0],
[0,0,2,0,0,0,0,0,0,0,0,0,0,0],
[0,0,4,0,0,0,0,0,0,0,0,0,0,0],
[0,0,6,0,0,0,0,0,0,0,0,0,0,0],
[0,0,8,0,0,0,0,0,0,0,0,0,0,0],
[0,0,10,0,0,0,0,0,0,0,0,0,0,0],
[0,0,12,0,0,0,0,0,0,0,0,0,0,0],
[0,0,14,0,0,0,0,0,0,0,0,0,0,0],
[0,0,16,0,0,0,0,0,0,0,0,0,0,0],
[0,0,18,0,0,0,0,0,0,0,0,0,0,0],
[0,0,20,0,0,0,0,0,0,0,0,0,0,0],
[0,0,22,0,0,0,0,0,0,0,0,0,0,0],
[0,0,24,0,0,0,0,0,0,0,0,0,0,0],
[0,0,26,0,0,0,0,0,0,0,0,0,0,0],
[0,0,28,0,0,0,0,0,0,0,0,0,0,0],
[0,0,30,0,0,0,0,0,0,0,0,0,0,0],
[0,0,32,0,0,0,0,0,0,0,0,0,0,0],
[0,0,34,0,0,0,0,0,0,0,0,0,0,0],
[0,0,36,1,0,0,0,0,0,0,0,0,0,0],
[0,0,38,2,0,0,0,0,0,0,0,0,0,0],
[0,0,40,4,0,0,0,0,0,0,0,0,0,0],
[0,0,42,6,0,0,0,0,0,0,0,0,0,0],
[0,0,44,8,0,2,0,0,1,0,0,0,0,0],
[0,0,46,10,0,4,0,0,3,0,0,0,0,0],
[0,0,48,12,0,7,0,0,5,0,0,0,0,0],
[0,0,50,14,0,10,0,0,7,0,0,0,0,0],
[1,0,52,16,0,13,0,0,9,0,0,0,0,0],
[3,0,54,18,0,16,0,0,11,0,0,0,0,0],
[6,0,56,20,0,19,0,0,13,0,0,0,0,0],
[9,0,58,22,0,22,0,0,15,0,0,0,0,0],
[12,0,60,24,0,25,0,0,17,0,0,0,0,0],
[15,0,62,26,0,28,0,0,19,0,0,0,0,0],
[18,0,64,28,0,31,1,0,21,0,0,0,0,0],
[21,0,66,30,0,34,2,0,23,0,0,0,0,0],
[24,0,68,32,1,37,4,0,25,0,0,0,0,0],
[27,0,70,34,2,40,6,0,27,0,0,0,0,0],
[30,0,72,36,5,43,8,0,29,0,0,0,0,0],
[33,0,74,38,8,46,10,0,31,0,0,0,0,0],
[36,0,76,40,12,49,12,0,33,0,0,0,0,0],
[39,0,78,42,16,52,14,0,35,0,0,0,0,0],
[42,0,80,44,20,55,16,0,37,0,0,0,0,0],
[45,0,82,46,24,58,18,0,39,0,0,0,0,0],
[48,0,84,48,28,61,20,0,41,0,0,0,0,0],
[51,0,86,50,32,64,22,0,43,0,0,0,0,0],
[54,0,88,52,36,67,24,0,45,0,0,0,0,0],
[57,0,90,54,40,70,26,0,47,0,0,0,0,0],
[60,0,92,56,44,73,28,0,49,0,0,0,0,0],
[63,0,94,58,48,76,30,0,51,0,0,0,0,0],
[66,0,96,60,52,79,32,0,53,0,0,0,0,0],
[69,0,98,62,56,82,34,0,55,0,0,0,0,0],
[72,0,100,64,60,85,36,0,57,0,0,0,0,0],
[75,0,102,66,64,88,38,0,59,0,0,0,0,0],
[78,0,104,68,68,91,40,0,61,0,0,0,0,0],
[81,0,106,70,72,94,42,0,63,0,0,0,0,0],
[84,0,108,72,76,97,44,0,65,0,0,0,0,1],
[87,0,110,74,80,100,46,0,67,0,0,0,0,2],
[90,0,112,76,84,103,48,0,69,0,0,0,0,3],
[93,0,114,78,88,106,50,0,71,0,0,0,0,4],
[96,0,116,80,92,109,52,0,73,0,0,0,0,5],
[99,0,118,82,96,112,54,0,75,0,0,0,0,6],
[102,0,120,84,100,115,56,0,77,0,0,0,0,7],
[105,0,122,86,104,118,58,0,79,0,0,0,0,8],
[108,0,124,88,108,121,60,0,81,0,0,0,0,9],
[111,0,126,90,112,124,62,0,83,0,0,0,0,10],
[114,0,128,92,116,127,64,1,85,0,0,0,0,11],
[117,0,130,94,120,130,66,2,87,0,0,0,0,12],
[120,0,132,96,124,133,68,3,89,0,0,0,0,13],
[123,0,134,98,128,136,70,4,91,0,0,0,0,14],
[126,0,136,100,132,139,72,5,93,0,0,0,0,15],
[129,0,138,102,136,142,74,6,95,0,0,0,0,16],
[132,0,140,104,140,145,76,7,97,0,0,0,0,17],
[135,0,142,106,144,148,78,8,99,0,0,0,0,18],
[138,1,144,108,148,151,80,9,101,0,0,0,0,19],
[141,2,146,110,152,154,82,10,103,0,0,0,0,20],
[144,5,148,112,156,157,84,11,105,0,0,0,0,21],
[147,8,150,114,160,160,86,12,107,0,0,0,0,22],
[150,11,152,116,164,163,88,13,109,0,0,0,0,23],
[153,14,154,118,168,166,90,14,111,0,0,0,0,24],
[156,17,156,120,172,169,92,15,113,0,0,0,0,25],
[159,20,158,122,176,172,94,16,115,0,0,0,0,26],
[162,23,160,124,180,175,96,17,117,0,0,0,0,27],
[165,26,162,126,184,178,98,18,119,0,0,0,0,28],
[168,29,164,128,188,181,100,19,121,0,0,0,0,29],
[171,32,166,130,192,184,102,20,123,0,0,0,0,30],
[174,35,168,132,196,187,104,21,125,0,0,0,0,31],
[177,38,170,134,200,190,106,22,127,0,0,0,0,32],
[180,41,172,136,204,193,108,23,129,0,0,0,0,33],
[183,44,174,138,208,196,110,24,131,0,0,0,0,34],
[186,47,176,140,212,199,112,25,133,0,0,0,0,35],
[189,50,178,142,216,202,114,26,135,0,0,0,0,36],
[192,53,180,144,220,205,116,27,137,0,0,0,0,37],
[195,56,182,146,224,208,118,28,139,0,0,0,0,38],
[198,59,184,148,228,211,120,29,141,0,0,0,0,39],
[201,62,186,150,232,214,122,30,143,0,0,0,0,40],
[204,65,188,152,236,217,124,31,145,0,0,0,0,41],
[207,68,190,154,240,220,126,32,147,0,0,0,0,42],
[210,71,192,156,244,223,128,33,149,0,0,0,0,43],
[213,74,194,158,248,226,130,34,151,0,0,0,0,44],
[216,77,196,160,252,229,132,35,153,0,0,0,0,45],
[219,80,198,162,256,232,134,36,155,0,0,0,0,46],
[222,83,200,164,260,235,136,37,157,1,0,0,0,47],
[225,86,202,166,264,238,138,38,159,2,0,0,0,48],
[228,89,204,168,268,241,140,39,161,3,0,0,0,49],
[231,92,206,170,272,244,142,40,163,4,0,0,0,50],
[234,95,208,172,276,247,144,41,165,5,0,0,0,51],
[237,98,210,174,280,250,146,42,167,6,0,0,0,52],
[240,101,212,176,284,253,148,43,169,7,0,0,0,53],
[243,104,214,178,288,256,150,44,171,8,0,0,0,54],
[246,107,216,180,292,259,152,45,173,9,0,0,0,55],
[249,110,218,182,296,262,154,46,175,10,0,0,0,56],
[252,113,220,184,300,265,156,47,177,11,0,0,0,57],
[255,116,222,186,304,268,158,48,179,12,0,0,0,58],
[258,119,224,188,308,271,160,49,181,13,0,0,0,59],
[261,122,226,190,312,274,162,50,183,14,0,0,0,60],
[264,125,228,192,316,277,164,51,185,15,0,0,0,61],
[267,128,230,194,320,280,166,52,187,16,0,0,0,62],
[270,131,232,196,324,283,168,53,189,17,0,0,0,63],
[273,134,234,198,328,286,170,54,191,18,0,0,0,64],
[276,137,236,200,332,289,172,55,193,19,0,0,0,65],
[279,140,238,202,336,292,174,56,195,20,0,0,0,66],
[282,143,240,204,340,295,176,57,197,21,0,0,0,67],
[285,146,242,206,344,298,178,58,199,22,0,0,0,68],
[288,149,244,208,348,301,180,59,201,23,0,0,0,69],
[291,152,246,210,352,304,182,60,203,24,0,0,0,70],
[294,155,248,212,356,307,184,61,205,25,0,0,0,71],
[297,158,250,214,360,310,186,62,207,26,0,0,0,72],
[300,161,252,216,364,313,188,63,209,27,0,0,0,73],
[303,164,254,218,368,316,190,64,211,28,0,0,0,74],
[306,167,256,220,372,319,192,65,213,29,0,1,0,75],
[309,170,258,222,376,322,194,66,215,30,0,2,0,76],
[312,173,260,224,380,325,196,67,217,31,0,3,0,77],
[315,176,262,226,384,328,198,68,219,32,0,4,0,78],
[318,179,264,228,388,331,200,69,221,33,1,5,0,79],
[321,182,266,230,392,334,202,70,223,34,2,6,0,80],
[324,185,268,232,396,337,204,71,225,35,3,7,0,81],
[327,188,270,234,400,340,206,72,227,36,4,8,0,82],
[330,191,272,236,404,343,208,73,229,37,5,9,0,83],
[333,194,274,238,408,346,210,74,231,38,6,10,0,84],
[336,197,276,240,412,349,212,75,233,39,7,11,0,85],
[339,200,278,242,416,352,214,76,235,40,8,12,0,86],
[342,203,280,244,420,355,216,77,237,41,9,13,0,87],
[345,206,282,246,424,358,218,78,239,42,10,14,0,88],
[348,209,284,248,428,361,220,79,241,43,11,15,0,89],
[351,212,286,250,432,364,222,80,243,44,12,16,0,90],
[354,215,288,252,436,367,224,81,245,45,13,17,0,91],
[357,218,290,254,440,370,226,82,247,46,14,18,0,92],
[360,221,292,256,444,373,228,83,249,47,15,19,0,93],
[363,224,294,258,448,376,230,84,251,48,16,20,0,94],
[366,227,296,260,452,379,232,85,253,49,17,21,0,95],
[369,230,298,262,456,382,234,86,255,50,18,22,0,96],
[372,233,300,264,460,385,236,87,257,51,19,23,0,97],
[375,236,302,266,464,388,238,88,259,52,20,24,0,98],
[378,239,304,268,468,391,240,89,261,53,21,25,0,99],
[381,242,306,270,472,394,242,90,263,54,22,26,0,100],
[384,245,308,272,476,397,244,91,265,55,23,27,0,101],
[387,248,310,274,480,400,246,92,267,56,24,28,0,102],
[390,251,312,276,484,403,248,93,269,57,25,29,0,103],
[393,254,314,278,488,406,250,94,271,58,26,30,0,104],
[396,257,316,280,492,409,252,95,273,59,27,31,0,105],
[399,260,318,282,496,412,254,96,275,60,28,32,0,106],
[402,263,320,284,500,415,256,97,277,61,29,33,1,107],
[405,266,322,286,504,418,258,98,279,62,30,34,2,108],
[408,269,324,288,508,421,260,99,281,63,31,35,3,109],
[411,272,326,290,512,424,262,100,283,64,32,36,4,110],
[414,275,328,292,516,427,264,101,285,65,33,37,5,111],
[417,278,330,294,520,430,266,102,287,66,34,38,6,112],
[420,281,332,296,524,433,268,103,289,67,35,39,7,113],
[423,284,334,298,528,436,270,104,291,68,36,40,8,114],
[426,287,336,300,532,439,272,105,293,69,37,41,9,115],
[429,290,338,302,536,442,274,106,295,70,38,42,10,116],
[432,293,340,304,540,445,276,107,297,71,39,43,11,117],
[435,296,342,306,544,448,278,108,299,72,40,44,12,118],
[438,299,344,308,548,451,280,109,301,73,41,45,13,119],
[441,302,346,310,552,454,282,110,303,74,42,46,14,120],
[444,305,348,312,556,457,284,111,305,75,43,47,15,121],
[447,308,350,314,560,460,286,112,307,76,44,48,16,122],
[450,311,352,316,564,463,288,113,309,77,45,49,17,123],
[453,314,354,318,568,466,290,114,311,78,46,50,18,124],
[456,317,356,320,572,469,292,115,313,79,47,51,19,125],
[459,320,358,322,576,472,294,116,315,80,48,52,20,126],
[462,323,360,324,580,475,296,117,317,81,49,53,21,127],
[465,326,362,326,584,478,298,118,319,82,50,54,22,128],
[468,329,364,328,588,481,300,119,321,83,51,55,23,129],
[471,332,366,330,592,484,302,120,323,84,52,56,24,130],
[474,335,368,332,596,487,304,121,325,85,53,57,25,131],
[477,338,370,334,600,490,306,122,327,86,54,58,26,132],
[480,341,372,336,604,493,308,123,329,87,55,59,27,133],
[483,344,374,338,608,496,310,124,331,88,56,60,28,134],
[486,347,376,340,612,499,312,125,333,89,57,61,29,135],
[489,350,378,342,616,502,314,126,335,90,58,62,30,136],
[492,353,380,344,620,505,316,127,337,91,59,63,31,137],
[495,356,382,346,624,508,318,128,339,92,60,64,32,138],
[498,359,384,348,628,511,320,129,341,93,61,65,33,139],
[501,362,386,350,632,514,322,130,343,94,62,66,34,140],
[504,365,388,352,636,517,324,131,345,95,63,67,35,141],
[507,368,390,354,640,520,326,132,347,96,64,68,36,142],
[510,371,392,356,644,523,328,133,349,97,65,69,37,143],
[513,374,394,358,648,526,330,134,351,98,66,70,38,144],
[516,377,396,360,652,529,332,135,353,99,67,71,39,145],
[519,380,398,362,656,532,334,136,355,100,68,72,40,146],
[522,383,400,364,660,535,336,137,357,101,69,73,41,147],
[525,386,402,366,664,538,338,138,359,102,70,74,42,148],
[528,389,404,368,668,541,340,139,361,103,71,75,43,149],
[531,392,406,370,672,544,342,140,363,104,72,76,44,150],
[534,395,408,372,676,547,344,141,365,105,73,77,45,151],
[537,398,410,374,680,550,346,142,367,106,74,78,46,152],
[540,401,412,376,684,553,348,143,369,107,75,79,47,153],
[543,404,414,378,688,556,350,144,371,108,76,80,48,154],
[546,407,416,380,692,559,352,145,373,109,77,81,49,155],
[549,410,418,382,696,562,354,146,375,110,78,82,50,156],
[552,413,420,384,700,565,356,147,377,111,79,83,51,157],
[555,416,422,386,704,568,358,148,379,112,80,84,52,158],
[558,419,424,388,708,571,360,149,381,113,81,85,53,159],
[561,422,426,390,712,574,362,150,383,114,82,86,54,160],
[564,425,428,392,716,577,364,151,385,115,83,87,55,161],
[567,428,430,394,720,580,366,152,387,116,84,88,56,162],
    ],
    f2: [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,17,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,26,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,27,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,29,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,31,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,33,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,34,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,37,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,38,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,39,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,41,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,42,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,43,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,45,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,46,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,48,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,2,49,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,4,50,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,6,51,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,8,52,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,10,53,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,12,54,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,14,55,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,16,56,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,18,57,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,20,58,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,22,59,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,24,60,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,26,61,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,28,62,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,30,63,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,32,64,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,34,65,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,36,66,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,38,67,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,40,68,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,42,69,0,0,0,0,0],
[0,0,0,1,0,0,0,0,0,0,44,70,0,0,0,0,0],
[0,0,0,2,0,0,0,0,0,0,46,71,0,0,0,0,0],
[0,0,0,4,0,0,0,0,0,0,48,72,0,0,0,0,0],
[0,0,0,6,0,0,0,0,0,0,50,73,0,0,0,0,0],
[0,0,0,8,0,0,0,0,0,0,52,74,0,0,0,0,0],
[0,0,0,10,0,0,0,0,0,0,54,75,0,0,0,0,0],
[0,0,0,12,0,0,0,0,0,0,56,76,1,0,0,0,0],
[0,0,0,14,0,0,0,0,0,0,58,77,2,0,0,0,0],
[0,0,0,16,0,0,0,0,0,0,60,78,3,0,0,0,0],
[0,0,0,18,0,0,0,0,0,0,62,79,4,0,0,0,0],
[0,0,0,20,0,0,0,1,0,0,64,80,5,0,0,0,0],
[0,0,0,22,0,0,0,3,0,1,66,81,6,0,1,0,0],
[0,0,0,24,0,0,0,5,0,2,68,82,7,0,2,0,0],
[0,0,0,26,0,0,0,8,0,3,70,83,8,0,4,0,0],
[0,0,0,28,0,0,0,11,0,5,72,84,9,0,6,0,0],
[0,1,0,30,0,0,0,14,0,7,74,85,10,0,8,0,0],
[0,2,0,32,0,0,0,17,0,9,76,86,11,0,10,0,0],
[0,3,0,34,0,0,0,20,0,11,78,87,12,0,12,0,0],
[0,5,0,36,0,0,1,23,0,13,80,88,13,0,14,0,0],
[0,7,0,38,0,0,2,26,0,15,82,89,14,0,16,0,0],
[0,9,0,40,0,0,3,29,0,17,84,90,15,1,18,0,0],
[0,11,0,42,0,0,5,32,0,19,86,91,16,2,20,0,0],
[0,13,0,44,0,0,7,35,0,21,88,92,17,4,22,0,0],
[0,15,0,46,0,0,9,38,0,23,90,93,18,6,24,0,0],
[0,17,0,48,0,0,12,41,0,25,92,94,19,8,26,0,0],
[0,19,0,50,0,0,15,44,0,27,94,95,20,10,28,1,0],
[0,21,1,52,0,0,18,47,0,29,96,96,21,12,30,2,0],
[0,23,3,54,0,0,21,50,0,31,98,97,22,14,32,3,0],
[0,25,5,56,0,0,24,53,0,33,100,98,23,16,34,4,0],
[0,27,8,58,0,0,27,56,0,35,102,99,24,18,36,5,0],
[0,29,11,60,0,0,30,59,0,37,104,100,25,20,38,6,0],
[0,31,14,62,0,0,33,62,0,39,106,101,26,22,40,7,0],
[0,33,17,64,0,0,36,65,0,41,108,102,27,24,42,8,0],
[0,35,20,66,0,1,39,68,0,43,110,103,28,26,44,9,0],
[0,37,23,68,0,2,42,71,0,45,112,104,29,28,46,10,0],
[0,39,26,70,0,3,45,74,0,47,114,105,30,30,48,11,0],
[0,41,29,72,0,5,48,77,0,49,116,106,31,32,50,12,1],
[0,43,32,74,0,7,51,80,0,51,118,107,32,34,52,13,2],
[0,45,35,76,0,9,54,83,0,53,120,108,33,36,54,14,3],
[1,47,38,78,0,11,57,86,0,55,122,109,34,38,56,15,4],
[2,49,41,80,0,13,60,89,0,57,124,110,35,40,58,16,5],
[3,51,44,82,0,15,63,92,0,59,126,111,36,42,60,17,6],
[6,53,47,84,0,17,66,95,1,61,128,112,37,44,62,18,7],
[9,55,50,86,0,19,69,98,2,63,130,113,38,46,64,19,8],
[12,57,53,88,0,21,72,101,3,65,132,114,39,48,66,20,9],
[16,59,56,90,0,23,75,104,5,67,134,115,40,50,68,21,10],
[20,61,59,92,0,25,78,107,7,69,136,116,41,52,70,22,11],
[24,63,62,94,0,27,81,110,9,71,138,117,42,54,72,23,12],
[28,65,65,96,0,29,84,113,11,73,140,118,43,56,74,24,13],
[32,67,68,98,0,31,87,116,13,75,142,119,44,58,76,25,14],
[36,69,71,100,0,33,90,119,15,77,144,120,45,60,78,26,15],
[40,71,74,102,0,35,93,122,17,79,146,121,46,62,80,27,16],
[44,73,77,104,0,37,96,125,19,81,148,122,47,64,82,28,17],
[48,75,80,106,0,39,99,128,21,83,150,123,48,66,84,29,18],
[52,77,83,108,0,41,102,131,23,85,152,124,49,68,86,30,19],
[56,79,86,110,0,43,105,134,25,87,154,125,50,70,88,31,20],
[60,81,89,112,0,45,108,137,27,89,156,126,51,72,90,32,21],
[64,83,92,114,0,47,111,140,29,91,158,127,52,74,92,33,22],
[68,85,95,116,0,49,114,143,31,93,160,128,53,76,94,34,23],
[72,87,98,118,0,51,117,146,33,95,162,129,54,78,96,35,24],
[76,89,101,120,0,53,120,149,35,97,164,130,55,80,98,36,25],
[80,91,104,122,0,55,123,152,37,99,166,131,56,82,100,37,26],
[84,93,107,124,0,57,126,155,39,101,168,132,57,84,102,38,27],
[88,95,110,126,0,59,129,158,41,103,170,133,58,86,104,39,28],
[92,97,113,128,0,61,132,161,43,105,172,134,59,88,106,40,29],
[96,99,116,130,0,63,135,164,45,107,174,135,60,90,108,41,30],
[100,101,119,132,0,65,138,167,47,109,176,136,61,92,110,42,31],
[104,103,122,134,0,67,141,170,49,111,178,137,62,94,112,43,32],
[108,105,125,136,0,69,144,173,51,113,180,138,63,96,114,44,33],
[112,107,128,138,1,71,147,176,53,115,182,139,64,98,116,45,34],
[116,109,131,140,2,73,150,179,55,117,184,140,65,100,118,46,35],
[120,111,134,142,3,75,153,182,57,119,186,141,66,102,120,47,36],
[124,113,137,144,6,77,156,185,59,121,188,142,67,104,122,48,37],
[128,115,140,146,9,79,159,188,61,123,190,143,68,106,124,49,38],
[132,117,143,148,12,81,162,191,63,125,192,144,69,108,126,50,39],
[136,119,146,150,15,83,165,194,65,127,194,145,70,110,128,51,40],
[140,121,149,152,18,85,168,197,67,129,196,146,71,112,130,52,41],
[144,123,152,154,21,87,171,200,69,131,198,147,72,114,132,53,42],
[148,125,155,156,24,89,174,203,71,133,200,148,73,116,134,54,43],
[152,127,158,158,27,91,177,206,73,135,202,149,74,118,136,55,44],
[156,129,161,160,30,93,180,209,75,137,204,150,75,120,138,56,45],
[160,131,164,162,33,95,183,212,77,139,206,151,76,122,140,57,46],
[164,133,167,164,36,97,186,215,79,141,208,152,77,124,142,58,47],
[168,135,170,166,39,99,189,218,81,143,210,153,78,126,144,59,48],
[172,137,173,168,42,101,192,221,83,145,212,154,79,128,146,60,49],
[176,139,176,170,45,103,195,224,85,147,214,155,80,130,148,61,50],
[180,141,179,172,48,105,198,227,87,149,216,156,81,132,150,62,51],
[184,143,182,174,51,107,201,230,89,151,218,157,82,134,152,63,52],
[188,145,185,176,54,109,204,233,91,153,220,158,83,136,154,64,53],
[192,147,188,178,57,111,207,236,93,155,222,159,84,138,156,65,54],
[196,149,191,180,60,113,210,239,95,157,224,160,85,140,158,66,55],
[200,151,194,182,63,115,213,242,97,159,226,161,86,142,160,67,56],
[204,153,197,184,66,117,216,245,99,161,228,162,87,144,162,68,57],
[208,155,200,186,69,119,219,248,101,163,230,163,88,146,164,69,58],
[212,157,203,188,72,121,222,251,103,165,232,164,89,148,166,70,59],
[216,159,206,190,75,123,225,254,105,167,234,165,90,150,168,71,60],
[220,161,209,192,78,125,228,257,107,169,236,166,91,152,170,72,61],
[224,163,212,194,81,127,231,260,109,171,238,167,92,154,172,73,62],
[228,165,215,196,84,129,234,263,111,173,240,168,93,156,174,74,63],
[232,167,218,198,87,131,237,266,113,175,242,169,94,158,176,75,64],
[236,169,221,200,90,133,240,269,115,177,244,170,95,160,178,76,65],
[240,171,224,202,93,135,243,272,117,179,246,171,96,162,180,77,66],
[244,173,227,204,96,137,246,275,119,181,248,172,97,164,182,78,67],
[248,175,230,206,99,139,249,278,121,183,250,173,98,166,184,79,68],
[252,177,233,208,102,141,252,281,123,185,252,174,99,168,186,80,69],
[256,179,236,210,105,143,255,284,125,187,254,175,100,170,188,81,70],
[260,181,239,212,108,145,258,287,127,189,256,176,101,172,190,82,71],
[264,183,242,214,111,147,261,290,129,191,258,177,102,174,192,83,72],
[268,185,245,216,114,149,264,293,131,193,260,178,103,176,194,84,73],
[272,187,248,218,117,151,267,296,133,195,262,179,104,178,196,85,74],
[276,189,251,220,120,153,270,299,135,197,264,180,105,180,198,86,75],
[280,191,254,222,123,155,273,302,137,199,266,181,106,182,200,87,76],
[284,193,257,224,126,157,276,305,139,201,268,182,107,184,202,88,77],
[288,195,260,226,129,159,279,308,141,203,270,183,108,186,204,89,78],
[292,197,263,228,132,161,282,311,143,205,272,184,109,188,206,90,79],
[296,199,266,230,135,163,285,314,145,207,274,185,110,190,208,91,80],
[300,201,269,232,138,165,288,317,147,209,276,186,111,192,210,92,81],
    ],
    f3: [
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,4,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,6,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,7,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,8,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,11,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,12,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,13,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,14,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,15,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,17,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,18,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,19,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,20,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,22,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,25,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,26,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,27,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,29,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,31,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,32,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,33,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,34,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,35,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,36,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,37,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,38,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,39,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,40,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,41,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,42,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,43,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,45,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,46,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,47,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,48,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,49,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,50,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,51,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,1,53,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,2,54,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,3,55,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,4,56,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,5,57,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,6,58,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,7,59,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,8,60,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,9,61,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,10,62,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,11,63,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,12,64,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,13,65,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,14,66,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,15,67,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,16,68,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,17,69,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,18,70,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,19,71,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,20,72,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,21,73,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,22,74,1,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,23,75,2,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0,24,76,3,0,0,0,0],
[0,0,0,1,0,0,0,0,0,0,25,77,4,0,0,0,0],
[0,0,0,2,0,0,0,0,0,0,26,78,5,0,0,0,0],
[0,0,0,4,0,0,0,0,0,0,27,79,6,0,1,0,0],
[0,0,0,6,0,0,0,0,0,0,28,80,7,0,2,0,0],
[0,0,0,8,0,0,0,0,0,0,29,81,8,0,3,0,0],
[0,0,0,10,0,0,0,0,0,0,30,82,9,0,4,0,0],
[0,0,0,12,0,0,0,0,0,0,31,83,10,0,5,0,0],
[0,0,0,14,0,0,0,0,0,0,32,84,11,0,6,0,0],
[0,0,0,16,0,0,0,0,0,0,33,85,12,0,7,0,0],
[0,0,0,18,0,0,0,0,0,0,34,86,13,0,8,0,0],
[0,0,0,20,0,0,0,1,0,0,35,87,14,0,9,0,0],
[0,0,0,22,0,0,0,3,0,1,36,88,15,1,10,0,0],
[0,0,0,24,0,0,0,5,0,2,37,89,16,2,11,0,0],
[0,0,0,26,0,0,0,8,0,3,38,90,17,3,12,0,0],
[0,0,0,28,0,0,0,11,0,5,39,91,18,4,13,1,0],
[0,1,0,30,0,0,0,14,0,7,40,92,19,5,14,2,0],
[0,2,0,32,0,0,0,17,0,9,41,93,20,6,15,3,0],
[0,3,0,34,0,0,0,20,0,11,42,94,21,7,16,4,0],
[0,5,0,36,0,0,1,23,0,13,43,95,22,8,17,5,0],
[0,7,0,38,0,0,2,26,0,15,44,96,23,9,18,6,0],
[0,9,0,40,0,0,3,29,0,17,45,97,24,10,19,7,0],
[0,11,0,42,0,0,5,32,0,19,46,98,25,11,20,8,0],
[0,13,0,44,0,0,7,35,0,21,47,99,26,12,21,9,0],
[0,15,0,46,0,0,9,38,0,23,48,100,27,13,22,10,0],
[0,17,0,48,0,0,12,41,0,25,49,101,28,14,23,11,0],
[0,19,0,50,0,0,15,44,0,27,50,102,29,15,24,12,1],
[0,21,1,52,0,0,18,47,0,29,51,103,30,16,25,13,2],
[0,23,3,54,0,0,21,50,0,31,52,104,31,17,26,14,3],
[0,25,5,56,0,0,24,53,0,33,53,105,32,18,27,15,4],
[0,27,8,58,0,0,27,56,0,35,54,106,33,19,28,16,5],
[0,29,11,60,0,0,30,59,0,37,55,107,34,20,29,17,6],
[0,31,14,62,0,0,33,62,0,39,56,108,35,21,30,18,7],
[0,33,17,64,0,0,36,65,0,41,57,109,36,22,31,19,8],
[0,35,20,66,0,1,39,68,0,43,58,110,37,23,32,20,9],
[0,37,23,68,0,2,42,71,0,45,59,111,38,24,33,21,10],
[0,39,26,70,0,3,45,74,0,47,60,112,39,25,34,22,11],
[0,41,29,72,0,5,48,77,0,49,61,113,40,26,35,23,12],
[0,43,32,74,0,7,51,80,0,51,62,114,41,27,36,24,13],
[0,45,35,76,0,9,54,83,0,53,63,115,42,28,37,25,14],
[1,47,38,78,0,11,57,86,0,55,64,116,43,29,38,26,15],
[2,49,41,80,0,13,60,89,0,57,65,117,44,30,39,27,16],
[3,51,44,82,0,15,63,92,0,59,66,118,45,31,40,28,17],
[6,53,47,84,0,17,66,95,1,61,67,119,46,32,41,29,18],
[9,55,50,86,0,19,69,98,2,63,68,120,47,33,42,30,19],
[12,57,53,88,0,21,72,101,3,65,69,121,48,34,43,31,20],
[16,59,56,90,0,23,75,104,5,67,70,122,49,35,44,32,21],
[20,61,59,92,0,25,78,107,7,69,71,123,50,36,45,33,22],
[24,63,62,94,0,27,81,110,9,71,72,124,51,37,46,34,23],
[28,65,65,96,0,29,84,113,11,73,73,125,52,38,47,35,24],
[32,67,68,98,0,31,87,116,13,75,74,126,53,39,48,36,25],
[36,69,71,100,0,33,90,119,15,77,75,127,54,40,49,37,26],
[40,71,74,102,0,35,93,122,17,79,76,128,55,41,50,38,27],
[44,73,77,104,0,37,96,125,19,81,77,129,56,42,51,39,28],
[48,75,80,106,0,39,99,128,21,83,78,130,57,43,52,40,29],
[52,77,83,108,0,41,102,131,23,85,79,131,58,44,53,41,30],
[56,79,86,110,0,43,105,134,25,87,80,132,59,45,54,42,31],
[60,81,89,112,0,45,108,137,27,89,81,133,60,46,55,43,32],
[64,83,92,114,0,47,111,140,29,91,82,134,61,47,56,44,33],
[68,85,95,116,0,49,114,143,31,93,83,135,62,48,57,45,34],
[72,87,98,118,0,51,117,146,33,95,84,136,63,49,58,46,35],
[76,89,101,120,0,53,120,149,35,97,85,137,64,50,59,47,36],
[80,91,104,122,0,55,123,152,37,99,86,138,65,51,60,48,37],
[84,93,107,124,0,57,126,155,39,101,87,139,66,52,61,49,38],
[88,95,110,126,0,59,129,158,41,103,88,140,67,53,62,50,39],
[92,97,113,128,0,61,132,161,43,105,89,141,68,54,63,51,40],
[96,99,116,130,0,63,135,164,45,107,90,142,69,55,64,52,41],
[100,101,119,132,1,65,138,167,47,109,91,143,70,56,65,53,42],
[104,103,122,134,2,67,141,170,49,111,92,144,71,57,66,54,43],
[108,105,125,136,3,69,144,173,51,113,93,145,72,58,67,55,44],
[112,107,128,138,6,71,147,176,53,115,94,146,73,59,68,56,45],
[116,109,131,140,9,73,150,179,55,117,95,147,74,60,69,57,46],
[120,111,134,142,12,75,153,182,57,119,96,148,75,61,70,58,47],
[124,113,137,144,15,77,156,185,59,121,97,149,76,62,71,59,48],
[128,115,140,146,18,79,159,188,61,123,98,150,77,63,72,60,49],
[132,117,143,148,21,81,162,191,63,125,99,151,78,64,73,61,50],
[136,119,146,150,24,83,165,194,65,127,100,152,79,65,74,62,51],
[140,121,149,152,27,85,168,197,67,129,101,153,80,66,75,63,52],
[144,123,152,154,30,87,171,200,69,131,102,154,81,67,76,64,53],
[148,125,155,156,33,89,174,203,71,133,103,155,82,68,77,65,54],
[152,127,158,158,36,91,177,206,73,135,104,156,83,69,78,66,55],
[156,129,161,160,39,93,180,209,75,137,105,157,84,70,79,67,56],
[160,131,164,162,42,95,183,212,77,139,106,158,85,71,80,68,57],
[164,133,167,164,45,97,186,215,79,141,107,159,86,72,81,69,58],
[168,135,170,166,48,99,189,218,81,143,108,160,87,73,82,70,59],
[172,137,173,168,51,101,192,221,83,145,109,161,88,74,83,71,60],
[176,139,176,170,54,103,195,224,85,147,110,162,89,75,84,72,61],
[180,141,179,172,57,105,198,227,87,149,111,163,90,76,85,73,62],
[184,143,182,174,60,107,201,230,89,151,112,164,91,77,86,74,63],
[188,145,185,176,63,109,204,233,91,153,113,165,92,78,87,75,64],
[192,147,188,178,66,111,207,236,93,155,114,166,93,79,88,76,65],
[196,149,191,180,69,113,210,239,95,157,115,167,94,80,89,77,66],
[200,151,194,182,72,115,213,242,97,159,116,168,95,81,90,78,67],
[204,153,197,184,75,117,216,245,99,161,117,169,96,82,91,79,68],
[208,155,200,186,78,119,219,248,101,163,118,170,97,83,92,80,69],
[212,157,203,188,81,121,222,251,103,165,119,171,98,84,93,81,70],
[216,159,206,190,84,123,225,254,105,167,120,172,99,85,94,82,71],
[220,161,209,192,87,125,228,257,107,169,121,173,100,86,95,83,72],
[224,163,212,194,90,127,231,260,109,171,122,174,101,87,96,84,73],
[228,165,215,196,93,129,234,263,111,173,123,175,102,88,97,85,74],
[232,167,218,198,96,131,237,266,113,175,124,176,103,89,98,86,75],
[236,169,221,200,99,133,240,269,115,177,125,177,104,90,99,87,76],
[240,171,224,202,102,135,243,272,117,179,126,178,105,91,100,88,77],
[244,173,227,204,105,137,246,275,119,181,127,179,106,92,101,89,78],
[248,175,230,206,108,139,249,278,121,183,128,180,107,93,102,90,79],
[252,177,233,208,111,141,252,281,123,185,129,181,108,94,103,91,80],
[256,179,236,210,114,143,255,284,125,187,130,182,109,95,104,92,81],
[260,181,239,212,117,145,258,287,127,189,131,183,110,96,105,93,82],
[264,183,242,214,120,147,261,290,129,191,132,184,111,97,106,94,83],
[268,185,245,216,123,149,264,293,131,193,133,185,112,98,107,95,84],
[272,187,248,218,126,151,267,296,133,195,134,186,113,99,108,96,85],
[276,189,251,220,129,153,270,299,135,197,135,187,114,100,109,97,86],
[280,191,254,222,132,155,273,302,137,199,136,188,115,101,110,98,87],
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
        beep_count += 1;
        if (time > 1 && frame[name][time-1][i] == 0) {
            if (!mute)
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
    beep_count = 0;
    draw_floor('f1', time);
    draw_floor('f2', time);
    draw_floor('f3', time);
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
    if (time < frame.f1.length - 1)
        time++;
    setTimeout(play, 700);
}

function beep()
{
    if (beep_count > 0)
        if (!mute)
            $(".beep").trigger('play');
    var dt = 500 / Math.log(beep_count/1.5 + 2) + 500;
    setTimeout(beep, dt);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
function clock()
{
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    $('#time').text(h + ":" + m + ":" + s);
    setTimeout(clock, 500);
}

$(window).resize(resize_all);
$(window).on('hashchange', function() {
    show_floor();
});
$('#mute').click(function() {
    if (!mute) {
        mute = true;
        $('#mute').text('Sound ON');
    } else {
        mute = false;
        $('#mute').text('Sound OFF');
    }
});
$(window).ready(function() {
    resize_all();
    show_floor();
    $('#fullpage').fullpage({
        scrollingSpeed: 400,
        anchors: ['3','2','1'],
        slidesNavigation: true,
        navigation: true,
        navigationPosition: 'left',
    });
    play();
    beep();
    clock();
});

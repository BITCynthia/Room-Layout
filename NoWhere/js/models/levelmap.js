export default class LevelMap {
  constructor() {
    this.color = ['rgba(255,0,0,', 'rgba(137,104,205,', 'rgba(124,205,124,',
      'rgba(255,100,205,', 'rgba(205,255,0,', 'rgba(176,48,96,', 'rgba(100,160,100,', 
      'rgba(160,32,240,', 'rgba(28,134,238,', 'rgba(0,128,128,', 'rgba(168,255,62,',
      'rgba(50,238,238,', 'rgba(152,251,152,','rgba(255,0,255,', 'rgba(255,185,15,',
      'rgba(255,255,0,','rgba(150,0,150,']
    this.num = new Array()
    this.pos = new Array()
    this.target = new Array()
    this.size = new Array()

    //5 blocks
    //case 0:
    this.num[0] = 5
    this.pos[0] = [[9, 17], [16, 31], [17, 20], [30, 19], [0, 23]]
    this.target[0] = [[15, 4], [10, 16], [14, 21], [0, 19], [4, 0]]
    this.size[0] = [[7, 3], [2, 2], [4, 2], [3, 8], [6, 5]]

    //case 1:
    this.num[1] = 5
    this.pos[1] = [[28, 2], [27, 26], [8, 22], [2, 11], [17, 27]]
    this.target[1] = [[17, 0], [2, 22], [27, 27], [11, 26], [4, 3]]
    this.size[1] = [[3, 8], [4, 5], [5, 4], [3, 8], [5, 8]]

    //case 2:
    this.num[2] = 5
    this.pos[2] = [[9, 16], [23, 28], [4, 19], [17, 3], [8, 9]]
    this.target[2] = [[27, 29], [3, 17], [5, 2], [17, 10], [0, 9]]
    this.size[2] = [[2, 2], [3, 3], [3, 4], [2, 9], [2, 4]]

    //case 3:
    this.num[3] = 5
    this.pos[3] = [[30, 15], [6, 19], [19, 17], [18, 29], [1, 25]]
    this.target[3] = [[8, 30], [24, 18], [2, 29], [25, 24], [7, 8]]
    this.size[3] = [[2, 5], [8, 6], [2, 4], [8, 3], [3, 4]]

    //case 4:
    this.num[4] = 5
    this.pos[4] = [[7, 21], [29, 23], [15, 5], [26, 15], [6, 1]]
    this.target[4] = [[11, 0], [25, 28], [19, 20], [13, 13], [23, 14]]
    this.size[4] = [[8, 3], [6, 3], [5, 6], [6, 6], [3, 4]]

    //case 5:
    this.num[5] = 5
    this.pos[5] = [[27, 9], [8, 14], [24, 25], [7, 27], [16, 5]]
    this.target[5] = [[27, 11], [7, 6], [20, 2], [3, 18], [8, 23]]
    this.size[5] = [[7, 5], [8, 2], [5, 3], [3, 2], [5, 2]]

    //case 6:
    this.num[6] = 5
    this.pos[6] = [[29, 4], [4, 6], [24, 16], [9, 31], [11, 10]]
    this.target[6] = [[17, 23], [18, 4], [1, 17], [20, 27], [22, 18]]
    this.size[6] = [[2, 8], [2, 2], [8, 4], [8, 3], [10, 6]]

    //case 7:
    this.num[7] = 5
    this.pos[7] = [[26, 6], [29, 22], [18, 18], [5, 5], [0, 29]]
    this.target[7] = [[31, 28], [16, 5], [6, 4], [5, 16], [26, 13]]
    this.size[7] = [[4, 2], [5, 2], [9, 4], [3, 4], [3, 3]]

    //case 8:
    this.num[8] = 5
    this.pos[8] = [[30, 3], [21, 9], [26, 21], [15, 8], [11, 11]]
    this.target[8] = [[13, 19], [11, 4], [31, 31], [26, 18], [14, 7]]
    this.size[8] = [[5, 8], [3, 3], [4, 3], [5, 4], [2, 8]]

    //case 9:
    this.num[9] = 5
    this.pos[9] = [[10, 31], [0, 5], [16, 28], [8, 4], [14, 25]]
    this.target[9] = [[8, 22], [2, 16], [22, 0], [12, 3], [5, 29]]
    this.size[9] = [[9, 2], [2, 2], [10, 2], [7, 2], [6, 3]]

    //case 10:
    this.num[10] = 5
    this.pos[10] = [[16, 27], [2, 22], [27, 12], [26, 5], [8, 30]]
    this.target[10] = [[1, 17], [7, 18], [24, 22], [8, 1], [27, 13]]
    this.size[10] = [[2, 2], [6, 3], [6, 9], [6, 2], [3, 3]]

    //case 11:
    this.num[11] = 5
    this.pos[11] = [[14, 6], [3, 13], [16, 17], [1, 26], [28, 21]]
    this.target[11] = [[10, 8], [17, 20], [3, 17], [13, 0], [25, 1]]
    this.size[11] = [[6, 7], [5, 6], [8, 6], [10, 5], [7, 3]]

    //case 12:
    this.num[12] = 5
    this.pos[12] = [[27, 12], [5, 13], [20, 28], [10, 3], [11, 29]]
    this.target[12] = [[9, 12], [15, 27], [26, 13], [7, 4], [1, 17]]
    this.size[12] = [[3, 9], [4, 3], [6, 2], [9, 7], [7, 5]]

    //case 13:
    this.num[13] = 5
    this.pos[13] = [[20, 12], [25, 5], [28, 11], [5, 1], [17, 20]]
    this.target[13] = [[10, 6], [12, 2], [17, 8], [1, 13], [30, 11]]
    this.size[13] = [[2, 9], [3, 5], [6, 10], [2, 3], [3, 9]]

    //case 14:
    this.num[14] = 5
    this.pos[14] = [[24, 24], [8, 23], [9, 16], [5, 5], [1, 19]]
    this.target[14] = [[16, 28], [31, 27], [5, 29], [0, 13], [14, 24]]
    this.size[14] = [[4, 2], [3, 5], [9, 6], [3, 6], [2, 2]]

    //case 15:
    this.num[15] = 5
    this.pos[15] = [[1, 25], [25, 19], [21, 0], [3, 30], [12, 5]]
    this.target[15] = [[8, 9], [22, 1], [3, 21], [20, 19], [18, 4]]
    this.size[15] = [[10, 4], [2, 4], [4, 3], [4, 3], [2, 6]]

    //case 16:
    this.num[16] = 5
    this.pos[16] = [[2, 31], [4, 6], [26, 24], [5, 22], [30, 0]]
    this.target[16] = [[7, 7], [30, 20], [19, 10], [6, 21], [26, 12]]
    this.size[16] = [[3, 4], [4, 2], [6, 7], [10, 9], [2, 6]]

    //case 17:
    this.num[17] = 5
    this.pos[17] = [[2, 30], [19, 31], [1, 16], [3, 6], [27, 19]]
    this.target[17] = [[13, 25], [10, 16], [30, 2], [4, 15], [29, 9]]
    this.size[17] = [[4, 3], [9, 4], [4, 5], [4, 5], [4, 4]]

    //case 18:
    this.num[18] = 5
    this.pos[18] = [[29, 31], [18, 18], [7, 1], [8, 28], [27, 16]]
    this.target[18] = [[7, 2], [31, 27], [4, 4], [21, 9], [30, 12]]
    this.size[18] = [[6, 3], [3, 3], [2, 3], [10, 3], [4, 10]]

    //case 19:
    this.num[19] = 5
    this.pos[19] = [[31, 6], [10, 2], [3, 17], [16, 31], [29, 13]]
    this.target[19] = [[27, 13], [25, 18], [16, 23], [12, 29], [5, 6]]
    this.size[19] = [[2, 10], [2, 6], [2, 4], [7, 4], [2, 3]]

    //9 blocks
    //case 20:
    this.num[20] = 9
    this.pos[20] = [[31, 24], [25, 22], [7, 2], [13, 25], [4, 17], [2, 12], [15, 11], [0, 18], [8, 6]]
    this.target[20] = [[24, 27], [30, 6], [4, 23], [18, 13], [2, 10], [25, 21], [8, 15], [0, 28], [13, 16]]
    this.size[20] = [[2, 5], [4, 7], [5, 4], [2, 7], [4, 10], [5, 2], [4, 6], [3, 4], [3, 9]]

    //case 21:
    this.num[21] = 9
    this.pos[21] = [[29, 8], [7, 29], [19, 2], [5, 23], [3, 17], [9, 15], [25, 7], [22, 12], [27, 24]]
    this.target[21] = [[15, 23], [29, 17], [30, 28], [31, 0], [17, 26], [6, 11], [28, 5], [21, 10], [18, 6]]
    this.size[21] = [[6, 3], [5, 3], [2, 5], [2, 7], [5, 4], [2, 7], [2, 9], [2, 10], [4, 2]]

    //case 22:
    this.num[22] = 9
    this.pos[22] = [[15, 30], [19, 31], [30, 18], [1, 19], [0, 9], [9, 11], [25, 23], [28, 28], [23, 12]]
    this.target[22] = [[31, 31], [18, 25], [27, 15], [11, 5], [3, 19], [16, 13], [26, 30], [30, 12], [23, 11]]
    this.size[22] = [[2, 2], [6, 4], [4, 9], [6, 8], [8, 4], [3, 3], [2, 5], [4, 3], [3, 6]]

    //case 23:
    this.num[23] = 9
    this.pos[23] = [[26, 28], [29, 30], [13, 12], [30, 10], [12, 16], [7, 6], [3, 21], [9, 11], [25, 0]]
    this.target[23] = [[7, 13], [31, 14], [15, 5], [20, 2], [14, 30], [21, 25], [24, 21], [4, 29], [11, 20]]
    this.size[23] = [[3, 5], [2, 3], [8, 4], [2, 2], [6, 4], [2, 7], [2, 6], [4, 4], [3, 9]]

    //case 24:
    this.num[24] = 9
    this.pos[24] = [[7, 25], [23, 31], [31, 5], [17, 7], [28, 8], [20, 15], [16, 30], [10, 11], [2, 24]]
    this.target[24] = [[19, 30], [26, 0], [9, 5], [28, 6], [0, 7], [7, 18], [15, 15], [22, 12], [31, 11]]
    this.size[24] = [[3, 3], [2, 3], [3, 3], [7, 5], [7, 7], [8, 7], [5, 2], [6, 3], [2, 5]]

    //case 25:
    this.num[25] = 9
    this.pos[25] = [[5, 11], [17, 28], [4, 6], [24, 0], [25, 12], [11, 2], [8, 8], [29, 26], [13, 31]]
    this.target[25] = [[12, 26], [14, 14], [15, 28], [5, 0], [27, 12], [9, 30], [10, 19], [22, 24], [8, 23]]
    this.size[25] = [[2, 6], [2, 3], [2, 5], [4, 8], [6, 2], [2, 3], [8, 4], [2, 4], [2, 3]]

    //case 26:
    this.num[26] = 9
    this.pos[26] = [[1, 26], [7, 21], [15, 4], [3, 17], [25, 16], [18, 10], [29, 9], [17, 25], [13, 19]]
    this.target[26] = [[5, 21], [23, 7], [9, 11], [1, 30], [29, 18], [19, 8], [24, 16], [16, 22], [11, 17]]
    this.size[26] = [[5, 8], [5, 4], [8, 6], [3, 2], [6, 3], [2, 7], [6, 2], [9, 7], [2, 2]]

    //case 27:
    this.num[27] = 9
    this.pos[27] = [[26, 16], [17, 22], [18, 7], [7, 13], [22, 27], [21, 1], [14, 2], [12, 23], [3, 17]]
    this.target[27] = [[10, 17], [21, 8], [19, 18], [30, 2], [1, 4], [25, 5], [15, 6], [9, 26], [12, 29]]
    this.size[27] = [[7, 3], [2, 9], [8, 2], [3, 2], [7, 2], [10, 3], [4, 10], [5, 2], [2, 6]]

    //case 28:
    this.num[28] = 9
    this.pos[28] = [[3, 17], [8, 24], [1, 22], [16, 8], [28, 27], [30, 18], [22, 21], [26, 4], [6, 7]]
    this.target[28] = [[15, 25], [20, 5], [17, 18], [9, 3], [24, 22], [10, 10], [22, 27], [2, 26], [30, 29]]
    this.size[28] = [[7, 4], [5, 9], [7, 5], [10, 2], [4, 4], [5, 2], [8, 6], [5, 5], [4, 4]]

    //case 29:
    this.num[29] = 9
    this.pos[29] = [[1, 31], [24, 8], [2, 24], [22, 27], [16, 9], [15, 25], [29, 15], [19, 21], [0, 10]]
    this.target[29] = [[0, 23], [27, 14], [31, 30], [13, 31], [18, 21], [16, 11], [9, 19], [3, 5], [24, 4]]
    this.size[29] = [[10, 3], [6, 7], [2, 3], [4, 4], [3, 4], [3, 8], [2, 3], [7, 2], [2, 6]]

    //case 30:
    this.num[30] = 9
    this.pos[30] = [[8, 5], [12, 16], [15, 23], [3, 29], [30, 31], [1, 15], [22, 11], [4, 17], [25, 27]]
    this.target[30] = [[15, 20], [4, 6], [9, 21], [22, 16], [27, 17], [30, 26], [0, 10], [19, 28], [26, 23]]
    this.size[30] = [[3, 10], [3, 2], [2, 5], [3, 3], [5, 2], [3, 8], [2, 3], [3, 3], [8, 3]]

    //case 31:
    this.num[31] = 9
    this.pos[31] = [[11, 27], [4, 21], [15, 12], [27, 20], [17, 15], [18, 1], [6, 16], [7, 24], [23, 6]]
    this.target[31] = [[8, 20], [25, 17], [18, 23], [3, 4], [21, 29], [27, 7], [10, 8], [29, 1], [31, 21]]
    this.size[31] = [[5, 5], [2, 3], [4, 2], [4, 7], [4, 6], [2, 4], [5, 7], [4, 7], [4, 10]]

    //case 32:
    this.num[32] = 9
    this.pos[32] = [[14, 8], [28, 22], [17, 4], [26, 10], [3, 2], [21, 27], [12, 28], [11, 5], [6, 12]]
    this.target[32] = [[10, 4], [4, 14], [17, 19], [20, 13], [2, 6], [0, 31], [7, 0], [18, 24], [27, 22]]
    this.size[32] = [[7, 2], [3, 10], [7, 4], [2, 4], [3, 8], [7, 2], [3, 2], [3, 2], [6, 2]]

    //case 33:
    this.num[33] = 9
    this.pos[33] = [[11, 26], [24, 12], [27, 30], [18, 11], [16, 5], [30, 15], [6, 0], [14, 10], [21, 17]]
    this.target[33] = [[3, 21], [31, 3], [27, 31], [9, 12], [7, 28], [29, 7], [17, 2], [12, 29], [8, 1]]
    this.size[33] = [[8, 4], [4, 4], [5, 3], [4, 3], [4, 6], [3, 2], [3, 6], [2, 3], [5, 8]]

    //case 34:
    this.num[34] = 9
    this.pos[34] = [[19, 28], [30, 20], [9, 19], [27, 7], [15, 12], [26, 14], [6, 26], [18, 3], [13, 1]]
    this.target[34] = [[12, 22], [31, 9], [10, 15], [30, 3], [14, 7], [9, 4], [20, 16], [23, 31], [16, 25]]
    this.size[34] = [[3, 7], [2, 10], [5, 3], [4, 3], [4, 4], [4, 6], [5, 5], [4, 2], [3, 8]]

    //case 35:
    this.num[35] = 9
    this.pos[35] = [[8, 15], [22, 0], [20, 30], [28, 6], [19, 3], [21, 23], [13, 19], [2, 26], [12, 24]]
    this.target[35] = [[27, 29], [30, 21], [3, 1], [4, 19], [31, 16], [7, 15], [13, 27], [15, 23], [14, 17]]
    this.size[35] = [[3, 4], [5, 5], [10, 2], [3, 2], [3, 5], [5, 7], [8, 2], [8, 2], [3, 2]]

    //case 36:
    this.num[36] = 9
    this.pos[36] = [[27, 0], [0, 18], [22, 13], [1, 2], [13, 6], [9, 28], [18, 20], [12, 21], [2, 11]]
    this.target[36] = [[7, 0], [15, 30], [19, 25], [6, 18], [22, 5], [12, 14], [0, 11], [24, 9], [27, 16]]
    this.size[36] = [[7, 6], [2, 5], [4, 5], [5, 2], [6, 4], [10, 2], [5, 5], [3, 6], [4, 9]]

    //case 37:
    this.num[37] = 9
    this.pos[37] = [[4, 18], [31, 31], [11, 1], [22, 5], [10, 16], [15, 29], [18, 9], [9, 22], [0, 8]]
    this.target[37] = [[19, 22], [12, 10], [23, 4], [27, 11], [30, 17], [26, 1], [21, 28], [7, 0], [6, 6]]
    this.size[37] = [[2, 3], [2, 2], [7, 3], [2, 8], [4, 6], [2, 2], [3, 4], [9, 2], [5, 2]]

    //case 38:
    this.num[38] = 9
    this.pos[38] = [[13, 22], [1, 16], [19, 14], [18, 6], [8, 27], [0, 12], [25, 25], [30, 3], [5, 29]]
    this.target[38] = [[4, 23], [2, 5], [12, 30], [6, 7], [0, 22], [20, 18], [29, 15], [15, 25], [25, 16]]
    this.size[38] = [[6, 2], [4, 5], [2, 5], [8, 5], [3, 4], [2, 4], [2, 9], [3, 4], [3, 3]]

    //case 39:
    this.num[39] = 9
    this.pos[39] = [[14, 8], [8, 7], [16, 25], [23, 10], [1, 26], [2, 4], [19, 17], [20, 29], [28, 3]]
    this.target[39] = [[13, 4], [23, 16], [11, 26], [0, 18], [19, 2], [2, 13], [17, 28], [26, 27], [29, 29]]
    this.size[39] = [[10, 2], [4, 4], [3, 3], [3, 7], [3, 2], [6, 3], [7, 7], [4, 2], [3, 2]]

    //13 blocks
    //case 40:
    this.num[40] = 13
    this.pos[40] = [[20, 2], [1, 14], [21, 15], [29, 9], [22, 22], [6, 21], [25, 12], [30, 1], [28, 18], [19, 25], [2, 3], [26, 31], [5, 28]]
    this.target[40] = [[0, 26], [19, 15], [14, 28], [2, 5], [1, 10], [27, 30], [15, 13], [4, 16], [11, 25], [3, 22], [24, 1], [13, 3], [29, 19]]
    this.size[40] = [[5, 2], [6, 7], [2, 3], [3, 3], [2, 9], [8, 5], [2, 8], [4, 3], [2, 9], [2, 4], [4, 6], [9, 3], [2, 7]]

    //case 41:
    this.num[41] = 13
    this.pos[41] = [[6, 17], [13, 21], [16, 3], [1, 10], [14, 16], [8, 11], [22, 19], [7, 6], [2, 30], [19, 27], [31, 18], [12, 4], [28, 26]]
    this.target[41] = [[9, 6], [29, 22], [15, 4], [10, 13], [27, 14], [21, 9], [1, 18], [31, 2], [20, 1], [30, 16], [25, 3], [5, 25], [28, 5]]
    this.size[41] = [[3, 5], [3, 2], [4, 2], [5, 2], [3, 3], [3, 2], [7, 7], [3, 4], [3, 3], [2, 6], [3, 6], [3, 5], [2, 3]]

    //case 42:
    this.num[42] = 13
    this.pos[42] = [[8, 2], [4, 23], [6, 19], [13, 3], [1, 14], [5, 8], [20, 1], [23, 30], [22, 24], [25, 21], [17, 25], [21, 18], [16, 7]]
    this.target[42] = [[24, 16], [0, 1], [12, 24], [4, 12], [5, 21], [17, 29], [23, 31], [21, 11], [16, 10], [13, 7], [10, 30], [29, 0], [1, 23]]
    this.size[42] = [[5, 3], [10, 8], [2, 3], [3, 5], [4, 6], [5, 4], [7, 2], [7, 4], [5, 6], [5, 2], [5, 3], [2, 3], [3, 9]]

    //case 43:
    this.num[43] = 13
    this.pos[43] = [[26, 6], [22, 11], [14, 16], [18, 26], [9, 27], [15, 23], [24, 0], [3, 17], [5, 14], [11, 9], [31, 29], [6, 20], [12, 21]]
    this.target[43] = [[31, 9], [18, 15], [15, 20], [21, 3], [19, 26], [10, 8], [20, 18], [30, 23], [27, 2], [13, 28], [23, 13], [28, 27], [24, 17]]
    this.size[43] = [[2, 6], [2, 4], [9, 4], [4, 4], [3, 2], [3, 7], [3, 2], [3, 9], [4, 2], [3, 4], [4, 4], [2, 2], [2, 4]]

    //case 44:
    this.num[44] = 13
    this.pos[44] = [[20, 0], [7, 22], [1, 7], [6, 13], [14, 29], [2, 28], [15, 16], [4, 18], [10, 11], [5, 4], [29, 10], [0, 19], [30, 26]]
    this.target[44] = [[0, 18], [17, 8], [9, 21], [26, 20], [11, 27], [5, 12], [21, 16], [23, 5], [28, 24], [18, 26], [2, 15], [13, 10], [10, 13]]
    this.size[44] = [[4, 9], [7, 3], [2, 7], [7, 2], [3, 2], [2, 7], [2, 3], [10, 2], [5, 2], [8, 4], [2, 3], [3, 9], [3, 4]]

    //case 45:
    this.num[45] = 13
    this.pos[45] = [[2, 25], [17, 4], [10, 15], [13, 20], [14, 16], [19, 11], [15, 29], [18, 21], [8, 23], [30, 19], [24, 31], [22, 3], [7, 5]]
    this.target[45] = [[3, 2], [14, 15], [12, 25], [23, 30], [27, 6], [30, 16], [7, 10], [16, 0], [17, 28], [25, 13], [1, 20], [6, 18], [28, 22]]
    this.size[45] = [[9, 2], [2, 2], [3, 3], [3, 3], [4, 3], [5, 6], [6, 5], [8, 5], [10, 2], [4, 9], [8, 3], [5, 2], [5, 9]]

    //case 46:
    this.num[46] = 13
    this.pos[46] = [[3, 16], [9, 10], [16, 31], [15, 25], [5, 1], [11, 18], [2, 3], [31, 22], [1, 26], [22, 5], [28, 15], [26, 27], [7, 13]]
    this.target[46] = [[6, 13], [29, 0], [31, 19], [30, 9], [12, 15], [16, 24], [28, 26], [15, 30], [9, 17], [24, 16], [14, 5], [13, 11], [4, 6]]
    this.size[46] = [[3, 5], [6, 7], [4, 4], [2, 2], [4, 9], [8, 5], [3, 5], [2, 4], [3, 6], [3, 6], [6, 4], [8, 4], [2, 8]]

    //case 47:
    this.num[47] = 13
    this.pos[47] = [[8, 25], [10, 28], [18, 26], [9, 19], [14, 14], [30, 10], [20, 2], [27, 30], [2, 23], [12, 8], [26, 15], [5, 31], [29, 1]]
    this.target[47] = [[22, 17], [6, 0], [13, 3], [9, 30], [11, 25], [2, 4], [30, 16], [3, 29], [0, 20], [5, 19], [4, 12], [29, 24], [19, 22]]
    this.size[47] = [[3, 3], [4, 6], [2, 6], [2, 4], [9, 9], [2, 2], [3, 3], [5, 2], [2, 9], [6, 6], [6, 4], [4, 2], [5, 2]]

    //case 48:
    this.num[48] = 13
    this.pos[48] = [[7, 24], [10, 1], [21, 10], [17, 18], [0, 22], [2, 15], [20, 26], [26, 9], [13, 13], [24, 2], [12, 8], [15, 21], [23, 7]]
    this.target[48] = [[13, 1], [21, 2], [11, 23], [30, 18], [3, 0], [6, 12], [17, 13], [12, 11], [27, 14], [19, 9], [15, 20], [8, 26], [7, 19]]
    this.size[48] = [[4, 5], [4, 4], [5, 9], [3, 3], [7, 2], [6, 6], [9, 4], [2, 10], [2, 4], [5, 2], [6, 3], [3, 5], [3, 3]]

    //case 49:
    this.num[49] = 13
    this.pos[49] = [[30, 8], [2, 24], [4, 27], [12, 19], [8, 23], [21, 18], [17, 12], [11, 1], [5, 14], [10, 16], [24, 20], [20, 22], [15, 7]]
    this.target[49] = [[2, 8], [22, 26], [30, 30], [0, 3], [19, 9], [4, 4], [24, 18], [28, 0], [1, 29], [12, 23], [26, 28], [7, 2], [25, 10]]
    this.size[49] = [[4, 4], [2, 8], [3, 5], [3, 4], [5, 6], [9, 2], [6, 2], [4, 4], [2, 5], [9, 3], [2, 2], [6, 2], [6, 3]]

    //case 50:
    this.num[50] = 13
    this.pos[50] = [[13, 20], [21, 21], [2, 29], [29, 1], [7, 31], [10, 2], [12, 11], [17, 5], [25, 8], [23, 13], [22, 30], [9, 28], [0, 18]]
    this.target[50] = [[11, 12], [18, 22], [27, 0], [9, 24], [1, 27], [21, 26], [29, 25], [2, 13], [12, 30], [7, 28], [0, 10], [5, 1], [23, 19]]
    this.size[50] = [[4, 10], [3, 4], [4, 4], [2, 6], [3, 4], [2, 8], [4, 9], [2, 4], [6, 5], [2, 2], [10, 2], [4, 2], [3, 5]]

    //case 51:
    this.num[51] = 13
    this.pos[51] = [[29, 27], [28, 12], [6, 22], [12, 5], [7, 7], [0, 8], [17, 3], [21, 21], [25, 9], [26, 31], [15, 13], [4, 25], [22, 28]]
    this.target[51] = [[9, 17], [4, 19], [2, 1], [13, 3], [24, 24], [0, 4], [16, 28], [6, 13], [28, 2], [11, 30], [18, 20], [21, 9], [8, 5]]
    this.size[51] = [[6, 6], [2, 10], [4, 3], [3, 3], [5, 8], [6, 7], [6, 3], [4, 4], [3, 8], [2, 4], [4, 4], [2, 6], [4, 3]]

    //case 52:
    this.num[52] = 13
    this.pos[52] = [[0, 20], [24, 18], [12, 22], [30, 0], [31, 23], [21, 5], [6, 27], [28, 12], [2, 31], [4, 19], [15, 24], [16, 7], [29, 8]]
    this.target[52] = [[5, 6], [1, 7], [22, 15], [14, 20], [20, 0], [2, 27], [26, 5], [28, 11], [17, 9], [31, 14], [24, 12], [15, 1], [13, 10]]
    this.size[52] = [[3, 9], [2, 10], [2, 6], [2, 4], [4, 6], [3, 3], [4, 3], [2, 4], [3, 3], [4, 4], [4, 4], [3, 2], [4, 4]]

    //case 53:
    this.num[53] = 13
    this.pos[53] = [[0, 15], [8, 27], [9, 5], [26, 22], [19, 24], [27, 17], [6, 16], [4, 8], [31, 21], [28, 7], [1, 20], [12, 28], [15, 12]]
    this.target[53] = [[16, 30], [27, 15], [22, 20], [13, 21], [17, 9], [6, 7], [7, 16], [31, 0], [21, 26], [0, 14], [14, 6], [9, 19], [25, 29]]
    this.size[53] = [[3, 3], [2, 2], [9, 6], [2, 9], [4, 10], [6, 2], [8, 2], [4, 2], [4, 3], [4, 4], [2, 7], [3, 6], [5, 5]]

    //case 54:
    this.num[54] = 13
    this.pos[54] = [[10, 15], [5, 31], [2, 13], [26, 1], [1, 6], [15, 0], [8, 8], [0, 17], [21, 18], [16, 28], [13, 21], [30, 22], [6, 19]]
    this.target[54] = [[29, 17], [27, 6], [18, 14], [19, 26], [16, 20], [12, 2], [20, 19], [14, 5], [5, 10], [0, 30], [8, 22], [1, 18], [13, 31]]
    this.size[54] = [[2, 5], [6, 3], [6, 2], [6, 3], [4, 4], [2, 4], [8, 2], [4, 8], [5, 7], [6, 4], [8, 3], [5, 5], [2, 4]]

    //case 55:
    this.num[55] = 13
    this.pos[55] = [[7, 5], [3, 20], [14, 9], [28, 0], [10, 8], [5, 29], [13, 1], [27, 24], [31, 31], [18, 11], [26, 17], [22, 15], [21, 21]]
    this.target[55] = [[15, 14], [27, 4], [29, 23], [18, 12], [19, 25], [2, 31], [7, 1], [9, 30], [26, 10], [11, 27], [22, 15], [13, 8], [5, 6]]
    this.size[55] = [[3, 8], [3, 4], [2, 5], [3, 8], [2, 3], [5, 4], [5, 2], [7, 5], [3, 2], [7, 2], [4, 6], [3, 5], [2, 7]]

    //case 56:
    this.num[56] = 13
    this.pos[56] = [[6, 30], [18, 27], [14, 26], [25, 0], [13, 12], [4, 4], [19, 6], [31, 14], [28, 28], [22, 13], [17, 21], [2, 18], [30, 20]]
    this.target[56] = [[18, 17], [1, 25], [5, 18], [29, 7], [0, 12], [16, 14], [11, 2], [7, 21], [24, 20], [12, 19], [31, 30], [6, 3], [27, 27]]
    this.size[56] = [[5, 2], [3, 7], [2, 3], [2, 5], [3, 6], [5, 2], [7, 5], [4, 6], [6, 6], [3, 10], [2, 4], [4, 6], [3, 8]]

    //case 57:
    this.num[57] = 13
    this.pos[57] = [[0, 15], [11, 14], [23, 12], [17, 18], [10, 22], [31, 8], [15, 23], [19, 3], [6, 13], [22, 28], [13, 9], [7, 19], [18, 7]]
    this.target[57] = [[2, 11], [20, 30], [3, 25], [11, 7], [31, 15], [10, 1], [7, 4], [17, 13], [26, 10], [12, 28], [24, 0], [5, 9], [22, 12]]
    this.size[57] = [[5, 9], [9, 4], [4, 7], [4, 6], [4, 10], [3, 4], [2, 10], [2, 4], [3, 4], [8, 4], [9, 4], [2, 2], [2, 2]]

    //case 58:
    this.num[58] = 13
    this.pos[58] = [[24, 7], [14, 0], [2, 5], [1, 29], [0, 10], [9, 28], [17, 26], [29, 18], [11, 23], [30, 25], [5, 9], [19, 22], [21, 3]]
    this.target[58] = [[18, 14], [22, 23], [30, 10], [12, 21], [7, 2], [0, 11], [20, 3], [28, 29], [9, 24], [14, 30], [11, 5], [24, 9], [27, 22]]
    this.size[58] = [[5, 3], [2, 6], [2, 8], [8, 2], [2, 10], [3, 5], [6, 5], [3, 2], [6, 2], [5, 4], [5, 2], [5, 4], [7, 2]]

    //case 59:
    this.num[59] = 13
    this.pos[59] = [[10, 15], [15, 20], [14, 0], [26, 17], [19, 3], [25, 7], [8, 25], [3, 27], [11, 9], [29, 21], [6, 1], [21, 18], [0, 12]]
    this.target[59] = [[27, 13], [22, 24], [11, 6], [8, 14], [10, 17], [5, 5], [7, 2], [0, 27], [9, 21], [6, 18], [12, 12], [29, 20], [30, 11]]
    this.size[59] = [[4, 7], [3, 5], [10, 3], [5, 2], [10, 3], [4, 9], [3, 3], [2, 6], [2, 6], [4, 3], [7, 2], [5, 6], [4, 2]]

    //17 blocks
    //case :
    this.num[60] = 17
    this.pos[60] = [[15, 8], [2, 17], [8, 31], [12, 1], [9, 24], [18, 10], [11, 16], [25, 28], [21, 20], [17, 2], [22, 30], [19, 23], [23, 12], [28, 6], [16, 13], [30, 25], [0, 4]]
    this.target[60] = [[14, 28], [28, 10], [20, 23], [7, 24], [23, 27], [17, 21], [19, 29], [0, 7], [15, 16], [27, 15], [5, 2], [1, 12], [10, 14], [24, 18], [25, 8], [18, 3], [31, 25]]
    this.size[60] = [[2, 4], [7, 5], [8, 4], [2, 5], [3, 7], [2, 8], [3, 5], [6, 3], [2, 3], [5, 4], [3, 3], [2, 4], [4, 6], [2, 5], [2, 8], [5, 2], [2, 3]]

    //case 61:
    this.num[61] = 17
    this.pos[61] = [[2, 30], [9, 1], [1, 13], [18, 28], [25, 11], [3, 25], [13, 8], [7, 18], [5, 5], [31, 4], [14, 2], [8, 10], [20, 14], [23, 29], [28, 22], [17, 6], [0, 20]]
    this.target[61] = [[12, 30], [24, 1], [15, 11], [20, 26], [23, 7], [13, 23], [27, 14], [14, 15], [17, 6], [4, 8], [31, 21], [29, 18], [10, 2], [26, 29], [9, 24], [5, 28], [18, 16]]
    this.size[61] = [[7, 4], [4, 5], [7, 4], [5, 6], [2, 9], [10, 2], [4, 4], [2, 7], [4, 2], [2, 6], [2, 3], [2, 2], [2, 5], [7, 6], [2, 2], [6, 6], [7, 3]]

    //case 62:
    this.num[62] = 17
    this.pos[62] = [[12, 16], [0, 26], [16, 28], [3, 10], [5, 6], [29, 12], [22, 1], [23, 7], [21, 13], [1, 15], [7, 25], [25, 22], [19, 21], [18, 11], [8, 20], [4, 29], [6, 2]]
    this.target[62] = [[5, 26], [31, 8], [18, 18], [8, 29], [28, 16], [17, 13], [7, 6], [21, 9], [15, 0], [1, 7], [29, 22], [14, 23], [26, 12], [23, 1], [20, 5], [11, 3], [6, 14]]
    this.size[62] = [[2, 7], [4, 4], [8, 7], [5, 3], [3, 3], [4, 5], [7, 3], [6, 3], [3, 7], [2, 7], [4, 10], [2, 4], [5, 3], [6, 2], [4, 4], [3, 3], [5, 3]]

    //case 63:
    this.num[63] = 17
    this.pos[63] = [[7, 27], [12, 26], [16, 14], [21, 20], [6, 4], [5, 16], [11, 0], [26, 8], [1, 3], [24, 28], [2, 9], [30, 23], [10, 10], [17, 31], [28, 11], [13, 22], [22, 15]]
    this.target[63] = [[22, 25], [28, 4], [29, 26], [4, 0], [19, 31], [27, 15], [23, 2], [5, 21], [13, 20], [0, 3], [14, 28], [18, 6], [25, 12], [1, 19], [7, 27], [10, 13], [26, 22]]
    this.size[63] = [[5, 2], [7, 3], [5, 8], [2, 6], [2, 4], [6, 6], [5, 3], [2, 3], [4, 3], [4, 7], [2, 4], [2, 8], [10, 3], [3, 3], [5, 4], [5, 3], [7, 3]]

    //case 64:
    this.num[64] = 17
    this.pos[64] = [[14, 7], [7, 5], [19, 4], [17, 17], [30, 13], [31, 26], [21, 30], [28, 2], [15, 29], [27, 18], [16, 24], [4, 12], [23, 3], [9, 15], [24, 22], [6, 21], [11, 20]]
    this.target[64] = [[28, 0], [31, 30], [24, 14], [6, 25], [19, 27], [10, 5], [18, 21], [0, 20], [25, 28], [29, 7], [9, 22], [27, 17], [2, 15], [12, 11], [15, 16], [3, 9], [22, 1]]
    this.size[64] = [[3, 4], [4, 2], [3, 5], [10, 2], [4, 5], [3, 5], [9, 5], [4, 4], [3, 5], [5, 7], [9, 2], [3, 7], [3, 2], [7, 3], [3, 2], [3, 6], [3, 8]]

    //case 65:
    this.num[65] = 17
    this.pos[65] = [[25, 10], [17, 17], [18, 2], [4, 4], [27, 27], [8, 22], [10, 3], [29, 14], [1, 6], [30, 29], [3, 31], [16, 30], [22, 0], [12, 16], [19, 20], [28, 1], [23, 5]]
    this.target[65] = [[4, 16], [19, 7], [0, 21], [1, 4], [9, 27], [31, 0], [21, 22], [27, 29], [6, 24], [30, 25], [12, 9], [15, 20], [11, 23], [22, 13], [23, 17], [24, 26], [8, 31]]
    this.size[65] = [[6, 2], [3, 3], [2, 9], [5, 9], [6, 2], [3, 4], [2, 3], [3, 6], [2, 2], [2, 6], [5, 3], [2, 2], [3, 4], [5, 4], [2, 3], [2, 7], [3, 4]]

    //case 66:
    this.num[66] = 17
    this.pos[66] = [[7, 10], [20, 15], [2, 18], [27, 21], [10, 7], [31, 16], [5, 0], [9, 2], [19, 3], [22, 31], [28, 12], [29, 28], [4, 24], [6, 19], [14, 20], [17, 8], [16, 29]]
    this.target[66] = [[14, 2], [19, 4], [24, 6], [0, 9], [10, 15], [15, 14], [28, 8], [1, 0], [18, 26], [5, 21], [21, 1], [7, 29], [27, 19], [4, 5], [9, 20], [13, 28], [30, 11]]
    this.size[66] = [[3, 8], [5, 10], [3, 5], [4, 3], [5, 3], [3, 10], [6, 2], [3, 3], [6, 3], [3, 4], [5, 2], [3, 5], [7, 9], [3, 3], [2, 5], [2, 4], [5, 2]]

    //case 67:
    this.num[67] = 17
    this.pos[67] = [[1, 4], [20, 20], [11, 19], [29, 21], [23, 16], [28, 5], [5, 12], [9, 31], [26, 13], [3, 23], [15, 24], [17, 6], [22, 28], [0, 9], [30, 30], [7, 3], [10, 11]]
    this.target[67] = [[7, 2], [19, 8], [11, 20], [12, 1], [2, 16], [1, 29], [3, 0], [13, 30], [27, 18], [31, 4], [18, 14], [21, 28], [25, 27], [22, 17], [17, 5], [10, 7], [26, 6]]
    this.size[67] = [[3, 2], [9, 5], [2, 7], [4, 6], [8, 2], [7, 4], [4, 7], [7, 4], [7, 2], [4, 10], [4, 4], [2, 7], [2, 2], [5, 8], [5, 2], [6, 4], [4, 2]]

    //case 68:
    this.num[68] = 17
    this.pos[68] = [[22, 11], [13, 27], [6, 1], [24, 8], [23, 24], [8, 21], [4, 9], [15, 7], [0, 19], [31, 13], [16, 30], [14, 3], [11, 31], [9, 28], [28, 0], [20, 18], [30, 26]]
    this.target[68] = [[6, 13], [30, 18], [25, 17], [12, 11], [0, 22], [13, 20], [26, 0], [11, 5], [21, 24], [4, 25], [20, 15], [2, 2], [8, 30], [17, 3], [19, 7], [27, 4], [16, 26]]
    this.size[68] = [[6, 9], [2, 6], [5, 2], [3, 2], [6, 3], [3, 3], [9, 4], [7, 3], [5, 6], [2, 3], [10, 2], [7, 3], [2, 3], [4, 2], [3, 7], [2, 8], [5, 8]]

    //case 69:
    this.num[69] = 17
    this.pos[69] = [[1, 23], [30, 31], [27, 15], [23, 1], [14, 19], [29, 22], [17, 24], [26, 30], [8, 12], [11, 3], [7, 6], [20, 16], [3, 29], [21, 21], [10, 26], [5, 14], [15, 10]]
    this.target[69] = [[27, 11], [5, 15], [4, 2], [24, 0], [0, 29], [3, 7], [18, 31], [31, 4], [15, 12], [16, 18], [11, 22], [30, 8], [22, 30], [26, 28], [28, 16], [7, 24], [21, 5]]
    this.size[69] = [[7, 5], [3, 3], [2, 3], [6, 10], [2, 3], [4, 6], [3, 2], [3, 2], [4, 2], [4, 4], [2, 2], [3, 3], [5, 4], [8, 2], [4, 3], [6, 7], [2, 5]]

    //case 70:
    this.num[70] = 17
    this.pos[70] = [[7, 15], [0, 28], [28, 12], [19, 29], [26, 17], [25, 21], [30, 9], [2, 8], [17, 1], [15, 7], [22, 13], [4, 31], [14, 16], [9, 11], [6, 19], [12, 3], [5, 4]]
    this.target[70] = [[18, 22], [23, 0], [4, 13], [19, 29], [6, 21], [15, 15], [29, 10], [30, 20], [20, 19], [11, 27], [0, 1], [10, 7], [31, 5], [27, 25], [9, 14], [14, 11], [24, 18]]
    this.size[70] = [[5, 3], [6, 2], [5, 8], [3, 3], [2, 2], [2, 4], [2, 2], [5, 5], [3, 2], [4, 8], [6, 3], [9, 3], [4, 7], [3, 3], [3, 3], [5, 2], [5, 3]]

    //case 71:
    this.num[71] = 17
    this.pos[71] = [[10, 30], [16, 19], [19, 2], [21, 12], [31, 13], [1, 18], [24, 28], [22, 6], [26, 21], [11, 3], [14, 1], [27, 7], [7, 10], [6, 26], [18, 14], [2, 8], [3, 0]]
    this.target[71] = [[8, 6], [3, 19], [28, 20], [2, 11], [4, 2], [22, 17], [31, 9], [27, 8], [21, 1], [30, 0], [9, 27], [14, 25], [12, 18], [20, 7], [25, 14], [16, 29], [6, 16]]
    this.size[71] = [[8, 4], [8, 4], [2, 4], [4, 4], [2, 2], [6, 2], [4, 6], [4, 6], [7, 6], [5, 3], [5, 2], [6, 3], [5, 7], [4, 9], [2, 2], [2, 2], [10, 2]]

    //case 72:
    this.num[72] = 17
    this.pos[72] = [[20, 1], [28, 24], [18, 9], [15, 19], [6, 31], [8, 27], [30, 16], [19, 5], [9, 18], [26, 20], [11, 23], [7, 11], [2, 2], [3, 17], [31, 29], [4, 26], [1, 13]]
    this.target[72] = [[23, 19], [27, 5], [30, 31], [19, 8], [24, 11], [1, 17], [31, 7], [5, 1], [11, 4], [22, 26], [8, 20], [16, 21], [7, 12], [26, 29], [18, 15], [10, 23], [15, 13]]
    this.size[72] = [[5, 3], [2, 3], [4, 2], [5, 2], [9, 4], [7, 3], [3, 4], [5, 3], [5, 3], [8, 2], [6, 3], [3, 5], [3, 5], [2, 6], [2, 6], [4, 2], [3, 2]]

    //case 73:
    this.num[73] = 17
    this.pos[73] = [[21, 12], [0, 2], [14, 7], [4, 9], [20, 26], [8, 25], [15, 16], [26, 31], [3, 27], [27, 5], [23, 29], [9, 13], [28, 18], [19, 22], [30, 28], [29, 14], [13, 23]]
    this.target[73] = [[13, 16], [30, 11], [10, 31], [2, 20], [28, 24], [16, 22], [15, 0], [31, 29], [8, 17], [5, 30], [19, 26], [22, 23], [0, 15], [9, 10], [23, 1], [20, 3], [21, 14]]
    this.size[73] = [[3, 2], [2, 4], [9, 3], [3, 3], [2, 8], [2, 9], [2, 4], [4, 3], [5, 7], [5, 2], [2, 6], [4, 6], [3, 5], [2, 2], [4, 2], [4, 4], [5, 7]]

    //case 74:
    this.num[74] = 17
    this.pos[74] = [[21, 25], [13, 0], [17, 27], [11, 24], [7, 1], [12, 30], [14, 7], [27, 13], [4, 28], [10, 5], [5, 21], [24, 19], [22, 16], [19, 8], [8, 17], [28, 22], [20, 31]]
    this.target[74] = [[31, 10], [19, 16], [22, 27], [14, 2], [16, 28], [13, 23], [28, 19], [5, 31], [18, 25], [3, 14], [30, 6], [26, 8], [20, 5], [29, 15], [1, 29], [12, 9], [23, 0]]
    this.size[74] = [[3, 4], [2, 6], [2, 5], [7, 3], [3, 5], [3, 2], [5, 6], [6, 3], [2, 3], [2, 3], [3, 3], [2, 10], [4, 2], [4, 3], [4, 5], [4, 4], [4, 4]]

    //case 75:
    this.num[75] = 17
    this.pos[75] = [[27, 27], [30, 20], [28, 2], [24, 14], [15, 15], [5, 9], [18, 17], [12, 29], [7, 30], [29, 31], [0, 24], [21, 3], [19, 6], [13, 4], [10, 7], [25, 5], [14, 11]]
    this.target[75] = [[22, 29], [30, 7], [1, 0], [28, 22], [7, 10], [13, 12], [10, 1], [24, 17], [11, 18], [16, 21], [18, 26], [0, 31], [5, 3], [26, 9], [2, 25], [31, 19], [4, 15]]
    this.size[75] = [[3, 2], [3, 6], [6, 3], [4, 9], [3, 4], [9, 8], [3, 10], [10, 2], [2, 5], [6, 3], [3, 6], [4, 3], [5, 6], [3, 2], [8, 2], [4, 3], [4, 4]]

    //case 76:
    this.num[76] = 17
    this.pos[76] = [[17, 30], [30, 13], [5, 0], [13, 18], [21, 19], [10, 9], [14, 25], [12, 4], [20, 6], [28, 8], [24, 17], [27, 23], [15, 2], [18, 15], [9, 29], [26, 1], [7, 3]]
    this.target[76] = [[27, 24], [30, 19], [23, 31], [0, 7], [10, 0], [12, 12], [5, 15], [13, 20], [22, 14], [8, 30], [17, 10], [6, 1], [18, 25], [2, 11], [14, 28], [19, 6], [3, 3]]
    this.size[76] = [[2, 4], [4, 9], [7, 3], [3, 2], [2, 9], [7, 8], [6, 5], [7, 5], [2, 7], [6, 5], [6, 2], [2, 2], [2, 2], [3, 6], [2, 2], [9, 2], [2, 8]]

    //case 77:
    this.num[77] = 17
    this.pos[77] = [[26, 10], [0, 1], [20, 29], [12, 4], [21, 8], [22, 12], [28, 24], [31, 22], [8, 13], [10, 28], [9, 2], [3, 15], [15, 21], [14, 17], [1, 27], [17, 26], [25, 0]]
    this.target[77] = [[1, 21], [11, 14], [15, 19], [17, 1], [23, 31], [18, 7], [7, 28], [0, 0], [19, 25], [22, 12], [30, 26], [8, 23], [2, 15], [3, 6], [10, 8], [12, 29], [26, 24]]
    this.size[77] = [[7, 7], [4, 7], [3, 4], [10, 2], [2, 3], [3, 7], [2, 7], [3, 3], [3, 8], [9, 7], [3, 3], [4, 5], [3, 5], [5, 4], [8, 5], [5, 2], [5, 2]]

    //case 78:
    this.num[78] = 17
    this.pos[78] = [[5, 24], [17, 12], [19, 27], [1, 23], [20, 22], [10, 16], [16, 29], [24, 20], [31, 19], [0, 7], [2, 1], [29, 15], [26, 3], [28, 0], [8, 28], [30, 9], [12, 10]]
    this.target[78] = [[8, 26], [23, 13], [0, 21], [13, 25], [10, 10], [22, 7], [21, 30], [31, 3], [12, 5], [16, 1], [18, 27], [27, 19], [17, 22], [19, 4], [28, 14], [25, 23], [9, 17]]
    this.size[78] = [[3, 4], [3, 2], [9, 2], [2, 8], [2, 5], [7, 6], [10, 4], [3, 5], [2, 4], [4, 2], [6, 2], [2, 8], [6, 5], [4, 3], [6, 4], [2, 5], [2, 3]]

    //case 79:
    this.num[79] = 17
    this.pos[79] = [[26, 5], [22, 11], [21, 27], [12, 21], [0, 1], [24, 14], [29, 31], [9, 18], [31, 20], [10, 30], [14, 25], [6, 24], [16, 6], [13, 8], [18, 2], [2, 12], [20, 19]]
    this.target[79] = [[31, 10], [28, 3], [26, 18], [11, 8], [24, 14], [10, 26], [6, 16], [5, 29], [15, 28], [2, 20], [0, 0], [21, 27], [27, 25], [30, 31], [20, 2], [8, 5], [14, 6]]
    this.size[79] = [[4, 8], [2, 8], [4, 5], [9, 4], [2, 8], [9, 2], [3, 4], [3, 6], [2, 5], [5, 3], [6, 2], [2, 6], [8, 4], [3, 3], [5, 2], [5, 2], [4, 2]]
  }
}
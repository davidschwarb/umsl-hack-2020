import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findAll():any {
        return `
        {
      "buildings": [
        {
          "name": "Regional Center for Education and Work",
          "acronym": "RCEW",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [10],
              "facultyLotss": [28,26,22]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [10],
              "facultyLotss": [28,26,22]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [10,22],
              "facultyLots": [28,26,22]
            },
            {
              "name": "After 5:30pm",
              "lots": [10,22],
              "facultyLots": [28,26,22]
            }
          ]
        },
        {
          "name": "Mark Twain Building",
          "acronym": "MTB",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [10,8],
              "facultyLots": [10,26,28]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [10,8],
              "facultyLots": [10,26,28]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [10,8],
              "facultyLots": [10,26,28]
            },
            {
              "name": "After 5:30pm",
              "lots": [10,8],
              "facultyLots": [10,26,28]
            }
          ]
        },
        {
          "name": "Arts Administration Building",
          "acronym": "AAB",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [8],
              "facultyLots": [6,8]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [8],
              "facultyLots": [6,8]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [8],
              "facultyLots": [6,8]
            },
            {
              "name": "After 5:30pm",
              "lots": [8],
              "facultyLots": [6,8]
            }
          ]
        },
        {
          "name": "Blanche M. Touhill Performing Arts Center",
          "acronym": "PAC",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [8],
              "facultyLots": [6,8,4]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [8],
              "facultyLots": [6,8,4]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [8],
              "facultyLots": [6,8,4]
            },
            {
              "name": "After 5:30pm",
              "lots": [8],
              "facultyLots": [6,8,4]
            }
          ]
        },
        {
          "name": "Campus Police Building",
          "acronym": "CPB",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [3,11],
              "facultyLots": [4,3,11]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [11],
              "facultyLots": [4,11]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [3,11],
              "facultyLots": [4,3,11]
            },
            {
              "name": "After 5:30pm",
              "lots": [3,11],
              "facultyLots": [4,3,11]
            }
          ]
        },
        {
          "name": "Millenium Student Center",
          "acronym": "MSC",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [3,8],
              "facultyLots": [3,5,14]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [8],
              "facultyLots": [8]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [3,8],
              "facultyLots": [3,5,14]
            },
            {
              "name": "After 5:30pm",
              "lots": [3,8],
              "facultyLots": [3,5,14]
            }
          ]
        },
        {
          "name": "Recreation and Wellness Center",
          "acronym": "RWC",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [12,11],
              "facultyLots": [12,11]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [12,11],
              "facultyLots": [12,11]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [12,11],
              "facultyLots": [12,11]
            },
            {
              "name": "After 5:30pm",
              "lots": [12,11],
              "facultyLots": [12,11]
            }
          ]
        },
        {
          "name": "Anheuser-Busch Hall",
          "acronym": "ABH",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [14,29,5],
              "facultyLots": [22,14,29]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [8],
              "facultyLots": [22,14,29]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [14,29,5],
              "facultyLots": [22,14,29]
            },
            {
              "name": "After 5:30pm",
              "lots": [22,14,29],
              "facultyLots": [22,14,29]
            }
          ]
        },
        {
          "name": "Express Scripts Hall",
          "acronym": "ESH",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [14,5,29],
              "facultyLots": [14,5,29]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [5,8],
              "facultyLots": [5,8]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [14,5,29],
              "facultyLots": [14,5,29]
            },
            {
              "name": "After 5:30pm",
              "lots": [14,5,29],
              "facultyLots": [14,5,29]
            }
          ]
        },
        {
          "name": "Lucas Hall",
          "acronym": "LH",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [5,8,29],
              "facultyLots": [5,8,29]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [8,11],
              "facultyLots": [8,11]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [8,12],
              "facultyLots": [8,12]
            },
            {
              "name": "After 5:30pm",
              "lots": [5,8,29],
              "facultyLots": [5,8,29]
            }
          ]
        },
        {
          "name": "Social Science and Business Building",
          "acronym": "SSB",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [29,14],
              "facultyLots": [29,22,14]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [29,14],
              "facultyLots": [29,22,14]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [29,14],
              "facultyLots": [29,22,14]
            },
            {
              "name": "After 5:30pm",
              "lots": [29,22,14],
              "facultyLots": [29,22,14]
            }
          ]
        },
        {
          "name": "Clark Hall",
          "acronym": "CH",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [14,29],
              "facultyLots": [22,14,29]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [14,29],
              "facultyLots": [22,14,29]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [14,29],
              "facultyLots": [22,14,29]
            },
            {
              "name": "After 5:30pm",
              "lots": [22,14,29],
              "facultyLots": [22,14,29]
            }
          ]
        },
        {
          "name": "Thomas Jefferson Library",
          "acronym": "TJL",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [14,29,8],
              "facultyLots": [14,29,8]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [8],
              "facultyLots": [8]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [14,29,8],
              "facultyLots": [14,29,8]
            },
            {
              "name": "After 5:30pm",
              "lots": [14,29,8],
              "facultyLots": [14,29,8]
            }
          ]
        },
        {
          "name": "St. Louis Mercantile Library",
          "acronym": "SLML",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [14,29,8],
              "facultyLots": [14,29,8]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [8],
              "facultyLots": [8]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [14,29,8],
              "facultyLots": [14,29,8]
            },
            {
              "name": "After 5:30pm",
              "lots": [14,29,8],
              "facultyLots": [14,29,8]
            }
          ]
        },
        {
          "name": "J.C. Penney Building",
          "acronym": "JCP",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [29,8],
              "facultyLots": [1,2,0]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [8],
              "facultyLots": [1,2,0]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [29,8],
              "facultyLots": [1,2,0]
            },
            {
              "name": "After 5:30pm",
              "lots": [29,8],
              "facultyLots": [1,2,0]
            }
          ]
        },
        {
          "name": "Woods Hall",
          "acronym": "WH",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [29],
              "facultyLots": [0,1,17]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [29],
              "facultyLots": [0,1,17]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [29],
              "facultyLots": [0,1,17]
            },
            {
              "name": "After 5:30pm",
              "lots": [29],
              "facultyLots": [0,1,17]
            }
          ]
        },
        {
          "name": "Stadler Hall",
          "acronym": "SH",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "After 5:30pm",
              "lots": [22,29,12],
              "facultyLots": [19,18,17]
            }
          ]
        },
        {
          "name": "Research Building",
          "acronym": "RB",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "After 5:30pm",
              "lots": [22,29,12],
              "facultyLots": [19,18,17]
            }
          ]
        },
        {
          "name": "Science Learning Building",
          "acronym": "SLB",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "After 5:30pm",
              "lots": [22,29,12],
              "facultyLots": [19,18,17]
            }
          ]
        },
        {
          "name": "Benton Hall",
          "acronym": "BH",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "After 5:30pm",
              "lots": [22,29,12],
              "facultyLots": [19,18,17]
            }
          ]
        },
        {
          "name": "William L. Clay Center for Nanoscience",
          "acronym": "CNS",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "After 5:30pm",
              "lots": [22,29,12],
              "facultyLots": [19,18,17]
            }
          ]
        },
        {
          "name": "Anheuser-Busch Ecology and Conservation Complex",
          "acronym": "ABE",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [29,12],
              "facultyLots": [19,18,17]
            },
            {
              "name": "After 5:30pm",
              "lots": [22,29,12],
              "facultyLots": [19,18,17]
            }
          ]
        },
        {
          "name": "Sculpture and Ceramics Annex",
          "acronym": "SCA",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [33],
              "facultyLots": [33]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [33],
              "facultyLots": [33]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [33],
              "facultyLots": [33]
            },
            {
              "name": "After 5:30pm",
              "lots": [33],
              "facultyLots": [33]
            }
          ]
        },
        {
          "name": "Fine Arts Building",
          "acronym": "FAB",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [24],
              "facultyLots": [24]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [24],
              "facultyLots": [24]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [24],
              "facultyLots": [24]
            },
            {
              "name": "After 5:30pm",
              "lots": [24],
              "facultyLots": [24]
            }
          ]
        },
        {
          "name": "Richard D. Schwartz Observatory",
          "acronym": "RSO",
          "campus": "north",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [24],
              "facultyLots": [24]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [24],
              "facultyLots": [24]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [24],
              "facultyLots": [24]
            },
            {
              "name": "After 5:30pm",
              "lots": [24],
              "facultyLots": [24]
            }
          ]
        },
        {
          "name": "Music Building",
          "acronym": "MB",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [21],
              "facultyLots": [21]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [21],
              "facultyLots": [21]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [21],
              "facultyLots": [21]
            },
            {
              "name": "After 5:30pm",
              "lots": [21],
              "facultyLots": [21]
            }
          ]
        },
        {
          "name": "Sassin Building & ELS Language Centers - St. Louis",
          "acronym": "SAS",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [21],
              "facultyLots": [21]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [21],
              "facultyLots": [21]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [21],
              "facultyLots": [21]
            },
            {
              "name": "After 5:30pm",
              "lots": [21],
              "facultyLots": [21]
            }
          ]
        },
        {
          "name": "Patient Care Center",
          "acronym": "PCC",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [16,21],
              "facultyLots": [16,21]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [16,21],
              "facultyLots": [16,21]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [16,21],
              "facultyLots": [16,21]
            },
            {
              "name": "After 5:30pm",
              "lots": [16,21],
              "facultyLots": [16,21]
            }
          ]
        },
        {
          "name": "Bellerive Hall",
          "acronym": "BRH",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [15,25,27],
              "facultyLots": [15,25,27]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [15,25,27],
              "facultyLots": [15,25,27]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [15,25,27],
              "facultyLots": [15,25,27]
            },
            {
              "name": "After 5:30pm",
              "lots": [15,25,27],
              "facultyLots": [15,25,27]
            }
          ]
        },
        {
          "name": "Marillac Hall",
          "acronym": "MH",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [13,27],
              "facultyLots": [13,27]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [13,27],
              "facultyLots": [13,27]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [13,27],
              "facultyLots": [13,27]
            },
            {
              "name": "After 5:30pm",
              "lots": [13,27],
              "facultyLots": [13,27]
            }
          ]
        },
        {
          "name": "E. Desmond Lee Technology & Learning Center & Math & Science Education Central",
          "acronym": "TLC",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [13,27,31],
              "facultyLots": [13,27,31]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [13,27,31],
              "facultyLots": [13,27,31]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [13,27,31],
              "facultyLots": [13,27,31]
            },
            {
              "name": "After 5:30pm",
              "lots": [13,27,31],
              "facultyLots": [13,27,31]
            }
          ]
        },
        {
          "name": "Education Administration Building",
          "acronym": "EAB",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [13,31,27],
              "facultyLots": [13,31,27]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [13,31,27],
              "facultyLots": [13,31,27]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [13,31,27],
              "facultyLots": [13,31,27]
            },
            {
              "name": "After 5:30pm",
              "lots": [13,31,27],
              "facultyLots": [13,31,27]
            }
          ]
        },
        {
          "name": "South Campus Classroom Building & Child Development Center",
          "acronym": "SCCB",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [31,13,27],
              "facultyLots": [31,13,27]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [31,13,27],
              "facultyLots": [31,13,27]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [31,13,27],
              "facultyLots": [31,13,27]
            },
            {
              "name": "After 5:30pm",
              "lots": [31,13,27],
              "facultyLots": [31,13,27]
            }
          ]
        },
        {
          "name": "Ward E. Barnes Building",
          "acronym": "WEB",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [31,13,27],
              "facultyLots": [31,13,27]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [31,13,27],
              "facultyLots": [31,13,27]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [31,13,27],
              "facultyLots": [31,13,27]
            },
            {
              "name": "After 5:30pm",
              "lots": [31,13,27],
              "facultyLots": [31,13,27]
            }
          ]
        },
        {
          "name": "Boilder Garage / Surplus Property",
          "acronym": "BG",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [32,31],
              "facultyLots": [32,31]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [32,31],
              "facultyLots": [32,31]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [32,31],
              "facultyLots": [32,31]
            },
            {
              "name": "After 5:30pm",
              "lots": [32,31],
              "facultyLots": [32,31]
            }
          ]
        },
        {
          "name": "South Campus Computer Building",
          "acronym": "SCB",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [32,31,7],
              "facultyLots": [32,31,7]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [32,31,7],
              "facultyLots": [32,31,7]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [32,31,7],
              "facultyLots": [32,31,7]
            },
            {
              "name": "After 5:30pm",
              "lots": [32,31,7],
              "facultyLots": [32,31,7]
            }
          ]
        },
        {
          "name": "Provincial House",
          "acronym": "PH",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [7,9,32],
              "facultyLots": [7,9,32]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [7,9,32],
              "facultyLots": [7,9,32]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [7,9,32],
              "facultyLots": [7,9,32]
            },
            {
              "name": "After 5:30pm",
              "lots": [7,9,32],
              "facultyLots": [7,9,32]
            }
          ]
        },
        {
          "name": "Pierre Laclede Honors College",
          "acronym": "HC",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [7,9,32],
              "facultyLots": [7,9,32]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [7,9,32],
              "facultyLots": [7,9,32]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [7,9,32],
              "facultyLots": [7,9,32]
            },
            {
              "name": "After 5:30pm",
              "lots": [7,9,32],
              "facultyLots": [7,9,32]
            }
          ]
        },
        {
          "name": "Seton Center Hall",
          "acronym": "SC",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [9,7,20],
              "facultyLots": [9,7,20]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [9,7,20],
              "facultyLots": [9,7,20]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [9,7,20],
              "facultyLots": [9,7,20]
            },
            {
              "name": "After 5:30pm",
              "lots": [9,7,20],
              "facultyLots": [9,7,20]
            }
          ]
        },
        {
          "name": "Nursing Administration Building",
          "acronym": "NAB",
          "campus": "south",
          "slots": [
            {
              "name": "before 9:15am",
              "lots": [20,9],
              "facultyLots": [20,9]
            },
            {
              "name": "between 9:15am and 1:45pm",
              "lots": [20,9],
              "facultyLots": [20,9]
            },
            {
              "name": "Between 1:45pm and 5:30pm",
              "lots": [20,9],
              "facultyLots": [20,9]
            },
            {
              "name": "After 5:30pm",
              "lots": [20,9],
              "facultyLots": [20,9]
            }
          ]
        }
      ]
    }
    `;
  }
}

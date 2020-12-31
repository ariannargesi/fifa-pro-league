const players = {
  goalKeeper: [
    {
      name: "amos",
    },
    {
      name: "Henderson",
    },
  ],
  defenders: [
    {
      name: "Shaw",
    },
    {
      name: "Tuanzebe",
    },
    {
      name: "Maguire",
    },
    {
      name: "Bailly",
    },
    {
      name: "Telles",
    },
  ],
  midfielders: [
    {
      name: "Pogba",
    },
    {
      name: "vanDevilBeek",
    },
    {
      name: "Fred",
    },
    {
      name: "Fernandes",
    },
    {
      name: "McTominay",
    },
  ],
  forwards: [
    {
      name: "DylanCass",
    },
    {
      name: "Tommo",
    },
    {
      name: "Rashford",
    },
    {
      name: "Ighalo",
    },
  ],
  others: [],
};

const formations = [
  // 3-5-2 Diamond
  [
    {
      players: [players.goalKeeper[0]],
      locations: [
        {
          left: "48%",
          bottom: "10%",
          position: "GK"
        }
      ],
    },
    {
      players: [...players.defenders.slice(0, 3)],
      locations: [
        { bottom: '27%', left: '34%', position: "LCB" },
        { bottom: '27%', left: '62%', position: "RCB" },
        { bottom: '33%', left: '48%', position: "CB" },
      ],
    },
    {
      players: [...players.midfielders.slice(0, 5)],
      locations: [
        { bottom: '55%', left: '22%', position: "LM" },
        { bottom: '56%', left: '48%', position: "CAM" },
        { bottom: '52%', left: '35%', position: "LDM" },
        { bottom: '55%', left: '74%', position: "RM" },
        { bottom: '52%', left: '61%', position: "RDM" },
        
      ],
    },
    {
      players: [...players.forwards.slice(0, 2)],
      locations: [
        { bottom: '76%', left: '40%', position: "LF" },
        { bottom: '76%', left: '56%', position: "RF" },
      ],
    },
  ],   
  // 4-3-3
  [
    {
      players: [players.goalKeeper[0]],
      locations: [
        {
          left: "48%",
          bottom: "15%",
          position: "GK"
        }
      ],
    },
    {
      players: [...players.defenders.slice(0, 4)],
      locations: [
        { bottom: '35%', left: '21%', position: "LB" },
        { bottom: '35%', left: '75%', position: "RB" },
        { bottom: '27%', left: '35%', position: "CB" },
        { bottom: '27%', left: '62%', position: "CB" },
      ],
    },
    {
      players: [...players.midfielders.slice(0, 3)],
      locations: [
        { bottom: '52%', left: '35%', position: "LCM" },
        { bottom: '52%', left: '62%', position: "RCM" },
        { bottom: '47%', left: '48%', position: "CM" },
      ],
    },
    {
      players: [...players.forwards.slice(0, 3)],
      locations: [
        { bottom: '76%', left: '31%', position: "LF" },
        { bottom: '76%', left: '48%', position: "CF" },
        { bottom: '76%', left: '66%', position: "RF" },
      ],
    },
  ],
  // 4-4-2
  [
    {
      players: [players.goalKeeper[0]],
      locations: [
        {
          left: "48%",
          bottom: "15%",
          position: "GK"
        }
      ],
    },
    {
      players: [...players.defenders.slice(0, 4)],
      locations: [
        { bottom: '35%', left: '21%', position: "LB" },
        { bottom: '35%', left: '75%', position: "RB" },
        { bottom: '27%', left: '35%', position: "CB" },
        { bottom: '27%', left: '62%', position: "CB" },
      ],
    },
    {
      players: [...players.midfielders.slice(0, 4)],
      locations: [
        { bottom: '58%', left: '28%', position: "LM" },
        { bottom: '58%', left: '68%', position: "RM" },
        { bottom: '52%', left: '55%', position: "RCM" },
        { bottom: '52%', left: '41%', position: "LCM" },
      ],
    },
    {
      players: [...players.forwards.slice(0, 2)],
      locations: [
        { bottom: '76%', left: '40%', position: "LF" },
        { bottom: '76%', left: '56%', position: "RF" },
      ],
    },
  ],
  // 4-4-2 Diamond
  [
    {
      players: [players.goalKeeper[0]],
      locations: [
        {
          left: "48%",
          bottom: "10%",
          position: "GK"
        }
      ],
    },
    {
      players: [...players.defenders.slice(0, 4)],
      locations: [
        { bottom: '35%', left: '21%', position: "LB" },
        { bottom: '35%', left: '75%', position: "RB" },
        { bottom: '27%', left: '35%', position: "CB" },
        { bottom: '27%', left: '62%', position: "CB" },
      ],
    },
    {
      players: [...players.midfielders.slice(0, 4)],
      locations: [
        { bottom: '52%', left: '35%', position: "LCM" },
        { bottom: '58%', left: '48%', position: "CAM" },
        { bottom: '35%', left: '48%', position: "DM" },
        { bottom: '52%', left: '62%', position: "RCM" },
      ],
    },
    {
      players: [...players.forwards.slice(0, 2)],
      locations: [
        { bottom: '76%', left: '38%', position: "LF" },
        { bottom: '76%', left: '58%', position: "RF" },
      ],
    },
  ],  
  // 5-4-1
  [
    {
      players: [players.goalKeeper[0]],
      locations: [
        {
          left: "48%",
          bottom: "10%",
          position: "GK"
        }
      ],
    },
    {
      players: [...players.defenders.slice(0, 5)],
      locations: [
        { bottom: '27%', left: '34%', position: "LCB" },
        { bottom: '35%', left: '75%', position: "RB" },
        { bottom: '33%', left: '48%', position: "CB" },
        { bottom: '27%', left: '62%', position: "RCB" },
        { bottom: '35%', left: '21%', position: "LB" },
      ],
    },
    {
      players: [...players.midfielders.slice(0, 4)],
      locations: [
        { bottom: '58%', left: '28%', position: "LM" },
        { bottom: '58%', left: '68%', position: "RM" },
        { bottom: '54%', left: '55%', position: "RCM" },
        { bottom: '54%', left: '41%', position: "LCM" },
      ],
    },
    {
      players: [players.forwards[0]],
      locations: [
        { bottom: '76%', left: '48%', position: "CF" },
      ],
    },
  ],  
];

const user = JSON.parse(localStorage.getItem('user'));
const platform = JSON.parse(localStorage.getItem('platform'));

const initialState = {
  selectedFormation: 0,
  players,
  formations,
  userLoggedIn: user ? true : false,
  userConsole: platform ? platform : {
    id: 0,
    name: "PS"
  },
};

export default (state = initialState, action) => {
  switch(action.type){
    case 'CHANGE_FORMATION':{
      const newFormationIndex = action.payload.newFormationIndex 
     return { ...state, selectedFormation: newFormationIndex }
    }
    case 'CHANGE_USER_LOGIN_STATUS': {
      return { ...state, userLoggedIn: action.payload }
    }
    case 'CHANGE_USER_CONSOLE_STATUS': {
      return { ...state, userConsole: action.payload }
    }
  }
  return state;
};

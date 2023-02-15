export interface NavData {
  [key: string]: {
    activeRoute: {
      [key: string]: {
        position: {
          desktop: string;
          mobile: string;
        };
      };
    };
  };
}

export const navData: NavData = {
  about: {
    activeRoute: {
      contact: {
        position: {
          desktop: '0',
          mobile: '94%',
        },
      },
      error: {
        position: {
          desktop: '3.75vw',
          mobile: '88%',
        },
      },
      home: {
        position: {
          desktop: '3.75vw',
          mobile: '88%',
        },
      },
      portfolio: {
        position: {
          desktop: '7.5vw',
          mobile: '82%',
        },
      },
    },
  },
  contact: {
    activeRoute: {
      about: {
        position: {
          desktop: '7.5vw',
          mobile: '82%',
        },
      },
      error: {
        position: {
          desktop: '0',
          mobile: '94%',
        },
      },
      home: {
        position: {
          desktop: '0',
          mobile: '94%',
        },
      },
      portfolio: {
        position: {
          desktop: '3.75vw',
          mobile: '88%',
        },
      },
    },
  },
  error: {
    activeRoute: {
      error: {
        position: {
          desktop: '94%',
          mobile: '0',
        },
      },
    },
  },
  home: {
    activeRoute: {
      about: {
        position: {
          desktop: '3.75vw',
          mobile: '88%',
        },
      },
      contact: {
        position: {
          desktop: '7.5vw',
          mobile: '82%',
        },
      },
      error: {
        position: {
          desktop: '12%',
          mobile: '76%',
        },
      },
      portfolio: {
        position: {
          desktop: '0',
          mobile: '94%',
        },
      },
    },
  },
  portfolio: {
    activeRoute: {
      about: {
        position: {
          desktop: '0',
          mobile: '94%',
        },
      },
      contact: {
        position: {
          desktop: '3.75vw',
          mobile: '88%',
        },
      },
      error: {
        position: {
          desktop: '7.5vw',
          mobile: '82%',
        },
      },
      home: {
        position: {
          desktop: '7.5vw',
          mobile: '82%',
        },
      },
    },
  },
};

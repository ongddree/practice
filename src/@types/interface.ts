interface UserInterface {
  id: number;
  username: string;
  email: string;
  active: boolean;
}

interface StateInterface {
  inputs: {
    username: string;
    email: string;
  };
  users: UserInterface[];
}

interface Action {
  type: string;
  payload: any;
}

export type { UserInterface, StateInterface, Action };

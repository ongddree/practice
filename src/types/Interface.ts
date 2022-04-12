interface UserInterface {
  id: number;
  username: string;
  email: string;
  active: boolean;
}

interface InputInterface {
  username: string;
  email: string;
}

interface StateInterface {
  inputs: InputInterface;
  users: UserInterface[];
}

interface Action {
  type: string;
  payload: any;
}

export type { UserInterface, InputInterface, StateInterface, Action };

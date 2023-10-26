import { RouteProp } from "@react-navigation/native";
export interface BucketProvider {
  children: React.ReactNode;
}

export interface BucketContext {
  user: null;
  setUser?: () => void;
  saveUser: (user: null) => void;
}
export interface NavigationProps {
  navigate: (arg: string) => void;
  goBack?: any;
}
export interface ButtonProps {
  skip?: boolean;
  title: string;
  ButtonPress?: () => void;
  SkipButtonPress?: () => void;
  modalButton?: boolean;
}

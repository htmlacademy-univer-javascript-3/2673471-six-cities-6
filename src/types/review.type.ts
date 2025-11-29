export type ReviewType = {
  id: number;
  rating: number;
  date: string;
  comment: string;
  user: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
};
